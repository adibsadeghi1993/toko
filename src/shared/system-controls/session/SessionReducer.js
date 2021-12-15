const reducer = (state, { type, payload }) => {
  console.log("state: ", type, payload, state);
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
