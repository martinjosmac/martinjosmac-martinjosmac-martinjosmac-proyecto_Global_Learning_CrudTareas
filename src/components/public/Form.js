
import React, { useState, UseEffect } from 'react'

// const initialDB = [{
//     order: 1,
//     title: "super",
//     description: "comprar pan",
//     deadLine: 15 / 5 / 2023
// },
// {
//     order: 2,
//     title: "reunion",
//     description: "reunion cafe martinez a las 17",
//     deadLine: 15 / 5 / 2023
// },
// {
//     order: 1,
//     title: "Proyecto react",
//     description: "entrega proyecto react para global learning",
//     deadLine: 15 / 5 / 2023
// }
// ]
const initialF={
    order: null,
    title: "",
    description: "",
    deadLine: null
}
export const Form = () => {
    const [form, setForm] = useState(initialF);

    const handleChange = (e) => { }
    const handleSubmit = (e) => { }
    const handleReset = (e) => { }
    return (

        <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Título:</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={handleChange} value={form.title} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Descripción:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleChange} value={form.description}></textarea>
            </div>
            <div class="mb-3">
                <label for="fecha">Fecha límite:</label>
                <input type="date" id="fecha" name="fecha" onChange={form.deadLine} /><br></br>
            </div>
            <div>
                <input type="submit" value="Agregar tarea" />
                <input type="submit" value="limpiar formulario" onClick={handleReset} />
            </div>
        </form>
    )
}
