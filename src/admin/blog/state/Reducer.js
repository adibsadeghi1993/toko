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
    case "SET_CATEGORY":
      return {
        ...state,
        category: payload,
      };
    case "SET_SEONAME":
      return {
        ...state,
        seo_name: payload,
      };
    case "SET_SEOTITLE":
      return {
        ...state,
        seo_title: payload,
      };
    case "SET_SEODESCRIPTION":
      return {
        ...state,
        seo_description: payload,
      };
    case "SET_TITLE":
      return {
        ...state,
        title: payload,
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        description: payload,
      };
    case "SET_STATUS":
      return {
        ...state,
        status: payload,
      };
    case "SET_ALT":
      return {
        ...state,
        alt: payload,
      };
    case "SET_TAGS":
      return {
        ...state,
        tags: [...state?.tags, payload],
      };
    default:
      return state;
  }
};

export default reducer;
