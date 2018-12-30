import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Link } from "react-router-dom"
import Pagination from "./Pagination"


import "./style.less"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    position: 'relative',
  }
};

export default class LifeService extends React.Component{

  constructor(){
    super();
    this.state = {
      index: 0
    };
  }

  handleChangeIndex(index){
    this.setState({
      index
    })
  }

  render(){
    const { index } = this.state;
    const banners = this.props.banners
    return(
      <div style={styles.root} className="swiper-view">
        <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex.bind(this)}>
          {
            banners.map((element,index) => {
              return(
                <div key={index}>
                  <Link to="/search">
                    <img alt="" src={ element } />
                  </Link>
                </div>
              )
            })
          }
        </AutoPlaySwipeableViews>
        <Pagination dots={banners} index={index}/>
      </div>
    )
  }
}
