import React, { useState, useContext, useEffect } from "react";
import { ReactComponent as UpArrow } from "shared/icons/arrow-up.svg";
import { ReactComponent as DownArrow } from "shared/icons/arrow-down.svg";
import { ProductContext } from "../state/State";

const SearchProduct = () => {
  const {
    insurancesCategoriy,
    insuranceName,
    dispatch,
    getAllProducts,
    page,
    query,
  } = useContext(ProductContext);
  const [toggle1, setToogle1] = useState(false);

  const _getAllProducts = () => {
    getAllProducts({
      page: page,
      product_category_id:
        insuranceName.category_name === "همه"
          ? null
          : insuranceName.category_id,
          query:query
    });
  };

  useEffect(() => {
    _getAllProducts();
  }, [insuranceName?.category_name, page]);

  const searchHandler = () => {
    _getAllProducts();
  };

  return (
    <div className="p-1 max-w-lg  mx-auto">
      <div className="flex-col md:flex-row flex space-y-2 md:space-y-0 mx-3  items-center justify-center p-1 m-1 ">
        <input
          type="text"
          className="w-full flex-auto p-1 md:rounded-l-none border border-blue-200 rounded focus:outline-none"
          autoComplete="off"
          value={query}
          placeholder="نام شرکت را بنویسید"
          onChange={(e) =>
            dispatch({ type: "SET_QUERY", payload: e.target.value })
          }
        />

        <input
          type="submit"
          className="p-2 mr-2 cursor-pointer rounded bg-gray-100 shadow hover:shadow-lg w-full md:w-32 search_button"
          value="جست و جو کن"
          id="button-addon1"
          onClick={searchHandler}
        />
      </div>
      <div className="pr-5">
        <div>
          <p>محصول</p>
          <button
            onClick={() => setToogle1(!toggle1)}
            className="bg-blue-500 flex px-6 py-2 mt-3 text-white"
          >
            <span>{insuranceName.category_name}</span>
            {toggle1 ? (
              <span className="mr-2">{<UpArrow />}</span>
            ) : (
              <span className="mr-2">{<DownArrow />}</span>
            )}
          </button>
        </div>
        <div className="flex  flex-wrap">
          {toggle1 &&
            insurancesCategoriy?.map((i) => {
              return (
                <button
                  onClick={() => {
                    dispatch({
                      type: "SET_INSURANCE_NAME",
                      payload: i,
                    });
                    setToogle1(false);
                  }}
                  className="bg-white text-blue-500 mt-3 mr-1 hover:bg-blue-700 border-blue-400 border-2   hover:text-white  py-2 px-5 rounded text-sm flex items-center justify-center"
                >
                  {i.category_name}
                </button>
              );
            })}
          {toggle1 && (
            <button
              onClick={() => {
                dispatch({
                  type: "SET_INSURANCE_NAME",
                  payload: { category_id: 0, category_name: "همه" },
                });
                setToogle1(false);
              }}
              className="bg-white text-blue-500 mt-3 mr-1 hover:bg-blue-700 border-blue-400 border-2   hover:text-white  py-2 px-5 rounded text-sm flex items-center justify-center"
            >
              همه
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
