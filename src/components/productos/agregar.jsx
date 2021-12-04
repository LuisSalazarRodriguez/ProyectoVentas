import React from "react";
import { BotonNuevo } from "../button/botonNuevo";
import { BotonModificar } from "../button/botonModificar";
import "./productos.css";
const AgregarProductos = () => {
  return (
    <div>
      <div>
        <h1>REGISTRAR PRODUCTOS</h1>
      </div>
      <div className="listadoproductos-button-flex">
        <BotonNuevo />
        <BotonModificar />
      </div>
    </div>
  );
};

export { AgregarProductos };
