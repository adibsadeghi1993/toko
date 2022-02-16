import React, { useReducer, useCallback, useContext } from "react";
import { SessionContext } from "shared/system-controls/session/SessionProvider";
import InstallmentReducer from "./InstallmentReducer";
import { STASTUS, DEFAULT_ROW } from "config/constant";

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
    insurance: undefined,
    showInsurance: false,
    //////////////////////
    insuranceStatuses: undefined,
    showStatus: false,
    statusName: undefined,
    status: undefined,
    query: "",
    startDate: "",
    endDate: "",
    differences: differences,
    number: "",
  };

  const [state, dispatch] = useReducer(InstallmentReducer, initialState);

  // Get installments
  const getInstallments = useCallback(
    async ({
      page = undefined,
      product_category_id = undefined,
      q = undefined,
      row = DEFAULT_ROW,
      installment_expected_date_after = undefined,
      installment_expected_date_before = undefined,
    } = {}) => {
      try {
        dispatch({ type: "SET_LOADING" });
        let res = await _axios().get(`admin_panel/installment/search`, {
          params: {
            page,
            product_category_id,
            q,
            row,
            installment_expected_date_after,
            installment_expected_date_before,
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

        console.log(res);
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
