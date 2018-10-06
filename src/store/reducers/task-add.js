const initialState = [];

export const taskAddReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TASK-ADD": {
      return [state, action.payload];
    }
    default: {
      return state;
    }
  }
};
