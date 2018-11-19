import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes';
// state是store中存储的数据
const defaultState = {
    inputValue: '',
    list: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ]
};

// reducer可以接收state，但是不能修改state

// state是上一个state
// 这里的action是store传过来的指令
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        // 对state进行一次深拷贝 不改变原则
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(action.value);
        newState.inputValue = '';
        return newState;
    }

    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        // 只需删除一项 spilce比filter性能好一些
        newState.list.splice(action.value, 1);
        return newState;
    }
    return state;
}