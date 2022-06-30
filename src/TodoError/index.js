import React from "react";
import './TodoError.css'
function TodoError (){
    return (
        <div className="TodoError-Container">
            <pre >                       
             -=======================-,<br></br>
            |==========================|<br></br>
            |        Error 404         |<br></br>
            |        Se Jodio          |<br></br>
            |           Esta           |<br></br>
            |        Vaina Loca        |<br></br>
            |                          |<br></br>
            '--------------------------'<br></br>
            </pre>
            <p>Sigue el protocolo</p>
            <ol>
                <li>Llorar, porque la app no funciona</li>
                <li>Quejarte con los desarrolladores (osea conmigo)</li>
                <li>El desarrollador intenta arreglarlo</li>
                <li>El desarrollador llora porque no pudo arreglarlo</li>
                <li>Rezar para que magicamente vuelva a funcionar</li>
            </ol>
        </div>
    )
}
export {TodoError}