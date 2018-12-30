import * as userActions from "../constants/userinfo"

const initialState = {}
export default function userinfo(state = initialState,action){
  switch (action.type) {
    case userActions.USERNAME:
      return state = action.data
    default:
      return state;
  }
}
