import React from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as cityActions from "../actions/city.js"
import { withRouter } from 'react-router-dom'
import { CITYNAME } from "../utils/config.js";

class App extends React.Component{

  // 城市初始化
  componentDidMount(){

    // 读取本地是否存在
    const cityName = localStorage.getItem(CITYNAME);
    if(cityName){
      this.props.cityActions.initCity({
        cityName:cityName
      })
    }else{
      this.props.cityActions.initCity({
        cityName:"北京"
      })
    }
  }

  render(){
    return(
      <div>
        { this.props.children }
      </div>
    )
  }
}

// ------ redux部分 -------

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
)(App))
