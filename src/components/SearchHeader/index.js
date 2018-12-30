import React from 'react';
import SearchInput from "../SearchInput"
import "./style.less"

export default class SearchHeader extends React.Component{

    enterHandle(searchValue){
        this.props.history.push("/search/"+searchValue)
    }

    clickHandle(){
        window.history.back();
    }

    render(){
        return(
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    <SearchInput onSendValues={this.enterHandle.bind(this)}/>
                </div>
            </div>
        )
    }
}
