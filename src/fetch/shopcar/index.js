import { get } from "../get.js"
import { post } from "../post"

export function getShopCarData(){
    const result = get("/api/shopcar");
    return result;
}

export function postCommentData(commentData){
    const result = post('/api/comment',{
        comment:commentData
    })

    return result;
}