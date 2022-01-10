import React from "react";

const TodoList = props => {

    return (
        <div>
            {props.toDoList.map(item => (
                     <div>{item.task}</div>
    ))}
        </div>
    );
};

export default TodoList;