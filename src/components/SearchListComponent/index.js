import React from "react"
import "./style.less"
import Item from "./Item"

export default class List extends React.Component{
  render() {
    var data = this.props.data;
    return (
      <div className="list-container">
        {
          data.map((element,index) => {
            return <Item key={index} data={ element }></Item>
          })
        }
      </div>
    )
  }
}
