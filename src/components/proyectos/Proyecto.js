import React, { useContext } from "react";
import proyectoContext from "../context/proyectos/proyectoContext";
import tareaContext from "../context/tareas/tareaContex";

const Proyecto = ({ proyecto }) => {
  // Obener el state de Proyectos
  const proyectosContext = useContext(proyectoContext);
  // Extraer formulario de proyectoContext.Provider
  const { proyectoActual } = proyectosContext;

  // Obtener la Funcion del contex de tarea
  const tareasContext = useContext(tareaContext);
  // Extraer la funcion de tareaContext
  const { obtenerTareas } = tareasContext;

  // funcion para agregar el EVENTO actual
  const seleccionarProyecto = (id) => {
    proyectoActual(id); // fijar un proyecto actual
    obtenerTareas(id); // filtrar las tareas por id cuando se de click
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
