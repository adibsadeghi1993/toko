const reducer = (state, { type, payload }) => {
  console.log("state: ", type, payload, state);
  switch (type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: !state?.loading,
      };
    case "SET_COMPANIES":
      return {
        ...state,
        companies: payload,
      };
    default:
      return state;
  }
};

export default reducer;
