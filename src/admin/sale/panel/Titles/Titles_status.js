import { SaleContext } from "admin/sale/state/SaleState";
import React, { useContext } from "react";

const Titles_status = React.memo(({
  settoggle2,
  mobile
}) => {
  const { dispatch, statuses, status_show } = useContext(SaleContext)
  return (
    <div
      className={`flex justify-center  items-center flex-wrap  ${
        mobile ? "flex-col w-64 justify-center" : ""
      } `}
    >
      {status_show &&
        statuses &&
        Object.entries(statuses).map(([key, val]) => {
          if (key === "همه") {
            return (
              <button
                onClick={() => {
                  dispatch({ type: "set_status", payload: val });
                  dispatch({ type: "set_status_show", payload: !status_show });
                  settoggle2((toggle) => !toggle);
                  dispatch({ type: "set_insurance_status", payload: 'همه' });
                }}
                className="w-full md:w-36 md:text-sm md:whitespace-nowrap md:px-1 md:mx-1 my-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                key={key}
              >
                همه
              </button>
            );
          }
          return (
            <button
              onClick={() => {
                dispatch({ type: "set_status", payload: val });
                dispatch({ type: "set_status_show", payload: !status_show });
                settoggle2((toggle) => !toggle);
                dispatch({ type: "set_insurance_status", payload: key });
              }}
              key={val}
              value={key}
              className="w-full md:w-36 md:text-sm md:whitespace-nowrap md:px-1 md:mx-1 my-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              {key}
            </button>
          );
        })}
    </div>
  );
})

export default Titles_status;
