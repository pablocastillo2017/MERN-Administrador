import React, { useContext } from "react";
import proyectoContext from "../context/proyectos/proyectoContext";

import tareaContext from "../context/tareas/tareaContex";

const Tarea = ({ tarea }) => {
  // Obtener si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // Obtener la Funcion del contex de tarea
  const tareasContext = useContext(tareaContext);
  const { eliminarTarea, obtenerTareas } = tareasContext;

  //extraer el Proyecto

  const [proyectoActual] = proyecto;

  // Funcion que se ejecuta cuando el usuario presiona el btn de Eliminar tarea
  const tareaEliminar = (id) => {
    eliminarTarea(id);
    obtenerTareas(proyectoActual.id);
  };

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>

      <div className="estado">
        {tarea.estado ? (
          <button type="button" className="completo">
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Editar
        </button>

        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => tareaEliminar(tarea.id)}
          // onClick={() => seleccionarProyecto(proyecto.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
