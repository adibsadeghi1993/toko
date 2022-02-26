import React, { useReducer, useCallback, useContext, useEffect } from "react";
import { SessionContext } from "shared/system-controls/session/SessionProvider";
import InstallmentReducer from "./InstallmentReducer";
import { STASTUS, DEFAULT_ROW, DEFAULT_PAGE_NUMBER } from "config/constant";

export const InstallmentContext = React.createContext();

const InstallmentProvider = ({ children }) => {
  const differences = [
    {
      "شماره بیمه نامه": "2334432211",
      "مقدار مغایرت": "1.000.000",
      شرکت: "خاورمیانه",
    },
  ];

  const { _axios } = useContext(SessionContext);

  const initialState = {
    installments: undefined,
    installmentDetails: undefined,
    insuranceCategories: undefined,
    insuranceName: "همه",
    // insurance: 0,
    showInsurance: false,
    //////////////////////
    insuranceStatuses: undefined,
    showStatus: false,
    statusName: undefined,
    status: undefined,
    filteredInstallments:[],
    // query: undefined,
    // startDate: undefined,
    // endDate: undefined,
    differences: differences,
    // currentIndex: -1,
    number: "",
  };

  const [state, dispatch] = useReducer(InstallmentReducer, initialState);

  

  // Get installments
  const getInstallments = useCallback(
    async ({
      page = DEFAULT_PAGE_NUMBER,
      product_category_id = undefined,
      query = undefined,
      row = DEFAULT_ROW,
      startDate = undefined,
      endDate = undefined,
    } = {}) => {
      try {
        dispatch({ type: "SET_LOADING" });
        let res = await _axios().get(`admin_panel/installment/search`, {
          params: {
            page,
            product_category_id,
            q: query,
            row,
            installment_expected_date_after: startDate,
            installment_expected_date_before: endDate,
          },
        });

        // console.log(res);
        if (res.data && res.status === STASTUS.success) {
          dispatch({ type: "SET_INSTALLMENTS", payload: res.data });
        }

        dispatch({ type: "SET_LOADING" });
      } catch (e) {
        dispatch({ type: "SET_LOADING" });
        console.log(e);
      }
    },
    [_axios]
  );

  // Get insurance categories
  const getInsuranceCategories = useCallback(async () => {
    try {
      let res = await _axios().get("admin_panel/product/categories");

      if (res.status === STASTUS.success) {
        dispatch({ type: "SET_INSURANCE_CATEGORIES", payload: res.data });
      }

      // console.log(res);
    } catch (e) {
      console.log("e::::", e);
    }
  }, [_axios]);

  //get insurance statuses
  const getInsuranceStatuses = useCallback(
    async (category_id) => {
      try {
        let res = await _axios().get("admin_panel/sales/statuses", {
          params: {
            category_id,
          },
        });

        // console.log(res);
        if (res.status === STASTUS.success) {
          dispatch({ type: "SET_INSURANCE_STATUSES", payload: res.data });
        }
      } catch (e) {
        console.log("e::::", e);
      }
    },
    [_axios]
  );

  // Get installment details
  const getInstallmentDetails = useCallback(
    async (installment_id = undefined) => {
      try {
        const res = await _axios().get("admin_panel/installment/details", {
          params: {
            installment_id,
          },
        });

        if (res.status === STASTUS.success) {
          dispatch({ type: "SET_INSTALLMENT_DETAILS", payload: res.data });
        }

        // console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
    [_axios]
  );

  return (
    <InstallmentContext.Provider
      value={{
        ...state,
        dispatch,
        getInstallments,
        
        getInsuranceStatuses,
        getInsuranceCategories,
        getInstallmentDetails,
      }}
    >
      {children}
    </InstallmentContext.Provider>
  );
};

export default InstallmentProvider;
