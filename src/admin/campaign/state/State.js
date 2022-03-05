import { STASTUS } from "config/constant";
import React, { useCallback, useContext, useReducer } from "react";
import { toast } from "react-toastify";
import { SessionContext } from "shared/system-controls/session/SessionProvider";
import UtilityAPI from "shared/utils/UtilityAPI";
import CampaignReducer from "./Reducer";

export const CampaignContext = React.createContext();

export const CampaignState = ({ children }) => {
  const initialState = {};
  const [state, dispatch] = useReducer(CampaignReducer, initialState);
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
  const getPercents = useCallback(
    async (promoter_id = 0, promoter_level = 1) => {
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

  const submitCampaign = useCallback(async () => {
    try {
      const response = await _axios().post("admin_panel/add_campaign", {
        campaign_name: state.name,
        products_percent: state.update_percent,
        description: state.description,
      });
      if (response.status === STASTUS.success) {
        toast.success("ثبت با موفقیت انجام شد");
        dispatch({ type: "SET_CODE", payload: response?.data?.campaign_code });
      }
    } catch (e) {
      console.log("e:", e);
      Promise.reject(e);
    }
  }, [_axios, state]);
  return (
    <CampaignContext.Provider
      value={{
        ...state,
        dispatch,
        getPercents,
        submitCampaign,
      }}
    >
      {children}
    </CampaignContext.Provider>
  );
};
