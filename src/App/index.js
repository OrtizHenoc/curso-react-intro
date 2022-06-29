import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
// import './App.css';
// const defaultTodos = [
//   {text: 'Cortar Cebolla', completed: true},
//   {text: 'Tomar el Curso de introduccion a React', completed: false},
//   {text: 'Llorar por el semestre', completed: true},
// ]



function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
