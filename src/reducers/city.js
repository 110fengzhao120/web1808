import * as cityActions from "../constants/city.js"
const initialState = {}
export default function city(state = initialState,action){
  switch (action.type) {
    case cityActions.CITYNAME:
      return state = action.city
    case cityActions.UPDATE_CITYNAME:
      return state = action.city
    default:
      return state;
  }
}
