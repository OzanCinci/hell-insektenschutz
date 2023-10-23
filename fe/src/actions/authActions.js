import axios from 'axios';
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCES, REFRESH_FAIL, REFRESH_REQUEST, REFRESH_SUCCES, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCES } from '../constants/auth';


const URL = process.env.REACT_APP_BE_API;

export const loginAction = (loginInfo) => async(dispatch)=> {

    dispatch({type: LOGIN_REQUEST});

    const url = `${URL}/api/auth/authenticate`;
    const configObject = {
        "url": url,
        "method": "post",
        "headers": {
            'Content-Type': 'application/json'
            },
        "data":{
                 "email": loginInfo.email,
                 "password": loginInfo.password
                }
       
    };

    axios.request(configObject)
        .then(res => {
            dispatch({type:LOGIN_SUCCES, payload:res.data});
            console.log("SUCCESS, LOGIN DATA: ", res.data);
            // TODO: save data to localstorage!
        })
        .catch(e => {
            console.log("error reaised: ", e);
            dispatch({type: LOGIN_FAIL, payload: "error raised!"});
        });
} 

export const registerAction = (obj) => async(dispatch)=> {

    dispatch({type: REGISTER_REQUEST});

    const url = `${URL}/api/auth/register`;
    console.log("url: ", url);
    const configObject = {
        "url": url,
        "method": "post",
        "headers": {
            'Content-Type': 'application/json'
            },
        "data":{
                 "email": obj.email,
                 "password": obj.password,
                 "firstname": obj.firstName,
                 "lastname": obj.lastName,
                 "phone": String(obj.telephone),
                 "role": "USER"
                }
       
    };

    axios.request(configObject)
        .then(res => {
            dispatch({type:REGISTER_SUCCES, payload:res.data});
            console.log("SUCCESS, register DATA: ", res.data);
            // TODO: save data to localstorage!
            dispatch({type:LOGIN_SUCCES, payload:res.data});
        })
        .catch(e => {
            console.log("error reaised: ", e);
            dispatch({type: REGISTER_FAIL, payload: "error raised! (register)"});
        });
} 


export const refreshAction = (token) => async(dispatch)=> {

    dispatch({type: REFRESH_REQUEST});

    const url = `${URL}api/auth/refresh`;
    const configObject = {
        "url": url,
        "method": "post",
        "headers": {
            'Content-Type': 'application/json'
            },
        "data": token
       
    };

    axios.request(configObject)
        .then(res => {
            dispatch({type:REFRESH_SUCCES, payload:res.data});
            console.log("SUCCESS, register DATA: ", res.data);
            // TODO: save data to localstorage!
        })
        .catch(e => {
            console.log("error reaised: ", e);
            dispatch({type: REFRESH_FAIL, payload: "error raised! (register)"});
        });
} 
