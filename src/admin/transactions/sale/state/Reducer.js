const Trans_saleReducer = (state, { type, payload }) => {
  switch (type) {
    case "set_insurance_name":
      return {
        ...state,
        insurance_name: payload,
      };
    case "set_insurance":
      return {
        ...state,
        insurance: payload,
      };
    // todo: check this comment
    case "set_number":
      return {
        ...state,
        number: payload,
      };
    case "set_insurance_show":
      return {
        ...state,
        insurance_show: payload,
      };
    case "set_FromTime":
      return {
        ...state,
        FromTime: payload,
      };
    case "set_insurance_show":
      return {
        ...state,
        insurance_show: payload,
      };
    case "set_ToTime":
      return {
        ...state,
        ToTime: payload,
      };
    //new
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        query_search: payload,
      };
    case "SET_PRODUCT_CATEGORIES":
      return {
        ...state,
        product_categories: payload,
      };
    default:
      return state;
  }
};

export default Trans_saleReducer;
