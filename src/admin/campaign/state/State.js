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
    Object.keys(items).map((item) => {
      newArray.push({
        [item]: UtilityAPI.groupBy(items[item], "company_name"),
      });
    });

    return newArray;
  };
  // --------------
  const getPercents = useCallback(
    async ({ promoter_id = 0, promoter_level = 1 }) => {
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
      const response = await _axios().post("admin_panel/campaign", {
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

  const getCampaigns = useCallback(
    async (
      page,
      row,
      campaign_name_or_description,
      is_active,
      username,
      registered_on_after,
      registered_on_before
    ) => {
      try {
        const response = await _axios().get("admin_panel/campaign_search", {
          params: {
            page,
            row,
            campaign_name_or_description,
            is_active,
            username,
            registered_on_after,
            registered_on_before,
          },
        });
        if (response.status === STASTUS.success) {
          dispatch({ type: "SET_CAMPAIGNS", payload: response?.data });
        }
      } catch (e) {
        console.log("e:", e);
        Promise.reject(e);
      }
    },
    [_axios]
  );

  const getCampaign = useCallback(
    async (campaign_tooko_user_id) => {
      try {
        const response = await _axios().get("admin_panel/campaign", {
          params: {
            campaign_tooko_user_id,
          },
        });
        if (response.status === STASTUS.success) {
          dispatch({ type: "SET_CAMPAIGN", payload: response?.data });
        }
      } catch (e) {
        console.log("e:", e);
        Promise.reject(e);
      }
    },
    [_axios]
  );
  const updateCampaign = useCallback(async () => {
    try {
      const response = await _axios().put("/admin_panel/campaign", {
        campaign_tooko_user_id: state?.campaign?.tooko_user_id,
        campaign_name: state?.campaign?.family_name,
        description: state?.campaign?.description,
        products_percent: state?.update_percent,
      });
      if (response.status === STASTUS.success) {
        toast.success("بروز رسانی با موفقیت انجام شد");
      }
    } catch (e) {
      console.log("e:", e);
      Promise.reject(e);
    }
  }, [_axios, state]);

  const updateStatusCampaign = useCallback(async () => {
    try {
      const response = await _axios().delete("/admin_panel/campaign", {
        params: {
          campaign_tooko_user_id: state?.campaign?.tooko_user_id,
          enable: !state?.campaign?.is_active,
        },
      });
      if (response.status === STASTUS.success) {
        toast.success("بروز رسانی با موفقیت انجام شد");
        dispatch({
          type: "UPDATE_CAMPAIGN",
          payload: { is_active: !state?.campaign?.is_active },
        });
      }
    } catch (e) {
      console.log("e:", e);
      Promise.reject(e);
    }
  }, [_axios, state, dispatch]);
  return (
    <CampaignContext.Provider
      value={{
        ...state,
        dispatch,
        getPercents,
        submitCampaign,
        getCampaigns,
        getCampaign,
        updateCampaign,
        updateStatusCampaign,
      }}
    >
      {children}
    </CampaignContext.Provider>
  );
};
