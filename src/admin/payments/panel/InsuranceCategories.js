import React, { useContext } from "react";
import { InstallmentContext } from "../state/InstallmentState";

const InsuranceCategories = React.memo(({ mobile }) => {
  const { dispatch, showInsurance, insuranceCategories } =
    useContext(InstallmentContext);

  return (
    <div
      className={`flex items-center ${
        mobile ? "flex-col justify-center w-64" : ""
      } `}
    >
      {showInsurance &&
        insuranceCategories
          ?.filter((item) => item.enabled)
          .map((insurance, index) => (
            <button
              onClick={(e) => {
                dispatch({ type: "TOGGLE_SHOW_INSURANCE" });
                dispatch({
                  type: "SET_INSURANCE_NAME",
                  payload: insurance.category_name,
                });
                dispatch({
                  type: "SET_INSURANCE",
                  payload: insurance.category_id,
                });
              }}
              key={index}
              className="w-full md:w-36 md:text-sm md:whitespace-nowrap md:px-1 md:mx-1 my-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              {insurance.category_name}
            </button>
          ))}
      {showInsurance && (
        <button
          onClick={(e) => {
            dispatch({ type: "TOGGLE_SHOW_INSURANCE" });
            dispatch({ type: "SET_INSURANCE_NAME", payload: "همه" });
            dispatch({ type: "SET_INSURANCE", payload: undefined });
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
