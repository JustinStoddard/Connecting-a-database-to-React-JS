import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  <div calssName="row">
    { todos.map ( todo =>
      <Todo
        key={todo.id}
        {...todo}
          updatetodo={updateTodo}
          deletetodo={deleteTodo}
        />
      )
    }
  </div>
}