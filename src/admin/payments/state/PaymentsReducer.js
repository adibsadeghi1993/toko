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
    case "SET_INSURANCE_SHOW":
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
    case "SET_PRODUCT_CATEGORIES":
      return {
        ...state,
        productCategory: payload,
      };
    default:
      return state;
  }
};

export default PaymentsReducer;
