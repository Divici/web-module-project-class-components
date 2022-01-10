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
  handleClearCompleted = () => {
    this.setState({
      ...this.state,
      toDoList: this.state.toDoList.filter(task => {
        return !task.completed;
      })
    })
  }

  //Toggle Completed
  handleToggleTask = (selectedTask) => {
    this.setState({
      ...this.state,
      toDoList: this.state.toDoList.map(task => {
        if (task.id === selectedTask.id){
          return({
            ...task,
            completed: !task.completed
          })
        }
        else {
          return task;
        }
      })
    });
  }
    
  
  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList toDoList={this.state.toDoList} handleToggleTask={this.handleToggleTask} />
        <TodoForm handleAddTodo={this.handleAddTodo} handleClearCompleted={this.handleClearCompleted}/>
      </div>
    );
  }

}

export default App;
