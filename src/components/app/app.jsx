import React, { Component } from 'react'
import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments:[
                // {username:'TOM',content:'哈哈哈'}
            ]
        }
    }
    // 提交
    addComment=(comment)=>{
      // 读取当前组件数组的数据
      const {comments}=this.state
      // 更改数据(将comment对象推送到comments数组中)
      comments.push(comment)
      // 更新comments 数组数据
      this.setState({comments})
    }
    // 删除
    deleteComment=(index)=>{
            // 读取当前组件数组的数据
            const {comments}=this.state
            // 更改数据(根据数组的索引值删除索引)
            comments.splice(index,1)
            // 更新comments 数组数据
            this.setState({comments})
    }
    render() {
        const {comments}=this.state
        return (
             <div>
            <header className="site-header jumbotron">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <h1>请发表对React的评论</h1>
                  </div>
                </div>
              </div>
            </header>
            <div className="container">
             <CommentAdd addComment={this.addComment}/>
             <CommentList  comments={comments} deleteComment={this.deleteComment}/>

            </div>
          </div>
        );
    }
}