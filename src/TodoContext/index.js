import React from 'react';
import {useLocalStorage} from './useLocalStorage.js'

const TodoContext= React.createContext();

function TodoProvider (props){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1',[]);
      const [searchValue,setsearchValue] = React.useState('');
      const [openModal, setOpenModal] =  React.useState(false);
      //variable para guardar la cantidad de todos con la propiedad completed true,
      //usando filter para guardar solo los true y .length para saber cuantos son
      const completedTodos = todos.filter(todo => !! todo.completed).length;
      //mi solucion
      //const searchTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
      const totalTodos =  todos.length;
    
      let searchedTodos =  [];
      if(!searchValue.length >=1){//si los usuarios no han escrito nada
        //devuelve todos los todo's
        searchedTodos = todos;
      }else {//devuelve los que coincidan con la busqueda
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();//transformar a minuscula 
          //el texto del todo
          
          const searchText = searchValue.toLowerCase();//transformar a 
          //minuscula todo para que no importe como escriba el 
          //usuario si full mayuscula full minuscula combinado etc.
          return todoText.includes(searchText);//retorna los que
          // incluyan el texto que se busca en el input
        })
      }
      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text,
        })
        saveTodos(newTodos);
      }
      const completeTodo = (text) => {
        const todoIndex =  todos.findIndex(todo => todo.text === text);
    
        const newTodos = [...todos];
        newTodos[todoIndex].completed=true;
        saveTodos(newTodos);
      }
      const deleteTodo = (text) => {
        const todoIndex =  todos.findIndex(todo => todo.text === text);
    
        const newTodos = [...todos];
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);
      }
    
    return (
        //sin importar el componente que se llame se podra usar
        //por el props.children
        <TodoContext.Provider value = {{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue  ,
            setsearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}// componente atajo entre provider y consumer

//<TodoContext.Consumer></TodoContext.Consumer>
export {TodoContext, TodoProvider};