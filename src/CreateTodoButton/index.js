import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton(){
    const onClickButton = (msg) => {
        alert(msg);
    };
    return(
        <button 
            className='CreateTodoButton'
            onClick={ () =>onClickButton ('Aqui se deberia abrir el modal')} //todo lo que empieza con on ayuda a escuchar los eventos
        >
            +
        </button>
    )
}
export { CreateTodoButton };