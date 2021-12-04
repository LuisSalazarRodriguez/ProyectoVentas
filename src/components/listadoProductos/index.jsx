import React from "react";
import { BotonNuevo } from "../button/botonNuevo";
import { BotonModificar } from "../button/botonModificar";
import '../listadoProductos/listadoProductos.css';
const ListadoProductos = () => {
  return (
    <div className='listadoproductos-div'>
      <div>LISTADO PRODUCTOS</div>
      <div className='listadoproductos-button-flex'>
        <BotonNuevo />
        <BotonModificar/>
      </div>
    </div>
  );
};

export { ListadoProductos };
