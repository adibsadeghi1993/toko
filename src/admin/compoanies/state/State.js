import React, { useCallback, useContext, useReducer } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { SessionContext } from "shared/system-controls/session/SessionProvider";
import CompanyReducer from "./Reducer";

export const CompanyContext = React.createContext();

const CompanyState = ({ children }) => {
  const initialState = { active: true };
  const { _axios } = useContext(SessionContext);
  const [state, dispatch] = useReducer(CompanyReducer, initialState);
  const location = useLocation();

  const getList = useCallback(
    async (page_number = 1, row = 10) => {
      try {
        dispatch({ type: "SET_LOADING" });
        let res = await _axios().get("admin_panel/company", {
          params: { page_number, row },
        });
        if (res && res.status === 200) {
          dispatch({ type: "SET_COMPANIES", payload: res.data });
        }
        dispatch({ type: "SET_LOADING" });
      } catch (e) {
        dispatch({ type: "SET_LOADING" });
        console.log("e fetch company:", e);
      }
    },
    [_axios, location, dispatch]
  );

  const getDeactive = useCallback(
    async (company_id, enable, callback) => {
      try {
        let res = await _axios().put("admin_panel/company", {
          company_id,
          enable,
        });

        console.log("res:::", res);

        callback?.(res);
      } catch (e) {
        console.log("e:::", e);
      }
    },
    [_axios, dispatch]
  );

  const AddCompany = useCallback(async () => {
    try {
      let res = await _axios().post("admin_panel/company", {
        logo: state.logo,
        name: state.company_name,
        enable: state.active,
      });

      console.log("res:", res);
    } catch (e) {
      console.log("eee:", e);
    }
  }, [_axios, state, dispatch]);

  return (
    <CompanyContext.Provider
      value={{
        ...state,
        state,
        getList,
        getDeactive,
        dispatch,
        AddCompany,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyState;
