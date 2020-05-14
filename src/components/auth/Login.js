import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // State Para Iniciar Sesion.
  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });

  const { email, password } = usuario;

  // Extraer de Usuario

  const onChange = (e) => {
    guardarUsuario({
      // hacemos una copia ,para lo que esta escrito en el otro state
      // no se re-escriba
      ...usuario,
      //[e.target.name] => para saber en que campo esta escribiendo el usuario
      // e.target.value => para saber  lo que el usuario esta Escribiendo en el input
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el Usuario kiere inicia Sesion
  const onSubmit = (e) => {
    e.preventDefault();

    // Validar que no haya campos Vacios

    // Pasarlo al action
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingresa Tu Email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingresa Tu Password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>

        {/* para direccionar a otra ventana de la pagina  */}
        <Link to={"/nueva-cuenta"} className="enlace-cuenta">
          Obtener cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
