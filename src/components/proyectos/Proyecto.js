import React, { useContext } from "react";
import proyectoContext from "../context/proyectos/proyectoContext";

const Proyecto = ({ proyecto }) => {
  // Obener el state de Proyectos
  const proyectosContext = useContext(proyectoContext);

  // Extraer formulario de proyectoContext.Provider
  const { proyectoActual } = proyectosContext;

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => proyectoActual(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
