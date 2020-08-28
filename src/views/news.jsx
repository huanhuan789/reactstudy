import React, { Component } from 'react'

export default class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsArr:['new1','new2','new3']
        }
    }
    render() {
        return (
           <ul>
              {/* { 数据数组转换成标签数组} */
            this.state.newsArr.map((news,index) => <li key={index}>{news}</li>)
              
              }
           </ul>
        );
    }
}