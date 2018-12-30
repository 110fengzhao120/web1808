import React from 'react';

export default class LoadMore extends React.Component{

    componentDidMount(){

        // 获取父级加载更多的函数
        const loadMoreFn = this.props.loadMoreFn;
        
        // 获取当前元素
        const wrapper = this.refs.wrapper;
        // 视口高度
        const windowHeight = window.screen.height;
        let timeoutId;

        function callback(){
            // getBoundingClientRect: 获取元素距离四个边的值
            let top = wrapper.getBoundingClientRect().top;
            if(top && top < windowHeight){
                // 加载更多
                loadMoreFn();
            }
        }

        // 滚动事件
        window.addEventListener("scroll",function(){
            if(timeoutId){
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(function(){
                callback()
            },50)
        })
    }

    render(){
        return(
        <div className="load-more" ref="wrapper">
            加载更多
        </div>
        )
    }
}
