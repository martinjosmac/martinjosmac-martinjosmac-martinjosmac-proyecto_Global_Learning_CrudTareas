import React, { useState } from 'react'
import { Row } from './Row'

const initialDB = [{
    order: 1,
    title: "super",
    description: "comprar pan",
    deadLine: 15 / 5 / 2023
},
{
    order: 2,
    title: "reunion",
    description: "reunion cafe martinez a las 17",
    deadLine: 15 / 5 / 2023
},
{
    order: 1,
    title: "Proyecto react",
    description: "entrega proyecto react para global learning",
    deadLine: 15 / 5 / 2023
}
]

export const Table = ({ data }) => {
    const [db, setdb] = useState(initialDB);

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Orden</th>
                        <th scope="col">Tarea</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Fecha Límite</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? <tr><td colSpan="4">Sin datos</td></tr> : data.map(el => <Row />)}
                    
                </tbody>
            </table>

        </div >
    )
}
