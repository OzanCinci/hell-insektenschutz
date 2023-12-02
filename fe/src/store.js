/*
        MAIN PAGE FOR REDUX CONFIGURATION
*/

// REDUX IMPORTS
import {createStore,combineReducers,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { loginReducer, refreshReducer, registerReducer, userProfileDetailReducer } from './reducers/authReducer';
import { activeOrdersReducer, adminLandingPageReducer, allUsersReducer, completedOrdersReducer, findUserReducer, pendingReviewsReducer, reviewsReducer, selectAdminDataReducer } from './reducers/adminReducer';
import { createReviewDataReducer } from './reducers/userReducer';

// REDUCER IMPORTS
// TODO: import reducers


// COMBINE REDUCERS
const reducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    refresh: refreshReducer,
    activeOrders: activeOrdersReducer,
    completedOrders: completedOrdersReducer,
    pendingReviews: pendingReviewsReducer,
    reviews: reviewsReducer,
    allUsers: allUsersReducer,
    findUser: findUserReducer,
    selectAdminData: selectAdminDataReducer,
    adminLandingPage: adminLandingPageReducer,
    userProfileDetail: userProfileDetailReducer,
    createReviewData: createReviewDataReducer,
})


// GET LOCALY STORED DATA
/* EXAMPLE CODE TO RETRIEVE DATA FROM LOCAL STORAGE
const getCardItemIDs = localStorage.getItem("itemIDs")?JSON.parse(localStorage.getItem("itemIDs")):[]
const getUserInfo = localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null
const getTotalCost = localStorage.getItem("TotalCost")?JSON.parse(localStorage.getItem("TotalCost")):0
*/
const userInfo = localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null;

// INITIATE STATE
const initialState = {
    login: {userInfo: userInfo, loading: false, error:null},
    register: null,
    refresh: null,
    activeOrders: {orderData:null ,loading: false, error:null},
    completedOrders: {orderData:null,loading:false,error:null},
    pendingReviews: {reviews:null,loading:false,error:null},
    reviews: {reviews:null,loading:false,error:null},
    allUsers: {usersData:null,loading:false,error:null},
    findUser: {usersData:null,loading:false,error:null},
    selectAdminData: null, 
    adminLandingPage: null,
    userProfileDetail: {userDetail:null,loading:false,error:null},
    createReviewData: null,
}

/*
    # number of users
    # number of visits
    # number of warekorb
    # earned money
    # number of reviews
    # number of pending reviews
    # number of completed orders
    # number of shipped orders
    # number of completed order
*/

// EXPORT STORE
const middleware = [thunk]
const store = createStore(reducer,initialState, composeWithDevTools(applyMiddleware(...middleware)))
export default store
