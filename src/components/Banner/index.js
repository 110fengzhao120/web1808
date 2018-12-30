import React from 'react';
import "./style.less";
import ReactSwipe from 'react-swipe'

import Banner1 from "../../static/images/banner1.png"
import Banner2 from "../../static/images/banner2.png"
import Banner3 from "../../static/images/banner3.png"

export default class Banner extends React.Component{

  constructor(){
    super();
    this.state = {
      index:0
    }
  }

  render(){
    const banners = [Banner1,Banner2,Banner3]
    const opt = {
        auto: 2500,
        callback:function(index,ele){
          this.setState({
            index:index
          })
        }.bind(this)
      }
    return(
      <div id="home-category">
        <ReactSwipe swipeOptions={opt}>
          {
            banners.map((element,index) => {
              return <img alt="index" key={index} src={ element } />
            })
          }
        </ReactSwipe>
        <div className="index-container">
          <ul>
            {
              banners.map((element,index) => {
                return <li key={index} className={this.state.index === index ? "selected" : ''}></li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
