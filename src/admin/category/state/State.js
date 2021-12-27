import React, { useCallback, useContext, useReducer } from "react";
import { SessionContext } from "shared/system-controls/session/SessionProvider";
import CategoryReducer from "admin/category/state/Reducer";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { STASTUS } from "config/constant";

export const CategoryContext = React.createContext();

const CategoryState = ({ children }) => {
  const initialState = { categories: [] };
  const [state, dispatch] = useReducer(CategoryReducer, initialState);
  const { _axios } = useContext(SessionContext);
  const location = useHistory();
  const getCategories = useCallback(
    async (page_number, row) => {
      try {
        let res = await _axios().get("admin_panel/blog/category", {
          params: {
            page_number,
            row,
          },
        });
        if (res.status === 200) {
          dispatch({ type: "SET_CATEGORIES", payload: res.data });
        }
        console.log("res::::", res);
      } catch (e) {
        console.log("e:", e);
      }
    },
    [_axios, dispatch]
  );

  const getCategory = useCallback(
    async (page_number, row) => {
      try {
        let res = await _axios().get("admin_panel/blog/category", {
          params: {
            page_number,
            row,
          },
        });
        if (res.status === 200) {
          dispatch({ type: "SET_CATEGORIES", payload: res.data });
        }
        console.log("res::::", res);
      } catch (e) {
        console.log("e:", e);
      }
    },
    [_axios, dispatch]
  );

  const deleteCategory = useCallback(
    async (blog_category_id, enable) => {
      try {
        let res = await _axios().delete("admin_panel/blog/category", {
          params: {
            blog_category_id: blog_category_id,
            enable: `${enable}`,
          },
        });
        if (res.status === 200) {
          toast.success("غیرفعال سازی با موفقیت انجام شد.");
        }
        console.log("res::::", res);
      } catch (e) {
        console.log("e:", e);
      }
    },
    [_axios, dispatch]
  );

  const addCategory = useCallback(async () => {
    try {
      let res = await _axios().post("admin_panel/blog/category", {
        seo_title: state?.seo_title,
        seo_name: state?.seo_name,
        seo_description: state?.seo_description,
        title: state?.title,
        body: state?.body,
      });
      if (res.status === STASTUS.success) {
        toast.success("ثبت با موفقیت انجام شد.");
        location.push("/category");
      }
      console.log("res::::", res);
    } catch (e) {
      console.log("e:", e);
    }
  }, [_axios, location, state, dispatch]);
  return (
    <CategoryContext.Provider
      value={{
        ...state,
        dispatch,
        getCategories,
        deleteCategory,
        addCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryState;
