import React from 'react';
import "./style.less";

export default class SearchInput extends React.Component{

  constructor(){
    super();
    this.state = {
      values:""
    }
  }

  KeyUpHandle(event){
    if(event.keyCode === 13){
      // 跳转到下一个页面
      // this.props.history.push("/search")
      this.props.onSendValues(this.state.values);
    }
  }
  valueChangeHandler(event){
    this.setState({
      values:event.target.value
    })
  }

  render(){
    return(
      <input 
        className="search-input" 
        type="text"
        value={this.state.values}
        onChange={this.valueChangeHandler.bind(this)}
        onKeyUp={this.KeyUpHandle.bind(this)}
      />
    )
  }
}
