const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_INFORMATION":
      return {
        ...state,
        full_name: payload,
      };
    default:
      return state;
  }
};

export default reducer;
