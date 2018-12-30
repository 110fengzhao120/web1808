import React from 'react';
import { getShopData } from "../../../fetch/shop"
import ShopList from "../../../components/ShopList"
import LoadMore from "../../../components/LoadMore"

export default class ShopData extends React.Component{

    constructor(){
        super();
        this.state = {
            shopData:[],
            hasMore:false
        }
    }

    loadMoreFn(){
        // 再次获取数据
        this.resultHttp();
    }

    resultHttp(){
        const cityName = this.props.cityName;
        const result = getShopData(cityName);
        result.then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            this.setState({
                shopData:this.state.shopData.concat(data.data),
                hasMore:data.hasMore
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    componentDidMount(){
        this.resultHttp();
    }

    render(){
        return(
        <div>
            {
                this.state.shopData.length > 0?
                <ShopList data={ this.state.shopData }/>
                :<div>数据加载中</div>
            }
            {
                this.state.hasMore ?
                <LoadMore loadMoreFn={ this.loadMoreFn.bind(this) }></LoadMore>
                :<div>数据已经到底</div>
            }
        </div>
        )
    }
}
