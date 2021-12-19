import React, { useCallback, useContext, useReducer } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { SessionContext } from "shared/system-controls/session/SessionProvider";
import PromotersReducer from "./Reducer";
import { toast } from "react-toastify";

export const PromotersContext = React.createContext();

const PromotersState = ({ children }) => {
  const initialState = {
    role_id: 2,
    loading: false,
  };
  const { _axios } = useContext(SessionContext);
  const [state, dispatch] = useReducer(PromotersReducer, initialState);
  const location = useLocation();

  const getRoles = useCallback(async () => {
    try {
      dispatch({ type: "SET_LOADING" });
      let res = await _axios().get("admin_panel/user/roles");
      if (res && res.status === 200) {
        dispatch({ type: "SET_ROLES", payload: res.data });
      }
      dispatch({ type: "SET_LOADING" });
    } catch (e) {
      dispatch({ type: "SET_LOADING" });
      console.log("e fetch roles:", e);
    }
  }, [_axios, location, dispatch]);

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

  const getSubsetInfo = useCallback(
    async ({ tooko_user }) => {
      try {
        dispatch({ type: "SET_LOADING" });
        let res = await _axios().get(`admin_panel/subsets_info`, {
          params: {
            tooko_user,
          },
        });
        if (res && res.status === 200) {
          dispatch({ type: "SET_SUBSETINFO_USER", payload: res.data });
        }
        dispatch({ type: "SET_LOADING" });
      } catch (e) {
        dispatch({ type: "SET_LOADING" });
        console.log("e fetch SET_SUBSETINFO_USER:", e);
      }
    },
    [_axios, dispatch]
  );

  const getSubset = useCallback(
    async ({ tooko_user, customer_id }) => {
      try {
        dispatch({ type: "SET_LOADING" });
        let res = await _axios().get(`admin_panel/subset`, {
          params: {
            tooko_user,
            customer_id,
          },
        });
        if (res && res.status === 200) {
          dispatch({ type: "SET_SUBSET_USER", payload: res.data });
        }
        dispatch({ type: "SET_LOADING" });
      } catch (e) {
        dispatch({ type: "SET_LOADING" });
        console.log("e fetch SET_SUBSETINFO_USER:", e);
      }
    },
    [_axios, dispatch]
  );

  const getNetworkChart = useCallback(
    async ({ tooko_user_id }) => {
      try {
        dispatch({ type: "SET_LOADING" });
        let res = await _axios().get(`admin_panel/users/network_chart`, {
          params: {
            tooko_user_id,
          },
        });
        if (res && res.status === 200) {
          dispatch({ type: "SET_NETWORKCHART_USER", payload: res.data });
        }
        dispatch({ type: "SET_LOADING" });
      } catch (e) {
        dispatch({ type: "SET_LOADING" });
        console.log("e fetch SET_NETWORKCHART_USER:", e);
      }
    },
    [_axios, dispatch]
  );

  return (
    <PromotersContext.Provider
      value={{
        ...state,
        dispatch,
        getRoles,
        getMemmbers,
        getDetailsUser,
        deactiveUser,
        getSubsetInfo,
        getSubset,
        getNetworkChart,
      }}
    >
      {children}
    </PromotersContext.Provider>
  );
};

export default PromotersState;
