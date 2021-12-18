const reducer = (state, { type, payload }) => {
  console.log("state: ", type, payload, state);
  switch (type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: !state?.loading,
      };
    case "SET_ROLES":
      return {
        ...state,
        roles: payload,
      };
    case "SET_MEMMBERS":
      return {
        ...state,
        memmbers: payload,
      };
    case "SET_DETAILS_USER":
      return {
        ...state,
        details_user: payload,
      };
    default:
      return state;
  }
};

export default reducer;
