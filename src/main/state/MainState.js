import React, { useCallback, useReducer } from "react";
import MainReducer from "main/state/MainReducer";
import { useEffect } from "react/cjs/react.development";
import { useContext } from "react";
import { SessionContext } from "shared/system-controls/session/SessionProvider";
import useCookie from "shared/system-controls/hooks/useCookie";

export const MainContext = React.createContext();

const MainState = ({ children }) => {
  const initialState = {};
  const [state, dispatch] = useReducer(MainReducer, initialState);
  const sessionName = "ADMIN_APP";
  const { _axios } = useContext(SessionContext);
  const [cookie] = useCookie(sessionName + "_tkn");

  const getInformaionUser = useCallback(async () => {
    if (cookie) {
      let res = await _axios().post("/admin_panel/promoter/name");
      if (res?.data) {
        dispatch({ type: "SET_INFORMATION", payload: res?.data?.full_name });
      }
    }
  }, [dispatch, _axios, cookie]);
  useEffect(() => {
    getInformaionUser?.();
  }, [dispatch, sessionName]);
  return (
    <MainContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainState;
