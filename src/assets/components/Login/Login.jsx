import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";

import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="container__login">
          <div className="login__information">
            <div className="login__texts">
              <h2>Bienvenido a Ferreteria Catelotti</h2>
              <p className="login__noaccount">¿No tenes cuenta?</p>
              <Link to="/registro">
                <input type="button" value="Registrarse" />
              </Link>
            </div>
          </div>
          <div className="container__formlogin">
            <h2>Inicio Sesion</h2>
            <form action="">
              <div className="container__formlogin__item">
                <PersonIcon />
                <input type="text" placeholder="Usuario" />
              </div>
              <div className="container__formlogin__item">
                <EnhancedEncryptionIcon />
                <input type="password" placeholder="Contraseña" />
              </div>
            </form>
            <Link to="/recuperarcontraseña"><p className="login__forgotpassword">¿Olvidaste tu contraseña?</p></Link>
            <button className="button__login">Iniciar Sesion</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
