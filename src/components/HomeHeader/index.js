import React from 'react';
import SearchInput from "../SearchInput"
import "./style.less"
import { Link } from "react-router-dom"

export default class HomeHeader extends React.Component{

  getValuesHandler(searchValue){
    this.props.history.push("/search/"+searchValue)
  }

  render(){
    return(
      <div id="home-header" className="clear-fix">
        <div className="home-header-left float-left">
          <Link to="/city">
            <span>{this.props.cityName}</span>
            <i className="icon-angle-down"></i>
          </Link>
        </div>
        <div className="home-header-right float-right">
          <Link to="/shopcar"><i className="iconfont icon-car"></i></Link>
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            <i className="icon-search"></i>
            <SearchInput onSendValues={ this.getValuesHandler.bind(this) }/>
          </div>
        </div>
      </div>
    )
  }
}
