import React, { useState } from 'react'
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
import { loginAction, registerAction } from '../actions/authActions';

const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-height: 40vh;
    padding: 20px;
    gap: 20px;
    width: fit-content;
    margin: auto;
`;

const NoAccountComponent = styled.div`
    text-decoration: underline;
    cursor: pointer;
`

function LoginPopUp() {
    const [loginType,setLoginType] = useState(true)
    const [submitted,setSubmitted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const login = useSelector(state=>state.login);
    const [loginInfo,setLoginInfo] = useState({
        email:"",
        password:""
    });
    const [signUpInfo,setSignUpInfo] = useState({
        email: "",
        firstName: "",
        lastName: "",
        telephone: "",
        password: ""
    });

    /* 
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private String phone;
    private Role role;
    */

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        
        // TODO: do some checks

        // set state as pending
        
        // request the jwt token
        dispatch(loginAction(loginInfo));

        // click button to close the modal
        setSubmitted(true);
    }

    const handleSubmitSignUp = (e) => {
        e.preventDefault();

        // TODO: do some checks
        // password match check!

        // set state as pending

        // request for register
        dispatch(registerAction(signUpInfo));

        // save the jwt token

        // click button to close the modal
        setSubmitted(true);
    }



  return (
    <>
    <div>
        {/* LOGIN POPUP */}
        <button id="loginPopup" style={{display:"none"}} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#test123"></button>
        <div class="modal fade" id="test123" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="test123Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="test123Label">Sign Up</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <ModalBody class="modal-body">
                <button onClick={()=>console.log("userInfo in redux: ", login)}>printf</button>
                {/* LOG IN SCREEN */}
                {
                loginType===true && (                
                <>
                    <TextField value={loginInfo.email} onChange={e=>setLoginInfo({...loginInfo, email: e.target.value})} id="outlined-basic" label="Email" variant="outlined" color="warning"/>
                    <FormControl sx={{ width: "28.8ch" }} variant="outlined">
                        <InputLabel color="warning" htmlFor="outlined-adornment-password">
                            Password
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? "text" : "password"}
                            label="Password"
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
                    {/*<TextField id="outlined-basic" type={type} label="Password" variant="outlined" color="warning"/>
                    <CheckBoxWrapper>
                        <Checkbox onClick={()=>setType(prevType=> prevType===''?'password':'')} color="warning" />
                        <span>Show password</span>
                    </CheckBoxWrapper>*/}
                    <NoAccountComponent onClick={()=>setLoginType(false)}>Doesnt have an account?</NoAccountComponent>
                    { submitted===true ?<CircularProgress color="warning" /> 
                                    :<Button onClick={(e)=>handleSubmitLogin(e)} variant="outlined" color="warning">Login</Button>}
                </>)
                }
                {/* LOG IN SCREEN */}
                {/* SIGN UP SCREEN */}
                {
                    loginType === false &&
                    <>
                    <TextField 
                        value={signUpInfo.email} onChange={e=>setSignUpInfo({...signUpInfo, email: e.target.value})}
                        id="outlined-basic" label="Email" variant="outlined" color="warning"/>
                    <TextField 
                        value={signUpInfo.firstName} onChange={e=>setSignUpInfo({...signUpInfo, firstName: e.target.value})}
                        id="outlined-basic" label="First Name" variant="outlined" color="warning"/>
                    <TextField 
                        value={signUpInfo.lastName} onChange={e=>setSignUpInfo({...signUpInfo, lastName: e.target.value})}
                        id="outlined-basic" label="Last Name" variant="outlined" color="warning"/>
                    <TextField 
                        value={signUpInfo.telephone} onChange={e=>setSignUpInfo({...signUpInfo, telephone: e.target.value})}
                        type='tel'
                        id="outlined-basic" label="Telefon" variant="outlined" color="warning"/>
                    <FormControl sx={{ width: "28.8ch" }} variant="outlined">
                        <InputLabel color="warning" htmlFor="outlined-adornment-password">
                            Password
                        </InputLabel>
                        <OutlinedInput
                            value={signUpInfo.password} onChange={e=>setSignUpInfo({...signUpInfo, password: e.target.value})}
                            id="outlined-adornment-password"
                            type={showPassword ? "text" : "password"}
                            label="Password"
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
                    <FormControl sx={{ width: "28.8ch" }} variant="outlined">
                        <InputLabel color="warning" htmlFor="outlined-adornment-password">
                            Password (Again)
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? "text" : "password"}
                            label="Password (Again)"
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
                    <NoAccountComponent onClick={()=>setLoginType(true)}>Already have an account?</NoAccountComponent>
                    { submitted===true ?<CircularProgress color="warning" /> 
                                    :<Button onClick={(e)=>handleSubmitSignUp(e)} variant="outlined" color="warning">Sign Up</Button>}
                    </>
                }
                {/* SIGN UP SCREEN */}
            </ModalBody>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">schließen</button>
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