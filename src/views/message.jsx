import React, { Component } from 'react'
import MessageDetail from './message-detail'
import {Route} from 'react-router-dom'
import MyNavLink from '../components/MyNavLink'
export default class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: []
        }
    }
    // // （装载完成），在render之后调用
    componentDidMount() {
        // 模拟发送ajax请求异步获取数据
        setTimeout(() => {
            const message = [
                { id: 1, title: 'message001' },
                { id: 2, title: 'message002' },
                { id: 3, title: 'message003' },

            ]
            // 更新状态
            this.setState({message})
        }, 1000)

    }
    ShowDetail = (id) => {
        this.props.history.push(`/home/message/${id}`)
      }
    
      ShowDetail2 = (id) => {
        this.props.history.replace(`/home/message/${id}`)
      }
    goforward=()=>{
        this.props.history.goForward()
    }
    goback=()=>{
        this.props.history.goBack()
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.message.map((m, index) =>
                        <li key={index}>
                            <MyNavLink to={`/home/message/messagedetail/${m.id}`}>{m.title}</MyNavLink>
                            {/* 回调函数中传参数 */}
                            &nbsp;&nbsp;&nbsp;
                  <button onClick={() => this.ShowDetail(m.id)}>查看详情(push)</button>&nbsp;
                  <button onClick={() => this.ShowDetail2(m.id)}>查看详情(replace)</button>
                        </li>
                    )
                    }
                      
            </ul>
            <p>
                <button onClick={this.goforward}>前进</button>
                <button onClick={this.goback}>回退</button>
            </p>
            {/* 显示内容 */}
                <Route path='/home/message/messagedetail/:id' component={MessageDetail} />
            </div>
        )
    }
}