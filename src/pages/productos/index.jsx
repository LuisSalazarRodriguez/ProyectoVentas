import React from "react";
import { useHistory } from "react-router-dom";
import { ListadoProductos } from "../../components/productos/listado";
import { BotonNuevo } from "../../components/button/botonNuevo";
import { BotonModificar } from "../../components/button/botonModificar";
import "../../components/productos/productos.css";
const PageProductos = () => {
    const history = useHistory();
  const nuevoProducto = (()=> {
    history.push("../productos/agregar");
    console.log('componente agregar productos (Nuevo)');
  });
  return (
    <div>
      <div className="listadoproductos-button-flex">
        <BotonNuevo event_onclick={nuevoProducto} />
        <BotonModificar />
      </div>
      <div>
        <ListadoProductos />
      </div>
    </div>
  );
};

export { PageProductos };
