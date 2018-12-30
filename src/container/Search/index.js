import React from 'react';
import SearchHeader from "../../components/SearchHeader"
import SearchList from "./subpage/searchList"

export default class Search extends React.Component{
  render(){
    const keyword =this.props.match.params.keyword;
    return(
      <div>
        <SearchHeader history={ this.props.history }/>
        <SearchList keyword={keyword}/>
      </div>
    )
  }
}
