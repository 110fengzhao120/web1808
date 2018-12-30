import { combineReducers } from "redux"
import city from "./city.js"
import userinfo from "./userinfo"
import store from "./store.js"

const rootReducer = combineReducers({
  city,
  userinfo,
  store
})

export default rootReducer
