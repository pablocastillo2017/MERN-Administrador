<<<<<<< HEAD
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
} from "../../../types";
=======
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from "../../../types";
>>>>>>> b38359a144566b90fd39585e14d5ee188829df23

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

<<<<<<< HEAD
    case AGREGAR_PROYECTO:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
      };
=======
>>>>>>> b38359a144566b90fd39585e14d5ee188829df23
    default:
      return state;
  }
};
