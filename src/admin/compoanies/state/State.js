import React, { useCallback, useContext, useReducer } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { SessionContext } from "shared/system-controls/session/SessionProvider";
import CompanyReducer from "./Reducer";

export const CompanyContext = React.createContext();

const CompanyState = ({ children }) => {
  const initialState = { companies: [] };
  const { _axios } = useContext(SessionContext);
  const [state, dispatch] = useReducer(CompanyReducer, initialState);
  const location = useLocation();

  const getList = useCallback(async () => {
    try {
      dispatch({ type: "SET_LOADING" });
      let res = await _axios().get("admin_panel/company");
      if (res && res.status === 200) {
        dispatch({ type: "SET_COMPANIES", payload: res.data });
      }
      dispatch({ type: "SET_LOADING" });
    } catch (e) {
      dispatch({ type: "SET_LOADING" });
      console.log("e fetch company:", e);
    }
  }, [_axios, location, dispatch]);
  return (
    <CompanyContext.Provider
      value={{
        ...state,
        getList,
        dispatch,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyState;
