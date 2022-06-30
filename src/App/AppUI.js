import React from 'react';
import {TodoCounter} from '../TodoCounter/index.js';
import {TodoContext} from '../TodoContext';
import {TodoItem} from '../TodoItem/index.js';
import {TodoSearch} from '../TodoSearch/index.js';
import {TodoList} from '../TodoList/index.js';
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { Modal } from "../Modal";
import '../Modal/Modal.css'
import { TodoForm } from '../TodoForm/index.js';
import { TodoError } from '../TodoError/index.js';
import {TodosLoading} from '../TodosLoading/index.js'
import {TodosLoadingV2} from '../TodosLoading/TodoLoadingV2'
import { EmptyTodos } from '../EmptyTodos/index.js';

function AppUI() {
  const {
    error,
    loading,
    totalTodos,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  
    return (
        <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
      
       
        <TodoList> 
          {error && <TodoError error={error}/>}
          {loading && <TodosLoadingV2/>}
          {(!loading && totalTodos<=0 )&& <EmptyTodos/>}
          {/* {(!loading && !totalTodos )&& <p>Tamos Ready!</p>} */}

          {searchedTodos.map(todo => (  
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        
        {!!openModal &&(
        <Modal>
          <TodoForm/>
        </Modal>
        )}; 
        <CreateTodoButton
          setOpenModal={setOpenModal}
        />
            
      </React.Fragment>
    );
}

export { AppUI }