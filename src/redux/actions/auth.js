import axios from "axios";

// export const auth = (userName, password) => {
//   return async (dispatch) => {
//     try {
//       const resultado = await axios.get(
//         "http://localhost:3000/usuarios?userName=" +
//           userName +
//           "&password=" +
//           password
//       );
//     //   console.log("resultado backend:", resultado.data[0]);
//       if (resultado.data[0] === undefined) {
//         alert("Credenciales NO validas");
//       } else {
//         dispatch({ type: "SET_LOGIN", payload: true });
//         dispatch({
//           type: "SET_USER",
//           payload: resultado.data[0],
//         });
//       }
//     } catch (error) {
//       alert('ERROR: ' + error);
//     }
//   };
// };

export const auth = (userName, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/token/",
        JSON.stringify({ username: userName, password: password }),
        {
          headers: {
            'Content-type': 'application/json'
          }
        }
      );
    //   console.log("response backend:", response.data[0]);
      console.log("response backend:", response.data);
      if (response.status === 200) {
        // console.log(response.data);
        let token  = response.data.access;
        localStorage.setItem('token', token);
        let payload = token.split('.')[1];
        // let payloadDecoded = atob(payload);
        console.log(payload);
        // let payloadJSON = JSON.parse(payloadDecoded);
        dispatch({ type: "SET_LOGIN", payload: true });
        dispatch({
          type: "SET_USER",
          payload: response.data,
          userName: userName
        });
      }
    } catch (error) {
      alert('ERROR: ' + error);
    }
  };
};
