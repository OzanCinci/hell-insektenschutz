import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button, Typography, Box } from '@mui/material';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

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
const DEFAULT_ERR_MESSAGE = "Wir konnten keine E-Mail an Ihre Adresse senden. Bitte überprüfen Sie, ob Sie mit der angegebenen E-Mail-Adresse registriert sind. Wenn Sie sicher sind, versuchen Sie es bitte erneut.";
function PasswordResetMailSender() {
  const [email, setEmail] = useState('');
  const [isMailSent, setIsMailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSendEmail = () => {
    sendEmailRequest();
  };

  const sendEmailRequest = () => {
    const url = `${URL}/api/auth/reset-password-email`;
    const configObject = {
        "url": url,
        "method": "post",
        "headers": {
            'Content-Type': 'application/json'
            },
        "data": {
                 "email": email
        }
    };

    setLoading(true);
    setError(null);
    axios.request(configObject)
        .then(res => {
            if (res.data) {
                setIsMailSent(true);
            } else {
                setError(DEFAULT_ERR_MESSAGE);
            }
        })
        .catch(e => {
            setError(DEFAULT_ERR_MESSAGE);
        })
        .finally(()=>{
            setTimeout(()=>setLoading(false),500);
        });
  }

  return (
    <Container>
        {error!==null && <ModifiedAlert className='my-3' severity="error">{error}</ModifiedAlert>}
        {
            !isMailSent &&
            <>
                <TitleWrapper>
                    <LockPersonIcon style={{fontSize: "100px", margin: "auto"}}/>
                    <Title>
                        Haben Sie Probleme beim Anmelden?
                    </Title>
                    <Desc>
                        Geben Sie Ihre E-Mail-Adresse ein und wir senden Ihnen einen Link, um wieder Zugang zu Ihrem Konto zu erhalten.
                    </Desc>
                    <TextField
                        label="E-Mail Adresse"
                        variant="outlined"
                        value={email}
                        onChange={handleEmailChange}
                        fullWidth
                        color='warning'
                        sx={{ marginBottom: 2 }}
                    />
                    
                        { loading === true 
                            ?   <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
                                    <CircularProgress color="warning" /> 
                                </div>
                            :<Button variant="contained" color="warning" onClick={handleSendEmail}>
                                Senden
                            </Button>
                        }
                </TitleWrapper>
            </>
        }
      {
            !error && !loading && isMailSent &&
            <Box textAlign="center">
                <CheckCircleIcon sx={{ fontSize: 150, color: 'green' }} />
                <Desc style={{fontSize: "22px", marginTop: 20, textAlign: "left", padding: "0px 20px"}}>
                    Bitte überprüfen Sie Ihr E-Mail-Konto und Ihren Spam-Ordner. Unsere Mail sollte in 5 Minuten da sein. Der Link in der E-Mail ist nur einmal verwendbar. Klicken Sie auf den Link, um Ihr Passwort zu ändern. Bitte teilen Sie diesen Link mit niemandem. Sie können diese Seite jetzt schließen oder zu einer anderen Seite navigieren.
                </Desc>
            </Box>
      }
    </Container>
  );
}

export default PasswordResetMailSender;
