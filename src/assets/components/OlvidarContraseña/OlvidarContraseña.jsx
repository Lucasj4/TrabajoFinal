import React from 'react'

import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import EmailIcon from "@mui/icons-material/Email";
import "./OlvidarContraseña.css";
import { Link } from "react-router-dom";
const OlvidarContraseña = () => {
  return (
    <>
    <div className=" password__container">
      <div className="password__login">
        <div className="password__information">
          <div className="password__texts">
            <h2>Ferreteria Catelotti</h2>
           
    
          </div>
        </div>
        <div className="password__form">
          <h2>Recuperar contraseña</h2>
          <form action="">
            <div className="password__form__item">
            <EnhancedEncryptionIcon />
              <input type="password" placeholder="Nueva contraseña" />
            </div>
            <div className="password__form__item">
            <EnhancedEncryptionIcon />
              <input type="password" placeholder="Confirmar contraseña" />
            </div>
            <div className="password__form__item">
            <EmailIcon />
              <input type="email" placeholder="Email" />
            </div>
          </form>
        
          <Link to="/iniciosesion"><button className="button__password">Cambiar Contraseña</button></Link>
        </div>
      </div>
    </div>
  </>
  )
}

export default OlvidarContraseña