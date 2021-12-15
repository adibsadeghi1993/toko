const reducer = (state, { type, payload }) => {
  switch (type) {
    case "CLEAR_SESSION":
      return {};
    case "SET_SESSION":
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default reducer;
