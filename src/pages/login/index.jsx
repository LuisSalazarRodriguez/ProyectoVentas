import { useEffect, useState } from "react";
import axios from "axios";
import "./login.css";

const PageLogin = () => {
  const [usuario, setUsuario] = useState({
    userName: '',
    password: ''
  });

  function getusuario(userName, password) {
    axios
      .get(" http://localhost:3000/usuarios")
      .then((response) => {
        const data = response.data;        
        const acceso = data.filter(
          (item) => item.userName == userName && item.password == password
        );
        // console.log('acceso', acceso[0]);        
        if (acceso.length > 0){
          alert("Bienvenido, acceso correcto");
        }else{
          alert("Credenciales NO validas");
        }
      })
      .catch((e) => {});
  }

  // useEffect(() => {
  //   getusuario();
  // }, []);

  function loginValido(e) {
    e.preventDefault();
    // console.log('usuario', usuario);    
    getusuario(usuario.userName, usuario.password);
  }

  return (
    <main>
      <section className="login-section">
        <form>
          <div className="login-container">
            <img
              className="login-img"
              src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"
              alt=""
            />
          </div>
          <div className="login-div-input">
            <img
              id="userName"
              name="userName"
              className="login-img-input"
              src="data:image/png;base64,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"
              alt=""
            />
            <input
              type="text"
              placeholder="Ingrese su usuario"
              required
              onChange={(e) =>
                setUsuario((state) => ({ ...state, userName: e.target.value }))
              }
            />
          </div>
          <div className="login-div-input">
            <img
              className="login-img-input"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDcz_d_f7-nSuUKCirLuIIJhhYle-px5MDLg&usqp=CAU"
              alt=""
            />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Ingrese su contraseña"
              required
              onChange={(e) =>
                setUsuario((state) => ({ ...state, password: e.target.value }))
              }
            />
          </div>
          <div>
            <button id="entrar" name="entrar" className="login-button" onClick={loginValido}>
              ENTRAR
            </button>
          </div>
          <div className="login-a">
            <a href="">¿Has olvidado la contraseña?</a>
          </div>
        </form>
      </section>
    </main>
  );
};

export { PageLogin };
