import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './component/TodoList';

class App extends Component {
  state = { todos: [] }

  componentDidMount() { //This is like "Index" In Rails.
    
  }  

  addItem = (name) => {

  }

  updateTodo = (id) => {

  }

  deleteTodo = (id) => {

  }

  render() {
    return (
      <div>
        <TodoForm 
          addItem={this.addItem} 
        />

        <TodoList 
          todos={this.state.todos} 
          updateTodo={this.updateTodo} 
          delelteTodo={this.deletetodo} 
        />
        
      </div>
    );
  }
}

export default App;
