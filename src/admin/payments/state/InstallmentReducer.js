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

    /////////////////////////////////
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
    case "SET_NUMBER":
      return {
        ...state,
        number: payload,
      };
    case "set_status_show":
      return {
        ...state,
        status_show: payload,
      };
    case "set_search_name":
      return {
        ...state,
        search_name: payload,
      };
    case "set_insurance_show":
      return {
        ...state,
        insurance_show: payload,
      };
    case "SET_FROMTIME":
      return {
        ...state,
        FromTime: payload,
      };
    // case 'SET_INSURANCE_SHOW':
    // return {
    //     ...state,
    //     insurance_show : action.payload
    // }
    case "SET_TOTIME":
      return {
        ...state,
        ToTime: payload,
      };
    case "SET_DEMONSTRATE":
      // only for demonstraion
      state.insurances[0]["شماره قسط"] = "12345";
      state.insurances[1]["شماره قسط"] = "45678";
      state.insurances[2]["شماره قسط"] = "15935";

      state.insurances[0]["تاریخ واریز قسط"] = "1400/10/27";
      state.insurances[1]["تاریخ واریز قسط"] = "1400/10/28";
      state.insurances[2]["تاریخ واریز قسط"] = "1400/10/29";

      state.insurances[0]["کارمزد دریافتی از شرکت"] = "10000";
      state.insurances[1]["کارمزد دریافتی از شرکت"] = "20000";
      state.insurances[2]["کارمزد دریافتی از شرکت"] = "30000";

      state.differences.push({
        "شماره بیمه نامه": "123456789",
        "مقدار مغایرت": "2.000.000",
        شرکت: "خاورمیانه",
      });
      return {
        ...state,
      };
    case "set_insurance_status":
      return {
        ...state,
        insurance_status: payload,
      };

    case "SET_PRODUCT_CATEGORY_ID":
      return {
        ...state,
        productCategoryid: payload,
      };

    case "set_status":
      return {
        ...state,
        status_id: payload,
      };

    default:
      return state;
  }
};

export default InstallmentReducer;
