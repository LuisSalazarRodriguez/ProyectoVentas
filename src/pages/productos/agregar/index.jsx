import { useHistory } from "react-router-dom";
import { AgregarProductos } from '../../../components/productos/agregar';
function PageProductosAgregar() {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.goBack()}>regresar</button>
      <AgregarProductos/>
    </div>
  );
}

export { PageProductosAgregar };
