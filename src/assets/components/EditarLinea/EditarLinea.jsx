import React from 'react'
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './EditarLinea.css'
const EditarLinea = () => {
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

 const {articulo1, cantidad, costoUnitario, subtotal} = useParams();
  return (
    <>
        <section className="container__edit">
        {/* <div className="primera">
          <p>Hola</p>
        </div> */}
        <div className="form-container__edit">
          <h2 className="form-title">Editar Linea</h2>
          <form action="" className="form__edit">
            <div className="form-item__edit">
              <label htmlFor="articulo">Articulo</label>
              <input
                type="text"
                id="articulo"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleInputChange}
                name="Articulo"
                required
                value={articulo1}
              />
            </div>
            <div className="form-item__edit">
              <label htmlFor="cantidad">Cantidad</label>
              <input
                type="text"
                id="cantidad"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleInputChange}
                required
                value={cantidad}
              />
            </div>
            <div className="form-item__edit">
              <label htmlFor="unidad">Unidad</label>
              <input
                type="text"
                id="unidad"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleInputChange}
                required
                value={costoUnitario}
              />
            </div>
            <div className="form-item__edit">
              <label htmlFor="precio">Precio Unitario</label>
              <input
                type="text"
                id="precio"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleInputChange}
                required
                value={subtotal}
              />
            </div>
            <div className="form-item__edit">
              <label htmlFor="">Subtotal </label>
            </div>
            <div className="form-item-buttons__edit">
              <Link to={'/detallepedido'}><button>Salir</button></Link>
              <button>Guardar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
    
  
}

export default EditarLinea