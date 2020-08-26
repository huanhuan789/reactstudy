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
                <p className="title">我是红色</p>
            </div>
        );
    }
}
