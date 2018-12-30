import { get } from "../get.js";

export function getHomeHot(cityName){
  var result = get(`/api/homehot?city=${cityName}`);
  return result;
}

export function getHomeHot2(cityName){
  var result = get(`/api/homehot2?city=${cityName}`);
  return result;
}
