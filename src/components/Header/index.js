import React from 'react';
import "./style.less"

export default class Header extends React.Component{


  clickHandler(event){
    if(this.props.routerPath){
      this.props.history.push(this.props.routerPath);
    }else{
      window.history.back();
    }
  }

  render(){
    return(
      <div id="common-header">
        <span className="back-icon" onClick={ this.clickHandler.bind(this) }>
          <i className="icon-chevron-left"></i>
        </span>
        <h1>{ this.props.title }</h1>
      </div>
    )
  }
}
