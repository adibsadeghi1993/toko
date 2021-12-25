import React, { useCallback, useContext, useReducer } from "react";
import { SessionContext } from "shared/system-controls/session/SessionProvider";
import CategoryReducer from "admin/category/state/Reducer";

export const CategoryContext = React.createContext();

const CategoryState = ({ children }) => {
  const initialState = { categories: [] };
  const [state, dispatch] = useReducer(CategoryReducer, initialState);
  const { _axios } = useContext(SessionContext);

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
  return (
    <CategoryContext.Provider
      value={{
        ...state,
        dispatch,
        getCategories,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryState;
