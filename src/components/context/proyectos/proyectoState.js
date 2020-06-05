import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
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
    proyecto: null,
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

  // Selecciona el proyecto que el usuario dio CLICK
  const proyectoActual = (proyectoId) => {
    dispach({
      type: PROYECTO_ACTUAL,
      payload: proyectoId,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        proyecto: state.proyecto,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
