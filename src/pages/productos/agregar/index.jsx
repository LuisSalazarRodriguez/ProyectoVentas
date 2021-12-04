import { useHistory } from "react-router-dom";

function PageProductosAgregar() {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.goBack()}>regresar</button>
      Agregar producto
    </div>
  );
}

export { PageProductosAgregar };
