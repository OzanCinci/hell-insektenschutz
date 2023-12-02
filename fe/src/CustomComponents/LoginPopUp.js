import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { loginAction, registerAction } from '../actions/authActions';

const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
    padding: 20px;
    gap: 20px;
    width: fit-content;
    margin: auto;
`;

const NoAccountComponent = styled.div`
    text-decoration: underline;
    cursor: pointer;
`;

const ModifiedAlert = styled(Alert)`
    width: 90%;
    font-size: 18px !important;
    text-align: left;
    border: 1px solid black;
`;

function LoginPopUp() {
    const [formError,setFormError] = useState(null);
    const [loginType,setLoginType] = useState(true)
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const [loginInfo,setLoginInfo] = useState({
        email:"",
        password:""
    });
    const [signUpInfo,setSignUpInfo] = useState({
        email: "",
        firstName: "",
        lastName: "",
        telephone: "",
        password: "",
        passwordChecker: ""
    });
    
    const {userInfo, loading, error} = useSelector(state=>state.login);

    const changeFormType = (arg) => {
        setLoginType(arg);
        setFormError(null);
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {event.preventDefault();};

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        
        // TODO: do some checks
        if (!loginInfo.email || !loginInfo.password){
            setFormError("Bitte füllen Sie alle Felder aus");
            return;
        }
        // set state as pending
        
        // request the jwt token
        dispatch(loginAction(loginInfo));

        // click button to close the modal
        //setSubmitted(true);
    }

    const handleSubmitSignUp = (e) => {
        e.preventDefault();

        // TODO: do some checks
        // password match check!
        if (signUpInfo.passwordChecker!==signUpInfo.password) {
            setFormError("Passwords are not matching!");
            return;
        }
        setFormError(null);
        // set state as pending

        // request for register
        dispatch(registerAction(signUpInfo));

        // save the jwt token

        // click button to close the modal

        // delete this piece of code 
        //setSubmitted(true);
    }


    useEffect(()=>{
        if (userInfo!==null){
            const btn = document.getElementById("close-pop-up-btn");
            if (btn)
                btn.click();
        }

        if(error)
            setFormError(error);
    },[userInfo, error]);


  return (
    <>
    <div>
        {/* LOGIN POPUP */}
        <button id="loginPopup" style={{display:"none"}} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#test123"></button>
        <div class="modal fade" id="test123" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="test123Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="test123Label">{loginType? "Einloggen" : "Register"}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <ModalBody class="modal-body">
                {/* LOG IN SCREEN */}
                {
                loginType===true && (                
                <>
                    {formError!==null && <ModifiedAlert severity="error">{formError}</ModifiedAlert>}
                    <TextField sx={{ width: "25ch" }} value={loginInfo.email} onChange={e=>setLoginInfo({...loginInfo, email: e.target.value})} id="outlined-basic" label="Email" variant="outlined" color="warning"/>
                    <FormControl sx={{ width: "25ch" }} variant="outlined">
                        <InputLabel color="warning" htmlFor="outlined-adornment-password">
                            Passwort
                        </InputLabel>
                        <OutlinedInput
                            type={showPassword ? "text" : "password"}
                            label="Passwort"
                            color="warning"
                            value={loginInfo.password} onChange={e=>setLoginInfo({...loginInfo, password: e.target.value})}
                            endAdornment={
                                <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            />
                    </FormControl>
                    <NoAccountComponent onClick={()=>changeFormType(false)}>Hat noch kein Konto?</NoAccountComponent>
                    { loading === true ?<CircularProgress color="warning" /> 
                                    :<Button onClick={(e)=>handleSubmitLogin(e)} variant="outlined" color="warning">Einloggen</Button>}
                </>)
                }
                {/* LOG IN SCREEN */}
                {/* SIGN UP SCREEN */}
                {
                    loginType === false &&
                    <>
                    {formError!==null && <ModifiedAlert severity="error">{formError}</ModifiedAlert>}
                    <TextField 
                        sx={{ width: "25ch" }}
                        value={signUpInfo.email} onChange={e=>setSignUpInfo({...signUpInfo, email: e.target.value})}
                        label="Email" variant="outlined" color="warning"/>
                    <TextField 
                        sx={{ width: "25ch" }}
                        value={signUpInfo.firstName} onChange={e=>setSignUpInfo({...signUpInfo, firstName: e.target.value})}
                        label="Name" variant="outlined" color="warning"/>
                    <TextField 
                        sx={{ width: "25ch" }}
                        value={signUpInfo.lastName} onChange={e=>setSignUpInfo({...signUpInfo, lastName: e.target.value})}
                        label="Nachname" variant="outlined" color="warning"/>
                    <TextField 
                        sx={{ width: "25ch" }}
                        value={signUpInfo.telephone} onChange={e=>setSignUpInfo({...signUpInfo, telephone: e.target.value})}
                        type='tel'
                        label="Telefonnummer" variant="outlined" color="warning"/>
                    <FormControl sx={{ width: "25ch" }} variant="outlined">
                        <InputLabel color="warning" htmlFor="outlined-adornment-password">
                            Passwort
                        </InputLabel>
                        <OutlinedInput
                            value={signUpInfo.password} onChange={e=>setSignUpInfo({...signUpInfo, password: e.target.value})}
                            
                            type={showPassword ? "text" : "password"}
                            label="Passwort"
                            color="warning"
                            endAdornment={
                                <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            />
                    </FormControl>
                    <FormControl sx={{ width: "25ch" }} variant="outlined">
                        <InputLabel color="warning" htmlFor="outlined-adornment-password">
                            Passwort (überprüfen)
                        </InputLabel>
                        <OutlinedInput
                            value={signUpInfo.passwordChecker} onChange={e=>setSignUpInfo({...signUpInfo, passwordChecker: e.target.value})}
                            
                            type={showPassword ? "text" : "password"}
                            label="Passwort (überprüfen)"
                            color="warning"
                            endAdornment={
                                <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            />
                    </FormControl>
                    <NoAccountComponent onClick={()=>changeFormType(true)}>Schon ein Konto haben?</NoAccountComponent>
                    { loading === true ?<CircularProgress color="warning" /> 
                                    :<Button onClick={(e)=>handleSubmitSignUp(e)} variant="outlined" color="warning">Register</Button>}
                    </>
                }
                {/* SIGN UP SCREEN */}
            </ModalBody>
            <div class="modal-footer">
                <button id="close-pop-up-btn" type="button" class="btn btn-secondary" data-bs-dismiss="modal">schließen</button>
            </div>
            </div>
        </div>
      </div>
      {/* LOGIN POPUP */}
    </div>
    
    </>
  )
}

export default LoginPopUp