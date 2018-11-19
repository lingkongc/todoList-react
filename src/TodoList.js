import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store/index';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators';
import TodoListUI from './TodoListUI'

class TodoList extends Component {
    constructor(props) {
        super(props);

        // 处理store改变,更新state
        this.handleStoreChange = this.handleStoreChange.bind(this);
        // 输入框内容改变
        this.handleInputChange = this.handleInputChange.bind(this);
        // 添加输入框内容后
        this.handleBtnClick = this.handleBtnClick.bind(this);
        // 删除项目
        this.handleItemDelete = this.handleItemDelete.bind(this);

        // 初始化从store获取state
        this.state = store.getState();
        store.subscribe(this.handleStoreChange);
    }

    handleStoreChange() {
        console.log('store change');
        // 重新从store中取数据
        this.setState(store.getState());
    }

    handleInputChange(event) {
        console.log(event.target.value);
        const action = getInputChangeAction(event.target.value);
        store.dispatch(action);
    }

    handleBtnClick() {
        const { inputValue } = this.state;
        if (!inputValue) return false;
        const action = getAddItemAction(inputValue);
        store.dispatch(action);
    }

    handleItemDelete(index) {
        const action = getDeleteItemAction(index);
        console.log(action.value);
        store.dispatch(action);
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }
}

export default TodoList;