const SaleReducer = (state, action) => {
  switch (action.type) {
    case "set_insurance_name":
      return {
        ...state,
        insurance_name: action.payload,
      };
    case "set_insurance_status":
      return {
        ...state,
        insurance_status: action.payload,
      };
    case "set_search_name":
      return {
        ...state,
        search_name: action.payload,
      };
    case "set_insurance":
      return {
        ...state,
        insurance: action.payload,
      };

    case "SET_STATUS":
      return {
        ...state,
        status_id: action.payload,
      };
    case "set_number":
      return {
        ...state,
        number: action.payload,
      };
    case "set_insurance_show":
      return {
        ...state,
        insurance_show: action.payload,
      };
    case "set_status_show":
      return {
        ...state,
        status_show: action.payload,
      };
    case "set_FromTime":
      return {
        ...state,
        FromTime: action.payload,
      };
    case "set_ToTime":
      return {
        ...state,
        ToTime: action.payload,
      };
    case "set_showEdit":
      return {
        ...state,
        showEdit: action.payload,
      };
    case "set_showPayment":
      return {
        ...state,
        showPayment: action.payload,
      };
    case "set_showPaymentTable":
      return {
        ...state,
        showPaymentTable: action.payload,
      };
    case "set_PaymentDay":
      return {
        ...state,
        payment_date: { ...state.payment_date, day: action.payload },
      };
    case "set_PaymentMonth":
      return {
        ...state,
        payment_date: { ...state.payment_date, month: action.payload },
      };
    case "set_PaymentYear":
      return {
        ...state,
        payment_date: { ...state.payment_date, year: action.payload },
      };
    case "change_payment":
      const _payment = state.payments.filter(
        (payment) => payment.id == action.payload.id
      );
      _payment[0]["سررسید"] = action.payload.date;
      _payment[0]["مبلغ"] = action.payload.amount;
      return state;
    case "set_insurer_treatment":
      return {
        ...state,
        insurer_treatment: action.payload,
      };
    case "delete_payment":
      console.log(action.payload);
      const _payments = state.payments.filter(
        (payment) => payment.id !== action.payload
      );
      return {
        ...state,
        payments: [..._payments],
      };

    // new state save
    case "SET_SALES":
      return {
        ...state,
        sales: action.payload,
      };
    case "SET_PRODUCT_CATEGORIES":
      return {
        ...state,
        product_category: action.payload,
      };
    case "SET_STATUSES":
      return {
        ...state,
        statuses: action.payload,
      };
    default:
      return state;
  }
};

export default SaleReducer;
