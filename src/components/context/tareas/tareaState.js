import React, { useReducer } from "react";
import TareaContext from "./tareaContex";
import TareaReducer from "./tareaReducer";
import { TAREAS_PROYECTO } from "../../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      { nombre: "Elegir Pago", estado: true, proyectoId: 3 },
      { nombre: "Elegir Hosting", estado: false, proyectoId: 4 },
      { nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      { nombre: "Elegir Pago", estado: true, proyectoId: 3 },
      { nombre: "Elegir Plataforma", estado: true, proyectoId: 4 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 1 },
      { nombre: "Elegir Pago", estado: true, proyectoId: 2 },
      { nombre: "Elegir Plataforma", estado: true, proyectoId: 3 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 4 },
      { nombre: "Elegir Pago", estado: true, proyectoId: 3 },
    ],
  };

  // Crear Dispach y State
  const [state, dispach] = useReducer(TareaReducer, initialState);

  // Crear las Funciones

  // Obtener las tareas de un proyecto
  const obtenerTareas = (proyectoId) => {
    dispach({
      type: TAREAS_PROYECTO,
      paylod: proyectoId,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        obtenerTareas,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};
export default TareaState;
