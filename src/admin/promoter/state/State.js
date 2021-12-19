import React, { useCallback, useContext, useReducer } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { SessionContext } from "shared/system-controls/session/SessionProvider";
import PromoterReducer from "./Reducer";

export const PromoterContext = React.createContext();

const PromoterState = ({ children }) => {
  const initialState = {
    role_id: 2,
    loading: false,
  };
  const { _axios } = useContext(SessionContext);
  const [state, dispatch] = useReducer(PromoterReducer, initialState);
  const location = useLocation();

  const getMemmbers = useCallback(
    async (page_number = 1, row = 10) => {
      try {
        dispatch({ type: "SET_LOADING" });
        let res = await _axios().get(`admin_panel/promoters`, {
          params: {
            page_number,
            row,
          },
        });
        if (res && res.status === 200) {
          dispatch({ type: "SET_MEMMBERS", payload: res.data });
        }
        dispatch({ type: "SET_LOADING" });
      } catch (e) {
        dispatch({ type: "SET_LOADING" });
        console.log("e fetch memmbers:", e);
      }
    },
    [_axios, location, dispatch]
  );

  const getDetailsUser = useCallback(
    async (tooko_user) => {
      try {
        dispatch({ type: "SET_LOADING" });
        let res = await _axios().get(`admin_panel/user`, {
          params: {
            tooko_user,
          },
        });
        if (res && res.status === 200) {
          dispatch({ type: "SET_DETAILS_USER", payload: res.data });
        }
        dispatch({ type: "SET_LOADING" });
      } catch (e) {
        dispatch({ type: "SET_LOADING" });
        console.log("e fetch memmbers:", e);
      }
    },
    [_axios, location, dispatch]
  );

  const deactiveUser = useCallback(
    async ({ tooko_user_id }) => {
      try {
        dispatch({ type: "SET_LOADING" });
        let res = await _axios().get(`admin_panel/user`, {
          params: {
            tooko_user_id,
          },
        });
        if (res && res.status === 200) {
          dispatch({ type: "SET_DELETE_USER", payload: res.data });
        }
        dispatch({ type: "SET_LOADING" });
      } catch (e) {
        dispatch({ type: "SET_LOADING" });
        console.log("e fetch SET_DELETE_USER:", e);
      }
    },
    [_axios, dispatch]
  );

  return (
    <PromoterContext.Provider
      value={{
        ...state,
        getMemmbers,
        getDetailsUser,
        dispatch,
        deactiveUser,
      }}
    >
      {children}
    </PromoterContext.Provider>
  );
};

export default PromoterState;
