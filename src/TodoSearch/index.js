import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

function TodoSearch(){
    const {searchValue, setsearchValue} =React.useContext(TodoContext);
    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setsearchValue(event.target.value);
    }
    return(
        <input 
            className='TodoSearch' 
            placeholder="Cebolla" 
            value={searchValue}
            onChange={onSearchValueChange}
        />   
    );
}

export {TodoSearch};