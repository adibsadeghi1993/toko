import React, { useCallback, useContext, useReducer } from "react";
import { SessionContext } from "shared/system-controls/session/SessionProvider";
import Trans_saleReducer from "./Reducer";

export const TransActionSaleContext = React.createContext();

const Tran_saleState = ({ children }) => {
  const insurances = [
    {
      بازاریاب: "تست",
      "بیمه گذار": "پریا دهقان",
      "مبلغ قسط": "1.200.000",
      "رشته بیمه": "بیمه عمر",
      "شرکت بیمه": "خاورمیانه",
      "شماره بیمه نامه": "123456",
      "سمت در شبکه فروش": "کارشناس فروش",
      "شماره قسط": "2",
      "تاریخ واریز قسط": "1401/10/09",
      "نهایی شده": "بله",
    },
    {
      بازاریاب: "تست",
      "بیمه گذار": "پریا دهقان",
      "مبلغ قسط": "1.200.000",
      "رشته بیمه": "بیمه مسئولیت",
      "شرکت بیمه": "خاورمیانه",
      "شماره بیمه نامه": "123456",
      "سمت در شبکه فروش": "کارشناس فروش",
      "شماره قسط": "2",
      "تاریخ واریز قسط": "1401/10/09",
      "نهایی شده": "بله",
    },
    {
      بازاریاب: "تست",
      "بیمه گذار": "پریا دهقان",
      "مبلغ قسط": "1.200.000",
      "رشته بیمه": "بیمه درمان",
      "شرکت بیمه": "خاورمیانه",
      "شماره بیمه نامه": "123456",
      "سمت در شبکه فروش": "کارشناس فروش",
      "شماره قسط": "2",
      "تاریخ واریز قسط": "1401/10/09",
      "نهایی شده": "بله",
    },
    {
      بازاریاب: "تست",
      "بیمه گذار": "پریا دهقان",
      "مبلغ قسط": "1.200.000",
      "رشته بیمه": "بیمه عمر",
      "شرکت بیمه": "خاورمیانه",
      "شماره بیمه نامه": "123456",
      "سمت در شبکه فروش": "کارشناس فروش",
      "شماره قسط": "2",
      "تاریخ واریز قسط": "1401/10/09",
      "نهایی شده": "بله",
    },
    {
      بازاریاب: "تست",
      "بیمه گذار": "پریا دهقان",
      "مبلغ قسط": "1.200.000",
      "رشته بیمه": "بیمه مسئولیت",
      "شرکت بیمه": "خاورمیانه",
      "شماره بیمه نامه": "123456",
      "سمت در شبکه فروش": "کارشناس فروش",
      "شماره قسط": "2",
      "تاریخ واریز قسط": "1401/10/09",
      "نهایی شده": "بله",
    },
  ];

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
  };
  const [state, dispatch] = useReducer(Trans_saleReducer, initialState);
  const { _axios } = useContext(SessionContext);

  const getTransActionSale = useCallback(
    async (page_number, row) => {
      try {
        const res = await _axios().get("/admin_panel/finances/search", {
          params: {
            page: page_number,
            row,
          },
        });
      } catch (e) {
        console.log("e:", e);
      }
    },
    [_axios]
  );

  return (
    <TransActionSaleContext.Provider
      value={{
        ...state,
        dispatch,
        getTransActionSale,
      }}
    >
      {children}
    </TransActionSaleContext.Provider>
  );
};

export default Tran_saleState;
