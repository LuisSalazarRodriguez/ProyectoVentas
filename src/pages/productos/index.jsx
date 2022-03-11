import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ListadoProductos } from "../../components/productos/listado";
import { BotonNuevo } from "../../components/button/botonNuevo";
import { BotonModificar } from "../../components/button/botonModificar";
import {FormGroup,ModalFooter,Button,Modal,ModalBody,ModalHeader} from "reactstrap";


import "../../components/productos/productos.css";

const PageProductos = () => {
  const dataProductos = [
    {id:1,Producto:"Memoria USB",Linea:"PC",UM:"A",Estado:"Activo",Marca:"Kingston",Precio:50.00,Imagen:"null"},
  ];
  const [data, setData] = useState(dataProductos);
  const [modalInsertar,setModalInsertar] = useState(0);
  const [modalEditar,setModalEditar] = useState(0);
  const [modalEliminar,setModalEliminar] = useState(0);
  const [productoSeleccionado,setProductoSeleccionado] = useState({
    id:'',
    Producto:'',
    Linea:'',
    UM:'',
    Estado:'',
    Marca:'',
    Precio:'',
    Imagen:'',
  });
  const seleccionarProducto =(elemento,caso)=>{
    setProductoSeleccionado(elemento);
    (caso==='Editar')?setModalEditar(true):setModalEliminar(true);
  }
  const handleChange=e=>{
    const{name,value}=e.target;
    setProductoSeleccionado(prevState=>({
        ...prevState,
        [name]:value
    }));
  }
  const editar=()=>{
    var dataNueva=data;
    dataNueva.map(producto=>{
        if(producto.id===productoSeleccionado.id){  
            producto.Producto=productoSeleccionado.Producto;
            producto.Linea=productoSeleccionado.Linea;
            producto.UM=productoSeleccionado.UM;
            producto.Estado=productoSeleccionado.Estado;
            producto.Marca=productoSeleccionado.Marca;
            producto.Precio=productoSeleccionado.Precio;
            producto.Imagen=productoSeleccionado.Imagen;
        }
    }
    );
    setData(dataNueva);
    setModalEditar(false);
  }
  const eliminar=()=>{
    setData(data.filter(producto=>producto.id!==productoSeleccionado.id));
    setModalEliminar(false);
  }
  const abrirModalInsertar=()=>{
    setProductoSeleccionado(null);
    setModalInsertar(true);
  }
  const insertar=()=>{
    var valorInsertar = productoSeleccionado;
    valorInsertar.id=data[data.length-1].id+1;
    var dataNueva=data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);

  }

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
    <h1> Listado de Pedidos</h1>
    <Button id="insertar" color="success" onClick={()=>abrirModalInsertar()}>Insertar Nuevo Pedido</Button>
    <div className="detalleProducto">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Linea</th>
            <th>Marca</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {data.map(producto=>(
            <tr key={producto.id}>
              <td>{producto.Producto}</td>
              <td>{producto.Linea}</td>
              <td>{producto.Marca}</td>
              <td>{producto.Precio}</td>
              <td>
                <Button color="primary" onClick={()=>seleccionarProducto(producto,'Editar')}>Editar</Button>
                <Button color="danger" onClick={()=>seleccionarProducto(producto,'Eliminar')}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Modal isOpen={modalInsertar}>
      <ModalHeader>
        <div>
          <h3>Insertar Nuevo Producto</h3>
        </div>
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <input
          className="form-control" 
          readonly 
          type="hidden" 
          value={productoSeleccionado && productoSeleccionado.id} 
          onChange={handleChange}
          value={data[data.length-1].id+1} />
        </FormGroup>
        <FormGroup>
          <label>Producto</label>
          <input
          className="form-control"
          type="text"
          name="Producto"
          value = {productoSeleccionado ? productoSeleccionado.Producto : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Línea</label>
          <input
          className="form-control"
          type="text"
          name="Linea"
          value = {productoSeleccionado ? productoSeleccionado.Linea : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>UM</label>
          <input
          className="form-control"
          type="text"
          name="UM"
          value = {productoSeleccionado ? productoSeleccionado.UM : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Estado</label>
          <input
          className="form-control"
          type="text"
          name="Estado"
          value = {productoSeleccionado ? productoSeleccionado.Estado : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Marca</label>
          <input
          className="form-control"
          type="text"
          name="Marca"
          value = {productoSeleccionado ? productoSeleccionado.Marca : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Precio</label>
          <input
          className="form-control"
          type="text"
          name="Precio"
          value = {productoSeleccionado ? productoSeleccionado.Precio : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Imagen</label>
          <input
          className="form-control"
          type="text"
          name="Imagen"
          value = {productoSeleccionado ? productoSeleccionado.Imagen : ''}
          onChange={handleChange}
          />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={insertar}>Insertar</Button>
        <Button color="danger" onClick={()=>setModalInsertar(false)}>Cancelar</Button>
      </ModalFooter>
    </Modal>

    <Modal isOpen={modalEditar}>
      <ModalHeader>
        <div>
          <h3>Editar Pedido</h3>
        </div>
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <input
          className="form-control"
          readonly
          type="hidden"
          value={productoSeleccionado && productoSeleccionado.id}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Producto</label>
          <input
          className="form-control"
          type="text"
          name="Producto"
          value = {productoSeleccionado ? productoSeleccionado.Producto : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Línea</label>
          <input
          className="form-control"
          type="text"
          name="Linea"
          value = {productoSeleccionado ? productoSeleccionado.Linea : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>UM</label>
          <input
          className="form-control"
          type="text"
          name="UM"
          value = {productoSeleccionado ? productoSeleccionado.UM : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Estado</label>
          <input
          className="form-control"
          type="text"
          name="Estado"
          value = {productoSeleccionado ? productoSeleccionado.Estado : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Marca</label>
          <input
          className="form-control"
          type="text"
          name="Marca"
          value = {productoSeleccionado ? productoSeleccionado.Marca : ''}
          onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Precio</label>
          <input
          className="form-control"
          type="text"
          name="Precio"
          value = {productoSeleccionado ? productoSeleccionado.Precio : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Imagen</label>
          <input
          className="form-control"
          type="text"
          name="Imagen"
          value = {productoSeleccionado ? productoSeleccionado.Imagen : ''}
          onChange={handleChange}
          />
        </FormGroup>
        
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={editar}>Editar</Button>
        <Button color="danger" onClick={()=>setModalEditar(false)}>Cancelar</Button>
      </ModalFooter>
    </Modal>

    <Modal isOpen={modalEliminar}>
      <ModalBody>
        ¿Estas seguro que deseas eliminar a {productoSeleccionado && productoSeleccionado.Producto} ?
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={eliminar}>Eliminar</Button>
        <Button color="secondary" onClick={()=>setModalEliminar(false)}>Cancelar</Button>
      </ModalFooter>
    </Modal>
  </div>
  );
};

export { PageProductos };
