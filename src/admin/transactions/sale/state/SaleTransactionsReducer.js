const saleTransactionsReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_SALE_TRANSACTIONS":
      return {
        ...state,
        saleTransactions: payload,
      };
    case "SET_INSURANCE_NAME":
      return {
        ...state,
        insurance_name: payload,
      };
    case "SET_INSURANCE":
      return {
        ...state,
        insurance: payload,
      };
    case "SET_INSURANCE_CATEGORIES":
      return {
        ...state,
        insuranceCategories: payload,
      };

    case "SET_START_DATE":
      return {
        ...state,
        startDate: payload,
      };

    case "SET_END_DATE":
      return {
        ...state,
        endDate: payload,
      };

    case "SET_PAGE":
      return {
        ...state,
        page: payload,
      };

    case "SET_QUERY":
      return {
        ...state,
        query: payload,
      };

    case "TOGGLE_CATEGORIES":
      return {
        ...state,
        showCategories: !state.showCategories,
      };

    case "GET_TRANSACTION_DETAILS":
      return {
        ...state,
        details: payload,
      };

    case "HIDE_DETAILS":
      return {
        ...state,
        hideDetails: payload,
      };

    default:
      return state;
  }
};

export default saleTransactionsReducer;
