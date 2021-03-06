const reducer = (state, { type, payload }) => {
  console.log("state: ", type, payload);
  switch (type) {
    case "SET_PERCENTS":
      return {
        ...state,
        percents: payload,
      };
    case "SET_DATA_PERCENT":
      let data = state?.update_percent;
      if (data?.filter((item) => item.id === payload[0].id).length > 0) {
        console.log(
          "find",
          state?.update_percent?.filter((item) => item.id === payload[0].id)
        );
        data[
          state?.update_percent?.findIndex(
            (item) => item.id === payload[0].id
          ) || 0
        ] = payload[0];
        return {
          ...state,
          update_percent: data,
        };
      } else {
        return {
          ...state,
          update_percent: [...(state?.update_percent || []), payload[0]],
        };
      }
    case "SET_NAME":
      return {
        ...state,
        name: payload,
      };
    case "SET_CODE":
      return {
        ...state,
        code: payload,
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        description: payload,
      };
    case "SET_CAMPAIGNS":
      return {
        ...state,
        campaigns: payload,
      };
    case "SET_CAMPAIGN":
      return {
        ...state,
        campaign: payload,
      };
    case "UPDATE_CAMPAIGN":
      return {
        ...state,
        campaign: {
          ...state?.campaign,
          ...payload,
        },
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: {
          ...state?.filter,
          ...payload,
        },
      };
    case "CLEAR_FILTER":
      return {
        ...state,
        filter: {},
      };
    default:
      return state;
  }
};

export default reducer;
