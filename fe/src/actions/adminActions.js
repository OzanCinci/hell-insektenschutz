import axios from 'axios';
import { 
    ADMIN_ACTIVE_ORDER_FAIL, ADMIN_ACTIVE_ORDER_REQUEST, ADMIN_ACTIVE_ORDER_SUCCES, 
    ADMIN_ALL_USERS_FAIL, ADMIN_ALL_USERS_REQUEST, ADMIN_ALL_USERS_SUCCES, 
    ADMIN_COMPLETED_ORDER_FAIL, ADMIN_COMPLETED_ORDER_REQUEST, ADMIN_COMPLETED_ORDER_SUCCES, 
    ADMIN_FIND_USER_FAIL, ADMIN_FIND_USER_REQUEST, ADMIN_FIND_USER_SUCCES, 
    ADMIN_LANDING_PAGE_FAIL, 
    ADMIN_LANDING_PAGE_REQUEST, 
    ADMIN_LANDING_PAGE_SUCCES, 
    ADMIN_PENDING_REVIEW_FAIL, ADMIN_PENDING_REVIEW_REQUEST, ADMIN_PENDING_REVIEW_SUCCES, 
    ADMIN_REVIEW_FAIL, ADMIN_REVIEW_REQUEST, ADMIN_REVIEW_SUCCES, ADMIN_SELECT_DATA 
} from "../constants/admin";
const URL = process.env.REACT_APP_BE_API;

export const activeOrdersAction = (token) => async(dispatch)=> {

    dispatch({type: ADMIN_ACTIVE_ORDER_REQUEST});

    const url = `${URL}/api/management/activeOrders`;
    const configObject = {
        "url": url,
        "method": "get",
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
        "data":{
                 "filter": null,
                }
    };

    axios.request(configObject)
        .then(res => {
            dispatch({type:ADMIN_ACTIVE_ORDER_SUCCES, payload:res.data});
            console.log("SUCCESS, activeOrdersAction: ", res.data);
            // TODO: save data to localstorage!
        })
        .catch(e => {
            console.log("error reaised: ", e);
            dispatch({type: ADMIN_ACTIVE_ORDER_FAIL, payload: "error raised! (active orders)"});
        });
} 

export const completedOrdersAction = (token) => async(dispatch)=> {

    dispatch({type: ADMIN_COMPLETED_ORDER_REQUEST});

    const url = `${URL}/api/management/completedOrders`;
    const configObject = {
        "url": url,
        "method": "get",
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
        "data":{
                 "filter": null,
                }
    };

    axios.request(configObject)
        .then(res => {
            dispatch({type:ADMIN_COMPLETED_ORDER_SUCCES, payload:res.data});
            console.log("SUCCESS, completedOrdersAction: ", res.data);
            // TODO: save data to localstorage!
        })
        .catch(e => {
            console.log("error reaised: ", e);
            dispatch({type: ADMIN_COMPLETED_ORDER_FAIL, payload: "error raised! (completed orders)"});
        });
} 

export const pendingReviewsAction = (token) => async(dispatch)=> {

    dispatch({type: ADMIN_PENDING_REVIEW_REQUEST});

    const url = `${URL}/api/management/pendingReviews`;
    const configObject = {
        "url": url,
        "method": "get",
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
        "data":{
                 "filter": null,
                }
    };

    axios.request(configObject)
        .then(res => {
            dispatch({type:ADMIN_PENDING_REVIEW_SUCCES, payload:res.data});
            console.log("SUCCESS, pendingReviewsAction: ", res.data);
            // TODO: save data to localstorage!
        })
        .catch(e => {
            console.log("error reaised: ", e);
            dispatch({type: ADMIN_PENDING_REVIEW_FAIL, payload: "error raised! (pendingReviewsAction)"});
        });
} 

export const reviewsAction = (token) => async(dispatch)=> {

    dispatch({type: ADMIN_REVIEW_REQUEST});

    const url = `${URL}/api/management/reviews`;
    const configObject = {
        "url": url,
        "method": "get",
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
        "data":{
                 "filter": null,
                }
    };

    axios.request(configObject)
        .then(res => {
            dispatch({type:ADMIN_REVIEW_SUCCES, payload:res.data});
            console.log("SUCCESS, reviewsAction: ", res.data);
            // TODO: save data to localstorage!
        })
        .catch(e => {
            console.log("error reaised: ", e);
            dispatch({type: ADMIN_REVIEW_FAIL, payload: "error raised! (reviewsAction)"});
        });
} 

export const allUsersAction = (token) => async(dispatch)=> {

    dispatch({type: ADMIN_ALL_USERS_REQUEST});

    const url = `${URL}/api/management/allUsers`;
    const configObject = {
        "url": url,
        "method": "get",
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
        "data":{
                 "filter": null,
                }
    };

    axios.request(configObject)
        .then(res => {
            dispatch({type:ADMIN_ALL_USERS_SUCCES, payload:res.data});
            console.log("SUCCESS, allUsersAction: ", res.data);
            // TODO: save data to localstorage!
        })
        .catch(e => {
            console.log("error reaised: ", e);
            dispatch({type: ADMIN_ALL_USERS_FAIL, payload: "error raised! (allUsersAction)"});
        });
} 

export const findUserAction = ({token,email}) => async(dispatch)=> {

    dispatch({type: ADMIN_FIND_USER_REQUEST});

    const url = `${URL}/api/management/allUsers/${email}`;
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
            dispatch({type:ADMIN_FIND_USER_SUCCES, payload:res.data});
            console.log("SUCCESS, findUserAction: ", res.data);
            // TODO: save data to localstorage!
        })
        .catch(e => {
            console.log("error reaised: ", e);
            dispatch({type: ADMIN_FIND_USER_FAIL, payload: "error raised! (findUserAction)"});
        });
} 

export const selectAdminDataAction = (data) => async(dispatch)=> {
    dispatch({type: ADMIN_SELECT_DATA,payload:data});
} 

export const adminLandingPageAction = (token) => async(dispatch)=> {

    dispatch({type: ADMIN_LANDING_PAGE_REQUEST});

    const url = `${URL}/api/management/landingPage`;
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
            dispatch({type:ADMIN_LANDING_PAGE_SUCCES, payload:res.data});
            console.log("SUCCESS, adminLandingPageAction: ", res.data);
            // TODO: save data to localstorage!
        })
        .catch(e => {
            console.log("error reaised: ", e);
            dispatch({type: ADMIN_LANDING_PAGE_FAIL, payload: "error raised! (adminLandingPageAction)"});
        });
} 