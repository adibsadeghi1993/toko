import React, { useCallback, useContext, useState, useEffect } from "react";
import { MemmberContext } from "admin/members/state/State";
import AsyncSelect from "react-select/async";

export default React.memo(({ item }) => {
  const { dispatch, searchProvinces, searchCities } =
    useContext(MemmberContext);
  const [selectedValue, setSelectedValue] = useState(null);
  const [_selectProvices, SetSelectProvinces] = useState(null);
  const [_provices, setProvinces] = useState(item?.province);
  const [inputValue, setValue] = useState(item?.city);

  useEffect(() => {
    if (_selectProvices) {
      dispatch({
        type: "SET_UPDATE_DETAILS_SUBSET",
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
        type: "SET_UPDATE_DETAILS_SUBSET",
        payload: {
          key: "city",
          value: selectedValue?.id,
        },
      });
    }
  }, [selectedValue, dispatch]);
  return (
    <tr className="bg-emerald-200 text-sm">
      <td className="pl-1 text-center border border-gray-300">
        {/* {item?.cellphone_number || "-"} */}
        <input
          className="border-0 p-px rounded"
          defaultValue={item?.cellphone_number}
          onChange={useCallback(
            (e) => {
              dispatch({
                type: "SET_UPDATE_DETAILS_SUBSET",
                payload: {
                  key: "cellphone_number",
                  value: e.target.value,
                },
              });
            },
            [dispatch]
          )}
        />
      </td>
      <td className="pl-1 text-center border border-gray-300">
        {/* {item?.phone_number || "-"} */}
        <input
          className="border-0 p-px rounded"
          defaultValue={item?.phone_number}
          onChange={useCallback(
            (e) => {
              dispatch({
                type: "SET_UPDATE_DETAILS_SUBSET",
                payload: {
                  key: "phone_number",
                  value: e.target.value,
                },
              });
            },
            [dispatch]
          )}
        />
      </td>
      <td className="pl-1 text-center border border-gray-300">
        {/* {item?.province || "-"} */}
        <AsyncSelect
          cacheOptions
          defaultOptions
          defaultInputValue={_provices}
          getOptionLabel={(e) => e.province}
          getOptionValue={(e) => e.id}
          loadOptions={searchProvinces}
          onInputChange={setProvinces}
          onChange={SetSelectProvinces}
        />
      </td>
      <td className="pl-1 text-center border border-gray-300">
        {/* {item?.city || "-"} */}
        <AsyncSelect
          cacheOptions
          defaultOptions
          defaultInputValue={inputValue}
          getOptionLabel={(e) => e.city}
          getOptionValue={(e) => e.id}
          loadOptions={(val) => searchCities(val, _selectProvices?.id)}
          onInputChange={setValue}
          onChange={setSelectedValue}
        />
      </td>
      <td className="pl-1 text-center border border-gray-300">
        {/* {item?.postcode} */}
        <input
          className="border-0 p-px rounded"
          defaultValue={item?.postcode}
          onChange={useCallback(
            (e) => {
              dispatch({
                type: "SET_UPDATE_DETAILS_SUBSET",
                payload: {
                  key: "postcode",
                  value: e.target.value,
                },
              });
            },
            [dispatch]
          )}
        />
      </td>
      <td className="pl-1 text-center border border-gray-300">
        {/* {item?.address || "-"} */}
        <input
          className="border-0 p-px rounded"
          defaultValue={item?.address}
          onChange={useCallback(
            (e) => {
              dispatch({
                type: "SET_UPDATE_DETAILS_SUBSET",
                payload: {
                  key: "address",
                  value: e.target.value,
                },
              });
            },
            [dispatch]
          )}
        />
      </td>
    </tr>
  );
});
