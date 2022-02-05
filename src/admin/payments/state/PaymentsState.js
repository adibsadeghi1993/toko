import React, { useReducer, useCallback, useContext } from "react";
import PaymentsReducer from "./PaymentsReducer";
import { SessionContext } from "shared/system-controls/session/SessionProvider";

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
    insurance_show: false,
    insurance: "",
    number: "",
    insurance_show: false,
    FromTime: "",
    ToTime: "",
    differences: differences,
  };
  const [state, dispatch] = useReducer(PaymentsReducer, initialState);
  const getPayments = useCallback(
    async (page = 1, row = 10, product_category_id = null) => {
      // console.log("role_id::::::::::::::::::", role_id);
      try {
        dispatch({ type: "SET_LOADING" });
        let res = await _axios().get(`admin_panel/installment/search`, {
          params: {
            page,
            row,
            product_category_id,
          },
        });
        console.log("hi", res);
        // console.log("hi", res.data.result);
        if (res.data && res.status === 200) {
          dispatch({ type: "SET_INSTALLMENT", payload: res.data.result });
        }
        dispatch({ type: "SET_LOADING" });
      } catch (e) {
        dispatch({ type: "SET_LOADING" });
        console.log("e fetch memmbers:", e);
      }
    },
    [_axios, dispatch]
  );
  return (
    <PaymentsContext.Provider
      value={{
        ...state,
        dispatch,
        getPayments,
      }}
    >
      {children}
    </PaymentsContext.Provider>
  );
};

export default PaymentsState;
