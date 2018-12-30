import React from 'react';
import { getCommentData } from "../../../fetch/detail/index"
import CommentList from "../../../components/CommentList"

export default class Comment extends React.Component{

    constructor(){
        super();
        this.state ={
            commentData:[]
        }
    }

    componentDidMount(){
        const id = this.props.id;
        const result = getCommentData(id);
        result.then(res => {
            return res.json();
        })
        .then(data => {
            this.setState({
                commentData:data.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const { commentData } = this.state;
        return(
        <div>
            {
                commentData.length > 0 ?
                <CommentList  data={commentData}></CommentList>
                : <div>正在加载数据...</div>
            }
        </div>
        )
    }
}
