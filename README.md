## todolist-react

```
npm install --save redux
npm install --save react-redux
npm install --save-dev redux-devtools
```

state
```
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
```



### store 将state以对象树的形式存储
let store = createStore(rootReducer)  第二个参数用来设置state初始状态

store.subscribe(listener) 注册监听器 返回一个注销监听器的函数
store.getState()  获取state 在监听器中调用
store.dispatch(action)  更新state


### action 对象 描述发生了什么
store.dispatch(action)    // 将action传到store
但是一般不这么使用 使用connect()方法绑定

### reducers 描述action如何改变state

(state,action) => state

combineRecuders({reducer1,reducer2})   // 合并两个reducer到一个对象中

永远不要
1 修改传入参数；
2 执行有副作用的操作，如 API 请求和路由跳转；
3 调用非纯函数，如 Date.now() 或 Math.random()。

只要传入参数相同，返回计算得到的下一个 state 就一定相同。没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算。