import { DEFAULT_PAGE_NUMBER, DEFAULT_ROW } from "config/constant";
import React, { useCallback, useContext } from "react";
import DatePicker from "shared/controls/DatePicker/DatePickerControl";
import TextInputControl from "shared/controls/TextInputControl";
import { CampaignContext } from "../state/State";

export default React.memo(() => {
  const { getCampaigns, filter, dispatch } = useContext(CampaignContext);

  const _getCampaing = () => {
    getCampaigns?.(
      DEFAULT_PAGE_NUMBER,
      DEFAULT_ROW,
      filter?.campaign_name_or_description,
      filter?.is_active,
      filter?.username,
      filter?.registered_on_after
        ? new Date(filter?.registered_on_after)
            .toLocaleDateString("en-CA") // TODO: for improvment change to moment js
            .split("/")
            .reverse()
            .join("-")
        : undefined,
      filter?.registered_on_before
        ? new Date(filter?.registered_on_before)
            .toLocaleDateString("en-CA") // TODO: for improvment change to moment js
            .split("/")
            .reverse()
            .join("-")
        : undefined
    );
  };

  const _clear = useCallback(() => {
    dispatch({ type: "CLEAR_FILTER" });
  }, [dispatch]);
  return (
    <>
      <div className="p-1 max-w-lg flex flex-col  w-full">
        <div className="flex-col md:flex-row flex space-y-2 md:space-y-0 mx-3  items-center justify-center p-1 m-1 ">
          <input
            type="text"
            className="w-full flex-auto p-2  border border-blue-200 rounded focus:outline-none"
            autoComplete="off"
            placeholder="نام و نام خانوادگی , شماره تماس"
            value={filter?.campaign_name_or_description}
            onChange={useCallback((e) => {
              dispatch({
                type: "SET_FILTER",
                payload: {
                  campaign_name_or_description: e.target.value,
                },
              });
            })}
          />
          {/* <input
            type="text"
            className=" w-full flex-auto p-1 md:rounded-r-none border border-blue-200 rounded focus:outline-none"
            autoComplete="off"
            placeholder="شماره تماس"
            value={num}
            onChange={(e) => onChange(e)}
          /> */}
        </div>
        <div className="flex flex-col md:flex-row md:justify-between mt-4 align-center gap-x-4">
          <div className="flex flex-col md:flex-row gap-x-4">
            <div>
              <TextInputControl
                placeholder="نام کاربری:"
                value={filter?.username}
                onChange={useCallback(
                  (e) => {
                    dispatch({
                      type: "SET_FILTER",
                      payload: {
                        username:
                          e.target.value !== "" ? e.target.value : undefined,
                      },
                    });
                  },
                  [dispatch]
                )}
              />
            </div>
            <div className="flex align-center">
              <select
                className="select-box p-2  w-64 text-sm bg-white block border rounded"
                onChange={(el) =>
                  dispatch({
                    type: "SET_FILTER",
                    payload: {
                      is_active:
                        el.target.value != -1
                          ? Boolean(el.target.value)
                          : undefined,
                    },
                  })
                }
              >
                <option value="-1" selected={!filter?.is_active}>انتخاب</option>
                <option value="1" selected={!!filter?.is_active}>فعال</option>
                <option value="0" >غیرفعال</option>
              </select>
            </div>
          </div>
          <div className="flex gap-x-6">
            <div className="flex justify-end items-center gap-x-2">
              <DatePicker
                DatePickerInput
                dateInput
                date={filter?.registered_on_after}
                placeholder="از تاریخ"
                onChange={useCallback(
                  (e) => {
                    dispatch({
                      type: "SET_FILTER",
                      payload: { registered_on_after: e.target.value },
                    });
                  },
                  [dispatch]
                )}
              />
              <DatePicker
                DatePickerInput
                dateInput
                date={filter?.registered_on_before}
                placeholder="تا تاریخ"
                onChange={useCallback(
                  (e) => {
                    console.log("e data", e);
                    dispatch({
                      type: "SET_FILTER",
                      payload: { registered_on_before: e.target.value },
                    });
                  },
                  [dispatch]
                )}
              />
              <input
                type="submit"
                className="p-3 mr-2 cursor-pointer rounded bg-gray-100 shadow hover:shadow-lg w-full md:w-32 search_button"
                value="جست و جو کن"
                id="button-addon1"
                onClick={() => _getCampaing()}
              />
              {(filter?.registered_on_before ||
                filter?.registered_on_after ||
                filter?.username ||
                filter?.is_active ||
                filter?.campaign_name_or_description) && (
                <input
                  type="submit"
                  className="p-3 mr-2 cursor-pointer rounded bg-gray-100 shadow hover:shadow-lg w-full md:w-32 search_button"
                  value="بازنگری"
                  id="button-addon1"
                  onClick={_clear}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
