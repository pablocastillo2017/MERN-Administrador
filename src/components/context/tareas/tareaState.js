import React, { useReducer } from "react";
import TareaContext from "./tareaContex";
import TareaReducer from "./tareaReducer";

const TareaState = (props) => {
  const initialState = {
    tareas: [],
  };

  // Crear Dispach y State
  const [state, dispach] = useReducer(TareaReducer, initialState);

  return <TareaContext.Provider>{props.children}</TareaContext.Provider>;
};
export default TareaState;
