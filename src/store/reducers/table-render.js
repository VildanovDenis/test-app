const initialState = {
  isScrumShow: false
};

export const scrumTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TABLE-RENDER-SCRUM": {
      return { ...state, isScrumShow: action.payload };
    }
    default: {
      return state;
    }
  }
};
