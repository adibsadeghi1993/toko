const reducer = (state, { type, payload }) => {
  console.log("state: ", type, payload);
  switch (type) {
    case "SET_BLOGS":
      return {
        ...state,
        blogs: payload,
      };
    default:
      return state;
  }
};

export default reducer;
