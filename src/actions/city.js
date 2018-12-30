import * as cityActions from "../constants/city.js"

export function initCity(city){
  return{
    type:cityActions.CITYNAME,
    city
  }
}

export function updateCity(city){
  return{
    type:cityActions.UPDATE_CITYNAME,
    city
  }
}
