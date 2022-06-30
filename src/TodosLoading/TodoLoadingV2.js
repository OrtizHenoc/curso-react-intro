import React from "react";
import './TodosLoading2.css'

function TodosLoadingV2 (){
    return(
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text">Cargando TODOs</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
    )
}

export {TodosLoadingV2}