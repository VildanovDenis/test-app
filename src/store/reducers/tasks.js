const initialState = [];

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TASKS-GIVEAWAY": {
      return [...state, ...action.payload];
    }
    default: {
      return state;
    }
  }
};
