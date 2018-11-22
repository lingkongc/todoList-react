import React from "react";
import { connect } from "react-redux";

const TodoList = props => (
  <div>
    <div>
      <input
        type="text"
        value={props.inputValue}
        onChange={props.handleInputChange}
      />
      <button onClick={props.handleClick}>提交</button>
    </div>
    <ul>
      {
        props.list.map(item => (
          <li>{item}</li>
        ))
      }
    </ul>
  </div>
)

// 将state映射到props
const mapStateToProps = state => ({
  inputValue: state.inputValue,
  list: state.list
});

// store.dispatch,props
const mapDispatchToProps = dispatch => {
  return {
    handleInputChange(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      };
      dispatch(action);
    },
    handleClick(e) {
      const action = {
        type: 'add_item'
      };
      dispatch(action);
    }
  };
};

// todolist和store做链接
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
