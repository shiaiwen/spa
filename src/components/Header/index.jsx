import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  // Cannot read property 'xxx' of undefined
  // 不能读取 xxx，在 undefined 上
  // 指的是 xxx 的 左边出问题了

  goBack = () => {
    // 只有路由组件才有 history
    this.props.history.goBack()
  }
  goForward = () => {
    // 只有路由组件才有 history
    this.props.history.goForward()
  }
  go = () => {
    // 只有路由组件才有 history
    this.props.history.go(1)
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-offset-2 col-xs-8'>
          <div className='page-header'>
            <h2>我是header组件</h2>

            <button onClick={this.goForward}>前进</button>
            <button onClick={this.goBack}>后退</button>
            <button onClick={this.go}>GO</button>
          </div>
        </div>
      </div>
    )
  }
}

// 使用 withRouter 加工完成的组价 暴露出去 返回值是一个带有路由的组件

export default withRouter(Header)


// 
