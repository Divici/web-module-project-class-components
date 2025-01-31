import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            input: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddTodo(this.state.input);
    }

    handleOnClick = e => {
        e.preventDefault();
        this.props.handleClearCompleted();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange= {this.handleChanges} type='text' name='todo' placeholder="...todo"/>
                <button>Add Todo</button>
                <button onClick={this.handleOnClick}>Clear Completed</button>
            </form>
        );
    }
} 

export default TodoForm;