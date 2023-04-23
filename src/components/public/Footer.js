import React from 'react'

export const Footer = () => {

    const year = new Date().getFullYear();
    const nombreApellidoProyecto = "Martin Machado, Proyecto Tareas, Global Learning"
    return (
        <div >
            <footer>
                <p className="col-md-4 mb-0 text-body-secondary">&copy; {year} {nombreApellidoProyecto}</p>
            </footer>
        </div>
    )
}
