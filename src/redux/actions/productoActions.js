import axios from "axios";

export const datProducto = () => {
    return async (dispatch) => {
      try {
        const datpro = await axios.get(
          "http://127.0.0.1:8000/producto",
          "",
          {
            headers: {
              'Content-type': 'application/json'
            }
          }
        );
        // console.log('datpro', datpro.data.content);
        if (datpro.status === 200) {
          dispatch({
            type: "SET_PRODUCTO",
            payload: datpro.data.content
          });
        }
      } catch (error) {
        alert('ERROR: ' + error);
      }
    };
  };
  