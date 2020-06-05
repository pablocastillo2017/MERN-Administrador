import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
} from "../../../types";
//
const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, nombre: "Tienda Virtual" },
    { id: 2, nombre: "Intranet" },
    { id: 3, nombre: "Diseno de sitio Web" },
    { id: 4, nombre: "MERN" },
  ];
  const initialState = {
    proyectos: [],
    formulario: false,
    errorformulario: false,
  };

  //Dispach para ejecutar las acciones
  const [state, dispach] = useReducer(proyectoReducer, initialState);

  //Serie de Funciones para el CRUD

  // Mostrar Formulario
  const mostrarFormulario = () => {
    dispach({
      type: FORMULARIO_PROYECTO,
    });
  };

  //Obtener Los Proyectos
  const obtenerProyectos = () => {
    dispach({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  //Agregar Nuevo Proyecto
  const agregarProyecto = (proyecto) => {
    proyecto.id = uuidv4();

    //Insertamos el proyecto en el State
    dispach({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };

  //VALIDAR FORMULARIO POR ERRORES
  const mostrarError = () => {
    dispach({
      type: VALIDAR_FORMULARIO,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
