import {
    ADD_TO_CART,
    DECREMENT_NUMBER_FROM_CART,
    INCREMENT_NUMBER_IN_CART,
    REMOVE_ALL_CART,
    REMOVE_FROM_CART,
    SET_REVIEW_DATA,
    CHANGE_SHIPPING_COST,
    CREATE_NEW_WISHLIST,
    CREATE_WISHLIST_NAME,
    DELETE_WISHLIST_ITEM,
    ADD_SUBITEM_WISHLIST,
    DELETE_SUBITEM_WISHLIST,
    INCREMENT_SUBITEM_WISHLIST,
    DECREMENT_SUBITEM_WISHLIST,
    CHANGE_ALL_BASKET,
    DELETE_ITEM_WISHLIST,
    CHANGE_ALL_WISHLIST,
} from "../constants/user"
import {convertDateForWishlist} from "../utils/datetime";
// SAMPLE CART DATA EXAMPLE
const emptyCart = {
    numberOfItems: 0,
    shippingPrice: 0.0,
    price : 0.0,
    items : []
};

// SAMPLE WISH CART DATA EXAMPLE
const emptyWishlistCart = {
    name: "",
    numberOfItems: 0,
    shippingPrice: 5.9,
    price : 0.0,
    items : []
};

const wishlistCart = [
    emptyWishlistCart
];


function applyShippingPrice(arg) {
    let tmpCart = {...arg};
    const widths = tmpCart.items.map(item=>item.shippingWidth).filter(item=>item);
    const maxWidth = Math.max(...widths);

    let shippingCost = 0.0;
    if (widths.length === 0)
        shippingCost = 0.0;
    else if (maxWidth===-Infinity)
        shippingCost = 3.90;
    else if (maxWidth<=1800)
        shippingCost = 5.90;
    else if (maxWidth<=2500)
        shippingCost = 15.90;
    else if (maxWidth<=3800)
        shippingCost = 49.90;
    else if (maxWidth<=5000)
        shippingCost = 99.90;

    tmpCart.shippingPrice = shippingCost;
    return tmpCart;
}

function processBasket(basket){
    let tmpBasket = {...basket};
    let quantity = 0;
    let price = 0.0;
    tmpBasket.items.forEach(item=>{
        quantity += item.quantity;
        price += item.quantity * item.price;
    });
    tmpBasket.numberOfItems = quantity;
    tmpBasket.price = price;
    if (tmpBasket.discount) {
        tmpBasket.discountedPrice = price * 0.6;
    }
    return applyShippingPrice(tmpBasket);
}


export const wishlistCartReducer = (state = [], action) => {
    console.log("wishlistCartReducer triggered: ", action);
    let updatedState, payload, currentItem, wishlistItem, uniqueCode;
    switch(action.type) {
        case CREATE_NEW_WISHLIST:
            let newWishlist = {...action.payload, createdAt: convertDateForWishlist(Date.now())};
            updatedState = [...state, newWishlist];
            localStorage.setItem('localWishlistInfo', JSON.stringify([...updatedState]));
            return updatedState;
        case CREATE_WISHLIST_NAME:
            payload = action.payload;
            currentItem = payload.currentItem;
            updatedState = [...state.map(item=>{
                if (item.name===currentItem.name && currentItem.createdAt===item.createdAt) {
                    currentItem.name = payload.newName;
                    return currentItem;
                }
                return item;
            })];
            localStorage.setItem('localWishlistInfo', JSON.stringify([...updatedState]));
            return updatedState;
        case DELETE_WISHLIST_ITEM:
            currentItem = action.payload;
            updatedState = [...state.filter(item=>!(item.name===currentItem.name && currentItem.createdAt===item.createdAt))];
            localStorage.setItem('localWishlistInfo', JSON.stringify([...updatedState]));
            return updatedState;
        case ADD_SUBITEM_WISHLIST:
            const selectedItem = action.payload.selectedItem;
            wishlistItem = action.payload.wishlistItem;
            updatedState = [...state.map(currentWishlistItem => {
                if (currentWishlistItem.name===wishlistItem.name && currentWishlistItem.createdAt===wishlistItem.createdAt) {
                    currentWishlistItem.items = [...currentWishlistItem.items, {...selectedItem}];
                    return processBasket(currentWishlistItem);
                }
                return currentWishlistItem;
            })]
            localStorage.setItem('localWishlistInfo', JSON.stringify([...updatedState]));
            return updatedState;
        case DELETE_SUBITEM_WISHLIST:
            const selectedItemUniqueCode = action.payload.selectedItemUniqueCode;
            wishlistItem = action.payload.wishlistItem;
            updatedState = [...state.map(currentWishlistItem => {
                if (currentWishlistItem.name===wishlistItem.name && currentWishlistItem.createdAt===wishlistItem.createdAt) {
                    currentWishlistItem.items = [...currentWishlistItem.items.filter(item=>item.uniqueCode!==selectedItemUniqueCode)];
                    return processBasket(currentWishlistItem);
                }
                return currentWishlistItem;
            })]
            localStorage.setItem('localWishlistInfo', JSON.stringify([...updatedState]));
            return updatedState;
        case INCREMENT_SUBITEM_WISHLIST:
            wishlistItem = action.payload.item;
            uniqueCode = action.payload.uniqueCode;
            updatedState = [...state.map(currentWishlistItem => {
                if (currentWishlistItem.name===wishlistItem.name && currentWishlistItem.createdAt===wishlistItem.createdAt) {
                    currentWishlistItem.items = currentWishlistItem.items.map(i=>{
                        if (i.uniqueCode===uniqueCode) {
                            i.quantity += 1;
                        }
                        return i;
                    });
                    return processBasket(currentWishlistItem);
                }
                return currentWishlistItem;
            })]
            localStorage.setItem('localWishlistInfo', JSON.stringify([...updatedState]));
            return updatedState;
        case DECREMENT_SUBITEM_WISHLIST:
            wishlistItem = action.payload.item;
            uniqueCode = action.payload.uniqueCode;
            updatedState = [...state.map(currentWishlistItem => {
                if (currentWishlistItem.name===wishlistItem.name && currentWishlistItem.createdAt===wishlistItem.createdAt) {
                    currentWishlistItem.items = currentWishlistItem.items.map(i=>{
                        if (i.uniqueCode===uniqueCode) {
                            i.quantity -= 1;

                            if (i.quantity<=0) {
                                return null;
                            }
                        }
                        return i;
                    })
                    .filter(el=>el!==null);

                    return processBasket(currentWishlistItem);
                }
                return currentWishlistItem;
            })]
            localStorage.setItem('localWishlistInfo', JSON.stringify([...updatedState]));
            return updatedState;
        case DELETE_ITEM_WISHLIST:
            wishlistItem = action.payload;
            updatedState = state.filter(currentWishlistItem => !(currentWishlistItem.name===wishlistItem.name && currentWishlistItem.createdAt===wishlistItem.createdAt));
            localStorage.setItem('localWishlistInfo', JSON.stringify([...updatedState]));
            return updatedState;
        case CHANGE_ALL_WISHLIST:
            updatedState = [...action.payload];
            localStorage.setItem('localWishlistInfo', JSON.stringify([...updatedState]));
            return updatedState;
        default:
            return state;
    }
}


