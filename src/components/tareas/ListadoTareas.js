import React, { Fragment, useContext } from "react";
import proyectoContext from "../context/proyectos/proyectoContext";
import tareaContext from "../context/tareas/tareaContex";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Tarea from "./Tarea";

const ListadoTareas = () => {
  // Obener Proyecto de;   state Inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  // Obtener las tareas del proyecto
  const tareasContext = useContext(tareaContext);
  // Extraer las tareas de tareaContext
  const { tareasproyecto } = tareasContext;

  // si no hay proyecto seleccionado
  if (!proyecto) return <h2>Seleciona un Proyecto</h2>;

  // Array destructuring para estraer proyecto Actual
  const [proyectoActual] = proyecto;

  // Elimina el Proyecto
  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
  };
  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay Tarea</p>
          </li>
        ) : (
          <TransitionGroup>
            {tareasproyecto.map((tarea) => (
              <CSSTransition key={tarea.id} timeout={200} classNames="tarea">
                <Tarea tarea={tarea} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickEliminar}
      >
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
