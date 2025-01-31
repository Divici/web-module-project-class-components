import React from "react";
import Todo from "./Todo";

const TodoList = props => {

    return (
        <div>
            {props.toDoList.map(todo => (
                <Todo key={todo.id} todo={todo} handleToggleTask={props.handleToggleTask}/>
            ))}
        </div>
    );
};

export default TodoList;