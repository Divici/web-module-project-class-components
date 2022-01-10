import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const toDoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoList: toDoList
    };
  }

  //Add toDo to list
  handleAddTodo = (taskToDo) => {

    const newTask = {
      task: taskToDo,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      toDoList: [...this.state.toDoList, newTask]
    });
  }

  //Clear completed toDo's

  //Toggle Completed
    
  
  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList toDoList={this.state.toDoList} />
        <TodoForm handleAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
  
}

export default App;
