import React from 'react';
import BottomNav from "../../components/BottomNav"
import SwiperView from "../../components/SwiperView"
import HomeHeader from "../../components/HomeHeader"
import Buttons from "../../components/Buttons"
import ShopData from "./subpage/shopData"

import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'

import Banner1 from "../../static/images/banner4.png"
import Banner2 from "../../static/images/banner5.png"
import Banner3 from "../../static/images/banner6.png"

import "./style.less"


class Shop extends React.Component{
  render(){
    return(
      <div>
        <HomeHeader cityName={ this.props.city.cityName } history={ this.props.history }/>
        <SwiperView banners={[Banner1,Banner2,Banner3]}/>
        <div className="btn-group" style={{ display: "flex",margin: "10px"}}>
          <Buttons buttonText="找室友"></Buttons>
          <Buttons buttonText="找房子"></Buttons>
        </div>
        <ShopData cityName={ this.props.city.cityName }/>
        <BottomNav />
      </div>
    )
  }
}

// 读取数据
function mapStateToProps(state){
  return{
    city:state.city
  }
}

// 写入数据操作
function mapDispatchToProps(dispatch){
  return{
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop))
