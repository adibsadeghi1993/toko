import { STASTUS } from "config/constant";
import React, { useCallback, useContext, useReducer, useState } from "react";
import { SessionContext } from "shared/system-controls/session/SessionProvider";
import ProductReducer from "./Reducer";
import { DEFAULT_ROW, DEFAULT_PAGE_NUMBER } from "config/constant";

export const ProductContext = React.createContext();

const ProductState = ({ children }) => {
  const initialState = {
    products: {},
    insurancesCategoriy: [],
    loading: false,
    insuranceName: { category_id: 0, category_name: "همه" },
    loadingDetailes: false,
    query: "",
    productDetailes: {},
    loadingEdit:false,
    loadingDelete:false
  };
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  const { _axios } = useContext(SessionContext);
  const [page, setPageNumber] = useState(DEFAULT_PAGE_NUMBER);
  const [showDetailes, setShowDetailes] = useState(false);
  const [show_interval, setshow_interval] = useState(false);
  const [showProductDetail, setShowProductDetail] = useState(false);

  const getAllProducts = useCallback(
    async ({
      page = DEFAULT_PAGE_NUMBER,
      query = undefined,
      row = DEFAULT_ROW,
      product_category_id = undefined,
    } = {}) => {
      try {
        dispatch({ type: "SET_LOADING" });
        let res = await _axios().get("admin_panel/product/search", {
          params: {
            page,
            q: query,
            row,
            product_category_id,
          },
        });
        if (res.status === STASTUS.success) {
          console.log(res);
          dispatch({ type: "SET_PRODUCTS", payload: res.data });
        }
      } catch (e) {
        dispatch({ type: "SET_LOADING" });
        console.log(e);
      }
    },
    [_axios]
  );

  //get productCategory
  const getProductCategories = useCallback(async () => {
    try {
      let res = await _axios().get("admin_panel/product/categories");

      if (res.status === STASTUS.success) {
        console.log(res);
        dispatch({ type: "SET_PRODUCT_CATEGORIES", payload: res.data });
      }
    } catch (e) {
      console.log("e::::", e);
    }
  }, [_axios, dispatch]);

  // Get product details
  const getProductDetailes = useCallback(
    async (product_id = undefined) => {
      try {
        dispatch({ type: "SET_DETAIL_LOADING" ,payload:true});
        const res = await _axios().get("admin_panel/product/details", {
          params: {
            product_id,
          },
        });
        console.log(res);

        if (res?.status === STASTUS.success) {
          dispatch({ type: "SET_DETAIL_LOADING",payload:false });
          console.log(res.data);
          dispatch({ type: "SET_PRODUCT_DETAILS", payload: res.data });
        }
      } catch (err) {
        console.log(err);
        setShowDetailes(false);
      }
    },
    [_axios]
  );

  const getDetailsProduct = useCallback(
    async (product_id) => {
      try {
        dispatch({ type: "SET_DETAIL_LOADING" });
        const res = await _axios().get("admin_panel/product/details", {
          params: {
            product_id,
          },
        });
        if (res?.status === STASTUS.success) {
          dispatch({ type: "SET_PRODUCT_DETAILS", payload: res.data });
        }
      } catch (err) {
        console.log(err);
        Promise.reject(err);
      }
    },
    [_axios, dispatch]
  );


  const updatedProductDetaile = useCallback(
    async (newDetail,product_id) => {
      try {

        dispatch({type:"LOADING_EDIT",payload:true})
        console.log(newDetail)
     
        const res = await _axios().put("admin_panel/user/products",newDetail, {
          params: {
            product_id,
          },
        });
        if (res?.status === STASTUS.success) {
         console.log(res)
         dispatch({type:"LOADING_EDIT",payload:false})
         getAllProducts({page:DEFAULT_PAGE_NUMBER,query : undefined,
          row :DEFAULT_ROW,
          product_category_id : undefined})

        }
      } catch (err) {
        console.log(err);
        Promise.reject(err);
      }
    },
    [_axios, dispatch]
  );


  const deleteProduct = useCallback(
    async (data,product_id) => {
      try {

        dispatch({type:"LOADING_DELETE",payload:true})
        console.log(data)
     
        const res = await _axios().delete("admin_panel/user/products",data, {
          params: {
            product_id,
          },
        });
        if (res?.status === STASTUS.success) {
         console.log(res)
         dispatch({type:"LOADING_DELETE",payload:false})

        }
      } catch (err) {
        console.log(err);
        Promise.reject(err);
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
        page,
        setPageNumber,
        getAllProducts,
        getProductDetailes,
        showDetailes,
        setShowDetailes,
        show_interval,
        setshow_interval,
        setShowProductDetail,
        showProductDetail,
        getDetailsProduct,
        updatedProductDetaile,
        deleteProduct 
        
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
