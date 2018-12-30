import React from "react"
import "./style.less"

export default class BuyAndStoreComponent extends React.Component {

    storeClickHandle(){
        const storeClick = this.props.storeClick;
        storeClick();
    }

    buyClickHandler(){
        const buyHandle = this.props.buyHandle;
        buyHandle()
    }

    render(){
        const isStore = this.props.isStore;
        return(
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                    {
                        isStore 
                        ?<button className="selected" onClick={ this.storeClickHandle.bind(this) }>已收藏</button>
                        :<button className="o" onClick={ this.storeClickHandle.bind(this) }>收藏</button>
                    }
                </div>
                <div className="item-container float-right">
                  <button onClick={ this.buyClickHandler.bind(this) }>预定</button>
                </div>
            </div>
        )
    }

}