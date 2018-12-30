import React from 'react';
import { getHomeHot, getHomeHot2 } from "../../../fetch/home"
import HotProduct from "../../../components/HotProduct"

export default class HomeHot extends React.Component {

  constructor() {
    super();
    this.state = {
      hotproduct1: [],
      hotproduct2: []
    }
  }

  componentDidMount() {

    const cityName = this.props.cityName;
    const result1 = getHomeHot(cityName)
    result1.then(res => {
      return res.json();
    })
      .then(data => {
        this.setState({
          hotproduct1: data
        })
      })
      .catch(error => {
        console.log(error);
      })


    const result2 = getHomeHot2(cityName)
    result2.then(res => {
      return res.json();
    })
      .then(data => {
        this.setState({
          hotproduct2: data
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    const { hotproduct1, hotproduct2 } = this.state;
    return (
      <div>
        {
            hotproduct1.length > 0 ?
            <HotProduct title="热销产品" hotproducts={hotproduct1} />
            :
            <div>等待数据加载。。。</div>
        }
        {
            hotproduct2.length > 0 ?
            <HotProduct title="热销产品" hotproducts={hotproduct2} />
            :
            <div>等待数据加载。。。</div>
        }
      </div>
    )
  }
}
