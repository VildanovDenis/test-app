const initialState = {
  isAuth: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH": {
      debugger;
      return { isAuth: action.payload };
    }
    default: {
      return state;
    }
  }
};
