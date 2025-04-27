import {SET_PRODUCT_BASED_MEASUREMENT} from "../constants/productBasedMeasurement";

export const productBasedMeasurementReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_PRODUCT_BASED_MEASUREMENT:
            return action.payload;
        default:
            return state;
    }
}
