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
    case "SET_LOGO_FILE":
      return {
        ...state,
        logo: payload,
      };
    case "SET_COMPANY_NAME":
      return {
        ...state,
        company_name: payload,
      };
    case "SET_ACTIVE":
      return {
        ...state,
        active: payload,
      };
    default:
      return state;
  }
};

export default reducer;
