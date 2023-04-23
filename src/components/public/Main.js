import React, { useState } from 'react';
import { Form } from './Form';
import { Table } from './Table';


const initialDB = [{
    id: 1,
    title: "super",
    description: "comprar pan",
    deadLine: "15 / 5 / 2023"
},
{
    id: 2,
    title: "reunion",
    description: "reunion cafe martinez a las 17",
    deadLine: "15 / 5 / 2023"
},
{
    id: 3,
    title: "Proyecto react",
    description: "entrega proyecto react para global learning",
    deadLine: "15 / 5 / 2023",
}
]
export const Main = () => {

    const [db, setDb] = useState(initialDB)
    const [editTask, seteditTask] = useState(null)

    const createTask = (data) => {
        var lastId = db.length;

        

        lastId = lastId + 1;
        data.id = lastId;
        console.log(data.id)
        setDb([...db,data])
    }






    const updateTask = (data) => { }
    const deleteTask = (order) => { }

    return (
        <div>
            <Form createTask={createTask}
                updateTask={updateTask}
                editTask={editTask}
                seteditTask={seteditTask} />

            <Table data={db}
                seteditTask={seteditTask}
                deleteTask={deleteTask} />
        </div>
    )
}




