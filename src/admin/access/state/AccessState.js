import React, { useCallback, useContext, useReducer } from "react";
import AccessReducer from "admin/access/state/AccessReducer";
import FetchRequest from "shared/controls/FetchRequest";
import { SessionContext } from "shared/system-controls/session/SessionProvider";
import { toast } from "react-toastify";
import UtilityAPI from "shared/utils/UtilityAPI";

export const AcceessContex = React.createContext();

const AccessState = ({ children }) => {
  const initialState = {
    access: [],
    promoter: [],
    percents: [],
  };
  const [state, dispatch] = useReducer(AccessReducer, initialState);
  const { _axios } = useContext(SessionContext);

  // --------------
  const group = (items) => {
    let newArray = [];
    let grp = Object.keys(items).map((item) => {
      newArray.push({
        [item]: UtilityAPI.groupBy(items[item], "company_name"),
      });
    });

    return newArray;
  };
  // --------------
  const getAccessInfo = useCallback(
    async (tooko_user) => {
      try {
        let res = await _axios().get("admin_panel/user/access_info", {
          params: {
            tooko_user,
          },
        });
        if (res.status === 200) {
          dispatch({ type: "SET_DETAILSUSER", payload: res.data });
          if (res?.data?.promoter_level_info) {
            dispatch({
              type: "SET_ID_PROMOTER_LEVEL",
              payload: res?.data?.promoter_level_info?.id,
            });
          }
          if (res?.data?.superset_info) {
            dispatch({
              type: "SET_ID_PROMOTER_ITEM_ID",
              payload: res?.data?.superset_info?.id,
            });
          }
        }
        console.log("res::::", res);
      } catch (e) {
        console.log("e?.", e);
      }
    },
    [_axios, dispatch]
  );
  // --------------
  const getRoles = useCallback(async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      let res = await _axios().get("admin_panel/user/roles");
      if (res && res.status === 200) {
        dispatch({ type: "SET_ROLES", payload: res.data });
      }
      dispatch({ type: "SET_LOADING", payload: false });
    } catch (e) {
      dispatch({ type: "SET_LOADING", payload: false });
      console.log("e fetch roles:", e);
    }
  }, [_axios, dispatch]);
  // --------------
  const promoter_level = useCallback(async () => {
    let res = await _axios().get("admin_panel/promoter/levels");
    if (res.status === 200) {
      dispatch({ type: "SET_PROMOTERS", payload: res.data });
    }
  }, [_axios, dispatch]);

  // --------------
  const getSuperSets = useCallback(
    async (level_id) => {
      try {
        dispatch({ type: "SET_LOADING", payload: true });
        let res = await _axios().get("admin_panel/promoter/supersets", {
          params: { level_id },
        });
        if (res) {
          dispatch({ type: "SET_PROMOTER_LEVEL", payload: res.data });
        }
        dispatch({ type: "SET_LOADING", payload: false });
      } catch (e) {
        dispatch({ type: "SET_LOADING", payload: false });
        dispatch({ type: "SET_PROMOTER_LEVEL", payload: [] });
        console.log("e", e);
      }
    },
    _axios,
    dispatch
  );
  // --------------
  const getPercents = useCallback(
    async (promoter_id, promoter_level) => {
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        let res = await _axios().get("admin_panel/promoter/percent", {
          params: { promoter_id, promoter_level },
        });
        dispatch({ type: "SET_PERCENTS", payload: group(res.data) });

        dispatch({ type: "SET_LOADING", payload: false });
      } catch (e) {
        dispatch({ type: "SET_LOADING", payload: false });
        console.log("e: ", e);
      }
    },
    [_axios, dispatch]
  );
  // --------------
  const updatePercent = async () => {
    dispatch({ type: "set_loading", payload: true });
    let items = { items: [] };
    Object.keys(state.percents).map((key, inx) => {
      state.percents[key].map((item, ind) => {
        items["items"].push(item);
      });
    });
    try {
      let res = await FetchRequest(
        "http://81.91.145.250:8002/outsource/sale_percents_update/",
        items,
        "POST"
      );
      console.log("res: ", res);
      dispatch({
        type: "set_message_succes",
        payload: "?????? ???? ???????????? ?????????? ????!",
      });
      dispatch({ type: "set_loading", payload: false });
    } catch (e) {
      console.log("e: ", e);
    }
  };
  // --------------
  const updateAccess = useCallback(
    async (id, isActive) => {
      try {
        let body = {
          tooko_user_id: id,
          role_id: isActive,
        };
        if (isActive && isActive?.includes(5)) {
          body = Object.assign(body, {
            promoter_level: state?.level_id,
            superset_id: state?.level_item_id,
          });
        }
        if (state?.update_percent) {
          body = Object.assign(body, {
            percents: state.update_percent,
          });
        }

        console.log("body::::", body);
        let res = await _axios().put("admin_panel/promoter/percent", body);
        toast.success("???????? ?????????? ???? ???????????? ?????????? ????");
        dispatch({ type: "CLEAR_CHANGE_PERCENT" });
        // dispatch({ type: "SET_PERCENTS", payload: res.data });

        dispatch({ type: "SET_LOADING", payload: false });
      } catch (e) {
        console.log("e::", e);
      }
    },
    [_axios, state, dispatch]
  );
  // --------------
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
  // --------------
  const deactiveUser = useCallback(
    async ({ tooko_user_id }, callback) => {
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
          toast.success(
            `???????? ???? ???????????? ${
              state.details_user?.is_active ? "??????????????" : "????????"
            } ????.`
          );
          callback?.();
        }
        dispatch({ type: "SET_LOADING" });
      } catch (e) {
        dispatch({ type: "SET_LOADING" });
        console.log("e fetch SET_DELETE_USER:", e);
      }
    },
    [_axios, state, dispatch]
  );

  return (
    <AcceessContex.Provider
      value={{
        ...state,
        promoter_level,
        getPercents,
        updatePercent,
        dispatch,
        getAccessInfo,
        getRoles,
        getSuperSets,
        updateAccess,
        deactiveUser,
        getDetailsUser,
      }}
    >
      {children}
    </AcceessContex.Provider>
  );
};

export default AccessState;
