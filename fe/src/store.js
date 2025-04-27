/*
        MAIN PAGE FOR REDUX CONFIGURATION
*/

// REDUX IMPORTS
import {createStore,combineReducers,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { loginReducer, refreshReducer, registerReducer, userProfileDetailReducer } from './reducers/authReducer';
import { activeOrdersReducer, adminLandingPageReducer, allUsersReducer, completedOrdersReducer, findUserReducer, pendingReviewsReducer, reviewsReducer, selectAdminDataReducer } from './reducers/adminReducer';
import { cartReducer, createReviewDataReducer, wishlistCartReducer } from './reducers/userReducer';
import {configReducer} from "./reducers/configReducer";
import {productBasedMeasurementReducer} from "./reducers/productBasedMeasurementReducer";

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
    cart: cartReducer,
    wishlistCart: wishlistCartReducer,
    config: configReducer,
    productBasedMeasurement: productBasedMeasurementReducer,
})

const emptyCart = {
    numberOfItems: 0,
    price : 0.0,
    shippingPrice: 6.0,
    items : []
};

const userInfo = localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null;
const localCartInfo = localStorage.getItem("localCartInfo")?JSON.parse(localStorage.getItem("localCartInfo")):emptyCart;
const localWishlistInfo = localStorage.getItem("localWishlistInfo")?JSON.parse(localStorage.getItem("localWishlistInfo")):[];

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
    cart: localCartInfo,
    wishlistCart: localWishlistInfo,
    config: null,
    productBasedMeasurement: null,
};

// EXPORT STORE
const middleware = [thunk];
const store = createStore(reducer,initialState, composeWithDevTools(applyMiddleware(...middleware)));
export default store;
