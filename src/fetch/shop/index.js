import {get} from "../get.js"

export function getShopData(cityName){
    const result = get(`/api/shop?city=${cityName}`)
    return result;
}