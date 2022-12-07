import React from 'react'
import ReactDOM from 'react-dom/client'
// 3. BrowserRouter 解决刷新样式丢失的问题
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

// BrowserRouter 借助的h5 history 兼容性不好
// hashRouter #后面的不会发送给服务器

// path 

// 刷新对 state 参数的影响

// BrowserRouter 没有任何影响 操作浏览器的 history 对象
// 浏览器的历史记录还在

// hash router 刷新会导致 state! 参数的丢失





