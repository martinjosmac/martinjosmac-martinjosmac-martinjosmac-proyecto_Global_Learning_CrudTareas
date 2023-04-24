import React, { useState } from 'react'


export const Row = ({ el, setEditTask, deleteTask }) => {
  let { id } = el;
  const [click, setClik] = useState(false);



  const clickChek = () => {
    
    setClik(!click);

    if (!click) {
      setClik("Tarea realizada");

    } else {
      setClik("");
    }
  }

  return (
    <tr>

      <td ><input className="form-check-input me-1" type="checkbox" id="firstCheckbox" onClick={clickChek} /></td>
      <td>{el.title}</td>
      <td>{el.description}</td>
      <td>{el.deadLine}</td>
      <td >{click}</td>
      <td><button className="modificar" onClick={() => setEditTask(el)}>Modificar</button></td>
      <td><button className="eliminar" onClick={() => deleteTask(id)}>Eliminar</button></td>

    </tr>
  )
}
