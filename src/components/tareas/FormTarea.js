import React, { useContext } from "react";
import proyectoContext from "../context/proyectos/proyectoContext";

const FormTarea = () => {
  // Obtener si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // si no hay proyecto seleccionado
  if (!proyecto) return null;

  // Array destructuring para estraer proyecto Actual
  const [proyectoActual] = proyecto;

  const onSubmit = e =>{
    e.preventDefault();

    // VALIDAR

    // PASAR LA VALIDACION

    // AGREGAR LA NUEVA TAREA AL STATE DE TAREA

    // REINICIAR EL FORM

  }

  return (
    <div className="formulario">
      <form
        onSubmit={onSubmit}
      >
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
