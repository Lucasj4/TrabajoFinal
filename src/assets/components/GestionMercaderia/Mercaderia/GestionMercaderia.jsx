import React from "react";
//import "./Mercaderia/GestionMercaderia.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Checkbox from "@mui/material/Checkbox";
import BpCheckbox from "@mui/material/Checkbox";
import MultipleSelect from "../../MultipleSelect/MultipleSelect";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
/* import "./GestionMercaderia.css"; */



const GestionMercaderia = () => {
  const [filas, setFilas] = useState([
    { articulo: "Tornillo", proveedor: "Lucas", cantidad: "4" },
    { articulo: "Cemento", proveedor: "Santiago", cantidad: "5" },
    { articulo: "Clavos", proveedor: "Estanislao", cantidad: "1" },
    { articulo: "Cemento", proveedor: "Estanislao", cantidad: "6" },
    { articulo: "Clavos", proveedor: "Santiago", cantidad: "23" },
    { articulo: "Tornillo", proveedor: "Estanislao", cantidad: "6" },
    { articulo: "Tornillo", proveedor: "Lucas", cantidad: "12" },
    // Agrega más filas según tus datos
  ]);

  const options = [
    { value: "Lucas", label: "Lucas" },
    { value: "Estanislao", label: "Estanislao" },
    { value: "Santiago", label: "Santiago" },
  ];

  const handleEliminarFila = (indice) => {
    const nuevasFilas = [...filas];
    nuevasFilas.splice(indice, 1);
    setFilas(nuevasFilas);
  };

  return (
    <>
      <div className="container">
        <div className="table-container">
          <div className="pedido__date-selector">
            <div className="pedido__date-selector__item">
              <p>Fecha</p>
              <input
                type="date"
                className="pedido__date-selector__item__date"
              />
            </div>
            <div className="pedido__date-selector__item">
              <p>Proveedor</p>
              <MultipleSelect options={options} />
            </div>
          </div>

          <div className="order__state">
            <div className="order__state__item">
              <p>Pendiente</p>
              <BpCheckbox color="success" />
            </div>
            <div className="order__state__item">
              <p>Recibidos</p>
              <Checkbox color="success" />
            </div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th className="table__header">Fecha </th>
                <th className="table__header">Proveedor</th>
                <th className="table__header">Estado</th>
                <th className="table__header">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filas.map((fila, indice) => (
                <tr key={indice} className="table__row">
                  <td className="table__cell">{fila.articulo}</td>
                  <td className="table__cell">{fila.proveedor}</td>
                  <td className="table__cell">{fila.cantidad}</td>
                  <td className="table__cell">
                    <a
                      href="#"
                      className="table__action table__action--edit"
                      onClick={() => handleEliminarFila(indice)}
                    >
                      <DeleteIcon />
                    </a>
                    <Link to={"/detalleMercaderia"}>
                      <a
                        href="#"
                        className="table__action table__action--delete"
                      >
                        <EditIcon />
                      </a>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="actions">
            <Link to="/detalleMercaderia">
              <button className="actions__button">Nuevo</button>
            </Link>
            <button className="actions__button">Salir</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GestionMercaderia;
