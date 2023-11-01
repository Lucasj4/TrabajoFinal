import React from "react";
import "./PedidoDeCompra.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Checkbox from "@mui/material/Checkbox";
import BpCheckbox from "@mui/material/Checkbox";
import MultipleSelect from "../MultipleSelect/MultipleSelect";
import { Link } from "react-router-dom";
import { useState } from "react";

const PedidoDeCompra = () => {
  const [filas, setFilas] = useState([
    { fecha: "Fecha 1", proveedor: "Martinez", estado: "Estado 1" },
    { fecha: "Fecha 2", proveedor: "Gonzalez", estado: "Estado 2" },
    { fecha: "Fecha 2", proveedor: "Gonzalez", estado: "Estado 2" },
    { fecha: "Fecha 2", proveedor: "Gonzalez", estado: "Estado 2" },
    { fecha: "Fecha 2", proveedor: "Gonzalez", estado: "Estado 2" },
    { fecha: "Fecha 2", proveedor: "Gonzalez", estado: "Estado 2" },
    { fecha: "Fecha 2", proveedor: "Gonzalez", estado: "Estado 2" },
    // Agrega más filas según tus datos
  ]);

  const handleEliminarFila = (indice) => {
    const nuevasFilas = [...filas];
    nuevasFilas.splice(indice, 1);
    setFilas(nuevasFilas);
  };
  const options = [
    { value: "gonzalez", label: "Gonzalez" },
    { value: "martinez", label: "Martinez" },
    { value: "pedro", label: "Pedro" },
  ];
  
  return (
    <>
      <div className="table-container">
        <div className="container2">
          <div className="proveedor">
            <div className="proveedor__item">
            <p>Proveedor</p>
            <MultipleSelect options={options} />
            </div>
            
            <button>Buscar</button>
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
                  <td className="table__cell">{fila.fecha}</td>
                  <td className="table__cell">{fila.proveedor}</td>
                  <td className="table__cell">{fila.estado}</td>
                  <td className="table__cell">
                    <a
                      href="#"
                      className="table__action table__action--edit"
                      onClick={() => handleEliminarFila(indice)}
                    >
                      <DeleteIcon />
                    </a>
                    <Link to={"/detallepedido"}>
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
        </div>
      </div>
    </>
  );
};

export default PedidoDeCompra;
