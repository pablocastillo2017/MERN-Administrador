import React, { Fragment, useContext, useState } from "react";
import proyectoContext from "../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  // Obener el state del Formulario
  const proyectosContext = useContext(proyectoContext);

  // Extraer formulario de proyectoContext.Provider
  const {
    formulario,
    errorformulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
  } = proyectosContext;

  // State Para Pryecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  // Extraer nombre del proyecto
  const { nombre } = proyecto;

  // Lee los contenidos del INPUT
  const onChangeProyecto = (e) => {
    guardarProyecto({
      // una copia
      ...proyecto,

      // y le asingamos el nuevo valor
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el Usuario Envia un Proyecto
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    // Validar el Proyecto
    if (nombre === "") {
      mostrarError();
      return;
    }

    // Agregar al State
    agregarProyecto(proyecto);

    // Reniniciar el FORM
  };

  // mostrar Formulario
  const onClickFormulario = () => {
    mostrarFormulario();
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickFormulario}
      >
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          />

          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}

      {/* si   errorformulario viene verdadero osea el campo vacio
        manda el mensaje de ERROR*/}
      {errorformulario ? (
        <p className="mensaje error">Nombre del Proyecto Obligatorio</p>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
