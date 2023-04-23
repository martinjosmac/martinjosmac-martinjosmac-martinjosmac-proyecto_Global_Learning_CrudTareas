import React from 'react'

export const Row = ({ el, setEditTask, deleteTask }) => {
    let { id, title, description, deadline } = el
    return (
        <tr>

            <td><input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" /></td>
            <td>{el.title}</td>
            <td>{el.description}</td>
            <td>{el.deadLine}</td>
            <td><button class="modificar" onClick={() => setEditTask(el)}>Modificar</button></td>
            <td><button class="eliminar" onClick={() => deleteTask(id)}>Eliminar</button></td>

        </tr>
    )
}
