import { SaleContext } from "admin/sale/state/SaleState";
import React, { useContext } from "react";

const Titles_status = React.memo(({ settoggle2, mobile }) => {
  const { dispatch, statuses, status_show } = useContext(SaleContext);

  return (
    <div
      className={`flex justify-start  items-start flex-wrap  ${
        mobile ? "flex-col w-64 justify-center" : ""
      } `}
    >
      {status_show &&
        !!statuses &&
        !!statuses.length &&
        statuses.map((item, index) => (
          <button
            onClick={() => {
              dispatch({ type: "SET_STATUS", payload: item.id });
              dispatch({ type: "set_status_show", payload: !status_show });
              settoggle2((toggle) => !toggle);
              dispatch({ type: "set_insurance_status", payload: item.title });
            }}
            key={index}
            value={item.id}
            className="w-full md:w-36 md:text-sm md:whitespace-nowrap md:px-1 md:mx-1 my-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            {item.title}
          </button>
        ))}
    </div>
  );
});

export default Titles_status;
