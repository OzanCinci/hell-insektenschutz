import { ADD_TO_CART, DECREMENT_NUMBER_FROM_CART, INCREMENT_NUMBER_IN_CART, REMOVE_ALL_CART, REMOVE_FROM_CART, SET_REVIEW_DATA } from "../constants/user"
// SAMPLE CART DATA EXAMPLE
const emptyCart = {
    numberOfItems: 0,
    shippingPrice: 6.0,
    price : 0.0,
    items : []
};

export const createReviewDataReducer = (state=null,action) => {
    switch(action.type){
        case SET_REVIEW_DATA:
            return {...action.payload}
        default:
            return state;
    }
}

export const cartReducer = (state=emptyCart,action) => {
    let updatedState,uniqueCode,removedItem,selectedItem;
    switch(action.type){
        case ADD_TO_CART:
            // payload is directly the item itself
            /* 
            {
                measurements: "248x500",
                price: 140, // tekil fiyat
                quantity: 2, // 2 x 140€
                uniqueCode: 11,
                details: {
                    ...
                },
                product: {
                    category: "ürün kategorisi",
                    description: "ürün hakkında açıklama: ",
                    id: 1,
                    imageUrl: "url",
                    name: "Ürün adı 2",
                    rating: 4.8,
                    numberOfRating: 12
                }
            },
            */
            const newItem = action.payload;
            updatedState = state;
            updatedState.items = [...updatedState.items, newItem];
            updatedState.numberOfItems +=  newItem.quantity;
            updatedState.price +=  newItem.quantity * newItem.price;
            return {...updatedState};
        case REMOVE_FROM_CART:
            // payload is unique code
            uniqueCode = action.payload;
            updatedState = state;
            removedItem = updatedState.items.find(element => element.uniqueCode===uniqueCode);
            updatedState.numberOfItems -= removedItem.quantity;
            updatedState.price -=  removedItem.quantity * removedItem.price;
            updatedState.items = updatedState.items.filter(element => element.uniqueCode!==uniqueCode);
            return {...updatedState};
        case INCREMENT_NUMBER_IN_CART:
            // payload is unique code
            uniqueCode = action.payload;
            updatedState = state;
            selectedItem = updatedState.items.find(element => element.uniqueCode===uniqueCode);
            updatedState.numberOfItems += 1;
            updatedState.price += selectedItem.price;
            updatedState.items = updatedState.items.map( item => {
                if (item.uniqueCode!==uniqueCode)
                    return item;
                let updatedItem = item;
                updatedItem.quantity += 1;
                return updatedItem;
            });
            return {...updatedState};
        case DECREMENT_NUMBER_FROM_CART:
            // payload is unique code
            uniqueCode = action.payload;
            updatedState = state;
            selectedItem = updatedState.items.find(element => element.uniqueCode===uniqueCode);
            updatedState.numberOfItems -= 1;
            updatedState.price -= selectedItem.price;
            if (selectedItem.quantity!==1) {
                updatedState.items = updatedState.items.map( item => {
                if (item.uniqueCode!==uniqueCode)
                    return item;
                let updatedItem = item;
                updatedItem.quantity -= 1;
                return updatedItem;
                });
            } else {
                updatedState.items = updatedState.items.filter(item=>item.uniqueCode!=uniqueCode);
            }
            return {...updatedState};
        case REMOVE_ALL_CART:
            updatedState = state;
            updatedState.price = 0;
            updatedState.numberOfItems = 0;
            updatedState.items = [];
            return {...updatedState};
        default:
            return state;
    }
}
