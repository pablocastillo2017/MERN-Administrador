import React, { useContext, useState } from "react";
import proyectoContext from "../context/proyectos/proyectoContext";
import tareaContext from "../context/tareas/tareaContex";

const FormTarea = () => {
  // Obtener si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // Obtener la Funcion del contex de tarea
  const tareasContext = useContext(tareaContext);
  // Extraer la funcion de tareaContext
  const {
    errortarea,
    agregarTarea,
    validarTarea,
    obtenerTareas,
  } = tareasContext;

  // state del formulario
  const [tarea, guardarTarea] = useState({
    nombre: "",
  });

  // extraer el nombre del proyecto
  const { nombre } = tarea;

  // si no hay proyecto seleccionado
  if (!proyecto) return null;

  // Array destructuring para estraer proyecto Actual
  const [proyectoActual] = proyecto;

  // Leer los valores del formulario
  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // VALIDAR
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    // AGREGAR LA NUEVA TAREA AL STATE DE TAREA
    tarea.proyectoId = proyectoActual.id;
    tarea.estado = false;
    agregarTarea(tarea);

    // Obtener y filtrar las tareas del proyecto actual
    obtenerTareas(proyectoActual.id);

    // REINICIAR EL FORM
    guardarTarea({
      nombre: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
      {errortarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
