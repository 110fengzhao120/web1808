import React from 'react';
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import Header from "../../components/Header"
import UserInfo from "../../components/UserInfo"
import Order from "./subpage/order"


class ShopCar extends React.Component {

    componentDidMount() {
        const username = this.props.userinfo.username;
        if (username) {
            //  登陆了
        } else {
            // 未登录
            this.props.history.push("/login/shopcar")
        }
    }

    render() {
        return (
            <div>
                <Header title="购物车" history={ this.props.history } routerPath="/home"></Header>
                <UserInfo username={this.props.userinfo.username} city={this.props.city.cityName}></UserInfo>
                <Order></Order>
            </div>
        )
    }
}


// 读取数据
function mapStateToProps(state) {
    return {
        city: state.city,
        userinfo: state.userinfo
    }
}

// 写入数据操作
function mapDispatchToProps(dispatch) {
    return {
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopCar))
