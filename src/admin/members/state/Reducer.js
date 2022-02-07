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
    case "SET_DELETE_USER":
      return {
        ...state,
        details_user: {
          ...state?.details_user,
          is_active: !state?.details_user?.is_active,
        },
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
    case "SET_UPDATE_DETAILS":
      return {
        ...state,
        details_user_update: Object.assign(state.details_user_update || {}, {
          [payload.key]: payload.value,
        }),
      };
    case "SET_UPDATE_DETAILS_SUBSET":
      return {
        ...state,
        details_subset_user_update: Object.assign(
          state.details_subset_user_update || {},
          {
            [payload.key]: payload.value,
          }
        ),
      };
    case "SET_SEARCH":
      return {
        ...state,
        search: payload,
      };
    case "CLEAR_UPDATE_USER":
      return {
        ...state,
        details_user_update: {},
      };
    case "CLEAR_UPDATE_SUBSET":
      return {
        ...state,
        details_subset_user_update: {},
      };
    case "SET_PROVICES":
      return {
        ...state,
        province: payload,
      };
    case "SET_CITY":
      return {
        ...state,
        city: payload,
      };
    default:
      return state;
  }
};

export default reducer;
