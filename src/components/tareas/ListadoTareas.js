import React, { Fragment, useContext } from "react";
import proyectoContext from "../context/proyectos/proyectoContext";

import Tarea from "./Tarea";

const ListadoTareas = () => {
  // Obener Proyecto de;   state Inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  // si no hay proyecto seleccionado
  if (!proyecto) return <h2>Seleciona un Proyecto</h2>;

  // Array destructuring para estraer proyecto Actual
  const [proyectoActual] = proyecto;

  const tareasProyecto = [
    { nombre: "Elegir Plataforma", estado: true },
    { nombre: "Elegir Colores", estado: false },
    { nombre: "Elegir Pago", estado: true },
    { nombre: "Elegir Hosting", estado: false },
  ];

  // Elimina el Proyecto
  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
  };
  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay Tarea</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
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
