import React from 'react'
import { Row } from './Row'



export const Table = ({ data, setEditTask, deleteTask }) => {


    return (
        <div>
            <table class="table">
                <thead>
                    <tr>

                        <th scope="col">Completada</th>
                        <th scope="col">Tarea</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Fecha Límite</th>

                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? <tr><td colSpan={4}>Sin Datos</td></tr> : data.map(el => <Row key={el.id} el={el}
                        setEditTask={setEditTask} deleteTask={deleteTask} />)}
                </tbody>
            </table>

        </div >
    )
}
