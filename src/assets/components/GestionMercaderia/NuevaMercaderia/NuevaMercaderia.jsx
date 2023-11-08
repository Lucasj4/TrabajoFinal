import React, { useState } from "react";
/* import "./NuevaMercaderia.css"; */
import {FaHome, FaTh, FaBars}from "react-icons/fa"
import { Link } from "react-router-dom";
/* import InputItem from "../InputItem/InputItem"; */
const NuevaMercaderia = () => {
  const [isInputFocused, setInputFocused] = useState(false);
  const [articulo, setArticulo] = useState("");

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setArticulo(newValue);
  };

  const handleFocus = (e) => {
    e.target.parentElement.classList.add("focused");
  };

  const handleBlur = (e) => {
    if (articulo.trim() === "") {
      e.target.parentElement.classList.remove("focused");
    }
  };

  return (
    <>
      <section className="container">
        {/* <div className="primera">
          <p>Hola</p>
        </div> */}
        <div className="form-container">
          <h2 className="form-title">Nueva Linea</h2>
          <form action="" className="form">
            <div className="form-item">
              <label htmlFor="articulo">Articulo</label>
              <input
                type="text"
                id="articulo"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleInputChange}
                name="Articulo"
                required
                value={articulo}
              />
            </div>
            <div className="form-item">
              <label htmlFor="cantidad">Cantidad</label>
              <input
                type="text"
                id="cantidad"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-item">
              <label htmlFor="unidad">Unidad</label>
              <input
                type="text"
                id="unidad"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-item">
              <label htmlFor="precio">Precio Unitario</label>
              <input
                type="text"
                id="precio"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-item">
              <label htmlFor="">Subtotal </label>
            </div>
            <div className="form-item-buttons">
             <Link to={'/detalleMercaderia'}><button>Salir</button></Link> 
             <Link to={'/detalleMercaderia'}><button>Guardar</button></Link> 
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default NuevaMercaderia;
