import React, { useCallback, useContext, useReducer } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";

import { SessionContext } from "shared/system-controls/session/SessionProvider";
import CategoryProductReducer from "./Reducer";
import { toast } from "react-toastify";
import { STASTUS } from "config/constant";

export const CategoryProductContext = React.createContext();

const CategoryProductState = ({ children }) => {
  const initialState = { active: true, cr_data: { enabled: false } };
  const { _axios } = useContext(SessionContext);
  const [state, dispatch] = useReducer(CategoryProductReducer, initialState);
  const location = useHistory();

  const getList = useCallback(
    async ({ page_number, row }) => {
      try {
        dispatch({ type: "SET_LOADING" });
        let res = await _axios().get("admin_panel/product/categories", {
          params: { page: page_number, row },
        });
        if (res && res.status === 200) {
          dispatch({ type: "SET_CATEGORY", payload: res.data });
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
    async (category_id, enable, callback) => {
      try {
        let res = await _axios().delete("admin_panel/product/category", {
          params: {
            category_id,
            enable,
          },
        });

        console.log("res:::", res);

        callback?.(res);
      } catch (e) {
        console.log("e:::", e);
      }
    },
    [_axios, dispatch]
  );

  const AddCategoryProduct = useCallback(async () => {
    try {
      let res = await _axios().post("admin_panel/product/category", {
        ...state?.cr_data,
      });
      if (res && res.status === STASTUS.success) {
        toast.success("دسته بندی با موفقیت ثبت شد");
        location.push("/product/category");
      }
      console.log("res:", res);
    } catch (e) {
      console.log("eee:", e);
    }
  }, [_axios, state, location, dispatch]);

  const updateCategory = useCallback(async () => {
    try {
      let res = await _axios().put("admin_panel/product/category", {
        ...state?.details,
      });
      if (res) {
        toast.success("بروز رسانی با موفقیت انجام شد");
      }
      console.log("res:", res);
    } catch (e) {
      console.log("eee:", e);
    }
  }, [_axios, state, dispatch]);

  const getDetails = useCallback(
    async (product_category_id, callback) => {
      try {
        let res = await _axios().get("admin_panel/product/category", {
          params: {
            product_category_id,
          },
        });

        console.log("res:::", res);

        dispatch({ type: "SET_DETAILS_CATEGORY", payload: res.data });

        callback?.(res);
      } catch (e) {
        console.log("e:::", e);
      }
    },
    [_axios, dispatch]
  );

  return (
    <CategoryProductContext.Provider
      value={{
        ...state,
        state,
        getList,
        getDeactive,
        dispatch,
        AddCategoryProduct,
        getDetails,
        updateCategory,
      }}
    >
      {children}
    </CategoryProductContext.Provider>
  );
};

export default CategoryProductState;
