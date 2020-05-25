import React, { useContext } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../context/proyectos/proyectoContext";

const ListadoProyectos = () => {
  // Obener Proyecto de;   state Inicial
  const proyectosContext = useContext(proyectoContext);

  // Extraer formulario de proyectoContext.Provider
  const { proyectos } = proyectosContext;

  // Revisar si Proyectos Tiene Contenido
  if (proyectos.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto key={proyecto.id} proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
