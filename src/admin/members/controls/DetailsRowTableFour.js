import React, { useContext, useEffect, useState, useCallback } from "react";
import AsyncSelect from "react-select/async";
import { KNOW_TOOKO, MILITARY } from "config/constant";
import { MemmberContext } from "../state/State";

export default React.memo(({ item }) => {
  const { searchProvinces, dispatch, searchCities } =
    useContext(MemmberContext);
  const [selectedValue, setSelectedValue] = useState(null);
  const [_selectProvices, SetSelectProvinces] = useState(null);
  const [_provices, setProvinces] = useState("");
  const [inputValue, setValue] = useState("");

  useEffect(() => {
    if (item) {
      SetSelectProvinces(item?.province);
      SetSelectProvinces(item?.city);
    }
  }, [item]);
  useEffect(() => {
    console.log("_selectProvices:::", _selectProvices);
    if (_selectProvices) {
      dispatch({
        type: "SET_UPDATE_DETAILS",
        payload: {
          key: "province",
          value: _selectProvices?.id,
        },
      });
    }
  }, [_selectProvices]);
  useEffect(() => {
    if (selectedValue) {
      dispatch({
        type: "SET_UPDATE_DETAILS",
        payload: {
          key: "city",
          value: selectedValue?.id,
        },
      });
    }
  }, [selectedValue]);
  return (
    <React.Fragment>
      <tr>
        <td className="py-2">
          {/* {item?.degree_of_education_id || "-"} */}
          <select
            onChange={useCallback(
              (e) => {
                dispatch({
                  type: "SET_UPDATE_DETAILS",
                  payload: {
                    key: "degree_of_education_id",
                    value: e.target.value,
                  },
                });
              },
              [dispatch]
            )}
            className="shadow mx-auto border p-1 rounded w-full"
          >
            <option selected={item?.degree_of_education_id === 1} value="1">
              زیردیپلم
            </option>
            <option selected={item?.degree_of_education_id === 2} value="2">
              دیپلم
            </option>
            <option selected={item?.degree_of_education_id === 3} value="3">
              کاردانی
            </option>
            <option selected={item?.degree_of_education_id === 4} value="4">
              کارشناسی
            </option>
            <option selected={item?.degree_of_education_id === 5} value="5">
              کارشناسی ارشد
            </option>
            <option selected={item?.know_us_id === 6} value="6">
              دکترا
            </option>
            <option selected={item?.know_us_id === 7} value="7">
              فوق دکترا
            </option>
          </select>
        </td>
        {/* provinces */}
        <td className="py-2">
          {item && (
            <AsyncSelect
              cacheOptions
              defaultOptions
              defaultInputValue={_selectProvices || item?.province?.province}
              getOptionLabel={(e) => e.province}
              getOptionValue={(e) => e.id}
              loadOptions={searchProvinces}
              onInputChange={setProvinces}
              onChange={SetSelectProvinces}
            />
          )}
        </td>
        {/* cities */}
        <td className="py-2">
          <AsyncSelect
            cacheOptions
            defaultOptions
            defaultInputValue={selectedValue}
            getOptionLabel={(e) => e.city}
            getOptionValue={(e) => e.id}
            loadOptions={(val) => searchCities(val, _selectProvices?.id)}
            onInputChange={setValue}
            onChange={setSelectedValue}
          />
        </td>
      </tr>
    </React.Fragment>
  );
});
