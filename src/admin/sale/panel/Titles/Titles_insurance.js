import { SaleContext } from "admin/sale/state/SaleState";
import {
  DEFAULT_PAGE_NUMBER,
  DEFAULT_ROW,
  DEFAULT_VALUE,
} from "config/constant";
import React, { useContext } from "react";

const Titles_insurance = React.memo(
  ({ settoggle1, insurance_list, mobile }) => {
    const { dispatch, insurance_show, getSalesSearch } =
      useContext(SaleContext);
    return (
      <div
        className={`flex   items-start ${
          mobile ? "flex-col justify-start w-64" : "insurances"
        } `}
      >
        {insurance_show &&
          insurance_list
            ?.filter((item) => item.enabled)
            .map((i) => (
              <button
                onClick={(e) => {
                  //clear status
                  dispatch({ type: "SET_STATUS", payload: null });
                  dispatch({ type: "set_insurance_status", payload: "همه" });
                  dispatch({ type: "SET_STATUSES", payload: [] });
                  //setter
                  dispatch({ type: "set_insurance", payload: i.category_id });
                  dispatch({
                    type: "set_insurance_show",
                    payload: !insurance_show,
                  });
                  settoggle1((toggle) => !toggle);
                  dispatch({
                    type: "set_insurance_name",
                    payload: e.target.value,
                  });
                }}
                key={i.category_id}
                className="w-full md:w-36 md:text-sm md:whitespace-nowrap md:px-1 md:mx-1 my-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                value={i.category_name}
              >
                {i.category_name}
              </button>
            ))}
        {insurance_show && (
          <button
            onClick={(e) => {
              dispatch({
                type: "set_insurance",
                payload: DEFAULT_VALUE.all_category,
              });
              dispatch({
                type: "set_insurance_show",
                payload: !insurance_show,
              });
              settoggle1((toggle) => !toggle);
              dispatch({ type: "set_insurance_name", payload: "همه" });

              dispatch({ type: "SET_STATUS", payload: null });
              dispatch({ type: "set_insurance_status", payload: "همه" });
              dispatch({ type: "SET_STATUSES", payload: [] });
              getSalesSearch?.();
            }}
            className="w-full md:w-36 md:text-sm md:whitespace-nowrap md:px-1 md:mx-1 my-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            همه
          </button>
        )}
      </div>
    );
  }
);

export default Titles_insurance;
