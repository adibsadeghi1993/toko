import React, { useContext, useState } from "react";
import { ReactComponent as Arrow_down } from "../../../shared/icons/arrow-down.svg";
import { ReactComponent as Arrow_up } from "../../../shared/icons/arrow-up.svg";
import { AcceessContex } from "../state/AccessState";

export default React.memo(({ product, val, index }) => {
  const [collspace, setCollspace] = useState(true);
  const { dispatch } = useContext(AcceessContex);
  return (
    <>
      <div
        onClick={() => {
          setCollspace(!collspace);
        }}
        className="w-full flex flex-row justify-between p-3 cursor-pointer bg-gray-200 mb-px"
      >
        <h1>{val}</h1>
        {!collspace && <Arrow_down />}
        {!!collspace && <Arrow_up />}
      </div>
      {collspace &&
        Object.values(product)[index].map((company_items) => (
          <>
            <div className="flex flex-row">
              <div className="w-10/12 p-3 bg-gray-400">
                <h1>
                  ماه {company_items.range[0]} تا {company_items.range[1]}
                </h1>
              </div>
              <div className="w-1/5 flex justify-center items-center p-3 bg-gray-500">
                <input
                  type="number"
                  className="text-center"
                  defaultValue={company_items.percent}
                  onChange={(el) => {
                    dispatch({
                      type: "SET_DATA_PERCENT",
                      payload: [
                        {
                          percent: el.target.value,
                          range: company_items.range,
                          product: company_items.product_id,
                        },
                      ],
                    });
                  }}
                />
              </div>
            </div>
          </>
        ))}
    </>
  );
});
