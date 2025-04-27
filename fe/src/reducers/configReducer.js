import {SET_CONFIG} from "../constants/config";

export const configReducer = (state={},action) => {
    switch(action.type){
        case SET_CONFIG:
            return action.payload;
        default:
            return state;
    }
}
