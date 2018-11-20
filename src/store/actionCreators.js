import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'
import axios from 'axios';


// 管理action

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = (value) => ({
    type: ADD_TODO_ITEM,
    value
});

export const getDeleteItemAction = (value) => ({
    type: DELETE_TODO_ITEM,
    value
});

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
});

// 异步获取数据
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('../../mock/test.json')
            .then((res) => {
                const data = res.data;
                const action = initListAction(data);
                dispatch(action);
            });
    }
}