import { STASTUS } from "config/constant";
import React, { useCallback, useContext, useReducer } from "react";
import { SessionContext } from "shared/system-controls/session/SessionProvider";
import ProductReducer from "./Reducer";

export const ProductContext = React.createContext();

const ProductState = ({ children }) => {
  const initialState = {};
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  const { _axios } = useContext(SessionContext);

  //get product
  const getProductCategories = useCallback(async () => {
    try {
      let res = await _axios().get("admin_panel/product/categories");
      console.log("res", res);
      if (res.status === STASTUS.success) {
        dispatch({ type: "SET_PRODUCT_CATEGORIES", payload: res.data });
      }
    } catch (e) {
      console.log("e::::", e);
    }
  }, [_axios, dispatch]);

  //get status product
  const getStatusProduct = useCallback(
    async (category_id) => {
      try {
        let res = await _axios().get("admin_panel/sales/statuses", {
          params: {
            category_id,
          },
        });
        console.log("res", res);
        if (res.status === STASTUS.success) {
          dispatch({ type: "SET_STATUSES", payload: res.data });
        }
      } catch (e) {
        console.log("e::::", e);
      }
    },
    [_axios, dispatch]
  );

  return (
    <ProductContext.Provider
      value={{
        ...state,
        dispatch,
        getProductCategories,
        getStatusProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
