import React, { Component } from 'react'
import qs from 'qs'
// name=zhangsan&age=18
// 这种编码方式被称为 urlencoded
// let obj = {
//   name: '张三',
//   age:18
// }
// console.log(qs.parse(qs.stringify(obj)))
const detailData = [
  {
    id: 1,
    content: '你好 1'
  },
  {
    id: 2,
    content: '你好 2'
  },
  {
    id: 3,
    content: '你好 3'
  }
]
// 以后尽量使用 === 不能用的时候再考虑用 ==
export default class Detail extends Component {
  render() {
    console.log(this.props)
    // 接收 state 参数
    // const { id, title } = this.props.location.state || {}

    // let detail =
    //   detailData.find(item => {
    //     console.log(typeof item.id, 'item.id')
    //     console.log(typeof id, 'id')
    //     // 这里的id类型不相等 所以用 ==
    //     return item.id === id
    //   }) || {}
    // detail = detail.content

    // 接收 search 参数
    const { search } = this.props.location
    // vue-router 取得是 query 参数
    // slice 字符串截取 返回剩下的字符串从索引1开始到最后
    const { id, title } = qs.parse(search.slice(1))
    console.log(title)
    let detail = detailData.find(item => {
      console.log(typeof item.id, 'item.id')
      console.log(typeof id, 'id')
      // 这里的id类型不相等 所以用 ==
      return item.id == id
    })
    console.log(detail)
    if (detail) {
      detail = detail.content
    }

    // 接收 params 参数
    // const { id, title } = this.props.match.params
    // console.log(detailData)

    // let detail = detailData.find(item => {
    //   console.log(typeof(item.id), 'item.id')
    //   console.log(typeof (id), 'id')
    //   // 这里的id类型不相等 所以用 ==
    //   return item.id == id
    // })
    // console.log(detail)
    // if (detail) {
    //   detail = detail.content
    // }

    // push 和 replace 默认是 push 是一个入栈的行为
    // replace 是替换当前
    // 接收search参数


    return (
      <div>
        <div>id----{id}</div>
        <div>title----{title}</div>
        <div>detail-----{detail}</div>
      </div>
    )
  }
}
