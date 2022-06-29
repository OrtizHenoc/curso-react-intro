import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton(props){
    const onClickButton = () => {
        props.setOpenModal((prevState => !prevState));
    };

    return(
        <button 
            className='CreateTodoButton'
            onClick={onClickButton} //todo lo que empieza con on ayuda a escuchar los eventos
        >
            +
        </button>
    )
}
export { CreateTodoButton };