import React from "react";
import "../button/button.css";
import imgBotonNuevo from "../../image/imgNuevo.jpg";
const BotonNuevo = () => {
  return (
    <div>
      <button>
        <img className='button-img' src={imgBotonNuevo} alt="Nuevo registro" />
      </button>
    </div>
  );
};

export { BotonNuevo };
