import React, { useReducer, useCallback, useContext } from "react";
import { SessionContext } from "shared/system-controls/session/SessionProvider";
import PaymentsReducer from "./PaymentsReducer";
import { STASTUS, DEFAULT_PAGE_NUMBER, DEFAULT_ROW } from "config/constant";

export const PaymentsContext = React.createContext();
const PaymentsState = ({ children }) => {
  const insurances = [
    {
      بازاریاب: "پریا دهقان",
      "بیمه گذار": "محسن دهقان",
      "مبلغ قسط": "1.200.000",
      "رشته بیمه": "بیمه عمر",
      "تاریخ سررسید": "1400/10/09",
      "شرکت بیمه نامه": "1234566",
      "کارمزد پیشبینی": "2.000.000",
      "شماره قسط": "",
      "تاریخ واریز قسط": "",
      "کارمزد دریافتی از شرکت": "",
    },
    {
      بازاریاب: "پریا دهقان",
      "بیمه گذار": "محسن دهقان",
      "مبلغ قسط": "1.200.000",
      "رشته بیمه": "بیمه درمان",
      "تاریخ سررسید": "1400/10/09",
      "شرکت بیمه نامه": "1234566",
      "کارمزد پیشبینی": "2.000.000",
      "شماره قسط": "",
      "تاریخ واریز قسط": "",
      "کارمزد دریافتی از شرکت": "",
    },
    {
      بازاریاب: "پریا دهقان",
      "بیمه گذار": "محسن دهقان",
      "مبلغ قسط": "1.200.000",
      "رشته بیمه": "بیمه مسئولیت",
      "تاریخ سررسید": "1400/10/09",
      "شرکت بیمه نامه": "1234566",
      "کارمزد پیشبینی": "2.000.000",
      "شماره قسط": "",
      "تاریخ واریز قسط": "",
      "کارمزد دریافتی از شرکت": "",
    },
    {
      بازاریاب: "پریا دهقان",
      "بیمه گذار": "محسن دهقان",
      "مبلغ قسط": "1.200.000",
      "رشته بیمه": "بیمه درمان",
      "تاریخ سررسید": "1400/10/09",
      "شرکت بیمه نامه": "1234566",
      "کارمزد پیشبینی": "2.000.000",
      "شماره قسط": "1234566",
      "تاریخ واریز قسط": "1400/10/09",
      "کارمزد دریافتی از شرکت": "10000",
    },
    {
      بازاریاب: "پریا دهقان",
      "بیمه گذار": "محسن دهقان",
      "مبلغ قسط": "1.200.000",
      "رشته بیمه": "بیمه عمر",
      "تاریخ سررسید": "1400/10/09",
      "شرکت بیمه نامه": "1234566",
      "کارمزد پیشبینی": "2.000.000",
      "شماره قسط": "45678",
      "تاریخ واریز قسط": "1400/10/09",
      "کارمزد دریافتی از شرکت": "10000",
    },
  ];

  const differences = [
    {
      "شماره بیمه نامه": "2334432211",
      "مقدار مغایرت": "1.000.000",
      شرکت: "خاورمیانه",
    },
  ];
  const { _axios } = useContext(SessionContext);

  const initialState = {
    insurances: insurances,
    insurance_name: "همه",
    search_name: "",
    // insurance_show: false,
    insurance: "",
    number: "",
    // insurance_show: false,
    FromTime: "",
    ToTime: "",
    differences: differences,
  };
  const [state, dispatch] = useReducer(PaymentsReducer, initialState);

  const getPayments = useCallback(
    async ({
      page = DEFAULT_PAGE_NUMBER,
      product_category_id = undefined,
      row = DEFAULT_ROW,
      installment_expected_date_after = undefined,
      installment_expected_date_before = undefined,
    } = {}) => {
      // console.log("role_id::::::::::::::::::", role_id);
      try {
        dispatch({ type: "SET_LOADING" });
        let res = await _axios().get(`admin_panel/installment/search`, {
          params: {
            page,
            product_category_id,
            row,
            installment_expected_date_after,
            installment_expected_date_before,
          },
        });
        console.log("hi", res);
        // console.log("hi", res.data.result);
        if (res.data && res.status === 200) {
          dispatch({ type: "SET_INSTALLMENT", payload: res.data });
        }
        dispatch({ type: "SET_LOADING" });
      } catch (e) {
        dispatch({ type: "SET_LOADING" });
        console.log("e fetch memmbers:", e);
      }
    },
    [_axios, dispatch]
  );
  const getProductCategories = useCallback(async () => {
    try {
      let res = await _axios().get("admin_panel/product/categories");
      console.log("cat", res);
      if (res.status === 200) {
        dispatch({ type: "SET_PRODUCT_CATEGORIES", payload: res.data });
      }
    } catch (e) {
      console.log("e::::", e);
    }
  }, [_axios, dispatch]);
  return (
    <PaymentsContext.Provider
      value={{
        ...state,
        dispatch,
        getPayments,
        getProductCategories,
      }}
    >
      {children}
    </PaymentsContext.Provider>
  );
};

export default PaymentsState;
