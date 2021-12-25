const reducer = (state, { type, payload }) => {
  console.log("state: ", type, payload, state);
  switch (type) {
    case "SET_SUBSCRIBE":
      return {
        ...state,
        subscribe: payload,
      };
    default:
      return state;
  }
};

export default reducer;
