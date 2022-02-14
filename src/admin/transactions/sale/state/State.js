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

export const SaleTransactionsContext = createContext();

export const SaleTransactionsProvider = ({ children }) => {
  const initialState = {
    insurance_name: "همه",
    showCategories: false,
  };

  const [state, dispatch] = useReducer(saleTransactionsReducer, initialState);

  const { _axios } = useContext(SessionContext);

  // Get all sale transactions
  const getSaleTransactions = useCallback(
    async ({
      finance_expected_date_after = undefined,
      finance_expected_date_before = undefined,
      page_number,
      product_category_id = undefined,
      q = undefined,
      row,
    } = {}) => {
      try {
        const res = await _axios().get("admin_panel/finances/search", {
          params: {
            page:page_number,
            row,
            q,
            finance_expected_date_after,
            finance_expected_date_before,
            product_category_id,
          },
        });

        if (res.status === STASTUS.success) {
          dispatch({ type: "GET_SALE_TRANSACTIONS", payload: res.data });
        }
        // console.log(res);
      } catch (err) {
        console.log(`Error: ${err}`);
      }
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
          payload: res.data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, [_axios]);

  return (
    <SaleTransactionsContext.Provider
      value={{
        ...state,
        dispatch,
        getInsuranceCategories,
        getSaleTransactions,
      }}
    >
      {children}
    </SaleTransactionsContext.Provider>
  );
};

export default SaleTransactionsProvider;

// export const useSaleTransactions = () => useContext(SaleTransactionsContext);
