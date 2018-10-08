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
    case "TASK-ADD": {
      const maxId = Math.max(...Object.keys(state));
      const incrementalId = maxId + 1;
      return {
        ...state,
        [incrementalId]: { ...action.payload, id: incrementalId }
      };
    }
    case "TASK-EDIT": {
      const { id } = action.payload;

      return { ...state, [id]: action.payload };
    }
    case "TASK-DELETE": {
      const { id } = action.payload;

      const newState = { ...state };
      delete newState[id];

      return newState;
    }
    default: {
      return state;
    }
  }
};

export const getTasksAsArray = state => Object.values(state.tasksReducer);
