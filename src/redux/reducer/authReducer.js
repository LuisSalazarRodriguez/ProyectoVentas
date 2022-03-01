const initialState = {
  isLogin: false,
  userData: {},
};

const authReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return { ...state, isLogin: action.payload };
    case "SET_USER":
      return {
        ...state, 
        userData: action.payload,
        userName: action.userName
      };
    case "RESET_USER":
      return { initialState };
    default:
      return state;
  }
};

export { authReducer };
