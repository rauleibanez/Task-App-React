import React, { useState } from 'react';
import '../styles/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props){

    const [ input, setInput ] = useState('');

    const manejarCambio = e => {
      setInput(e.target.value); 
    }

    const manejarEnvio = e => {
      e.preventDefault();  
      const tareaNueva = {
        id: uuidv4(),
        texto: input,
        completada: false
      }
      props.onSubmit(tareaNueva);  
    }


  return(
    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio}>
      <input 
        className='tarea-input'
        type='text'
        placeholder='escribe una tarea ...'
        name='texto'
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>Agregar Tarea</button>  
    </form>
  );  
}

export default TaskForm;