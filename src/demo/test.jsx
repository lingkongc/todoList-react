import React from 'react'

class Dog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      style: {
        marginTop: '1rem',
        padding: '1rem',
        background: 'blue',
        color: 'white',
        cursor: 'pointer',
      },
      flag: true,
      date: new Date(),
    }

    this.eat = this.eat.bind(this)
    this.tick = this.tick.bind(this)
    this.handleLinkClick = this.handleLinkClick.bind(this)
  }

  eat() {
    // 注意setState是浅合并，会完整替换state的子属性，同时完整保留兄弟属性
    this.setState({
      style: {
        marginTop: '1rem',
        padding: '1rem',
        background: this.flag ? 'blue' : 'red',
        color: 'white',
        cursor: 'pointer',
      },
    })
    this.flag = !this.flag
  }

  handleLinkClick(e) {
    e.preventDefault()
    alert('躲猫猫')
    // 阻止事件冒泡
    e.stopPropagation()
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  // 生命周期方法
  // 组件挂载
  componentWillMount() {}
  // 组件已挂载
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  // 组件卸载
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  render() {
    var state = this.state
    return (
      <div style={state.style} onClick={this.eat}>
        <a href="https://wwww.baidu.com" onClick={this.handleLinkClick}>
          我是一个链接
        </a>
        <p>{this.props.name}</p>
        <p>It is {state.date.toLocaleTimeString()}.</p>
        <p>我有点烦躁</p>
      </div>
    )
  }
}

export default Dog
