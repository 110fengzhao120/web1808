import { get } from "../get.js";

export function getDetailData(id){
    var result = get(`/api/detail?id=${id}`);
    return result;
}

export function getCommentData(id){
    var result = get(`/api/comment?id=${id}`);
    return result;
}