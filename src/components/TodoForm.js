import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    render() {
        return (
            <form>
                <input type='text' name='todo' placeholder="...todo"/>
                <button>Add Todo</button>
            </form>
        );
    }
} 

export default TodoForm;