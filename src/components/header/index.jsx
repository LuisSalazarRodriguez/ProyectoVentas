import React from "react";
import "./header.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import imgBuscar from "../../image/imgBuscar.png";
import imgLogeado from "../../image/imgLogeado.png";

const Header = (props) => {
  // const { NombresApellidos, nombreCompania, nombreDivision, nombreOficina } =
  //   props.datosUsuario;
  const username = props.datosUsuario;  
  const dispatch = useDispatch();
  const history = useHistory();

  function cerrarSesion(e) {
    e.preventDefault();
    dispatch({ type: "RESET_USER" });
    history.push("/login");
  }

  return (
    <header className="header">
      <section className="header-section-flex">
        <div className="header-div header-h1">
          <h1>Modulo de Ventas</h1>
        </div>
        {/* <div className="header-div">
          <button>
            <img className="header-img" src={imgBuscar} alt="" />
          </button>
          <input
            type="text"
            placeholder="Compañia"
            className="header-div-input"
            value={nombreCompania}
            disabled
          />
        </div>
        <div className="header-div">
          <button>
            <img className="header-img" src={imgBuscar} alt="" />
          </button>
          <input
            type="text"
            placeholder="Division"
            className="header-div-input"
            value={nombreDivision}
            disabled
          />
        </div>
        <div className="header-div">
          <button>
            <img className="header-img" src={imgBuscar} alt="" />
          </button>
          <input
            type="text"
            placeholder="Oficina"
            className="header-div-input"
            value={nombreOficina}
            disabled
          />
        </div> */}
        <div className="header-div ">
          <img className="header-img-usuario" src={imgLogeado} alt="" />
          {/* <h2>{NombresApellidos}</h2> */}
          <h2>{username}</h2>
          <button className="header-cerrar-sesision" onClick={cerrarSesion}>
            Salir
          </button>
        </div>
      </section>
    </header>
  );
};

export { Header };
