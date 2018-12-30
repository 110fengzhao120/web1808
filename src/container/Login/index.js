import React from 'react';
import LoginComponent from "../../components/LoginComponent"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as userinfoActions from "../../actions/userinfo"
import { withRouter } from 'react-router-dom'

class Login extends React.Component {

    loginHandle(username){
        // 存储用户信息
        this.props.userinfoActions.login({
            username:username
        })
        // 跳转到指定页面
        const path = this.props.match.params.router;
        this.props.history.push("/"+decodeURIComponent(path))
    }

    render() {
        return (
            <div>
                <LoginComponent loginHandle={ this.loginHandle.bind(this) }/>
            </div>
        )
    }
}


// 读取数据
function mapStateToProps(state){
    return{
        userinfo:state.userinfo
    }
  }
  
  // 写入数据操作
  function mapDispatchToProps(dispatch){
    return{
        userinfoActions:bindActionCreators(userinfoActions,dispatch)
    }
  }
  
  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login))
  