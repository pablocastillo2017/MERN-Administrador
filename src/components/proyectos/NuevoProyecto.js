import React, { Fragment, useState } from "react";

const NuevoProyecto = () => {
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

    // Agregar al State

    // Reniniciar el FORM
  };

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>

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
    </Fragment>
  );
};

export default NuevoProyecto;
