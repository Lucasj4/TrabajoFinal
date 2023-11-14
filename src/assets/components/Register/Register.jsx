import React from "react";
import "./Register.css";
import InputItem from "../InputItem/InputItem";
import PersonIcon from "@mui/icons-material/Person";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import EmailIcon from "@mui/icons-material/Email";
import { Checkbox } from "@mui/material";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <div className="container">
        <div className="container__register">
          <div className="form__information">
            <div className="form__texts">
              <h2>Bienvenido a Ferreteria Catelotti</h2>
             <Link to= "/iniciosesion"><input type="button" value="Iniciar Sesion" /></Link> 
            </div>
          </div>
          <div className="container__formregister">
            <h2>Crear una cuenta</h2>
            <form action="">
              <div className="container__formregister__item">
                <PersonIcon />
                <input type="text" placeholder="Nombre" />
              </div>
              <div className="container__formregister__item">
                <PersonIcon />
                <input type="text" placeholder="Apellido" />
              </div>
              <div className="container__formregister__item">
                <PersonIcon />
                <input type="text" placeholder="Usuario" />
              </div>
              <div className="container__formregister__item">
                <EmailIcon />
                <input type="email" placeholder="Email" />
              </div>
      
              <div className="container__formregister__item">
                <EnhancedEncryptionIcon />
                <input type="password" placeholder="Contraseña" />
              </div>

              <div className="container__formregister__rolcontainer">
              
              <div className="container__formregister__item-rol" >
              <p>Empleado</p>
              <Checkbox color="success" />
              </div>
              <div className="container__formregister__item-rol" >
              <p>Dueño</p>
              <Checkbox color="success" />
             
              </div>
             
              </div>
            </form>
            <button className="button__register">Registrarse</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
