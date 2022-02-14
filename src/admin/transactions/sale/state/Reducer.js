// const Trans_saleReducer = (state, { type, payload }) => {
//   switch (type) {
//     case "set_insurance_name":
//       return {
//         ...state,
//         insurance_name: payload,
//       };
//     case "set_insurance":
//       return {
//         ...state,
//         insurance: payload,
//       };
//     // todo: check this comment
//     case "set_number":
//       return {
//         ...state,
//         number: payload,
//       };
//     case "set_insurance_show":
//       return {
//         ...state,
//         insurance_show: payload,
//       };
//     case "set_FromTime":
//       return {
//         ...state,
//         FromTime: payload,
//       };
//     case "set_insurance_show":
//       return {
//         ...state,
//         insurance_show: payload,
//       };
//     case "set_ToTime":
//       return {
//         ...state,
//         ToTime: payload,
//       };
//     //new
//     case "SET_SEARCH_QUERY":
//       return {
//         ...state,
//         query_search: payload,
//       };
//     case "SET_PRODUCT_CATEGORIES":
//       return {
//         ...state,
//         product_categories: payload,
//       };

//     case 'GET_SALE_RANSACTION':
//       return {

//       }
//     default:
//       return state;
//   }
// };

// export default Trans_saleReducer;

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

    default:
      return state;
  }
};

export default saleTransactionsReducer;
