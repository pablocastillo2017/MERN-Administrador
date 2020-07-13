import React, { useReducer } from "react";
import TareaContext from "./tareaContex";
import TareaReducer from "./tareaReducer";
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
} from "../../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { id: 2, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      { id: 3, nombre: "Elegir Pago", estado: true, proyectoId: 3 },
      { id: 4, nombre: "Elegir Hosting", estado: false, proyectoId: 4 },
      { id: 5, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { id: 6, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      { id: 7, nombre: "Elegir Pago", estado: true, proyectoId: 3 },
      { id: 8, nombre: "Elegir Plataforma", estado: true, proyectoId: 4 },
      { id: 9, nombre: "Elegir Colores", estado: false, proyectoId: 1 },
      { id: 10, nombre: "Elegir Pago", estado: true, proyectoId: 2 },
      { id: 11, nombre: "Elegir Plataforma", estado: true, proyectoId: 3 },
      { id: 12, nombre: "Elegir Colores", estado: false, proyectoId: 4 },
      { id: 13, nombre: "Elegir Pago", estado: true, proyectoId: 3 },
    ],
    tareasproyecto: null,
    errortarea: false,
  };

  // Crear Dispach y State
  const [state, dispach] = useReducer(TareaReducer, initialState);

  // Crear las Funciones

  // Obtener las tareas de un proyecto
  const obtenerTareas = (proyectoId) => {
    dispach({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  // Agregar una Tarea al Proyecto Seleccionado
  const agregarTarea = (tarea) => {
    dispach({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  // Valida y muestra un error en caso de que sea necesario
  const validarTarea = () => {
    dispach({
      type: VALIDAR_TAREA,
    });
  };

  //Eliminar tareas por su ID
  const eliminarTarea = (id) => {
    dispach({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  //Cambia el Estado de cada tarea
  const cambiarEstadoTarea = (tarea) => {
    dispach({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};
export default TareaState;
