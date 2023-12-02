import { SET_REVIEW_DATA } from "../constants/user"


export const createReviewDataReducer = (state=null,action) => {
    switch(action.type){
        case SET_REVIEW_DATA:
            return {...action.payload}
        default:
            return state;
    }
}