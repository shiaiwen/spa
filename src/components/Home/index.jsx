import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import News from './News'
import Message from './Message'
import MyNavLink from '../MyNavLink'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className='nav nav-tabs'>
            <li>
              <MyNavLink to='/home/news'>News</MyNavLink>
            </li>
            <li>
              <MyNavLink to='/home/message'>Message</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
          {/* 路由的匹配从 app 组件开始 */}
          {/* 嵌套路由需要带上父路由的路径 */}
          <Switch>
            <Route path='/home/news' component={News}></Route>
            <Route path='/home/message' component={Message}></Route>
            <Redirect to='/home/news'/>
          </Switch>
        </div>
      </div>
    )
  }
}
