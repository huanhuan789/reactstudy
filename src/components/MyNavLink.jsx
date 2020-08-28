import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class MyNavLink extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return <NavLink {...this.props} activeClassName="activeClass" />
    }
}