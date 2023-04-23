import React, { useState, useEffect } from 'react'



const initialF = {
    order: null,
    title: "",
    description: "",
    deadLine: null
}
export const Form = ({ createTask, updateTask, editTask, seteditTask }) => {

    const [forms, setForms] = useState(initialF);

    const handleChange = (e) => {

        setForms({

            ...forms,
            [e.target.name]: e.target.value,

        });

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!forms.title || !forms.deadLine) {
            alert("Debes completar el campo titulo y/ o el campo de la fecha")
        }
        if (forms.order === null) {
            createTask(forms);
        } else {
            updateTask(forms);
        }
        handleReset();
    }
    const handleReset = (e) => {
        setForms(initialF);
        seteditTask(null);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Título:</label>
                    <input type="text" name="title" placeholder='titulo' onChange={handleChange} value={forms.title} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Descripción:</label>
                    <input type="text" name="description" placeholder='descripcion' onChange={handleChange} value={forms.description} />
                </div>
                <div class="mb-3">
                    <label for="fecha">Fecha límite:</label>
                    <input type="date" id="fecha" name="deadLine" onChange={handleChange} value={forms.deadLine} /><br></br>
                </div>
                <div>
                    <input type="submit" value="Agregar tarea" />
                    <input type="submit" value="Limpiar formulario" onClick={handleReset} />
                </div>
            </form>
        </div>
    )
}

