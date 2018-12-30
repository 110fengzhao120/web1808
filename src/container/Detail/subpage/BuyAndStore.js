import React from "react"
import BuyAndStoreComponent from "../../../components/BuyAndStoreComponent"

import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from "redux"
import * as storeActions from "../../../actions/store"

class BuyAndStore extends React.Component {

    constructor(){
        super();
        this.state = {
            isStore:false
        }
    }

    // 收藏
    storeClickHandle() {
        const id = this.props.id;
        // 判断是否登陆
        if (this.isCheced()) {
            // 登陆
            // 存储数据到redux
            const isStore = this.state.isStore;
            if(isStore){
                // 取消收藏
                this.props.storeActions.rm({
                    id:id
                })
                this.setState({
                    isStore:false
                })
            }else{
                // 收藏
                this.props.storeActions.add({
                    id:id
                })
                this.setState({
                    isStore:true
                })
            }
            

        } else {
            const id = this.props.id;
            // 未登录  
            this.props.history.push("/login/" + encodeURIComponent("detail/" + id));
        }
    }

    // 购买
    buyClickHandler() {
        // 判断是否登陆
        if (this.isCheced()) {
            //登陆
            console.log("购买");
            // 发送订单给后台！
                
        } else {
            const id = this.props.id;
            //未登录  
            this.props.history.push("/login/" + encodeURIComponent("detail/" + id));
        }
    }

    isCheced() {
        if (this.props.userinfo.username) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <div>
                <BuyAndStoreComponent
                    isStore={this.state.isStore}
                    buyHandle={this.buyClickHandler.bind(this)}
                    storeClick={this.storeClickHandle.bind(this)}
                />
            </div>
        )
    }

}

// 读取数据
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

// 写入数据操作
function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActions, dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(BuyAndStore))
