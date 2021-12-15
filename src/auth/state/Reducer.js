const reducer = (state, { type, payload }) => {
  console.log("state: ", type, payload, state);
  switch (type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: !state.loading,
      };
    case "SET_VERIFY":
      return {
        ...state,
        step: "verify",
      };
    case "SET_PHONE_NUMBER":
      return {
        ...state,
        phoneNumber: payload,
      };
    default:
      return state;
  }
};

export default reducer;
