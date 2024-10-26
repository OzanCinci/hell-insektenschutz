import axios from 'axios';
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCES, LOGOUT, REFRESH_FAIL, REFRESH_REQUEST, REFRESH_SUCCES, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCES, USER_PROFILE_DETAIL_FAIL, USER_PROFILE_DETAIL_REQUEST, USER_PROFILE_DETAIL_SUCCESS } from '../constants/auth';


const URL = process.env.REACT_APP_BE_API;
const DEFAULT_CALLBACK_FUNCTION = () => {};

export const loginAction = (
    loginInfo, 
    successCallBackFunction = DEFAULT_CALLBACK_FUNCTION, 
    failCallBackFunction = DEFAULT_CALLBACK_FUNCTION
) => async(dispatch)=> {

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
            const expirationTime = new Date();
            expirationTime.setDate(expirationTime.getDate() + 27); // Add 27 days
            
            const refreshExpirationTime = new Date();
            refreshExpirationTime.setMonth(refreshExpirationTime.getMonth() + 11); // Add 11 months
            
            res.data = {
                ...res.data,
                expirationTime,
                refreshExpirationTime
            };

            dispatch({type:LOGIN_SUCCES, payload:res.data});
            ////console.log("SUCCESS, LOGIN DATA: ", res.data);
            // TODO: save data to localstorage!
            localStorage.setItem("userInfo", JSON.stringify(res.data));
            
            successCallBackFunction();
        })
        .catch(e => {
            ////console.log("error reaised: ", e);
            dispatch({type: LOGIN_FAIL, payload: "falsche Email oder Passwort"});
        });
} 

export const logoutAction = (token) => async(dispatch)=> {
    if (!token){
        ////console.log("NULL TOKEN ERROR");
        return;
    }

    const url = `${URL}/api/auth/logout`;
    const configObject = {
        "url": url,
        "method": "get",
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            }
    };

    axios.request(configObject)
        .then(res => {
            dispatch({type:LOGOUT, payload:res.data});
            ////console.log("SUCCESS, LOG OUT: ", res.data);
            // TODO: delete data from localstorage!
            localStorage.removeItem("userInfo");
        })
        .catch(e => {
            ////console.log("error reaised: ", e);
            localStorage.removeItem("userInfo");
            //dispatch({type: LOGIN_FAIL, payload: "error raised!"});
        });
} 

export const registerAction = (obj) => async(dispatch)=> {

    dispatch({type: REGISTER_REQUEST});
    dispatch({type: LOGIN_REQUEST});

    const url = `${URL}/api/auth/register`;
    ////console.log("url: ", url);
    const configObject = {
        "url": url,
        "method": "post",
        "headers": {
            'Content-Type': 'application/json'
            },
        "data":{
                 "email": obj.email,
                 "password": obj.password,
                 "firstName": obj.firstName,
                 "lastName": obj.lastName,
                 "phone": String(obj.telephone),
                 "role": "USER"
                }
    };

    axios.request(configObject)
        .then(res => {
            const expirationTime = new Date();
            expirationTime.setDate(expirationTime.getDate() + 27); // Add 27 days

            const refreshExpirationTime = new Date();
            refreshExpirationTime.setMonth(refreshExpirationTime.getMonth() + 11); // Add 11 months

            res.data = {
                ...res.data,
                expirationTime,
                refreshExpirationTime
            };
            
            dispatch({ type: REGISTER_SUCCES, payload: res.data });
            ////console.log("SUCCESS, register DATA: ", res.data);
            dispatch({ type: LOGIN_SUCCES, payload: res.data });
            
            // TODO: save data to localstorage!
            localStorage.setItem("userInfo", JSON.stringify(res.data));            
        })
        .catch(e => {
            ////console.log("error reaised: ", e);
            dispatch({type: REGISTER_FAIL, payload: e?.response?.data?.message});
            dispatch({type: LOGIN_FAIL, payload: e?.response?.data?.message});
        });
} 


export const refreshAction = (token) => async(dispatch)=> {

    dispatch({type: REFRESH_REQUEST});

    const url = `${URL}/api/auth/refresh-token`;
    const configObject = {
        "url": url,
        "method": "post",
        "headers": {
            'Content-Type': 'application/json'
            },
        "data": {
            "refreshToken": token
        }
       
    };

    axios.request(configObject)
        .then(res => {  
            const expirationTime = new Date();
            expirationTime.setDate(expirationTime.getDate() + 27); // Add 27 days
            
            const refreshExpirationTime = new Date();
            refreshExpirationTime.setMonth(refreshExpirationTime.getMonth() + 11); // Add 11 months
            
            res.data = {
                ...res.data,
                expirationTime,
                refreshExpirationTime
            };
            dispatch({type:REFRESH_SUCCES, payload:res.data});
            dispatch({type:LOGIN_SUCCES, payload:res.data});
            ////console.log("SUCCESS, refresh DATA: ", res.data);
            localStorage.setItem("userInfo", JSON.stringify(res.data));
        })
        .catch(e => {
            ////console.log("error reaised: ", e);
            dispatch({type: REFRESH_FAIL, payload: "error raised! (REFRESH)"});
        });
} 

/*
export const userProfileDetailAction = (token,userID) => async(dispatch)=> {

    dispatch({type: USER_PROFILE_DETAIL_REQUEST});

    const url = `${URL}/api/users/getUserDetails/${userID}`;
   
    const configObject = {
        "url": url,
        "method": "get",
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };

    axios.request(configObject)
        .then(res => {
            dispatch({type:USER_PROFILE_DETAIL_SUCCESS, payload:res.data});
            ////console.log("SUCCESS, userProfileDetailAction: ", res.data);
        })
        .catch(e => {
            ////console.log("error reaised: (userProfileDetailAction) ", e);
            dispatch({type: USER_PROFILE_DETAIL_FAIL, payload: e});
        });
} 
*/