import React from 'react';
import Header from "../../components/Header"
import Info from "./subpage/info"

export default class Detail extends React.Component{
  render(){

    const id = this.props.match.params.id;

    return(
      <div>
         <Header title="详情页" />
         <Info id={ id } history={ this.props.history }/>
      </div>
    )
  }
}
