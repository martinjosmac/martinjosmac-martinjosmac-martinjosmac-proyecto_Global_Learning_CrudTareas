import React from 'react'

export const Row = ({data}) => {



    return (

       
            <tr>

                <th scope="row">1</th>
                <td><input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" /></td>
                <td>Mark</td>
                <td>Otto</td>
                <td><button class="eliminar">Eliminar</button></td>
                <td><button class="modificar">Modificar</button></td>
            </tr>

       
    )
}
