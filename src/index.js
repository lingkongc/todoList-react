// 导入react矿浆
import React from 'react'
// 导入react-dom 渲染根节点
import ReactDom from 'react-dom'
// redux的容器
import { Provider } from 'react-redux'
//根组件
import App from './components/App'
// store
import store from './store'
// 根样式
import './index.css'

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
