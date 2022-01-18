import React, { useContext, useEffect, useState, useCallback } from "react";
import AsyncSelect from "react-select/async";
import { KNOW_TOOKO, MILITARY } from "config/constant";
import { MemmberContext } from "../state/State";

export default React.memo(({ item }) => {
  const { searchProvinces, dispatch, searchCities } =
    useContext(MemmberContext);
  const [selectedValue, setSelectedValue] = useState(null);
  const [_selectProvices, SetSelectProvinces] = useState(null);
  const [_provices, setProvinces] = useState(item?.province);
  const [inputValue, setValue] = useState(item?.city);

  useEffect(() => {
    if (_selectProvices) {
      dispatch({
        type: "SET_UPDATE_DETAILS",
        payload: {
          key: "province",
          value: _selectProvices?.id,
        },
      });
    }
  }, [_selectProvices, dispatch]);
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
  }, [selectedValue, dispatch]);
  return (
    <React.Fragment>
      <tr>
        <td className="py-2">
          <select
            onChange={useCallback(
              (e) => {
                dispatch({
                  type: "SET_UPDATE_DETAILS",
                  payload: { key: "is_married", value: e.target.value },
                });
              },
              [dispatch]
            )}
            className="w-full shadow mx-auto border p-1 rounded"
          >
            <option value={true} selected={item?.is_married}>
              مجرد
            </option>
            <option value={false} selected={!item?.is_married}>
              متاهل
            </option>
          </select>
          {/* {item?.degree_of_education_id || "-"} */}
        </td>
        {/* provinces */}
        <td className="py-2">
          <AsyncSelect
            cacheOptions
            defaultOptions
            defaultInputValue={_provices}
            getOptionLabel={(e) => e.province}
            getOptionValue={(e) => e.id}
            loadOptions={searchProvinces}
            onInputChange={setProvinces}
            onChange={SetSelectProvinces}
            placeholder="جستجوی استان ... "
          />
        </td>
        {/* cities */}
        <td className="py-2">
          <AsyncSelect
            cacheOptions
            defaultOptions
            defaultInputValue={inputValue}
            getOptionLabel={(e) => e.city}
            getOptionValue={(e) => e.id}
            loadOptions={(val) => searchCities(val, _selectProvices?.id)}
            onInputChange={setValue}
            onChange={setSelectedValue}
            placeholder="جستجوی شهر ... "
          />
        </td>
      </tr>
    </React.Fragment>
  );
});
