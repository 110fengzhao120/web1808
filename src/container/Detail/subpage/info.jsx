import React from 'react';
import { getDetailData } from "../../../fetch/detail/index"
import DetailView from "../../../components/DetailView"

export default class Mine extends React.Component{

    constructor(){
        super();
        this.state = {
            detailData:{}
        }
    }

    componentDidMount(){
        const id = this.props.id;
        const result = getDetailData(id);
        result.then(res => {
            return res.json()
        })
        .then(data => {
            this.setState({
                detailData:data
            })
        })
        .catch(error => {
            console.log(error);  // new Error(error)
        })

    }

    render(){
        const { detailData } = this.state;
        return(
        <div>
            {
                Object.keys(detailData).length > 0 ?
                <DetailView data={detailData}  id={ this.props.id } history={ this.props.history }/>
                :<div>数据加载中...</div>
            }
        </div>
        )
    }
}
