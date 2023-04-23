import React, { useState, useEffect } from 'react'



const initialF = {
    id: null,
    title: "",
    description: "",
    deadLine: null,
    time: null,
}
export const Form = ({ createTask, updateTask, editTask, setEditTask }) => {

    const [forms, setForms] = useState(initialF);

    useEffect(() => {
        if (editTask) {
            setForms(editTask);
        } else {
            setForms(initialF);
        }
    }, [editTask]);

    const handleChange = (e) => {

        setForms({

            ...forms,
            [e.target.name]: e.target.value,

        });

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!forms.title) {
            alert("Debes completar el campo titulo")
        }
        if (forms.id === null) {
            createTask(forms);
        } else {
            updateTask(forms);
        }
        handleReset();
    }
    const handleReset = (e) => {
        setForms(initialF);
        setEditTask(null);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Título:</label>
                    <input type="text" name="title" placeholder='titulo' onChange={handleChange} value={forms.title} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripción:</label>
                    <input type="text" name="description" placeholder='descripcion' onChange={handleChange} value={forms.description} />
                </div>
                <div className="mb-3">
                    <label htmlFor="fecha">Fecha límite:</label>
                    <input type="date" id="fecha" name="deadLine" onChange={handleChange} value={forms.deadLine} />
                </div>
                <div>
                    <input type="submit" value={editTask ? "Modificar" : "Agregar"} />
                    <input type="reset" value="Limpiar formulario" onClick={handleReset} />
                </div>
            </form>
        </div>
    )
}

