import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Checkbox from "@mui/material/Checkbox";
import BpCheckbox from "@mui/material/Checkbox";
import "./DetallePedido.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import MultipleSelect from "../MultipleSelect/MultipleSelect";

const DetallePedido = () => {
  const dataPrimeraFila = {
    articulo1: "Tornillo",
    cantidad: "45",
    costoUnitario: "100",
    subtotal: "2000",
  };
  const options = [
    { value: "2023-11-01", label: "1 de Noviembre, 2023" },
    { value: "2023-11-02", label: "2 de Noviembre, 2023" },
    { value: "2023-11-03", label: "3 de Noviembre, 2023" },
    { value: "2023-11-04", label: "4 de Noviembre, 2023" },
  ];
  const [filas, setFilas] = useState([
    {
      articulo1: "Artículo 1",
      cantidad: 10,
      costoUnitario: 5.0,
      subtotal: 50.0,
    },
    {
      articulo1: "Artículo 2",
      cantidad: 20,
      costoUnitario: 4.0,
      subtotal: 80.0,
    },
    {
      articulo1: "Artículo 3",
      cantidad: 15,
      costoUnitario: 6.0,
      subtotal: 90.0,
    },
    {
      articulo1: "Artículo 4",
      cantidad: 12,
      costoUnitario: 7.0,
      subtotal: 84.0,
    },
    {
      articulo1: "Artículo 5",
      cantidad: 30,
      costoUnitario: 3.0,
      subtotal: 90.0,
    },
    {
      articulo1: "Artículo 6",
      cantidad: 25,
      costoUnitario: 8.0,
      subtotal: 200.0,
    },
    {
      articulo1: "Artículo 7",
      cantidad: 8,
      costoUnitario: 10.0,
      subtotal: 80.0,
    },
    {
      articulo1: "Artículo 8",
      cantidad: 22,
      costoUnitario: 5.5,
      subtotal: 121.0,
    },
    {
      articulo1: "Artículo 9",
      cantidad: 18,
      costoUnitario: 6.5,
      subtotal: 117.0,
    },
    {
      articulo1: "Artículo 10",
      cantidad: 14,
      costoUnitario: 9.0,
      subtotal: 126.0,
    },

    // Agrega más filas según tus datos
  ]);
  const handleEliminarFila = (indice) => {
    const nuevasFilas = [...filas];
    nuevasFilas.splice(indice, 1);
    setFilas(nuevasFilas);
  };
  return (
    <>
      <div className="table-container">
        <div className="container2">
          <div className="date-selector">
            <div className="date-selector__item">
            <p>Fecha</p>
            <MultipleSelect options={options}/>
            </div>
            
            <button>Buscar</button>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th className="table__header">Articulo </th>
                <th className="table__header">Cantidad</th>
                <th className="table__header">Costo Unitario</th>
                <th className="table__header">Subtotal</th>
                <th className="table__header">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table__row">
                <td className="table__cell">{dataPrimeraFila.articulo1}</td>
                <td className="table__cell">{dataPrimeraFila.cantidad}</td>
                <td className="table__cell">{dataPrimeraFila.costoUnitario}</td>
                <td className="table__cell">{dataPrimeraFila.subtotal}</td>
                <td className="table__cell">
                  <a href="#" className="table__action table__action--edit">
                    <DeleteIcon />
                  </a>
                  <Link
                    to={`/editarlinea/${dataPrimeraFila.articulo1}/${dataPrimeraFila.cantidad}/${dataPrimeraFila.costoUnitario}/${dataPrimeraFila.subtotal}`}
                  >
                    <a href="#" className="table__action table__action--delete">
                      <EditIcon />
                    </a>
                  </Link>
                </td>
              </tr>
              {filas.map((fila, indice) => (
                <tr key={indice} className="table__row">
                  <td className="table__cell">{fila.articulo1}</td>
                  <td className="table__cell">{fila.cantidad}</td>
                  <td className="table__cell">{fila.costoUnitario}</td>
                  <td className="table__cell">{fila.subtotal}</td>
                  <td className="table__cell">
                    <a
                      href="#"
                      className="table__action table__action--edit"
                      onClick={() => handleEliminarFila(indice)}
                    >
                      <DeleteIcon />
                    </a>
                    <a href="#" className="table__action table__action--delete">
                      <EditIcon />
                    </a>
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

export default DetallePedido;
