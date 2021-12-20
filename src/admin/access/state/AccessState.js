import React, { useCallback, useContext, useReducer } from "react";
import AccessReducer from "admin/access/state/AccessReducer";
import FetchRequest from "shared/controls/FetchRequest";
import { SessionContext } from "shared/system-controls/session/SessionProvider";

export const AcceessContex = React.createContext();

const AccessState = ({ children }) => {
  const initialState = {
    access: [],
    promoter: [],
    percents: [],
  };
  const [state, dispatch] = useReducer(AccessReducer, initialState);
  const { _axios } = useContext(SessionContext);

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
        }
        console.log("res::::", res);
      } catch (e) {
        console.log("e?.", e);
      }
    },
    [_axios, dispatch]
  );

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

  const defData = {
    items: [
      {
        id: 1,
        insurance_id: 1,
        insurance_name: "بیمه عمر",
        company_name: "خاورمیانه",
        periods: [
          {
            year: "ماه 1 تا 12",
            percent: 40,
          },
          {
            year: "ماه 13 تا 24",
            percent: 10,
          },
          {
            year: "ماه 25 تا 36 ",
            percent: 30,
          },
          {
            year: "ماه 37 تا 48",
            percent: 15,
          },
          {
            year: "ماه 49 تا 60",
            percent: 20,
          },
        ],
      },
      {
        id: 2,
        insurance_id: 2,
        insurance_name: "بیمه درمان",
        company_name: "کمک رسان",
        periods: [
          {
            year: "ماه 1 تا 12",
            percent: 20,
          },
          {
            year: "ماه 13 تا 24",
            percent: 20,
          },
          {
            year: "ماه 25 تا 36 ",
            percent: 20,
          },
        ],
      },
      {
        id: 3,
        insurance_id: 2,
        insurance_name: "بیمه درمان",
        company_name: "کارآفرین",
        periods: [
          {
            year: "ماه 1 تا 12",
            percent: 20,
          },
        ],
        plans: [
          {
            plan: "طرح 1",
            percent: "20",
          },
          {
            plan: "طرح 2",
            percent: "20",
          },
          {
            plan: "طرح 3",
            percent: "20",
          },
          {
            plan: "طرح 4",
            percent: "20",
          },
          {
            plan: "طرح 5",
            percent: "20",
          },
          {
            plan: "طرح 6",
            percent: "20",
          },
          {
            plan: "طرح 7",
            percent: "20",
          },
          {
            plan: "طرح ممتاز 8",
            percent: "20",
          },
          {
            plan: "طرح VIP",
            percent: "20",
          },
          {
            plan: "طرح تجمعی 1",
            percent: "20",
          },
          {
            plan: "طرح تجمعی 2",
            percent: "20",
          },
        ],
      },
      {
        id: 4,
        insurance_id: 2,
        insurance_name: "بیمه درمان",
        company_name: "سامان",
        periods: [
          {
            year: "ماه 1 تا 12",
            percent: 20,
          },
        ],
        plans: [
          {
            plan: "طرح نسیم",
            percent: "20",
          },
          {
            plan: "طرح سروش",
            percent: "20",
          },
          {
            plan: "طرح عقیق",
            percent: "20",
          },
          {
            plan: "طرح ویژه",
            percent: "20",
          },
          {
            plan: "طرح وصال",
            percent: "20",
          },
          {
            plan: "طرح جامع",
            percent: "20",
          },
          {
            plan: "طرح اقتصادی",
            percent: "20",
          },
          {
            plan: "طرح ممتاز سامان",
            percent: "20",
          },
          {
            plan: "طرح منتخب",
            percent: "20",
          },
          {
            plan: "طرح ویژه محدود",
            percent: "20",
          },
          {
            plan: "طرح اقتصادی محدود",
            percent: "20",
          },
          {
            plan: "طرح جامع محدود",
            percent: "20",
          },
          {
            plan: "طرح منتخب محدود",
            percent: "20",
          },
          {
            plan: "طرح مهر",
            percent: "20",
          },
        ],
      },
      {
        id: 5,
        insurance_id: 3,
        insurance_name: "مسئولیت",
        company_name: "کارآفرین",
        periods: [
          {
            year: "ماه 1 تا 12",
            percent: 20,
          },
        ],
      },
    ],
  };
  const group = (items) => {
    let gp = items.reduce(function (r, a) {
      r[a.insurance_name] = r[a.insurance_name] || [];
      r[a.insurance_name].push(a);
      return r;
    }, Object.create(null));
    return gp;
  };

  const getPercents = useCallback(
    async (promoter_id, promoter_level) => {
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        let res = await _axios().get("admin_panel/promoter/supersets", {
          params: { promoter_id, promoter_level },
        });
        console.log("res: ", res);

        dispatch({ type: "SET_PERCENTS", payload: group(defData.items) });
        dispatch({ type: "SET_LOADING", payload: false });
      } catch (e) {
        dispatch({ type: "SET_LOADING", payload: false });
        console.log("e: ", e);
      }
    },
    [_axios]
  );
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
        payload: "ثبت با موفقیت انجام شد!",
      });
      dispatch({ type: "set_loading", payload: false });
    } catch (e) {
      console.log("e: ", e);
    }
  };
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
      }}
    >
      {children}
    </AcceessContex.Provider>
  );
};

export default AccessState;
