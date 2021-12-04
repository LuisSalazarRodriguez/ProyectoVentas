import React from "react";
import { useHistory } from "react-router-dom";
import "./productos.css";

function Product(props) {
  const { product } = props;
  const history = useHistory();

  return (
    <article className="product">
      <p>{product.descripcion}</p>
      <img src={product.imagen} alt="" />
      <button onClick={() => history.push(`/productos/editar/${product.id}`)}>
        EDITAR
      </button>
    </article>
  );
}

const ListadoProductos = (props) => {
  const { products } = props;

  return (
    <div className="listadoproductos-div">
      <div>
        <h2>LISTADO PRODUCTOS</h2>
        <div className="grid-product">
          {products.map((product) => {
            return <Product product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export { ListadoProductos };
