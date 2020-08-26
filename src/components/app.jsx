import React, { Component } from 'react'
import logo from "../logo.svg"
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <img className="logo" src={logo} alt="logo"/>
                <p className="title">我是测试练习tag切换查看</p>
            </div>
        );
    }
}
