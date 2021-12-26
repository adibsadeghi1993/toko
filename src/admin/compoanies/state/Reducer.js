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
    case "SET_DETAILS_COMPANY":
      return {
        ...state,
        details: payload,
      };
    case "UPDATE_CN_NAME":
      return {
        ...state,
        details: {
          ...state?.details,
          name: payload,
        },
      };
    case "UPDATE_CN_ENABLE":
      return {
        ...state,
        details: {
          ...state?.details,
          enable: payload,
        },
      };
    case "UPDATE_LOGO_FILE":
      return {
        ...state,
        details: {
          ...state?.details,
          logo_new: payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
