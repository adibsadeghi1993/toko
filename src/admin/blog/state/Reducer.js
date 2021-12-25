const reducer = (state, { type, payload }) => {
  console.log("state: ", type, payload);
  switch (type) {
    case "SET_BLOGS":
      return {
        ...state,
        blogs: payload,
      };
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
