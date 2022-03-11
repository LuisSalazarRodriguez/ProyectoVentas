const initialState = {
    pedidoData: {},
  };
  
  const pedidoReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
      case "SET_PEDIDO":
        console.log(action);
        return { ...state, pedidoData: action.payload };      
      case "RESET_PEDIDO":
        return { initialState };
      default:
        return state;
    }
  };
  
  export { pedidoReducer };