import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import MyNavLink from './components/MyNavLink'
// BrowserRouter 不含 #
// HashRouter  包含 #

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-2'>
            <div className='list-group'>
              {/* <a className='list-group-item' href='./about.html'>
                About
              </a>
              <a className='list-group-item active' href='./home.html'>
                Home
              </a> */}
              {/* react 动态类名 */}
              {/* 原生中靠 a 跳转到不同的页面 在 react 中靠路由链接换组件 */}
              {/* 路由一般写小写 */}
              {/* NavLink 追加 active */}
              {/* 304 走缓存 */}
              {/* <Switch> */}
              {/* 刷新后样式丢失 因为找静态资源的时候在后面加上了一层  */}
              {/* 严格匹配 exact */}
              <MyNavLink to='/about'>About</MyNavLink>
              <MyNavLink to='/home'>Home</MyNavLink>
              {/* </Switch> */}
              {/* 解决方案 */}

              {/* 正常情况下一个路由匹配一个组件 配对上应该自动停止 */}

              {/* 在浏览器中也是被渲染成 a 标签了
                路由组件 和 一般组件
                路由组件可以接收到一些参数
                存放位置不同
                组件标签传递了什么就就能收到什么
                路由组件可以接收到一些参数
                
              */}
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                {/* 点击内容不同展示不同的内容 */}
                {/* 注册路由 */}
                <Switch>
                  <Route path='/about' component={About} />
                  <Route path='/home' component={Home} />
                  {/* 兜底的路由 */}
                  <Redirect to='/about' />
                </Switch>
                {/* 两个路由器之间没有进行数据的沟通 */}
                {/* 路由匹配的过程 前面的先匹配 要的东西不能少 sh */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
