import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
          />
          <button onClick={this.props.handleClick}>提交</button>
        </div>
        <ul>
          <li>Dell</li>
        </ul>
      </div>
    );
  }
}

// 将state映射到props
const mapStateToProps = state => {
  return {
    inputValue: state.inputValue
  };
};

// store.dispatch,props
const mapDispatchToProps = dispatch => {
  return {
    handleInputChange(e) {
      const action = {
        type: "change_input_value",
        value: e.target.value
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
