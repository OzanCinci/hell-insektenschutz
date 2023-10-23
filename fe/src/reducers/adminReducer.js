import { 
    ADMIN_ACTIVE_ORDER_FAIL, ADMIN_ACTIVE_ORDER_REQUEST, ADMIN_ACTIVE_ORDER_SUCCES, 
    ADMIN_ALL_USERS_FAIL, ADMIN_ALL_USERS_REQUEST, ADMIN_ALL_USERS_SUCCES, 
    ADMIN_COMPLETED_ORDER_FAIL, ADMIN_COMPLETED_ORDER_REQUEST, ADMIN_COMPLETED_ORDER_SUCCES, 
    ADMIN_FIND_USER_FAIL, ADMIN_FIND_USER_REQUEST, ADMIN_FIND_USER_SUCCES, 
    ADMIN_PENDING_REVIEW_FAIL, ADMIN_PENDING_REVIEW_REQUEST, ADMIN_PENDING_REVIEW_SUCCES, 
    ADMIN_REVIEW_FAIL, ADMIN_REVIEW_REQUEST, ADMIN_REVIEW_SUCCES, ADMIN_SELECT_DATA, 
    ADMIN_LANDING_PAGE_FAIL, ADMIN_LANDING_PAGE_REQUEST, ADMIN_LANDING_PAGE_SUCCES, 
} from "../constants/admin";


export const activeOrdersReducer = (state={orderData:null,loading:false,error:null},action)=>{
    switch(action.type){
        case ADMIN_ACTIVE_ORDER_REQUEST:
            return {...state,loading:true,error:null}
        case ADMIN_ACTIVE_ORDER_SUCCES:
            return {...state,loading:false,error:null,orderData:action.payload}
        case ADMIN_ACTIVE_ORDER_FAIL:
            return {...state,loading:false,error:action.payload,orderData:null}
        default:
            return state;
    }
}

export const completedOrdersReducer = (state={orderData:null,loading:false,error:null},action)=>{
    switch(action.type){
        case ADMIN_COMPLETED_ORDER_REQUEST:
            return {...state,loading:true,error:null}
        case ADMIN_COMPLETED_ORDER_SUCCES:
            return {...state,loading:false,error:null,orderData:action.payload}
        case ADMIN_COMPLETED_ORDER_FAIL:
            return {...state,loading:false,error:action.payload,orderData:null}
        default:
            return state;
    }
}

export const pendingReviewsReducer = (state={reviewData:null,loading:false,error:null},action)=>{
    switch(action.type){
        case ADMIN_PENDING_REVIEW_REQUEST:
            return {...state,loading:true,error:null}
        case ADMIN_PENDING_REVIEW_SUCCES:
            return {...state,loading:false,error:null,reviewData:action.payload}
        case ADMIN_PENDING_REVIEW_FAIL:
            return {...state,loading:false,error:action.payload,reviewData:null}
        default:
            return state;
    }
}

export const reviewsReducer = (state={reviewData:null,loading:false,error:null},action)=>{
    switch(action.type){
        case ADMIN_REVIEW_REQUEST:
            return {...state,loading:true,error:null}
        case ADMIN_REVIEW_SUCCES:
            return {...state,loading:false,error:null,reviewData:action.payload}
        case ADMIN_REVIEW_FAIL:
            return {...state,loading:false,error:action.payload,reviewData:null}
        default:
            return state;
    }
}

export const allUsersReducer = (state={usersData:null,loading:false,error:null},action)=>{
    switch(action.type){
        case ADMIN_ALL_USERS_REQUEST:
            return {...state,loading:true,error:null}
        case ADMIN_ALL_USERS_SUCCES:
            return {...state,loading:false,error:null,usersData:action.payload}
        case ADMIN_ALL_USERS_FAIL:
            return {...state,loading:false,error:action.payload,usersData:null}
        default:
            return state;
    }
}

export const findUserReducer = (state={usersData:null,loading:false,error:null},action)=>{
    switch(action.type){
        case ADMIN_FIND_USER_REQUEST:
            return {...state,loading:true,error:null}
        case ADMIN_FIND_USER_SUCCES:
            return {...state,loading:false,error:null,usersData:action.payload}
        case ADMIN_FIND_USER_FAIL:
            return {...state,loading:false,error:action.payload,usersData:null}
        default:
            return state;
    }
}

export const selectAdminDataReducer = (state=null,action)=>{
    switch(action.type){
        case ADMIN_SELECT_DATA:
            return {state:action.payload};
        default:
            return state;
    }
}

export const adminLandingPageReducer = (state={landingPageData:null,loading:false,error:null},action)=>{
    switch(action.type){
        case ADMIN_LANDING_PAGE_REQUEST:
            return {...state,loading:true,error:null}
        case ADMIN_LANDING_PAGE_SUCCES:
            return {...state,loading:false,error:null,landingPageData:action.payload}
        case ADMIN_LANDING_PAGE_FAIL:
            return {...state,loading:false,error:action.payload,landingPageData:null}
        default:
            return state;
    }
}