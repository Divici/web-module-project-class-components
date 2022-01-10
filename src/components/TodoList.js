import React from "react";

const TodoList = props => {
console.log(props.toDoList);
    return (
        <div>
            {props.toDoList.map(item => (
                     <div>{item.task}</div>
    ))}
        </div>
    );
};

export default TodoList;