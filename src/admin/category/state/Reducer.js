const reducer = (state, { type, payload }) => {
  console.log("state: ", type, payload, state);
  switch (type) {
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: payload,
      };
    case "SET_SEO_TITLE":
      return {
        ...state,
        seo_title: payload,
      };
    case "SET_SEO_NAME":
      return {
        ...state,
        seo_name: payload,
      };
    case "SET_SEO_DESCRIPTION":
      return {
        ...state,
        seo_description: payload,
      };
    case "SET_TITLE":
      return {
        ...state,
        title: payload,
      };
    case "SET_BODY":
      return {
        ...state,
        body: payload,
      };
    default:
      return state;
  }
};

export default reducer;
