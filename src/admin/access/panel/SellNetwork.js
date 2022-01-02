import React, { useEffect, useContext } from "react";
import SellNetworkRow from "../controls/SellNetworkRow";
import { AcceessContex } from "../state/AccessState";
import Item_access from "./Item_access";

const SellNetwork = React.memo(() => {
  const {
    isUpdate,
    promoters, // new
    level_id,
    getPercents,
    promoter_level,
    percents,
    level_item_id,
    getSuperSets,
    promoter_level_items,
    updatePercent,
    details,
    dispatch,
  } = useContext(AcceessContex);

  useEffect(() => {
    promoter_level();
  }, [promoter_level]);

  useEffect(() => {
    (!!level_id || !!details?.promoter_level_info?.id) &&
      getSuperSets(level_id || details?.promoter_level_info?.id);
  }, [level_id, getSuperSets, details]);

  useEffect(() => {
    !!level_item_id &&
      !!level_item_id !== "-1" &&
      getPercents(level_item_id, level_id);
  }, [level_item_id, getPercents]);

  return (
    <div className="mt-4">
      <h2>شبکه فروش</h2>
      <div className="divide-border h-0.5 mt-1" />
      <div className="mt-4">
        <div className="flex flex-row gap-x-8">
          <div className="flex flex-row gap-x-1">
            <span>وضعیت پروموتر:</span>
            <span className="text-gray-500">
              {details?.promoter_level_info?.title || "-"}
            </span>
          </div>
          <div className="flex flex-row gap-x-1">
            <span>سرگروه:</span>
            <span className="text-gray-500">
              {details?.superset_info?.title || "-"}
            </span>
          </div>
        </div>
        <div className="flex flex-row mt-4 justify-between md:justify-start gap-x-8">
          <hr className="divide-x-2 " />
          <div className="flex flex-col ">
            <label>وضعیت پروموتر</label>
            <select
              className="select-box p-2 w-64 text-sm bg-white block border rounded mt-1"
              onChange={(el) =>
                el.target.value != -1 &&
                dispatch({
                  type: "SET_ID_PROMOTER_LEVEL",
                  payload: el.target.value,
                })
              }
            >
              <option value="-1">انتخاب</option>
              {!!promoters &&
                promoters?.length &&
                promoters?.map((item, index) => (
                  <option
                    // selected={
                    //   !!details && details?.promoter_level_info?.id === item.id
                    // }
                    key={index}
                    value={item?.id}
                  >
                    {item.title}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label>سرگروه</label>
            <select
              className="select-box p-2 w-64 text-sm bg-white block border rounded mt-1"
              onChange={(el) =>
                el.target.value != -1 &&
                dispatch({
                  type: "SET_ID_PROMOTER_ITEM_ID",
                  payload: el.target.value,
                })
              }
            >
              <>
                <option
                  value="-1"
                  selected={!!level_item_id && level_item_id === -1}
                >
                  انتخاب
                </option>
                {promoter_level_items &&
                  promoter_level_items?.length &&
                  promoter_level_items.map((item, index) => (
                    <option
                      // selected={
                      //   !!details && details?.superset_info?.id === item.id
                      // }
                      key={index}
                      value={item?.id}
                    >
                      {item?.name}
                    </option>
                  ))}
              </>
            </select>
          </div>
        </div>

        {!!percents &&
          !!percents?.length &&
          percents?.map((item, index) => (
            <SellNetworkRow item={item} index={index} key={index} />
          ))}
      </div>
    </div>
  );
});

export default SellNetwork;
