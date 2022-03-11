import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./login.css";
import { auth } from "../../redux/actions/auth";
import imgLoginUsuario from "../../image/loginUsuario.jpg";
import imgUserName from "../../image/userName.png";
import imgClave from "../../image/imgClave.jpg";
const PageLogin = () => {
  const [usuario, setUsuario] = useState({
    userName: "",
    password: "",
  });
  const history = useHistory();

  // function getusuario(userName, password) {
  //   axios
  //     .get(" http://localhost:3000/usuarios")
  //     .then((response) => {
  //       const data = response.data;
  //       const acceso = data.filter(
  //         (item) => item.userName == userName && item.password == password
  //       );
  //       // console.log('acceso', acceso[0]);
  //       if (acceso.length > 0) {
  //         alert("Bienvenido, acceso correcto");
  //         history.push("/");
  //       } else {
  //         alert("Credenciales NO validas");
  //       }
  //     })
  //     .catch((e) => {});
  // }

  // useEffect(() => {
  //   getusuario();
  // }, []);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { isLogin } = state.auth;
  function loginValido(e) {
    e.preventDefault();
    dispatch(auth(usuario.userName, usuario.password));
  }

  useEffect(() => {
    if (isLogin) {
      alert("Bienvenido, acceso correcto");
      history.push("/");
    }
  }, [isLogin]);

  return (
    <main>
      <section className="login-section">
        <form onSubmit={loginValido}>
          <div className="login-container">
            <img className="login-img" src={imgLoginUsuario} alt="" />
          </div>
          <div className="login-div-input">
            <img
              id="userName"
              name="userName"
              className="login-img-input"
              src={imgUserName}
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
              src={imgClave}
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
            <button id="entrar" name="entrar" className="login-button">
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
