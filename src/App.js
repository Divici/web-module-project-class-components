import React from 'react';
import TodoList from './components/TodoList';

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
  constructor(){
    super();
    this.state = {
      toDoList: toDoList
    };

  //Add toDo to list

  //Clear completed toDo's

  //Toggle Completed
    
  }
  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList toDoList={this.state.toDoList} />
      </div>
    );
  }
}

export default App;
