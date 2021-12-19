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
    case "SET_ROLE_FILTER":
      return {
        ...state,
        role_id: payload,
      };
    case "SET_SUBSETINFO_USER":
      return {
        ...state,
        subset_info: payload,
      };
    case "SET_SUBSET_USER":
      return {
        ...state,
        subset: payload,
      };
    case "SET_NETWORKCHART_USER":
      return {
        ...state,
        network_chart: payload,
      };
    default:
      return state;
  }
};

export default reducer;
