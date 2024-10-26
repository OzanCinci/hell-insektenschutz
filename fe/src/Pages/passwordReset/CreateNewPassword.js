import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import { useDispatch} from 'react-redux'
import LockPersonIcon from '@mui/icons-material/LockPerson';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { TextField, Button, Typography, Box } from '@mui/material';
import { loginAction } from '../../actions/authActions';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  margin: 150px auto;
  display: flex;
  max-width: 600px;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 600px) {
        max-width: 95vw;
        margin: 105px auto;
    }    
`;

const Desc = styled.div`
    font-size: 19px;
    color: #696984;
    margin-bottom: 20px;
`;

const Title = styled.div`
    font-size: 22px;
    font-weight: bold;
    color: #696984;
`;

const TitleWrapper = styled.div`
    -webkit-box-shadow: 0px 9px 23px -14px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 9px 23px -14px rgba(0,0,0,0.75);
    box-shadow: 0px 9px 23px -14px rgba(0,0,0,0.75);
    border-radius: 5px;
    border: 1px solid #ddd;


    text-align: left;
    gap: 20px;
    display: flex;
    flex-direction: column;


    padding: 40px 90px;
   @media only screen and (max-width: 600px) {
        padding: 10px 30px;
    }    
`;

const ModifiedAlert = styled(Alert)`
    width: 90%;
    font-size: 18px !important;
    text-align: left;
    border: 1px solid black;
`;

const URL = process.env.REACT_APP_BE_API;
const SECRET_KEY = process.env.REACT_APP_DEFAULT_SECRET_KEY;
const INIT_VECTOR = process.env.REACT_APP_DEFAULT_INIT_VECTOR;
const DEFAULT_ERR_MESSAGE = "Etwas ist schiefgelaufen, wir konnten den Token nicht validieren. Bitte fordern Sie einen neuen Link an und versuchen Sie erneut, Ihr Passwort zurückzusetzen.";

function decryptValue(encryptedText, secretKeyBase64, ivBase64) {
    const secretKey = CryptoJS.enc.Base64.parse(secretKeyBase64);
    const iv = CryptoJS.enc.Base64.parse(ivBase64);

    const decrypted = CryptoJS.AES.decrypt(encryptedText, secretKey, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
};


function CreateNewPassword() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null);
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const dispatch = useDispatch();
    const nav = useNavigate();

    useEffect(()=>{
        if (token) return;

        setLoading(true);

        const location = window.location.href;
        const authParam = location.split("?")?.at(1)?.split("=")?.at(1);
        if (!authParam) {
            setError(DEFAULT_ERR_MESSAGE);
            return;
        }
    
        const decryptedParams = decryptValue(authParam, SECRET_KEY, INIT_VECTOR);
        const params = decryptedParams.split("|::|"); 
        const uuid = params?.at(0);
        const email = params?.at(1);

        if (!uuid || !email) {
            setError(DEFAULT_ERR_MESSAGE);
            return;
        }

        setToken(uuid);
        setEmail(email);
        setLoading(false);
    },[]);

    const handleClickChangePassword = async (e) => {
        e.preventDefault();
        
        setLoading(true);
        if (newPassword.trim().length<2 || (newPassword!==confirmNewPassword)) {
            setError("Ihre Passwörter stimmen nicht überein oder sind zu kurz, um sicher zu sein.");
            setLoading(false);
            return;
        } else {
            setError(null);
        }

        const isPasswordChanged = await handlePasswordChangeRequest();
        if (isPasswordChanged) {
            setIsSuccess(true);
            setTimeout(async ()=>{
                await handleLoginAction(email, newPassword);
            },2000);
            
        } 

        return;
    }

    const handlePasswordChangeRequest = async () => {
        const url = `${URL}/api/auth/change-password-email-redirection`;
        const configObject = {
            "url": url,
            "method": "put",
            "headers": {
                'Content-Type': 'application/json'
                },
            "data": {
                     "email": email,
                     "newPassword": newPassword,
                     "token": token
            }
        };
    
        setLoading(true);
        setError(null);
        return await axios.request(configObject)
            .then(res => {
                if (!res.data) {
                    setError(DEFAULT_ERR_MESSAGE);
                } 
                return res.data;
            })
            .catch(e => {
                const errorMessage = _.get(e, 'response.data.errors[0].detail', DEFAULT_ERR_MESSAGE);
                setError(errorMessage);
                return false;
            })
            .finally(()=>{
                setTimeout(()=>setLoading(false), 500);
            });
    }

    const handleLoginAction = async (email, password) => {
        const loginDTO = {
            "email": email,
            "password": password
        }
        dispatch(loginAction(loginDTO, ()=>{
            setTimeout(()=>nav("/profile"), 1500);
        }));
    }


  return (
    <Container>
    {error!==null && <ModifiedAlert className='my-3' severity="error">{error}</ModifiedAlert>}
    {
            !isSuccess &&
            <>
                <TitleWrapper>
                    <LockPersonIcon style={{fontSize: "100px", margin: "auto"}}/>
                    <Title>
                        Bitte geben Sie Ihr neues Passwort ein.
                    </Title>
                    <Desc>
                        Dieser Link wird 15 Minuten nach seiner Erstellung ablaufen und ist nur einmal verwendbar. Bitte füllen Sie das Formular aus und bestätigen Sie Ihr Passwort.
                    </Desc>
                    <TextField
                        label="Neues Passwort"
                        variant="outlined"
                        value={newPassword}
                        onChange={e=>setNewPassword(e.target.value)}
                        fullWidth
                        color='warning'
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Neues Passwort bestätigen"
                        variant="outlined"
                        value={confirmNewPassword}
                        onChange={e=>setConfirmNewPassword(e.target.value)}
                        fullWidth
                        color='warning'
                        sx={{ marginBottom: 2 }}
                    />
                    
                        { loading === true 
                            ?   <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
                                    <CircularProgress color="warning" /> 
                                </div>
                            :<Button disabled={!token} variant="contained" color="warning" onClick={handleClickChangePassword}>
                                Neues Passwort erstellen
                            </Button>
                        }
                </TitleWrapper>
            </>
        }
    {
            !error && !loading && isSuccess &&
            <Box textAlign="center">
                <CheckCircleIcon sx={{ fontSize: 115, color: 'green' }} />
                <Desc style={{fontSize: "22px", marginTop: 20, textAlign: "left", padding: "0px 20px"}}>
                    Ihr Passwort wurde erfolgreich aktualisiert. Bitte warten Sie ein paar Sekunden, Sie werden automatisch eingeloggt.
                </Desc>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
                    <CircularProgress color="warning" /> 
                </div>
            </Box>
    }
    </Container>
  )
}

export default CreateNewPassword;
