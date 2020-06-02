import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from "../../../types";

// Lo que hace el REDUCER es cambiar el STATE
export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true,
      };

    case OBTENER_PROYECTOS:
      return {
        ...state,
        proyectos: action.payload,
      };

    default:
      return state;
  }
};
