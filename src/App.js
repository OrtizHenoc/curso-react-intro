import React from 'react';
import {TodoCounter} from './TodoCounter.js';
import {TodoItem} from './TodoItem.js';
import {TodoSearch} from './TodoSearch.js';
import {TodoList} from './TodoList.js';
import { CreateTodoButton } from "./CreateTodoButton.js";
// import './App.css';
const todos = [
  {text: 'Cortar Cebolla', completed: true},
  {text: 'Tomar el Curso de introduccion a React', completed: false},
  {text: 'Llorar por el semestre', completed: false},
]
function App(props) {
  return (
   <React.Fragment>
      <TodoCounter/>
      

      <TodoSearch/>
      
      <TodoList>
      {todos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        />
      ))}
      </TodoList>


      <CreateTodoButton/>
      
      
      
    </React.Fragment>
  );
}

export default App;
