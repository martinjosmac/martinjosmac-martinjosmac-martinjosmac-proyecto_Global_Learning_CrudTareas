import React from 'react'

export const Row = ({el}) => {
    return (
            <tr>
                <th scope="row">{el.id}</th>
                <td><input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" /></td>
                <td>{el.title}</td>
                <td>{el.description}</td>
                <td>{el.deadLine}</td>
                <td><button class="eliminar">Eliminar</button></td>
                <td><button class="modificar">Modificar</button></td>
            </tr>
    )
}
