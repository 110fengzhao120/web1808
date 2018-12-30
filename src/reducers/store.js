import * as actionTypes from '../constants/store'

const initialState = []

export default function store (state = initialState, action) {
    switch (action.type) {
        case actionTypes.STORE_UPDATE:
            return action.data
        case actionTypes.STORE_ADD:
            // append :尾部添加  unshift:头部添加
            state.unshift(action.data)
            return state
        case actionTypes.STORE_RM:
            // 如果删除的id与当前容器里的id相同，则不返回，否则返回
            // some  map  foreach  filter
            return state.filter(item => {  // 遍历  {0:123141231241}
                if (item.id !== action.data.id) {
                    return item
                }
            })
        default:
            return state
    }
}
