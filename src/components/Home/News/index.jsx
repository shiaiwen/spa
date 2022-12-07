import React, { Component } from 'react'

export default class News extends Component {
  // 组件挂载完毕
  componentDidMount() { 
    setTimeout(() => {
      this.props.history.push('/home/message')
    }, 3000)
  }

  render() {
    return (
      <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
    )
  }
}
