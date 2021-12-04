import React from "react";
import "../button/button.css";
import imgBotonModificar from "../../image/imgModificar.jpg";
const BotonModificar = () => {
  return (
    <div>
      <button>
        <img className='button-img' src={imgBotonModificar} alt="Modificar registro" />
      </button>
    </div>
  );
};

export { BotonModificar };
