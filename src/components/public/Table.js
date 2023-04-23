import React, { useState } from 'react'
import { Row } from './Row'



export const Table = ({ data }) => {
    // const [db, setdb] = useState(initialDB);

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Check</th>
                        <th scope="col">Tarea</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Fecha Límite</th>
                        {/* <th scope="col">Elimino</th>
                        <th scope="col">Modifico</th>  */}
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? <tr><td colSpan={4}>Sin Datos</td></tr> : data.map(el => <Row key={el.id} el={el} />)}
                </tbody>
            </table>

        </div >
    )
}
