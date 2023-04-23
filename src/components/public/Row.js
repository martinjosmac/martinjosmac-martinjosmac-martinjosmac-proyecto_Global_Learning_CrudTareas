import React from 'react'


export const Row = ({ el, setEditTask, deleteTask }) => {
    let { id } = el
    
    return (
        <tr>

            <td><input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" /></td>
            <td>{el.title}</td>
            <td>{el.description}</td>
            <td>{el.deadLine}</td>
            <td><button className="modificar" onClick={() => setEditTask(el)}>Modificar</button></td>
            <td><button className="eliminar" onClick={() => deleteTask(id)}>Eliminar</button></td>

        </tr>
    )
}
