const PaymentsReducer = (state, { payload, type }) => {
  switch (type) {
    case "SET_INSURANCE_NAME":
      return {
        ...state,
        insurance_name: payload,
      };
    case "SET_INSTALLMENT":
      // console.log('r', payload.result[0].insurer_full_name)
      return {
        ...state,
        installment: payload,
      };
    case "SET_INSURANCE":
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
    case "SET_PRODUCT_CATEGORIES":
      return {
        ...state,
        productCategory: payload,
      };
      case "SET_PRODUCT_CATEGORY_ID":
      return {
        ...state,
        productCategoryid: payload,
      };
      case "SET_DATE_START":
        return {
          ...state,
          date_start: payload,
        };
      case "SET_DATE_END":
        return {
          ...state,
          date_end: payload,
        };
        case "SET_STATUSES":
          return {
            ...state,
            statuses: payload,
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

export default PaymentsReducer;
