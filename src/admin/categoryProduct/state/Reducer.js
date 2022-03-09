const reducer = (state, { type, payload }) => {
  console.log("state: ", type, payload, state);
  switch (type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: !state?.loading,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        categories: payload,
      };
    case "SET_CREATE_CATEGORY":
      return {
        ...state,
        cr_data: {
          ...state?.cr_data,
          ...payload,
        },
      };
    case "SET_DETAILS_CATEGORY":
      return {
        ...state,
        details: payload,
      };
    case "UPDATE_CATEGORY":
      return {
        ...state,
        details: {
          ...state?.details,
          ...payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
