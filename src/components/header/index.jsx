import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <section className="header-section-flex">
        <div className="header-div header-h1">
          <h1>Modulo de Ventas</h1>
        </div>
        <div className="header-div">
          <button>
            <img
              className="header-img"
              src="data:image/png;base64,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"
              alt=""
            />
          </button>
          <input type="text" placeholder="Compañia" className='header-div-input'/>
        </div>
        <div className="header-div">
          <button>
            <img
              className="header-img"
              src="data:image/png;base64,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"
              alt=""
            />
          </button>
          <input type="text" placeholder="Division" className='header-div-input' />
        </div>
        <div className="header-div">
          <button>
            <img
              className="header-img"
              src="data:image/png;base64,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"
              alt=""
            />
          </button>
          <input type="text" placeholder="Oficina" className='header-div-input' />
        </div>
        <div className="header-div header-h1">
          <img
            className="header-img-usuario"
            src="data:image/png;base64,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"
            alt=""
          />
          <h1>Luis Salazar R.</h1>
        </div>
      </section>
    </header>
  );
};

export { Header };
