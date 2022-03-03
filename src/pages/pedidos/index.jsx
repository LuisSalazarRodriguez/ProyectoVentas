import React from "react";
import { useState } from 'react';


import {FormGroup,ModalFooter,Button,Modal,ModalBody,ModalHeader} from "reactstrap";

const PagePedidos = () => {

  const dataPedido = [
    {id:1,Producto:"Memoria USB",UM:"Unidad",Moneda:123123123,Precio:202022,Cantidad:1,SubTotal:12333,Total:3232323},
  ];
  const [data, setData] = useState(dataPedido);   
  const [modalInsertar,setModalInsertar] = useState(0);
  const [modalEditar,setModalEditar] = useState(0);
  const [modalEliminar,setModalEliminar] = useState(0);
  const [productoSeleccionado,setProductoSeleccionado] = useState({
      id:'',
      Producto:'',
      UM:'',
      Moneda:'',
      Precio:'',
      Cantidad:'',
      SubTotal:'',
      Total:'',
  });
const seleccionarPedido =(elemento,caso)=>{
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
    dataNueva.map(pedido=>{
        if(pedido.id===productoSeleccionado.id){
            
            pedido.Producto=productoSeleccionado.Producto;
            pedido.UM=productoSeleccionado.UM;
            pedido.Moneda=productoSeleccionado.Moneda;
            pedido.Precio=productoSeleccionado.Precio;
            pedido.Cantidad=productoSeleccionado.Cantidad;
            pedido.SubTotal=productoSeleccionado.SubTotal;
            pedido.Total=productoSeleccionado.Total;
        }
    });
    setData(dataNueva);
    setModalEditar(false);
}
const eliminar=()=>{
    setData(data.filter(pedido=>pedido.id!==productoSeleccionado.id));
    setModalEliminar(false);
}
const abrirModalInsertar=()=>{
    setProductoSeleccionado(null);
    setModalInsertar(true);
}
const insertar=()=>{
    var valorInsertar=productoSeleccionado;
    valorInsertar.id=data[data.length-1].id+1;
    var dataNueva=data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
}
  return (
  <div>
    <h1> Listado de Pedidos</h1>
    <Button id="insertar" color="success" onClick={()=>abrirModalInsertar()}>Insertar Nuevo Lote</Button>
    <div className="detalleProducto">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Producto</th>
            <th>UM</th>
            <th>Moneda</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>SubTotal</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map(producto=>(
            <tr key={producto.id}>
              <td>{producto.Producto}</td>
              <td>{producto.UM}</td>
              <td>{producto.Moneda}</td>
              <td>{producto.Precio}</td>
              <td>{producto.Cantidad}</td>
              <td>{producto.Subtotal}</td>
              <td>{producto.Total}</td>
              <td>
                <Button color="primary" onClick={()=>seleccionarPedido(producto,'Editar')}>Editar</Button>
                <Button color="danger" onClick={()=>seleccionarPedido(producto,'Eliminar')}>Eliminar</Button>
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
          <label>Moneda</label>
          <input
          className="form-control"
          type="text"
          name="Moneda"
          value = {productoSeleccionado ? productoSeleccionado.Moneda : ''}
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
          <label>Cantidad</label>
          <input
          className="form-control"
          type="text"
          name="Cantidad"
          value = {productoSeleccionado ? productoSeleccionado.Cantidad : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>SubTotal</label>
          <input
          className="form-control"
          type="text"
          name="SubTotal"
          value = {productoSeleccionado ? productoSeleccionado.SubTotal : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Total</label>
          <input
          className="form-control"
          type="text"
          name="Total"
          value = {productoSeleccionado ? productoSeleccionado.Total : ''}
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
          <label>Moneda</label>
          <input
          className="form-control"
          type="text"
          name="Moneda"
          value = {productoSeleccionado ? productoSeleccionado.Moneda : ''}
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
          <label>Cantidad</label>
          <input
          className="form-control"
          type="text"
          name="Cantidad"
          value = {productoSeleccionado ? productoSeleccionado.Cantidad : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>SubTotal</label>
          <input
          className="form-control"
          type="text"
          name="SubTotal"
          value = {productoSeleccionado ? productoSeleccionado.SubTotal : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Total</label>
          <input
          className="form-control"
          type="text"
          name="Total"
          value = {productoSeleccionado ? productoSeleccionado.Total : ''}
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
  )
};

export { PagePedidos };