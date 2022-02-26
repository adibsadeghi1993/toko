import React, { useContext } from "react";
import { InstallmentContext } from "../state/InstallmentState";

const InsuranceStatuses = React.memo(({ mobile }) => {
  const { dispatch, insuranceStatuses, showStatus } =
    useContext(InstallmentContext);

    console.log({insuranceStatuses})
    // console.log({state})

  return (
    <div
      className={`flex justify-start  items-start flex-wrap ${
        mobile ? "flex-col w-64 justify-center" : ""
      }`}
    >
      {showStatus &&
        !!insuranceStatuses &&
        !!insuranceStatuses.length &&
        insuranceStatuses.map((insuranceStatus, index) => {
          if(insuranceStatus.title==="صادر شد"){
            return (
              <button
                onClick={() => {
                  dispatch({ type: "TOGGLE_SHOW_STATUS" });
                  dispatch({ type: "SET_STATUS", payload: insuranceStatus.id });
                  dispatch({
                    type: "SET_STATUS_NAME",
                    payload: insuranceStatus.title,
                  });
                }}
                key={index}
                value={insuranceStatus.id}
                className="w-full md:w-36 md:text-sm md:whitespace-nowrap md:px-1 md:mx-1 my-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                صادر شده
              </button>
            )
          }else if(insuranceStatus.title==="لغو شد") {
            return (
              <button
                onClick={() => {
                  dispatch({ type: "TOGGLE_SHOW_STATUS" });
                  dispatch({ type: "SET_STATUS", payload: insuranceStatus.id });
                  dispatch({
                    type: "SET_STATUS_NAME",
                    payload: insuranceStatus.title,
                  });
                }}
                key={index}
                value={insuranceStatus.id}
                className="w-full md:w-36 md:text-sm md:whitespace-nowrap md:px-1 md:mx-1 my-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
               لغو شده
              </button>
            )
          }else{
          return null
          }
        })}
    </div>
  );
});

export default InsuranceStatuses;
