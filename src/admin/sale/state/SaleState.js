import { STASTUS } from "config/constant";
import React, { useCallback, useContext, useReducer } from "react";
import { SessionContext } from "shared/system-controls/session/SessionProvider";
import SaleReducer from "./SaleReducer";

export const SaleContext = React.createContext();

const SaleState = ({ children }) => {
  const insurances = [
    {
      محصول: "بیمه عمر",
      وضعیت: "استعلام",
      بازاریاب: "پریا دهقان",
      "بیمه گذار": "شقایق دهقان",
      "شماره تماس": 9121223456,
      "شیوه پرداخت": "نقدی",
      "حق بیمه": 100000,
      "تاریخ ایجاد": "1400/08/05",
      status_id: 100,
      "#": "جزییات",
    },
    {
      محصول: "بیمه درمان",
      وضعیت: "پرداخت شده",
      بازاریاب: "محسن دهقان",
      "بیمه گذار": "پریا دهقان",
      "شماره تماس": 9121111111,
      "شیوه پرداخت": "نقدی",
      " حق بیمه": 200000,
      "تاریخ ایجاد": "1400/08/06",
      status_id: 105,
      "#": "جزییات",
    },
    {
      محصول: "بیمه درمان",
      وضعیت: "انتظار پرداخت",
      بازاریاب: "حسن نبوی1",
      "بیمه گذار": "اکبر نبوی",
      "شماره تماس": 9122222222,
      "شیوه پرداخت": "اقساطی",
      " حق بیمه": 300000,
      "تاریخ ایجاد": "1400/08/07",
      status_id: 120,
      "#": "جزییات",
    },
    {
      محصول: "بیمه درمان",
      وضعیت: "انتظار تکمیل اطلاعات",
      بازاریاب: "حسن نبوی2",
      "بیمه گذار": "اکبر نبوی",
      "شماره تماس": 9122222222,
      "شیوه پرداخت": "اقساطی",
      " حق بیمه": 300000,
      "تاریخ ایجاد": "1400/08/07",
      status_id: 120,
      "#": "جزییات",
    },
    {
      محصول: "بیمه درمان",
      وضعیت: "بررسی کارشناس",
      بازاریاب: "حسن نبوی3",
      "بیمه گذار": "اکبر نبوی",
      "شماره تماس": 9122222222,
      "شیوه پرداخت": "اقساطی",
      " حق بیمه": 300000,
      "تاریخ ایجاد": "1400/08/07",
      status_id: 120,
      "#": "جزییات",
    },
    {
      محصول: "بیمه درمان",
      وضعیت: "صادر شد",
      بازاریاب: "حسن نبوی4",
      "بیمه گذار": "اکبر نبوی",
      "شماره تماس": 9122222222,
      "شیوه پرداخت": "اقساطی",
      " حق بیمه": 300000,
      "تاریخ ایجاد": "1400/08/07",
      status_id: 120,
      "#": "جزییات",
    },
    {
      محصول: "بیمه مسئولیت",
      وضعیت: "انتظار تکمیل اطلاعات",
      بازاریاب: "مهدی مجیدی",
      "بیمه گذار": "محمد مجیدی",
      "شماره تماس": 9123333333,
      "شیوه پرداخت": "...",
      " حق بیمه": 400000,
      "تاریخ ایجاد": "1400/08/08",
      status_id: 130,
      "#": "جزییات",
    },
    {
      محصول: "بیمه مسئولیت",
      وضعیت: "بررسی کارشناس",
      بازاریاب: "نیلوفر یزدانی",
      "بیمه گذار": "رضا یزدانی",
      "شماره تماس": 9124444444,
      "شیوه پرداخت": "...",
      " حق بیمه": 500000,
      "تاریخ ایجاد": "1400/08/09",
      status_id: 140,
      "#": "جزییات",
    },
    {
      محصول: "بیمه مسئولیت",
      وضعیت: "بررسی کارشناس",
      بازاریاب: "نیلوفر یزدانی",
      "بیمه گذار": "رضا یزدانی",
      "شماره تماس": 9124444444,
      "شیوه پرداخت": "...",
      " حق بیمه": 500000,
      "تاریخ ایجاد": "1400/08/09",
      status_id: 140,
      "#": "جزییات",
    },
    {
      محصول: "بیمه عمر",
      وضعیت: "سفارش اولیه",
      بازاریاب: "نیلوفر یزدانی",
      "بیمه گذار": "رضا یزدانی",
      "شماره تماس": 9124444444,
      "شیوه پرداخت": "نقدی",
      " حق بیمه": 500000,
      "تاریخ ایجاد": "1400/08/09",
      status_id: 140,
      "#": "جزییات",
    },
    {
      محصول: "بیمه درمان",
      وضعیت: "انتظار صدور",
      بازاریاب: "نیلوفر یزدانی",
      "بیمه گذار": "رضا یزدانی",
      "شماره تماس": 9124444444,
      "شیوه پرداخت": "نقدی",
      " حق بیمه": 500000,
      "تاریخ ایجاد": "1400/08/09",
      status_id: 140,
      "#": "جزییات",
    },
  ];

  const payments = [
    {
      سررسید: "1400/03/09",
      id: "0",
      مبلغ: "6000000",
      وضعیت: "پرداخت نشده",
      "تاریخ پیوست": "",
      "فایل پیوست پرداخت": "ندارد",
    },
    {
      سررسید: "1400/06/10",
      id: "1",
      مبلغ: "6000000",
      وضعیت: "پرداخت نشده",
      "تاریخ پیوست": "",
      "فایل پیوست پرداخت": "ندارد",
    },
    {
      سررسید: "1400/09/09",
      id: "2",
      مبلغ: "6000000",
      وضعیت: "پرداخت نشده",
      "تاریخ پیوست": "",
      "فایل پیوست پرداخت": "ندارد",
    },
    {
      سررسید: "1400/12/09",
      id: "3",
      مبلغ: "6000000",
      وضعیت: "پرداخت نشده",
      "تاریخ پیوست": "",
      "فایل پیوست پرداخت": "ندارد",
    },
  ];

  const treatment_people = [
    {
      نام: "پریا دهقان",
      نام_پدر: "تست",
      نسبت: "بیمه گذار",
      درصد_فرانشیز: "تست",
      تاریخ_تولد: "تست",
      جنسیت: "تست",
      بیمه_گر_پایه: "تست",
      بیمه_زندگی: "تست",
    },
    {
      نام: "پرستو دهقان",
      نام_پدر: "تست",
      نسبت: "خواهر",
      درصد_فرانشیز: "تست",
      تاریخ_تولد: "تست",
      جنسیت: "تست",
      بیمه_گر_پایه: "تست",
      بیمه_زندگی: "تست",
    },
    {
      نام: "پرستو دهقان",
      نام_پدر: "تست",
      نسبت: "خواهر",
      درصد_فرانشیز: "تست",
      تاریخ_تولد: "تست",
      جنسیت: "تست",
      بیمه_گر_پایه: "تست",
      بیمه_زندگی: "تست",
    },
  ];

  const initialState = {
    insurances: insurances,
    insurance_name: "همه",
    insurance_status: "همه",
    search_name: "",
    insurance: "",
    statuses: "",
    status: "",
    number: "",
    insurance_show: false,
    status_show: false,
    FromTime: "",
    ToTime: "",
    showEdit: false,
    showPayment: false,
    showPaymentTable: false,
    payments: payments,
    payment_date: { day: "", month: "", year: "" },
    treatment_people: treatment_people,
    insurer_treatment: false,
  };
  const [state, dispatch] = useReducer(SaleReducer, initialState);
  const { _axios } = useContext(SessionContext);

  const getSalesSearch = useCallback(
    async ({
      end_date,
      page,
      product_category_id,
      q,
      row,
      start_date,
      status_id,
    }) => {
      try {
        let res = await _axios().get("admin_panel/sales/search", {
          params: {
            end_date,
            page,
            product_category_id,
            q,
            row,
            start_date,
            status_id,
          },
        });
        console.log("res", res);
        if (res.status === STASTUS.success) {
          dispatch({ type: "SET_SALES", payload: res.data });
        }
      } catch (e) {
        console.log("e::::", e);
      }
    },
    [_axios, dispatch]
  );

  //get product
  const getProductCategories = useCallback(async () => {
    try {
      let res = await _axios().get("admin_panel/product/categories");
      console.log("res", res);
      if (res.status === STASTUS.success) {
        dispatch({ type: "SET_PRODUCT_CATEGORIES", payload: res.data });
      }
    } catch (e) {
      console.log("e::::", e);
    }
  }, [_axios, dispatch]);

  //get status product
  const getStatusProduct = useCallback(
    async (category_id) => {
      try {
        let res = await _axios().get("admin_panel/sales/statuses", {
          params: {
            category_id,
          },
        });
        console.log("res", res);
        if (res.status === STASTUS.success) {
          dispatch({ type: "SET_STATUSES", payload: res.data });
        }
      } catch (e) {
        console.log("e::::", e);
      }
    },
    [_axios, dispatch]
  );

  return (
    <SaleContext.Provider
      value={{
        ...state,
        dispatch,
        getSalesSearch,
        getProductCategories,
        getStatusProduct,
      }}
    >
      {children}
    </SaleContext.Provider>
  );
};

export default SaleState;
