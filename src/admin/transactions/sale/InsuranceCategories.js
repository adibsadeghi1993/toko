import React, { useContext } from "react";
import { SaleTransactionsContext } from "./state/SaleTransactionsState";

const InsuranceCategories = React.memo(() => {
  const { dispatch, showCategories, insuranceCategories } = useContext(
    SaleTransactionsContext
  );
  return (
    <div className={`flex items-center `}>
      {showCategories &&
        insuranceCategories
          ?.filter((item) => item.enabled)
          .map((insurance, i) => (
            <button
              onClick={(e) => {
                dispatch({
                  type: "SET_INSURANCE",
                  payload: insurance?.category_id,
                });
                dispatch({
                  type: "SET_INSURANCE_NAME",
                  payload: insurance?.category_name,
                });
                dispatch({ type: "TOGGLE_CATEGORIES" });
              }}
              key={i}
              className="w-full md:w-36 md:text-sm md:whitespace-nowrap md:px-1 md:mx-1 my-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              {insurance?.category_name}
            </button>
          ))}
      {showCategories && (
        <button
          onClick={(e) => {
            dispatch({
              type: "SET_INSURANCE",
              payload: undefined,
            });
            dispatch({
              type: "SET_INSURANCE_NAME",
              payload: "همه",
            });
            dispatch({ type: "TOGGLE_CATEGORIES" });
          }}
          className="w-full md:w-36 md:text-sm md:whitespace-nowrap md:px-1 md:mx-1 my-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          همه
        </button>
      )}
    </div>
  );
});

export default InsuranceCategories;
