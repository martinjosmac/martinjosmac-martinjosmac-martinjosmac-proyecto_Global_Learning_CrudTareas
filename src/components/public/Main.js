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
    const [editTask, setEditTask] = useState(null)

    const createTask = (data) => {
      
        data.id=Date.now();
        console.log(data.id)

        setDb([...db, data])
    }

    const updateTask = (data) => {
        let newTask = db.map(el => el.id === data.id ? data : el);
        setDb(newTask);
    };
    const deleteTask = (id) => { };

    return (
        <div>
            <Form createTask={createTask}
                updateTask={updateTask}
                editTask={editTask}
                setEditTask={setEditTask} />

            <Table data={db}
                setEditTask={setEditTask}
                deleteTask={deleteTask} />
        </div>
    )
}




