import React from "react";
import "../button/button.css";
import imgBotonNuevo from "../../image/imgNuevo.jpg";
const BotonNuevo = (props) => {
  const { event_onclick } = props;
  return (
    <div>
      <button onClick={event_onclick}>
        <img className="button-img" src={imgBotonNuevo} alt="Nuevo registro" />
      </button>
    </div>
  );
};

export { BotonNuevo };
