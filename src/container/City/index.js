import React from 'react';
import Header from "../../components/Header"
import CurrentCity from "../../components/CurrentCity"
import CityList from "../../components/CityList"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as cityActions from "../../actions/city.js"
import { withRouter } from 'react-router-dom'
import { CITYNAME } from "../../utils/config.js";

class City extends React.Component{

  getCityName(city){

    // 写入redux中
    this.props.cityActions.updateCity({
      cityName:city
    })

    // 存储数据
    localStorage.setItem(CITYNAME,city);

    window.history.back();
  }

  render(){
    return(
      <div>
        <Header title="城市选择"/>
        <CurrentCity cityName={this.props.city.cityName} />
        <CityList onCityName={this.getCityName.bind(this)}/>
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
    cityActions:bindActionCreators(cityActions,dispatch)
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(City))
