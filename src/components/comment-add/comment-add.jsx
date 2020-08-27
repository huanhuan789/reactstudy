import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class CommentAdd extends Component {
    constructor(props) {
        super(props);
        //初始化数据
        this.state = {
                username:'',
                content:''
        }
    }
    handleSubmit=()=>{
        //收集数据
     const comment=this.state   
        // 更新状态(将app传来的函数传入comment对象)
this.props.addComment(comment)
        // 清除输入数据
this.setState({
    username:'',
    content:''
})
    }
    handleNameOnchange=(event)=>{
        // console.log(event)
        const username=event.target.value
        this.setState({username})
    }
    handleConOnchange=(event)=>{
        // console.log(event)
        const content=event.target.value
        this.setState({content})
    }
    render() {
        return (
            <div className="col-md-4">
            <form className="form-horizontal">
              <div className="form-group">
                <label>用户名</label>
                                                                                                      {/* onchange监听事件的改变 */}
                <input type="text" className="form-control" placeholder="用户名" value={this.username} onChange={this.handleNameOnchange}/>
              </div>
              <div className="form-group">
                <label>评论内容</label>
                <textarea className="form-control" rows="6" placeholder="评论内容" value={this.content} onChange={this.handleConOnchange}></textarea>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>提交</button>
                </div>
              </div>
            </form>
          </div>
        );
    }
}
CommentAdd.propTypes={
    addComment:PropTypes.func.isRequired
}