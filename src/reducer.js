const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD': {
      return action.payload.count;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
