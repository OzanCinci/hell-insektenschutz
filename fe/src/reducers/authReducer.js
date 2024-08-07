import { 
    LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCES, LOGOUT,  
    REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCES, 
    REFRESH_FAIL, REFRESH_REQUEST, REFRESH_SUCCES, USER_PROFILE_DETAIL_REQUEST, USER_PROFILE_DETAIL_SUCCESS, USER_PROFILE_DETAIL_FAIL,
} from "../constants/auth";

export const loginReducer = (state={userInfo:null, loading: false, error:null},action) => {
    //console.log("loginReducer: action ->", action)
    switch(action.type){
        case LOGIN_REQUEST:
            return {...state,loading:true,error:null}
        case LOGIN_SUCCES:
            return {...state,loading:false,error:null,userInfo:action.payload}
        case LOGIN_FAIL:
            return {...state,loading:false,error:action.payload,userInfo:null}
        case LOGOUT:
            return {...state,loading:false,error:null,userInfo:null}
        default:
            return state;
    }
}

export const registerReducer = (state={registerInfo:null,loading:false,error:null},action)=>{
    switch(action.type){
        case REGISTER_REQUEST:
            return {...state,loading:true,error:null}
        case REGISTER_SUCCES:
            return {...state,loading:false,error:null,registerInfo:action.payload}
        case REGISTER_FAIL:
            //console.log("REGISTER FAILED: ", action.payload);
            return {...state,loading:false,error:action.payload,registerInfo:null}
        default:
            return state
    }
}

export const refreshReducer = (state={userInfo:[],loading:false,error:null},action)=>{
    switch(action.type){
        case REFRESH_REQUEST:
            return {...state,loading:true,error:null}
        case REFRESH_SUCCES:
            return {...state,loading:false,error:null,userInfo:action.payload}
        case REFRESH_FAIL:
            return {...state,loading:false,error:action.payload,userInfo:null}
        default:
            return state
    }
}

export const userProfileDetailReducer = (state={userDetail:null,loading:false,error:null},action)=>{
    switch(action.type){
        case USER_PROFILE_DETAIL_REQUEST:
            return {...state,loading:true,error:null}
        case USER_PROFILE_DETAIL_SUCCESS:
            return {...state,loading:false,error:null,userDetail:action.payload}
        case USER_PROFILE_DETAIL_FAIL:
            return {...state,loading:false,error:action.payload,userDetail:null}
        default:
            return state
    }
}