import React from "react";
import './TodosLoading.css'

function TodosLoading(){
    return(
        <div className="container">
            <p>
                Estamos cargando los TODOS
            </p>
            <div className="loader">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        
    )
}
export {TodosLoading}