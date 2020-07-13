import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../context/proyectos/proyectoContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoProyectos = () => {
  // Obener Proyecto de;   state Inicial
  const proyectosContext = useContext(proyectoContext);

  // Extraer formulario de proyectoContext.Provider
  const { proyectos, obtenerProyectos } = proyectosContext;

  useEffect(() => {
    obtenerProyectos();
  }, []);

  // Revisar si Proyectos Tiene Contenido
  if (proyectos.length === 0)
    return <p>No hay Proyectos ,Comienza Creando Uno </p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto.id} timeout={200} classNames="proyecto">
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
