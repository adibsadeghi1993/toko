// import { STASTUS } from "config/constant";
// import React, { useCallback, useContext, useReducer } from "react";
// import { SessionContext } from "shared/system-controls/session/SessionProvider";
// import Trans_saleReducer from "./Reducer";

// const Tran_saleState = ({ children }) => {

//   const initialState = {
//     insurances: insurances,
//     insurance_name: "همه",
//     search_name: "",
//     insurance_show: false,
//     insurance: "",
//     number: "",
//     insurance_show: false,
//     FromTime: "",
//     ToTime: "",
//   };

//   const getTransActionSale = useCallback(
//     async (page_number, row) => {
//       try {
//         const res = await _axios().get("/admin_panel/finances/search", {
//           params: {
//             page: page_number,
//             row,
//           },
//         });
//       } catch (e) {
//         console.log("e:", e);
//       }
//     },
//     [_axios]
//   );

import React, {
  createContext,
  useReducer,
  useCallback,
  useContext,
  useEffect,
} from "react";
import saleTransactionsReducer from "./Reducer";
import { SessionContext } from "shared/system-controls/session/SessionProvider";
import { STASTUS, DEFAULT_PAGE_NUMBER, DEFAULT_ROW } from "config/constant";

const SaleTransactionsContext = createContext();

export const SaleTransactionsProvider = ({ children }) => {
  const initialState = {
    saleTransactions: [],
    insuranceCategories: "همه",
    showCategories: false,
    query: "",
    startDate: "",
    endDate: "",
    page: DEFAULT_PAGE_NUMBER,
    row: DEFAULT_ROW,
  };

  const [state, dispatch] = useReducer(saleTransactionsReducer, initialState);

  const { _axios } = useContext(SessionContext);

  // Get all sale transactions
  const getSaleTransactions = useCallback(
    async (
      finance_expected_date_after = undefined,
      finance_expected_date_before = undefined,
      page = DEFAULT_PAGE_NUMBER,
      product_category_id = undefined,
      q = "",
      row = DEFAULT_ROW
    ) => {
      try {
        const res = await _axios().get("admin_panel/finances/search", {
          params: {
            page,
            row,
            q,
            finance_expected_date_after,
            finance_expected_date_before,
            product_category_id,
          },
        });

        if (res.status === STASTUS.success) {
          dispatch({ type: "GET_SALE_TRANSACTIONS", payload: res.data.result });
        }
        // console.log(res);
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    },
    [_axios]
  );

  // Search by date
  const transactionsSearch = useCallback(
    async (
      finance_expected_date_after = undefined,
      finance_expected_date_before = undefined,
      page = DEFAULT_PAGE_NUMBER,
      product_category_id = undefined,
      q = "",
      row = DEFAULT_ROW
    ) => {
      const res = await _axios().get("admin_panel/sales/search", {
        params: {
          finance_expected_date_after,
          finance_expected_date_before,
          page,
          product_category_id,
          q,
          row,
        },
      });

      if (res.status === STASTUS.success) {
        dispatch({ type: "TRANSACTIONS_SEARCH", payload: res.data.result });
      }

      // console.log(res);
    },
    [_axios]
  );

  // Get insurance categories
  const getInsuranceCategories = useCallback(async () => {
    try {
      const res = await _axios().get("admin_panel/product/categories");
      if (res.status === STASTUS.success) {
        dispatch({
          type: "SET_INSURANCE_CATEGORIES",
          payload: res.data.map((category) => category.category_name),
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, [_axios]);

  useEffect(() => {
    getSaleTransactions?.();
    getInsuranceCategories?.();
  }, [getSaleTransactions, getInsuranceCategories]);

  return (
    <SaleTransactionsContext.Provider
      value={{ ...state, dispatch, transactionsSearch }}
    >
      {children}
    </SaleTransactionsContext.Provider>
  );
};

export default SaleTransactionsProvider;

export const useSaleTransactions = () => useContext(SaleTransactionsContext);
