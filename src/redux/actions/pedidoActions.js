import axios from "axios";

export const datPedido = () => {
    return async (dispatch) => {
      try {
        const datped = await axios.get(
          "http://127.0.0.1:8000/pedido",
          "",
          {
            headers: {
              'Content-type': 'application/json'
            }
          }
        );
        // console.log("datped:", datped);
        if (datped.status === 200) {

        //   dispatch({ type: "SET_LOGIN", payload: true });
          dispatch({
            type: "SET_PEDIDO",
            payload: datped.data
          });
        }
      } catch (error) {
        alert('ERROR: ' + error);
      }
    };
  };
  