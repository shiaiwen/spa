import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  // 状态数据
  state = {
    messageArr: [
      {
        id: 1,
        title: '消息1'
      },
      {
        id: 2,
        title: '消息2'
      },
      {
        id: 3,
        title: '消息3'
      }
    ]
  }
  // 携带 params 参数
  // replaceShow = (id, title) => {
  //   // 编程式导航
  //   this.props.history.replace(`/home/message/detail/${id}/${title}`)
  // }
  // pushShow = (id, title) => {
  //   // 编程式导航 可以携带 state 参数
  //   this.props.history.push(`/home/message/detail/${id}/${title}`)
  // }

  // 携带 query 参数

  // replaceShow = (id, title) => {
  //   // 编程式导航
  //   this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)
  // }
  // pushShow = (id, title) => {
  //   // 编程式导航
  //   this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
  // }

  // state 传递参数
  replaceShow = (id, title) => {
    // 编程式导航
    this.props.history.replace(`/home/message/detail`, { id, title })
  }
  pushShow = (id, title) => {
    // 编程式导航
    this.props.history.push(`/home/message/detail`, { id, title })
  }

  // 前进
  goForward = () => {
    this.props.history.goForward()
  }
  goBack = () => {
    this.props.history.goBack()
  }
  go = () => { 
    this.props.history.go(1)
   }

  // go(1) go(-1)

  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {messageArr.map(message => {
            const { id, title } = message
            return (
              // <li key={message.id}>
              //   <Link to={`/home/message/detail/?id=${id}&title=${title}`}>
              //     {message.title}
              //   </Link>
              //   &nbsp;&nbsp;
              // </li>
              <li key={id}>
                {/* <Link
                  replace
                  to={{
                    pathname: '/home/message/detail',
      
                  }}
                >
                  {message.title}
                </Link> */}
                <Link to={`/home/message/detail/${id}/${title}`}>
                  {message.title}
                </Link>
                &nbsp;&nbsp;
                <button onClick={() => this.pushShow(id, title)}>
                  push 查看
                </button>
                &nbsp;&nbsp;
                <button onClick={() => this.replaceShow(id, title)}>
                  replace 查看
                </button>
              </li>
            )
          })}
        </ul>
        <hr />
        {/* <Route path='/home/message/detail/:id/:title' component={Detail} /> */}
        <Route path='/home/message/detail' component={Detail} />

        <button onClick={this.goForward}>前进</button>
        <button onClick={this.goBack}>后退</button>
        <button onClick={this.go}>GO</button>

        {/* 
            // 传递 search 参数
            路由组件传递参数
            1.params  ---路径参数
            // search 参数无需声明接收
            
        


          
          */}
      </div>
    )
  }
}
