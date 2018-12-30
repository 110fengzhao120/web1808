import React from 'react';
import "./style.less"

export default class LoginComponent extends React.Component {

    constructor(){
        super();
        this.state = {
            username:""
        }
    }

    changeHandle(event) {
        this.setState({
            username:event.target.value
        })
    }

    clickHandle(event){
        const loginHandle = this.props.loginHandle;
        if(this.state.username){
            loginHandle(this.state.username);
        }
    }

    render() {
        return (
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input
                        type="text"
                        placeholder="输入手机号"
                        onChange={this.changeHandle.bind(this)}
                        value={this.state.username}
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="输入验证码" />
                </div>
                <button className="btn-login" onClick={this.clickHandle.bind(this)}>登录</button>
            </div>
        )
    }
}
