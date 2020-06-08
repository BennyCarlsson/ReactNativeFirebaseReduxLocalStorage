const reducer = (state = {count: 1}, action) => {
  switch (action.type) {
    case 'ADD': {
      return {count: action.payload.count};
    }
    default: {
      return state;
    }
  }
};

export default reducer;
