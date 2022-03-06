import React, { useContext, useEffect } from "react";
import Top from "admin/members/Top";
import { ReactComponent as Bar } from "../../shared/icons/bar.svg";
import { Link } from "react-router-dom";
import { ProductContext } from "./state/State";
import ProductsTabel from "./panel/ProductsTabel";
import SearchProduct from "./panel/SearchProduct";
import Newproduct from "./Newproduct";

const Products = React.memo(() => {
  const {
    getProductCategories,
    insurancesCategoriy,
    insuranceName,
    getAllProducts,
    showDetailes,
    setShowDetailes,
    dispatch,
  } = useContext(ProductContext);

  console.log({ insurancesCategoriy });

  useEffect(() => {
    !!getProductCategories && getProductCategories();
  }, [getProductCategories]);
  return (
    <>
      {showDetailes ? (
        <Newproduct />
      ) : (
        <>
          <Top />
          <div className="relative top-0 z-30 w-full px-30 -mt-72 shadow-lg">
            <div className="card flex flex-col min-h-screen">
              <div className="card-header py-5 px-4 border-b border-gray-100">
                <div className="flex px-4 flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  <h3 className="text-primary-color  font-bold text-otherCaption  text-center lg:text-right">
                    لیست محصولات
                  </h3>
                  <button
                    onClick={() => {
                      setShowDetailes(true);
                      dispatch({ type: "SET_PRODUCT_DETAILS", payload: {} });
                      getProductCategories();
                    }}
                    className="bg-blue-500 text-white px-3 py-2"
                  >
                    افزودن محصول
                  </button>
                </div>
              </div>
              <div className="px-5">
                <SearchProduct />
              </div>
              <ProductsTabel />
            </div>
          </div>
        </>
      )}
    </>
  );
});

export default Products;
