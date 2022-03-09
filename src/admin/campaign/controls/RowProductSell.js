import React, { useContext, useState } from "react";
import { ReactComponent as ArrowDown } from "shared/icons/arrow-down.svg";
import { ReactComponent as ArrowUp } from "shared/icons/arrow-up.svg";
import { CampaignContext } from "../state/State";

export default React.memo(({ product, val, index }) => {
  const [collspace, setCollspace] = useState(true);
  const { dispatch } = useContext(CampaignContext);
  return (
    <>
      <div
        onClick={() => {
          setCollspace(!collspace);
        }}
        className="w-full flex flex-row justify-between p-3 cursor-pointer bg-gray-200 mb-px"
      >
        <h1>{val}</h1>
        {!collspace && <ArrowDown />}
        {!!collspace && <ArrowUp />}
      </div>
      {collspace &&
        Object.values(product)[index].map((company_items, indx) => (
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
                          percent: parseInt(el.target.value),
                          range: company_items.range,
                          product_id: parseInt(company_items.product_id),
                          id: company_items.id,
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
