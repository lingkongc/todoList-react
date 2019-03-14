import React, {Component} from 'react';


class TodoCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.onCreateTodo = this.onCreateTodo.bind(this);
        this.onChangeName = this.onChangeName.bind(this); // 输入内容发生改变时，更新state
    }

    onChangeName(event) {
        this.setState({value: event.target.value});
    }

    onCreateTodo(event) {
        this.props.onAddTodo(this.state.value);
        this.setState({
            value: ''
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onCreateTodo}>
                    <input
                        type="text"
                        placeholder="Add Todo..."
                        value={this.state.value}
                        onChange={this.onChangeName}
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default TodoCreate;