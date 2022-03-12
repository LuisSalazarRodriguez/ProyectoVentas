import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ListadoProductos } from "../../components/productos/listado";
import { BotonNuevo } from "../../components/button/botonNuevo";
import { BotonModificar } from "../../components/button/botonModificar";
import {FormGroup,ModalFooter,Button,Modal,ModalBody,ModalHeader} from "reactstrap";

import { datProducto } from "../../redux/actions/productoActions";
import { useDispatch, useSelector } from "react-redux";

import "../../components/productos/productos.css";

const PageProductos = () => {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { dataProductos } = state.producto;
  // console.log('state', state);
    
  // const dataProductos = [
  //   {producto_codigo:"1",producto_descripcion:"Memoria USB",linea_codigo:"PC",um_codigo:"A",producto_estado:"Activo",marca_codigo:"Kingston",producto_precio:50.00,producto_imagen:"null",moneda_codigo:"S/."},
  //   {producto_codigo:"2",producto_descripcion:"DISCO DURO",linea_codigo:"PC",um_codigo:"A",producto_estado:"Activo",marca_codigo:"Kingston",producto_precio:50.00,producto_imagen:"null",moneda_codigo:"S/."},
  // ];   
  const [data, setData] = useState(dataProductos);
  const [modalInsertar,setModalInsertar] = useState(0);
  const [modalEditar,setModalEditar] = useState(0);
  const [modalEliminar,setModalEliminar] = useState(0);
  const [productoSeleccionado,setProductoSeleccionado] = useState({
    producto_codigo:'',
    producto_descripcion:'',
    linea_codigo:'',
    um_codigo:'',
    producto_estado:'',
    marca_codigo:'',
    producto_precio:0,
    producto_imagen:'',
    moneda_codigo: ''
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
        if(producto.producto_codigo===productoSeleccionado.producto_codigo){  
            producto.producto_descripcion=productoSeleccionado.producto_descripcion;
            producto.linea_codigo=productoSeleccionado.linea_codigo;
            producto.um_codigo=productoSeleccionado.um_codigo;
            producto.producto_estado=productoSeleccionado.producto_estado;
            producto.marca_codigo=productoSeleccionado.marca_codigo;
            producto.producto_precio=productoSeleccionado.producto_precio;
            producto.producto_imagen=productoSeleccionado.producto_imagen;
        }
    }
    );
    setData(dataNueva);
    setModalEditar(false);
  }
  const eliminar=()=>{
    setData(data.filter(producto=>producto.producto_codigo!==productoSeleccionado.producto_codigo));
    setModalEliminar(false);
  }
  const abrirModalInsertar=()=>{
    setProductoSeleccionado(null);
    setModalInsertar(true);
  }
  const insertar=()=>{
    var valorInsertar = productoSeleccionado;
    valorInsertar.producto_codigo=data[data.length-1].producto_codigo+1;
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

  useEffect(() => {
    dispatch(datProducto());
  }, []);

  return (
<div>
    <h1> Listado de Productos</h1>
    <Button producto_codigo="insertar" color="success" onClick={()=>abrirModalInsertar()}>Insertar Nuevo Producto</Button>
    <div className="detalleProducto">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>producto</th>
            <th>linea</th>
            <th>marca</th>
            <th>precio</th>
          </tr>
        </thead>
        <tbody>          
          {data.length !== undefined && data.map(producto=>(
            <tr key={producto.producto_codigo}>
              <td>{producto.producto_descripcion}</td>
              <td>{producto.linea_codigo}</td>
              <td>{producto.marca_codigo}</td>
              <td>{producto.producto_precio}</td>
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
          value={productoSeleccionado && productoSeleccionado.producto_codigo} 
          onChange={handleChange}
          // value={data[data.length-1].producto_codigo+1} 
          />
        </FormGroup>
        <FormGroup>
          <label>Descripcion</label>
          <input
          className="form-control"
          type="text"
          name="producto_descripcion"
          value = {productoSeleccionado ? productoSeleccionado.producto_descripcion : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Línea</label>
          <input
          className="form-control"
          type="text"
          name="linea_codigo"
          value = {productoSeleccionado ? productoSeleccionado.linea_codigo : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>UM</label>
          <input
          className="form-control"
          type="text"
          name="um_codigo"
          value = {productoSeleccionado ? productoSeleccionado.um_codigo : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Estado</label>
          <input
          className="form-control"
          type="text"
          name="producto_estado"
          value = {productoSeleccionado ? productoSeleccionado.producto_estado : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Marca</label>
          <input
          className="form-control"
          type="text"
          name="marca_codigo"
          value = {productoSeleccionado ? productoSeleccionado.marca_codigo : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Precio</label>
          <input
          className="form-control"
          type="text"
          name="producto_precio"
          value = {productoSeleccionado ? productoSeleccionado.producto_precio : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>URL Imagen</label>
          <input
          className="form-control"
          type="text"
          name="producto_imagen"
          value = {productoSeleccionado ? productoSeleccionado.producto_imagen : ''}
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
          <h3>Editar Producto</h3>
        </div>
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <input
          className="form-control"
          readonly
          type="hidden"
          value={productoSeleccionado && productoSeleccionado.producto_codigo}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Descripcion</label>
          <input
          className="form-control"
          type="text"
          name="producto_descripcion"
          value = {productoSeleccionado ? productoSeleccionado.producto_descripcion : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Línea</label>
          <input
          className="form-control"
          type="text"
          name="linea_codigo"
          value = {productoSeleccionado ? productoSeleccionado.linea_codigo : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>UM</label>
          <input
          className="form-control"
          type="text"
          name="um_codigo"
          value = {productoSeleccionado ? productoSeleccionado.um_codigo : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Estado</label>
          <input
          className="form-control"
          type="text"
          name="producto_estado"
          value = {productoSeleccionado ? productoSeleccionado.producto_estado : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Marca</label>
          <input
          className="form-control"
          type="text"
          name="marca_codigo"
          value = {productoSeleccionado ? productoSeleccionado.marca_codigo : ''}
          onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Precio</label>
          <input
          className="form-control"
          type="text"
          name="producto_precio"
          value = {productoSeleccionado ? productoSeleccionado.producto_precio : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>URL Imagen</label>
          <input
          className="form-control"
          type="text"
          name="producto_imagen"
          value = {productoSeleccionado ? productoSeleccionado.producto_imagen : ''}
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
        ¿Estas seguro que deseas eliminar a {productoSeleccionado && productoSeleccionado.producto_descripcion} ?
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
