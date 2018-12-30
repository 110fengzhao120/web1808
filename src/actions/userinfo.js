import * as userActions from "../constants/userinfo.js"

export function login(data){
  return{
    type:userActions.USERNAME,
    data
  }
}