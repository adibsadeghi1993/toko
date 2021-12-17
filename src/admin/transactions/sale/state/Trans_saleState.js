import React, { useReducer } from "react";
import Trans_saleReducer from "./Trans_saleReducer";

export const Trans_saleContext = React.createContext();

const Tran_saleState = ({ children }) => {
  const insurances = [
    {
      'بازاریاب':'تست',
      "بیمه گذار": "پریا دهقان",
      "مبلغ قسط": "1.200.000",
      'رشته بیمه': "بیمه عمر",
      'شرکت بیمه': "خاورمیانه",
      'شماره بیمه نامه': "123456",
      'سمت در شبکه فروش': "کارشناس فروش",
      "شماره قسط": "2",
      "تاریخ واریز قسط": "1401/10/09",
      "نهایی شده": "بله",
    },
    {
      'بازاریاب':'تست',
      "بیمه گذار": "پریا دهقان",
      "مبلغ قسط": "1.200.000",
      'رشته بیمه': "بیمه مسئولیت",
      'شرکت بیمه': "خاورمیانه",
      'شماره بیمه نامه': "123456",
      'سمت در شبکه فروش': "کارشناس فروش",
      "شماره قسط": "2",
      "تاریخ واریز قسط": "1401/10/09",
      "نهایی شده": "بله",
    },
    {
      'بازاریاب':'تست',
      "بیمه گذار": "پریا دهقان",
      "مبلغ قسط": "1.200.000",
      'رشته بیمه': "بیمه درمان",
      'شرکت بیمه': "خاورمیانه",
      'شماره بیمه نامه': "123456",
      'سمت در شبکه فروش': "کارشناس فروش",
      "شماره قسط": "2",
      "تاریخ واریز قسط": "1401/10/09",
      "نهایی شده": "بله",
    },
    {
      'بازاریاب':'تست',
      "بیمه گذار": "پریا دهقان",
      "مبلغ قسط": "1.200.000",
      'رشته بیمه': "بیمه عمر",
      'شرکت بیمه': "خاورمیانه",
      'شماره بیمه نامه': "123456",
      'سمت در شبکه فروش': "کارشناس فروش",
      "شماره قسط": "2",
      "تاریخ واریز قسط": "1401/10/09",
      "نهایی شده": "بله",
    },
    {
      'بازاریاب':'تست',
      "بیمه گذار": "پریا دهقان",
      "مبلغ قسط": "1.200.000",
      'رشته بیمه': "بیمه مسئولیت",
      'شرکت بیمه': "خاورمیانه",
      'شماره بیمه نامه': "123456",
      'سمت در شبکه فروش': "کارشناس فروش",
      "شماره قسط": "2",
      "تاریخ واریز قسط": "1401/10/09",
      "نهایی شده": "بله",
    },
  
  ]

  const initialState = {
    insurances: insurances,
    insurance_name: "همه",
    search_name: "",
    insurance_show : false,
    insurance : '',
    number: '',
    insurance_show : false,    
    FromTime: '',
    ToTime: '',
  };


  const [state, dispatch] = useReducer(Trans_saleReducer, initialState);

  return (
    <Trans_saleContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </Trans_saleContext.Provider>
  );
};

export default Tran_saleState;
