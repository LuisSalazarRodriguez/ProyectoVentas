import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

function PageProductosEditar() {
  const history = useHistory();
  const { id } = useParams();
  const [product, setProduct] = useState({});

  function getProductDetail(id) {
    axios.get(`http://localhost:3000/productos/${id}`).then(({ data }) => {
      setProduct(data);
    });
  }

  function editProduct(id, payload) {
    axios
      .put(`http://localhost:3000/productos/${id}`, payload)
      .then(({ data }) => {
        setProduct(data);
        alert("Se grabo correctamente");
        history.goBack()
      });
  }

  function onSubmit(e) {
    e.preventDefault();
    editProduct(id, product);
  }

  useEffect(() => {
    getProductDetail(id);
  }, []);

  return (
    <div>
      <button onClick={() => history.goBack()}>regresar</button>
      EDITAR producto {id}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={product.descripcion}
          onChange={(e) => {
            setProduct((state) => ({ ...state, descripcion: e.target.value }));
          }}
        />
        <input
          type="text"
          value={product.codigoMarca}
          onChange={(e) => {
            setProduct((state) => ({ ...state, codigoMarca: e.target.value }));
          }}
        />
        <button>EDITAR</button>
      </form>
    </div>
  );
}

export { PageProductosEditar };
