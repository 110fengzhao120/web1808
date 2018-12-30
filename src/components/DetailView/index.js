import React from 'react';
import SwiperView from "../SwiperView"
import Tab from "../Tab/index"
import Comment from "../../container/Detail/subpage/comment"
import BuyAndStore from "../../container/Detail/subpage/BuyAndStore"
import "./style.less";

export default class DetailView extends React.Component{

    render(){
        const data = this.props.data;
        const id = this.props.id;
        return(
        <div className="detail-info">
            <SwiperView banners={data.imgs}/>
            <Tab>
                <div tabname="房源信息">
                    <h3>{ data.title }</h3>
                    <div className="box">
                    <ul>
                        <li>
                            <span>{ data.price }/月</span>
                            <p>租金</p>
                        </li>
                        <li>
                            <span>{ data.info.type }/月</span>
                            <p>房型</p>
                        </li>
                        <li>
                            <span>{ data.houseType }</span>
                            <p>面积</p>
                        </li>
                    </ul>
                    </div>
                    <div className="info">
                    <div className="info-list">
                        <p>楼层：{ data.info.level }</p>
                        <p>装修：{ data.info.style }</p>
                    </div>
                    <div className="info-list">
                        <p>类型：{ data.info.type }</p>
                        <p>朝向：{ data.info.orientation }</p>
                    </div>
                    <div className="info-list">
                        <p>年代：{ data.info.years }</p>
                    </div>
                    </div>
                    <BuyAndStore id={id} history={ this.props.history }/>
                </div>
                <div tabname="房源评价">
                    <Comment id={id}/>
                </div>
            </Tab>
        </div>
        )
    }
}
