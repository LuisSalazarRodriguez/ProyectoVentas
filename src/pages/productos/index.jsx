import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ListadoProductos } from "../../components/productos/listado";
import { BotonNuevo } from "../../components/button/botonNuevo";
import { BotonModificar } from "../../components/button/botonModificar";
import "../../components/productos/productos.css";

const PageProductos = () => {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const nuevoProducto = () => {
    history.push("/productos/agregar");
    console.log("componente agregar productos (Nuevo)");
  };

  function getProductos() {
    axios.get("http://localhost:3000/productos").then(({ data }) => {
      setProducts(data);
    });
  }

  useEffect(() => {
    getProductos();
  }, []);
  return (
    <div>
      <div className="listadoproductos-button-flex">
        <BotonNuevo event_onclick={nuevoProducto} />
        <BotonModificar />
      </div>
      <div>
        <ListadoProductos products={products} />
      </div>
    </div>
  );
};

export { PageProductos };
