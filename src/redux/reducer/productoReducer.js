const initialState = {
  dataProductos: {},
  };
  
  const productoReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
      case "SET_PRODUCTO":
        return { ...state, dataProductos: action.payload };      
      case "RESET_PRODUCTO":
        return { initialState };
      default:
        return state;
    }
  };
  
  export { productoReducer };