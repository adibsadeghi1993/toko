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
    message_success,
    dispatch,
  } = useContext(AcceessContex);

  useEffect(() => {
    promoter_level();
  }, [promoter_level]);

  useEffect(() => {
    !!level_id && getSuperSets(level_id);
  }, [level_id, getSuperSets]);

  useEffect(() => {
    !!level_item_id &&
      !!level_item_id !== "-1" &&
      getPercents(level_item_id, level_id);
  }, [level_item_id, getPercents]);

  useEffect(() => {
    console.log("percents::::", percents);
  }, [percents]);

  const getTitle = (item) => {
    switch (parseInt(item)) {
      case 1:
        return "اول";
      case 2:
        return "دوم";
      case 3:
        return "سوم";
      case 4:
        return "چهارم";
      case 5:
        return "پنجم";
      case 6:
        return "ششم";
      case 7:
        return "هفتم";
      case 8:
        return "هشتم";
      case 9:
        return "نهم";
      case 10:
        return "دهم";
      case 11:
        return "یازدهم";
      case 12:
        return "دوازدهم";
    }
  };

  return (
    <div className="mt-4">
      <h2>شبکه فروش</h2>
      <div className="divide-border h-0.5 mt-1" />
      <div className="mt-4">
        <div className="flex flex-row justify-between md:justify-start gap-x-8">
          <div className="flex flex-col">
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
                  <option key={index} value={item?.id}>
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
                      selected={!!level_item_id && level_item_id === item?.id}
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
