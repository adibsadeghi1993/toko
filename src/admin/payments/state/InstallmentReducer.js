const InstallmentReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_INSTALLMENTS":
      return {
        ...state,
        installments: payload,
      };

    case "SET_INSTALLMENT_DETAILS":
      return {
        ...state,
        installmentDetails: payload,
      };

    case "SET_INSURANCE_CATEGORIES":
      return {
        ...state,
        insuranceCategories: payload,
      };

    case "TOGGLE_SHOW_INSURANCE":
      return {
        ...state,
        showInsurance: payload,
      };

    case "SET_INSURANCE":
      return {
        ...state,
        insurance: payload,
      };

    case "SET_INSURANCE_NAME":
      return {
        ...state,
        insuranceName: payload,
      };

    case "SET_INSURANCE_STATUSES":
      return {
        ...state,
        insuranceStatuses: payload,
      };

    case "TOGGLE_SHOW_STATUS":
      return {
        ...state,
        showStatus: payload,
      };

    case "SET_STATUS_NAME":
      return {
        ...state,
        statusName: payload,
      };

    case "SET_STATUS":
      return {
        ...state,
        status: payload,
      };

    case "SET_QUERY":
      return {
        ...state,
        query: payload,
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

    case "SET_ID_DISPLAY":
      return {
        ...state,
        displayId: payload,
      };

    case "RESET":
      return {
        ...state,
        // sale_id: undefined,
        installmentDetails: undefined,
      };

    default:
      return state;
  }
};

export default InstallmentReducer;
