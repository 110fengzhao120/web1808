import React from 'react'
import { postCommentData } from "../../../fetch/shopcar"
import './style.less'

class Item extends React.Component {

    constructor() {
        super();
        this.state = {
            commentState: 0
        }
    }

    componentDidMount() {
        this.setState({
            commentState: this.props.data.commentState
        })
    }

    /* 
        三种状态：0，1，2
            0：未评价
            1：正在评价
            2：已评价
    */

    showComment() {
        this.setState({
            commentState:1
        })
    }

    submitCommentHandler(event) {
        const value = this.refs.commentText.value;
        console.log(value)
        // 提交评论数据信息
        const result = postCommentData(value);
        result.then(res => {
            return res.json()
        })
        .then(data =>  {
            if(data.msg === "success"){
                this.setState({
                    commentState:2
                })
            }else{
                alert(data.msg)
            }
        })
        
    }

    hideComment() {
        this.setState({
            commentState:0
        })
    }

    render() {
        const data = this.props.data
        return (
            <div className="clear-fix order-item-container">
                <div className="order-item-img float-left">
                    <img src={data.img} />
                </div>
                <div className="order-item-comment float-right">
                    {
                        this.state.commentState === 0 ?
                            <button className="btn" onClick={this.showComment.bind(this)}>评价</button>
                            : this.state.commentState === 1
                                ? ""
                                : <button className="btn unseleted-btn">已评价</button>
                    }
                </div>
                <div className="order-item-content">
                    <span>商户：{data.title}</span>
                    <span>类型：{data.houseType}</span>
                    <span>价格：￥{data.price}</span>
                </div>


                {
                    this.state.commentState === 1  ?
                    <div className="comment-text-container">
                        <textarea style={{ width: '100%', height: '80px' }} className="comment-text" ref="commentText"></textarea>
                        <button className="btn" onClick={this.submitCommentHandler.bind(this)}>提交</button>
                        &nbsp;
                        <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
                    </div>
                    : ""
                }

            </div>
        )
    }
}

export default Item
