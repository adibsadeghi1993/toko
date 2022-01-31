import React, { useCallback, useContext, useReducer } from "react";
import { useLocation } from "react-router-dom";

import { SessionContext } from "shared/system-controls/session/SessionProvider";
import MemmberReducer from "./Reducer";
import { toast } from "react-toastify";
import { STASTUS } from "config/constant";

export const MemmberContext = React.createContext();

const MemmberState = ({ children }) => {
  const initialState = {
    role_id: 2,
    loading: false,
    search: "",
  };
  const { _axios } = useContext(SessionContext);
  const [state, dispatch] = useReducer(MemmberReducer, initialState);

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
  }, [_axios, dispatch]);

  const getMemmbers = useCallback(
    async (page_number = 1, row = 10, role_id) => {
      console.log("role_id::::::::::::::::::", role_id);
      try {
        dispatch({ type: "SET_LOADING" });
        let res = await _axios().get(
          `admin_panel/user/tooko_users/${role_id}`,
          {
            params: {
              page_number,
              row,
            },
          }
        );
        if (res && res.status === 200) {
          dispatch({ type: "SET_MEMMBERS", payload: res.data });
        }
        dispatch({ type: "SET_LOADING" });
      } catch (e) {
        dispatch({ type: "SET_LOADING" });
        console.log("e fetch memmbers:", e);
      }
    },
    [_axios, dispatch]
  );
  // const getPromoters = useCallback(
  //   async (page_number = 1, row = 10) => {
  //     try {
  //       dispatch({ type: "SET_LOADING" });
  //       let res = await _axios().get(`admin_panel/promoters`, {
  //         params: {
  //           page_number,
  //           row,
  //         },
  //       });
  //       if (res && res.status === 200) {
  //         dispatch({ type: "SET_MEMMBERS", payload: res.data });
  //       }
  //       dispatch({ type: "SET_LOADING" });
  //     } catch (e) {
  //       dispatch({ type: "SET_LOADING" });
  //       console.log("e fetch memmbers:", e);
  //     }
  //   },
  //   [_axios, dispatch]
  // );

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
    [_axios, dispatch]
  );

  const deactiveUser = useCallback(
    async ({ tooko_user_id }) => {
      try {
        dispatch({ type: "SET_LOADING" });
        let res = await _axios().delete(`admin_panel/user`, {
          params: {
            tooko_user_id,
            enable: !state?.details_user?.is_active,
          },
        });
        if (res && res.status === 200) {
          dispatch({ type: "SET_DELETE_USER" });
          toast.success("کابر با موفقیت غیرفعال شد.");
        }
        dispatch({ type: "SET_LOADING" });
      } catch (e) {
        dispatch({ type: "SET_LOADING" });
        console.log("e fetch SET_DELETE_USER:", e);
      }
    },
    [_axios, state, dispatch]
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

  const updateUser = useCallback(
    async (id) => {
      try {
        if (!state.details_user_update) {
          toast.info("فیلدی ویرایش نشده!");
          return;
        }
        let data = state.details_user_update;
        if (data?.birthday) {
          let date = new Date(data?.birthday)
            .toLocaleDateString()
            .split("/")
            .reverse()
            .join("-");
          console.log("date:::::", date);
          data.birthday = date;
        }
        let res = await _axios().put(
          "admin_panel/user",
          Object.assign(state.details_user_update, {
            id: parseInt(id),
          })
        );
        if (res && res.status === STASTUS.success) {
          toast("ویرایش با موفقیت انجام شد");
          // dispatch({ type: "CLEAR_UPDATE_USER" });
        }
        console.log("res:::", res);
      } catch (e) {
        console.log("e:", e);
      }
    },
    [_axios, dispatch, state]
  );

  const updateSubset = useCallback(
    async (customer_id, tooko_user) => {
      try {
        if (!state.details_subset_user_update) {
          toast.info("فیلدی ویرایش نشده!");
          return;
        }
        let data = state.details_subset_user_update;
        if (data?.birthday) {
          let date = new Date(data?.birthday)
            .toLocaleDateString()
            .split("/")
            .reverse()
            .join("-");
          console.log("date:::::", date);
          data.birthday = date;
        }
        let res = await _axios().put(
          `admin_panel/subset?customer_id=${parseInt(
            customer_id
          )}&tooko_user=${parseInt(tooko_user)}`,
          data
        );
        if (res && res.status === STASTUS.success) {
          toast("ویرایش با موفقیت انجام شد");
          // dispatch({ type: "CLEAR_UPDATE_SUBSET" });
        }
        console.log("res:::", res);
      } catch (e) {
        console.log("e:", e);
      }
    },
    [_axios, dispatch, state]
  );

  const getSearchMember = useCallback(
    async ({ page_number, row, search }) => {
      console.log(page_number, row, search);
      try {
        let res = await _axios().get("admin_panel/user/search", {
          params: {
            page_number,
            row,
            search,
          },
        });
        if (res && res.status === 200) {
          dispatch({ type: "SET_MEMMBERS", payload: res.data });
        }
      } catch (e) {
        console.log("E::::", e);
      }
    },
    [_axios, dispatch]
  );

  const searchProvinces = useCallback(
    async (q) => {
      try {
        if (q?.length < 3) return;
        let res = await _axios().post(`Life/Provinces?companyId=${1}&q=${q}`);
        return res?.data?.result;
      } catch (e) {
        return [];
      }
    },
    [_axios]
  );

  const searchCities = useCallback(
    async (q, provinceId) => {
      try {
        if (q?.length < 3 && !provinceId) return;
        let res = await _axios().post(
          `Life/Cities?companyId=${1}&provinceId=${provinceId}&q=${q}`
        );
        return res?.data?.result;
      } catch (e) {
        return [];
      }
    },
    [_axios]
  );
  return (
    <MemmberContext.Provider
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
        updateUser,
        getSearchMember,
        searchProvinces,
        searchCities,
        updateSubset,
      }}
    >
      {children}
    </MemmberContext.Provider>
  );
};

export default MemmberState;
