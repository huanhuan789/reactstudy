import React, { Component } from 'react'

import PropTypes from 'prop-types'
import './comment-item.css'
export default class  CommentIterm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handledelete=()=>{
        // 取出数据
        const {comment,deleteComment,index}=this.props
        //提示
        if(window.confirm(`确定删除${comment.username}的评论么`)){
            // 确定后删除
            deleteComment(index)
        }
    }
    render() {
        console.log(this.props)
        const {comment,deleteComment}=this.props
        return (
            <li className="list-group-item">
            <div className="handle">
              <a href="javascript:;" onClick={this.handledelete}>删除</a>
            </div>
            <p className="user"><span >{comment.username}</span><span>说:</span></p>
            <p className="centence">{comment.content}</p>
          </li>
        );
    }
}
CommentIterm.propTypes={
    comment:PropTypes.object.isRequired,
    deleteComment:PropTypes.func.isRequired
}