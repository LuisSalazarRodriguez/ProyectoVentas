import axios from "axios";

export const auth = (userName, password) => {
  return async (dispatch) => {
    try {
      const resultado = await axios.get(
        "http://localhost:3000/usuarios?userName=" +
          userName +
          "&password=" +
          password
      );
    //   console.log("resultado backend:", resultado.data[0]);
      if (resultado.data[0] === undefined) {
        alert("Credenciales NO validas");
      } else {
        dispatch({ type: "SET_LOGIN", payload: true });
        dispatch({
          type: "SET_USER",
          payload: resultado.data[0],
        });
      }
    } catch (error) {
      alert('ERROR: ' + error);
    }
  };
};
