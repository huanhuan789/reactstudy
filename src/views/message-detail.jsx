import React, { Component } from 'react'
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allMessage:[
                { id: 1, title: 'message1', content: 'hahah' },
                { id: 2, title: 'message2', content: 'fff' },
                { id: 3, title: 'message3',content:'33333'}
            ]
        }
    }
    render() {
        const {allMessage}=this.state
        // 得到请求参数中的id
        const {id}=this.props.match.params
        //查询得到对应的message
        const message=allMessage.find((m)=>m.id==id)//返回第一个结果为true的数组元素

        return (
            <div>
                <ul>
        <li>id:{message.id}</li>
        <li>title:{message.title}</li>
        <li>content:{message.content}</li>
                </ul>
            </div>
        );
    }
}