const SaleReducer = (state, { type, payload }) => {
  switch (type) {
    case "set_insurance_name":
      return {
        ...state,
        insurance_name: payload,
      };
    case "set_insurance_status":
      return {
        ...state,
        insurance_status: payload,
      };
    case "set_search_name":
      return {
        ...state,
        search_name: payload,
      };
    case "set_insurance":
      return {
        ...state,
        insurance: payload,
      };
    case "SET_STATUS":
      return {
        ...state,
        status_id: payload,
      };
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
    case "set_status_show":
      return {
        ...state,
        status_show: payload,
      };
    case "set_FromTime":
      return {
        ...state,
        FromTime: payload,
      };
    case "set_ToTime":
      return {
        ...state,
        ToTime: payload,
      };
    case "set_showEdit":
      return {
        ...state,
        showEdit: payload,
      };
    case "set_showPayment":
      return {
        ...state,
        showPayment: payload,
      };
    case "set_showPaymentTable":
      return {
        ...state,
        showPaymentTable: payload,
      };
    case "set_PaymentDay":
      return {
        ...state,
        payment_date: { ...state.payment_date, day: payload },
      };
    case "set_PaymentMonth":
      return {
        ...state,
        payment_date: { ...state.payment_date, month: payload },
      };
    case "set_PaymentYear":
      return {
        ...state,
        payment_date: { ...state.payment_date, year: payload },
      };

    case "delete_payment":
      console.log(payload);
      const _payments = state.payments.filter(
        (payment) => payment.id !== payload
      );
      return {
        ...state,
        payments: [..._payments],
      };

    // new state save
    case "SET_SALES":
      return {
        ...state,
        sales: payload,
      };
    case "SET_PRODUCT_CATEGORIES":
      return {
        ...state,
        product_category: payload,
      };
    case "SET_STATUSES":
      return {
        ...state,
        statuses: payload,
      };
    case "SET_DETAILS":
      return {
        ...state,
        details: payload,
      };
    case "SET_ID_DISPLAY":
      return {
        ...state,
        _sale_id: payload,
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
    case "SET_STEP":
      return {
        ...state,
        step: payload,
      };
    case "SET_REAL":
      return {
        ...state,
        real_txt: payload,
      };
    case "SET_INSURER_TREATMENT":
      return {
        ...state,
        insurer_treatment: payload,
      };
    case "SET_CLEAR_STATE":
      return {
        ...state,
        step: 1,
        real_txt: undefined,
        insurer_treatment: false,
      };
    case "SET_FAMILY_PERSON_INFO":
      return {
        ...state,
        _family_person_info: payload,
      };
    case "OPEN_MODAL_PAYMENT_MANUAL":
      return {
        ...state,
        modal_payment_manual: payload,
      };
    case "SET_CONSTRUCT_INSTALLMENT":
      return {
        ...state,
        construct_installment_list: payload,
      };
    case "RESET_DATA":
      return {
        ...state,
        _sale_id: undefined,
        _family_person_info: undefined,
        insurer_treatment: false,
        step: 1,
        real_txt: undefined,
        showPayment: undefined,
      };

    case "SET_UPDATE_PAGE":
      return {
        ...state,
        update_page: state?.update_page ? state?.update_page + 1 : 1,
      };
    case "OPEN_MODAL_SCANFILE_MANUAL":
      return {
        ...state,
        modal_scan_file: payload,
      };
    default:
      return state;
  }
};

export default SaleReducer;
