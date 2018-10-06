const initialState = {};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TASKS-GIVEAWAY": {
      return {
        ...state,
        ...action.payload.reduce(
          (acc, item) => ({ ...acc, [item.id]: item }),
          {}
        )
      };
    }
    default: {
      return state;
    }
  }
};

export const getTasksAsArray = state => Object.values(state.tasksReducer);
