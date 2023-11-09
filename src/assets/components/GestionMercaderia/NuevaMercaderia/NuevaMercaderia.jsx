import React, { useState } from "react";
import { FaHome, FaTh, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NuevaMercaderia.css";

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
        <div className="form-container">
          <h2 className="form-title">Agregar Producto</h2>
          <form action="" className="form-producto">
            <div className="form-columns">
              <div className="form-1">
                <div className="form-item">
                  <label htmlFor="articulo">Nombre</label>
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
                  <label htmlFor="cantidad">Precio de Venta</label>
                  <input
                    type="text"
                    id="cantidad"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-item-categoria">
                  <label htmlFor="cantidad">Categoria</label>
                  <select name="" id="">
                    <option value="electricidad">Electricidad</option>
                    <option value="construccion">Construccion</option>
                  </select>
                </div>
                <div className="form-item-categoria">
                  <label htmlFor="cantidad">Unidad</label>
                  <select name="" id="">
                    <option value="electricidad">Electricidad</option>
                    <option value="construccion">Construccion</option>
                  </select>
                </div>
              </div>
              <div className="form-1">
                <div className="form-item">
                  <label htmlFor="unidad">Stock</label>
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
                  <label htmlFor="precio">Costo</label>
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
                  <label htmlFor="precio">Costo</label>
                </div>
                <div className="form-item">
                  <label htmlFor="">Subtotal</label>
                </div>
              </div>
            </div>

    
          </form>
        </div>
      </section>
    </>
  );
};

export default NuevaMercaderia;
