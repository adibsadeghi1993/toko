import React, { useCallback, useContext, useEffect, useReducer } from "react";
import { useLocation } from "react-router";
import {
  DEFAULT_PAGE_NUMBER,
  DEFAULT_ROW,
  STASTUS,
  STATUS_INSURANCE_TREATMENT,
  STEP_SALE_TAB,
} from "config/constant";
import { SessionContext } from "shared/system-controls/session/SessionProvider";
import SaleReducer from "./SaleReducer";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export const SaleContext = React.createContext();

const SaleState = ({ children }) => {
  const initialState = {
    step: STEP_SALE_TAB.INFORMATION,
    insurer_treatment: false,
  };
  const [state, dispatch] = useReducer(SaleReducer, initialState);
  const { _axios } = useContext(SessionContext);

  const location = useLocation();
  const history = useHistory();

  const getSalesSearch = useCallback(
    async ({
      end_date = undefined,
      page = DEFAULT_PAGE_NUMBER,
      product_category_id = undefined,
      q = undefined,
      row = DEFAULT_ROW,
      sold_on_before = undefined,
      sold_on_after = undefined,
      status_id = undefined,
    } = {}) => {
      try {
        let res = await _axios().get("admin_panel/sales/search", {
          params: {
            end_date,
            page,
            product_category_id,
            q,
            row,
            sold_on_before,
            sold_on_after,
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

  // useEffect(() => {
  //   history.listen((location) => {
  //     console.log(`You changed the page to: ${location.search}`)
  //     const params = new URLSearchParams(location.search);
  //     let sold_on_after = undefined
  //     let page = DEFAULT_PAGE_NUMBER
  //     let product_category_id = undefined
  //     let q = undefined
  //     let row = DEFAULT_ROW
  //     let sold_on_before = undefined
  //     let status_id = undefined
  //     if (params.has("date_to")) {
  //       sold_on_after = params.get("date_to")
  //     }
  //     if (params.has("page")) {
  //       page = params.get("page")
  //     }
  //     if (params.has("product_category_id")) {
  //       product_category_id = params.get("product_category_id")
  //     }
  //     if (params.has("q")) {
  //       q = params.get("q")
  //     }
  //     if (params.has("row")) {
  //       row = params.get("row")
  //     }

  //     if (params.has("date_from")) {
  //       sold_on_before = params.get("date_from")
  //     }
  //     if (params.has("status_id")) {
  //       status_id = params.get("status_id")
  //     }
  //     getSalesSearch?.(
  //       sold_on_after,
  //       page,
  //       product_category_id,
  //       q,
  //       row,
  //       sold_on_before,
  //       sold_on_after,
  //       status_id
  //     );
  //   })

  // }, [history])

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
      let find = STATUS_INSURANCE_TREATMENT.filter((item) => item.id === id);
      return find?.length && find[0]?.title;
    },
    [state]
  );

  /**
   * @description update status sale
   * @param {number} sale_id
   * @param {number} status_id
   * @return {array}
   */
  const update_status = useCallback(
    async (sale_id, status_id, callback) => {
      try {
        let res = await _axios().post("admin_panel/sales/edit/status", {
          sale_id: sale_id,
          status_id: status_id,
        });
        if (res.status === STASTUS.success) {
          callback?.();
          toast.success("بروز رسانی با موفقیت انجام شد.");
        }
        console.log("res:", res);
      } catch (e) {
        console.log("e:", e);
      }
    },
    [_axios, dispatch]
  );

  /**
   * @description get get family_person_info
   * @param {number} customer_id
   * @param {number} sale_id
   * @return {Object} data
   */
  const getfamily_person_info = useCallback(async (customer_id, sale_id) => {
    try {
      let res = await _axios().get("admin_panel/sales/family_person_info", {
        params: {
          customer_id,
          sale_id,
        },
      });
      dispatch({ type: "SET_FAMILY_PERSON_INFO", payload: res.data });
    } catch (e) {
      console.log("E:", e);
    }
  }, []);

  /**
   * @description get installment sale
   * @param {number} page
   * @param {number} row
   * @param {number} sale_id
   * @return {Object}
   */
  const getInstallmentSale = useCallback(
    async (page = 1, row = 10, sale_id, callback) => {
      try {
        let res = await _axios().get("admin_panel/sales/installment", {
          params: {
            page,
            row,
            sale_id,
          },
        });
        if (res?.data?.result) {
          dispatch({ type: "SET_CONSTRUCT_INSTALLMENT", payload: res.data });
          callback?.(res.data);
        }
        console.log("Res:", res);
      } catch (e) {
        console.log("error:", e);
      }
    },
    [_axios, dispatch]
  );

  /**
   * @description update construct installment
   * @param {Number} sale_id
   * @param {Number} issue_number
   * @param {Number} first_payment_date
   * @return {Object}
   */
  const construct_installment = useCallback(
    async (sale_id, issue_number, first_payment_date, callback) => {
      try {
        let { status, data } = await _axios().post(
          "admin_panel/construct_installment",
          {
            sale_id,
            issue_number,
            first_payment_date,
          }
        );
        console.log("res:", status, data);
        if (status === STASTUS.success) {
          // dispatch({ type: "SET_CONSTRUCT_INSTALLMENT", payload: data });
          dispatch({
            type: "SET_STEP",
            payload: STEP_SALE_TAB.INSTALLMENT_LIST,
          });
          callback?.();
        }
      } catch (e) {
        console.log("e::", e);
      }
    },
    [_axios, dispatch]
  );

  /**
   * @description update installment sale

   * @return {Function} callback
   */
  const updateInstallmentSale = useCallback(
    async (installment_value, installment_date, installment_id, callback) => {
      try {
        let res = await _axios().post("admin_panel/installment/edit", {
          installment_value,
          installment_date,
          installment_id,
        });
        if (res?.status === STASTUS.success) {
          callback?.();
        }
        console.log("Res:", res);
      } catch (e) {
        console.log("error:", e);
      }
    },
    [_axios, dispatch]
  );

  /**
   * @description delete installment sale

   * @return {Function} callback
   */
  const deleteInstallment = useCallback(
    async (sale_id, callback) => {
      try {
        let res = await _axios().delete("admin_panel/installment/delete", {
          params: { sale_id },
        });
        if (res?.status === STASTUS.success) {
          callback?.();
        }
        console.log("Res:", res);
      } catch (e) {
        console.log("error:", e);
      }
    },
    [_axios, dispatch]
  );

  /**
   * update search url
   */
  const updateUrl = (key, value) => {
    const params = new URLSearchParams(location.search);
    if (params.has(key)) {
      params.delete(key);
    }
    params.append(key, value);
    history.replace({ pathname: location.pathname, search: params.toString() });
  };

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
        updateUrl,
        update_status,
        getfamily_person_info,
        getInstallmentSale,
        construct_installment,
        updateInstallmentSale,
        deleteInstallment,
      }}
    >
      {children}
    </SaleContext.Provider>
  );
};

export default SaleState;
