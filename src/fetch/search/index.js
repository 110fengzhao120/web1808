import { get } from "../get.js";


export function getSearchData(keyword,cityName){
    // /代表是当前路径   localhost:3000/search   /
    var result = get(`/api/search?keyword=${keyword}&city=${cityName}`);
    return result;
}