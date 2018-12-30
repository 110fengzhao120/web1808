import React from 'react';
import { getSearchData } from "../../../fetch/search/index.js"
import SearchListComponent from "../../../components/SearchListComponent"
import LoadMore from "../../../components/LoadMore"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'


class SearchList extends React.Component{

    constructor(){
        super()
        this.state = {
            searchData:[],
            hasMore:false
        }
    }

    // 加载更多函数
    loadMoreFn(){
        this.searchDataFn();
    }

    componentDidUpdate(prevProps, prevState){
        const keyword = this.props.keyword;
        if(keyword !== prevProps.keyword){
            this.searchDataFn();
        }
    }

    componentDidMount(){
        this.searchDataFn();
    }

    searchDataFn(){
        const keyword = this.props.keyword;
        const cityName = this.props.city.cityName;
        var result = getSearchData(keyword,cityName);
        result.then(res => {
            return res.json();
        })
        .then(data => {
            this.setState({
                searchData:this.state.searchData.concat(data.data),
                hasMore:data.hasMore
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const { searchData,hasMore } = this.state;
        return(
        <div>
            {
                searchData.length > 0 ?
                <SearchListComponent data={searchData} />
                :
                <div>正在加载数据</div>
            }
            {
                hasMore ? 
                <LoadMore loadMoreFn={ this.loadMoreFn.bind(this) } />
                :
                <div>到底了</div>
            }
        </div>
        )
    }
}

// 读取数据
function mapStateToProps(state){
    return{
      city:state.city
    }
  }
  
  // 写入数据操作
  function mapDispatchToProps(dispatch){
    return{
    }
  }

export default  withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList))