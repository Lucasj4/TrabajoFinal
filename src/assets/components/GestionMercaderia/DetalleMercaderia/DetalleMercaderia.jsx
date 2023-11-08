import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./DetalleMercaderia.css";

import { Link } from "react-router-dom";
import { useState } from "react";
/* import MultipleSelect from "../MultipleSelect/MultipleSelect"; */
import MultipleSelect from "../../MultipleSelect/MultipleSelect";

const DetalleMercaderia = () => {
  const dataPrimeraFila = {
    articulo1: "Tornillo",
    cantidad: "45",
    costoUnitario: "100",
    subtotal: "2000",
  };
  const options = [
    { value: "Lucas", label: "Lucas" },
    { value: "Santiago", label: "Santiago" },
    { value: "Estanislao", label: "Estanislao" },
  ];
  const [filas, setFilas] = useState([
    {
      articulo1: "Clavos",
      cantidad: 10,
      costoUnitario: 5.0,
      subtotal: 50.0,
    },
    {
      articulo1: "Cemento",
      cantidad: 20,
      costoUnitario: 4.0,
      subtotal: 80.0,
    },
    {
      articulo1: "Manija",
      cantidad: 15,
      costoUnitario: 6.0,
      subtotal: 90.0,
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
      <div className="detalle__container">
        <div className="detalle__table-container">
          <div className="date-selector">
            <div className="date-selector__item">
            <p>Fecha</p>
            <input type="date" className="date-selector__item__date" />
            </div>
            <div className="date-selector__item">
            <p>Proveedor</p>
            <MultipleSelect options={options}/>
            </div>
            
           
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
          <div className="detalle__buttons">
            <Link to="/nuevaMercaderia"><button>Nueva Linea</button></Link>
            <Link to="/mercaderia"><button>Guardar</button></Link>
            <Link to="/mercaderia"><button>Salir</button></Link>

          </div>
        </div>
      </div>
    </>
  );
};

export default DetalleMercaderia;
