import React, { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";

const ProyectoState = (props) => {
  const initialState = {
    formulario: false,
  };

  //Dispach para ejecutar las acciones
  const [state, dispach] = useReducer(proyectoReducer, initialState);

  //Serie de Funciones para el CRUD

  return (
    <proyectoContext.Provider
      value={{
        formulario: state.formulario,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
