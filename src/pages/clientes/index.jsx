import React from "react";
import { useState } from 'react';

import {FormGroup,ModalFooter,Button,Modal,ModalBody,ModalHeader} from "reactstrap";

const PageClientes = () => {

  const dataClientes = [
    {id:1,Nombre:"Juan",TipoDocumento:"DNI",Telefono:123123123,Dpto:"Arequipa",Prov:"Arequipa",Distrito:"Jose Luis Bustamante"},
  ];
  const [data, setData] = useState(dataClientes);   
  const [modalInsertar,setModalInsertar] = useState(0);
  const [modalEditar,setModalEditar] = useState(0);
  const [modalEliminar,setModalEliminar] = useState(0);
  const [clienteSeleccionado,setClienteSeleccionado] = useState({
      id:'',
      Nombre:'',
      TipoDocumento:'',
      Telefono:'',
      Dpto:'',
      Prov:'',
      Distrito:'',
  });
const seleccionarCliente =(elemento,caso)=>{
    setClienteSeleccionado(elemento);
    (caso==='Editar')?setModalEditar(true):setModalEliminar(true);
}
const handleChange=e=>{
    const{name,value}=e.target;
    setClienteSeleccionado(prevState=>({
        ...prevState,
        [name]:value
    }));
}
const editar=()=>{
    var dataNueva=data;
    dataNueva.map(cliente=>{
        if(cliente.id===clienteSeleccionado.id){
            
          cliente.Nombre=clienteSeleccionado.Nombre;
          cliente.TipoDocumento=clienteSeleccionado.TipoDocumento;
          cliente.Telefono=clienteSeleccionado.Telefono;
          cliente.Dpto=clienteSeleccionado.Dpto;
          cliente.Prov=clienteSeleccionado.Prov;
          cliente.Distrito=clienteSeleccionado.Distrito;
        }
    });
    setData(dataNueva);
    setModalEditar(false);
}
const eliminar=()=>{
    setData(data.filter(cliente=>cliente.id!==clienteSeleccionado.id));
    setModalEliminar(false);
}
const abrirModalInsertar=()=>{
    setClienteSeleccionado(null);
    setModalInsertar(true);
}
const insertar=()=>{
    var valorInsertar=clienteSeleccionado;
    valorInsertar.id=data[data.length-1].id+1;
    var dataNueva=data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
}
  return (
  <div>
    <h1> Listado de Clientes</h1>
    <Button id="insertar" color="success" onClick={()=>abrirModalInsertar()}>Insertar Nuevo Cliente</Button>
    <div className="detalleClientes">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo Documento</th>
            <th>Telefono</th>
            <th>Departamento</th>
            <th>Provincia</th>
            <th>Distrito</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map(cliente=>(
            <tr key={cliente.id}>
              <td>{cliente.Nombre}</td>
              <td>{cliente.TipoDocumento}</td>
              <td>{cliente.Telefono}</td>
              <td>{cliente.Dpto}</td>
              <td>{cliente.Prov}</td>
              <td>{cliente.Distrito}</td>
              <td>
                <Button color="primary" onClick={()=>seleccionarCliente(cliente,'Editar')}>Editar</Button>
                <Button color="danger" onClick={()=>seleccionarCliente(cliente,'Eliminar')}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Modal isOpen={modalInsertar}>
      <ModalHeader>
        <div>
          <h3>Insertar Nuevo Cliente</h3>
        </div>
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <input
          className="form-control" 
          readonly 
          type="hidden" 
          value={clienteSeleccionado && clienteSeleccionado.id} 
          onChange={handleChange}
          value={data[data.length-1].id+1} />
        </FormGroup>
        <FormGroup>
          <label>Nombre</label>
          <input
          className="form-control"
          type="text"
          name="Nombre"
          value = {clienteSeleccionado ? clienteSeleccionado.Nombre : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Tipo Documento</label>
          <input
          className="form-control"
          type="text"
          name="TipoDocumento"
          value = {clienteSeleccionado ? clienteSeleccionado.TipoDocumento : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Telefono</label>
          <input
          className="form-control"
          type="text"
          name="Telefono"
          value = {clienteSeleccionado ? clienteSeleccionado.Telefono : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Departamento</label>
          <input
          className="form-control"
          type="text"
          name="Dpto"
          value = {clienteSeleccionado ? clienteSeleccionado.Dpto : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Provincia</label>
          <input
          className="form-control"
          type="text"
          name="Prov"
          value = {clienteSeleccionado ? clienteSeleccionado.Prov : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Distrito</label>
          <input
          className="form-control"
          type="text"
          name="Distrito"
          value = {clienteSeleccionado ? clienteSeleccionado.Distrito : ''}
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
          <h3>Editar Cliente</h3>
        </div>
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <input
          className="form-control"
          readonly
          type="hidden"
          value={clienteSeleccionado && clienteSeleccionado.id}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Nombre</label>
          <input
          className="form-control"
          type="text"
          name="Nombre"
          value = {clienteSeleccionado ? clienteSeleccionado.Nombre : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Tipo Documento</label>
          <input
          className="form-control"
          type="text"
          name="TipoDocumento"
          value = {clienteSeleccionado ? clienteSeleccionado.TipoDocumento : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Telefono</label>
          <input
          className="form-control"
          type="text"
          name="Telefono"
          value = {clienteSeleccionado ? clienteSeleccionado.Telefono : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Departamento</label>
          <input
          className="form-control"
          type="text"
          name="Dpto"
          value = {clienteSeleccionado ? clienteSeleccionado.Dpto : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Provincia</label>
          <input
          className="form-control"
          type="text"
          name="Prov"
          value = {clienteSeleccionado ? clienteSeleccionado.Prov : ''}
          onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Distrito</label>
          <input
          className="form-control"
          type="text"
          name="Distrito"
          value = {clienteSeleccionado ? clienteSeleccionado.Distrito : ''}
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
        ¿Estas seguro que deseas eliminar a {clienteSeleccionado && clienteSeleccionado.Nombre} ?
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={eliminar}>Eliminar</Button>
        <Button color="secondary" onClick={()=>setModalEliminar(false)}>Cancelar</Button>
      </ModalFooter>
    </Modal>
  </div>
  )
};

export { PageClientes };