export const createReviewDataReducer = (state=null,action) => {
    switch(action.type){
        case SET_REVIEW_DATA:
            return {...action.payload}
        default:
            return state;
    }
}

export const cartReducer = (state=emptyCart,action) => {
    console.log("cartReducer triggered: ", action);
    let updatedState,uniqueCode,removedItem,selectedItem;
    switch(action.type){
        case CHANGE_SHIPPING_COST:
            updatedState = {...state};
            updatedState.shippingPrice = action.payload.shippingCost;
            updatedState.discount = action.payload.discount;
            updatedState.discountedPrice = action.payload.discountedPrice;
            localStorage.setItem('localCartInfo', JSON.stringify({...updatedState}));
            return {...updatedState};
        case ADD_TO_CART:
            // payload is directly the item itself
            const newItem = action.payload;
            updatedState = {...state};
            updatedState.items = [...updatedState.items, newItem];
            updatedState.numberOfItems +=  newItem.quantity;
            updatedState.price +=  newItem.quantity * newItem.price;
            localStorage.setItem('localCartInfo', JSON.stringify({...updatedState}));
            return {...updatedState};
        case REMOVE_FROM_CART:
            // payload is unique code
            uniqueCode = action.payload;
            updatedState = state;
            removedItem = updatedState.items.find(element => element.uniqueCode===uniqueCode);
            updatedState.numberOfItems -= removedItem.quantity;
            updatedState.price -=  removedItem.quantity * removedItem.price;
            updatedState.items = updatedState.items.filter(element => element.uniqueCode!==uniqueCode);
            localStorage.setItem('localCartInfo', JSON.stringify({...updatedState}));
            return {...updatedState};
        case INCREMENT_NUMBER_IN_CART:
            // payload is unique code
            uniqueCode = action.payload;
            updatedState = {...state};
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
            localStorage.setItem('localCartInfo', JSON.stringify({...updatedState}));
            return {...updatedState};
        case DECREMENT_NUMBER_FROM_CART:
            // payload is unique code
            uniqueCode = action.payload;
            updatedState = {...state};
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
                updatedState.items = updatedState.items.filter(item=>item.uniqueCode!==uniqueCode);
            }
            localStorage.setItem('localCartInfo', JSON.stringify({...updatedState}));
            return {...updatedState};
        case REMOVE_ALL_CART:
            localStorage.setItem('localCartInfo', JSON.stringify({...emptyCart}));
            return {...emptyCart};
        case CHANGE_ALL_BASKET:
            updatedState = processBasket({...action.payload});
            localStorage.setItem('localCartInfo', JSON.stringify({...updatedState}));
            return {...updatedState};
        default:
            return state;
    }
}
