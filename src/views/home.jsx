import React, { Component } from 'react'
import { Switch, Route,Redirect} from 'react-router-dom'
import MyNavLink from '../components/MyNavLink'
import Message from "./message"
import New from "./news"
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>homehomehome组件内容
                <ul className="nav nav-tabs">
                    <li>
                        <MyNavLink className="list-group-item" to='/home/message'>Message</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink className="list-group-item" to='/home/new'>New</MyNavLink>
                    </li>

                </ul>

                {/*可切换的路由组件*/}
                <Switch>
                    <Route path='/home/message' component={Message} />
                    <Route path='/home/new' component={New} />
                    <Redirect to='/home/new'/>
                </Switch>
            </div>

        );
    }
}