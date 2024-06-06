import axios from 'axios';
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCES, LOGOUT, REFRESH_FAIL, REFRESH_REQUEST, REFRESH_SUCCES, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCES, USER_PROFILE_DETAIL_FAIL, USER_PROFILE_DETAIL_REQUEST, USER_PROFILE_DETAIL_SUCCESS } from '../constants/auth';


const URL = process.env.REACT_APP_BE_API;

//

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
            localStorage.setItem("userInfo", JSON.stringify(res.data));
        })
        .catch(e => {
            console.log("error reaised: ", e);
            dispatch({type: LOGIN_FAIL, payload: "error raised!"});
        });
} 

export const logoutAction = (token) => async(dispatch)=> {
    if (!token){
        console.log("NULL TOKEN ERROR");
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
            console.log("SUCCESS, LOG OUT: ", res.data);
            // TODO: delete data from localstorage!
            localStorage.removeItem("userInfo");
        })
        .catch(e => {
            console.log("error reaised: ", e);
            localStorage.removeItem("userInfo");
            //dispatch({type: LOGIN_FAIL, payload: "error raised!"});
        });
} 

export const registerAction = (obj) => async(dispatch)=> {

    dispatch({type: REGISTER_REQUEST});
    dispatch({type: LOGIN_REQUEST});

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
            dispatch({type:LOGIN_SUCCES, payload:res.data});
            // TODO: save data to localstorage!
            localStorage.setItem("userInfo", JSON.stringify(res.data));
        })
        .catch(e => {
            console.log("error reaised: ", e);
            dispatch({type: REGISTER_FAIL, payload: e?.response?.data?.message});
            dispatch({type: LOGIN_FAIL, payload: e?.response?.data?.message});
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
            console.log("SUCCESS, userProfileDetailAction: ", res.data);
        })
        .catch(e => {
            console.log("error reaised: (userProfileDetailAction) ", e);
            dispatch({type: USER_PROFILE_DETAIL_FAIL, payload: e});
        });
} 