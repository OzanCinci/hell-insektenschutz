import {insekProductData} from "../Pages/products/data/insekProductData";

const insectProductNames = Object.values(insekProductData).map(val=>val.cartName);

export function checkInsectProductExists(items, oldPrice) {
    const insectProductExists = items.filter(item => insectProductNames.includes(item.itemName)).length !== 0;
    return insectProductExists ? Math.max(oldPrice, 25.0) : oldPrice;
}
