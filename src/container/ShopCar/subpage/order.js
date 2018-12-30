import React from 'react';
import { getShopCarData } from "../../../fetch/shopcar"
import OrderList from "../../../components/OrderList"

export default class Order extends React.Component {

    constructor(){
        super();
        this.state = {
            orderListData:[]
        }
    }

    componentDidMount() {
        const result = getShopCarData();
        result.then(res => {
            return res.json();
        })
            .then(data => {
                this.setState({
                    orderListData:data
                })
            })
    }

    componentWillUnmount(){
        this.setState = (state,callback) => {
            return ;
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.orderListData.length > 0 
                    ? <OrderList data={ this.state.orderListData}></OrderList>
                    : <div>等待数据加载</div>    
                }
            </div>
        )
    }
}
