import React from 'react'
import ConnectedTodoList from '../containers/ConnectedTodoList'
import ConnectedTodoCreate from '../containers/ConnectedTodoCreate'
import ConnectedFilter from '../containers/ConnectedFilter'
import ConnectedNotifications from '../containers/ConnectedNotifications'
import Dog from '../demo/test'

const App = () => (
  <div>
    <ConnectedNotifications />
    <ConnectedTodoCreate />
    <ConnectedTodoList />
    <ConnectedFilter />
    <Dog name="Hello" />
    <Dog name="world" />
  </div>
)

export default App

// 这里是一些注释啦
// 学习编程就和学习绘画一样，不同的语言就是不同的画作类型，比如水彩画、油画，虽然材质不同，但目的都是画出图像
