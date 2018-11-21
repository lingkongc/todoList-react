import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e){

  }
  
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.props.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleClick}>提交</button>
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

// todolist和store做链接
export default connect(
  mapStateToProps,
  null
)(TodoList);
