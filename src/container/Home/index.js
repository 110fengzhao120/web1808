import React from 'react';
import BottomNav from "../../components/BottomNav"
import HomeHeader from "../../components/HomeHeader"
// import Banner from "../../components/Banner"
import HomeHot from "./subpage/homehot.js"
import SwiperView from "../../components/SwiperView"

import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'


import Banner1 from "../../static/images/banner1.png"
import Banner2 from "../../static/images/banner2.png"
import Banner3 from "../../static/images/banner3.png"

class Home extends React.Component{
  render(){
    return(
      <div>
        <HomeHeader cityName={ this.props.city.cityName } history={ this.props.history } />
        <SwiperView banners={[Banner1,Banner2,Banner3]}/>
        <HomeHot cityName={ this.props.city.cityName } />
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
)(Home))
