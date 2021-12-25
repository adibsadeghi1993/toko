const reducer = (state, { type, payload }) => {
  console.log("state: ", type, payload, state);
  switch (type) {
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};

export default reducer;
