import {
    FILTER_SET,
} from "../actions/actionTypes";

// 这里传入的是filter
const filterReducer = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case FILTER_SET:
            return applySetFilter(state, action);
        default:
            return state;
    }
}

function applySetFilter(state, action) {
    return action.filterType;  // 改变state的filter属性
}

export default filterReducer;