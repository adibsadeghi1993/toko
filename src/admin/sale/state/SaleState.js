import React, { useCallback, useContext, useReducer } from "react";
import { useHistory } from "react-router";
import { DEFAULT_PAGE_NUMBER, DEFAULT_ROW, STASTUS } from "config/constant";
import { SessionContext } from "shared/system-controls/session/SessionProvider";
import SaleReducer from "./SaleReducer";

export const SaleContext = React.createContext();

const SaleState = ({ children }) => {
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
    filter: {},
  };
  const [state, dispatch] = useReducer(SaleReducer, {});
  const { _axios } = useContext(SessionContext);

  const history = useHistory();

  const getSalesSearch = useCallback(
    async ({
      end_date = undefined,
      page = DEFAULT_PAGE_NUMBER,
      product_category_id = undefined,
      q = undefined,
      row = DEFAULT_ROW,
      start_date = undefined,
      status_id = undefined,
    } = {}) => {
      const params = new URLSearchParams(window.location.search);
      console.log("params:::", params.get("page"));
      page =
        (parseInt(params.get("page")) &&
          params.get("page") > 0) ?
          params.get("page") : page;
      console.log("page:::", page);
      end_date = end_date || undefined;
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
        if (res.status === STASTUS.success) {
          dispatch({ type: "SET_STATUSES", payload: res.data });
        }
      } catch (e) {
        console.log("e::::", e);
      }
    },
    [_axios, dispatch]
  );

  /**
   * @description get details sale
   * @returns Array
   * @param {number} sale_id
   * @param {number} category_id
   */
  const getDetailsSales = useCallback(
    async (sale_id) => {
      try {
        dispatch({ type: "SET_DETAILS", payload: [] });
        dispatch({ type: "SET_ID_DISPLAY", payload: sale_id });
        let res = await _axios().get("admin_panel/sales/details", {
          params: {
            sale_id,
          },
        });
        console.log("rea:", res);
        dispatch({ type: "SET_DETAILS", payload: res.data });
      } catch (e) {
        console.log("e:", e);
      }
    },
    [_axios, dispatch]
  );

  /**
   * @description get ref sale
   * @returns Array
   * @param {number} sale_id
   */
  const getRefSale = useCallback(
    async (sale_id) => {
      try {
        let res = await _axios().get("admin_panel/ref", {
          params: {
            sale_id,
          },
        });
        console.log("rea:", res);
        // dispatch({ type: "SET_DETAILS", payload: res.data });
      } catch (e) {
        console.log("e:", e);
      }
    },
    [_axios, dispatch]
  );

  /**
   * @description reverse text status by id
   * @param parms @id
   * @return {string} status
   */
  const reverseStatusText = useCallback(
    (id) => {
      // if (state?.statuses) return "-";
      console.log(
        `id:${id}`,
        state?.statuses?.filter((item) => item.id === id)
      );
      let find = state?.statuses?.filter((item) => item.id === id);
      return find?.length && find[0]?.title;
    },
    [state]
  );
  return (
    <SaleContext.Provider
      value={{
        ...state,
        dispatch,
        getSalesSearch,
        getProductCategories,
        getStatusProduct,
        getDetailsSales,
        getRefSale,
        reverseStatusText,
      }}
    >
      {children}
    </SaleContext.Provider>
  );
};

export default SaleState;
