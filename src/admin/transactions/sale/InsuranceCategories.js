import React from "react";
import { useSaleTransactions } from "./state/State";

const InsuranceCategories = React.memo(() => {
  const { dispatch, showCategories, insuranceCategories } =
    useSaleTransactions();
  return (
    <div
      // mobile ? "flex-col justify-center w-64" : "insurances"
      className={`flex items-center `}
    >
      {showCategories &&
        insuranceCategories?.map((insurance, i) => (
          <button
            onClick={(e) => {
              dispatch({ type: "TOGGLE_CATEGORIES" });
            }}
            key={i}
            className="w-full md:w-36 md:text-sm md:whitespace-nowrap md:px-1 md:mx-1 my-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            {insurance}
          </button>
        ))}
      {showCategories && (
        <button
          onClick={(e) => {
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
