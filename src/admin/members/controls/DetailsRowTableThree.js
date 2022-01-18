import React, { useContext, useEffect, useState, useCallback } from "react";
import { KNOW_TOOKO, MILITARY } from "config/constant";
import { MemmberContext } from "../state/State";

export default React.memo(({ item }) => {
  const { searchProvinces, dispatch, searchCities } =
    useContext(MemmberContext);


  return (
    <React.Fragment>
      <tr className="bg-emerald-200 text-center text-sm ">
        <td className="py-2 px-1">
          <select
            onChange={useCallback(
              (e) => {
                dispatch({
                  type: "SET_UPDATE_DETAILS",
                  payload: {
                    key: "military_state_id",
                    value: e.target.value,
                  },
                });
              },
              [dispatch]
            )}
            className="w-full shadow mx-auto border-0 p-1 rounded"
          >
            <option value="-1">انتخاب کنید</option>
            {MILITARY.map((itm, index) => (
              <option
                selected={item?.military_state_id === itm.id}
                key={index}
                value={itm.id}
              >
                {itm.title}
              </option>
            ))}
          </select>
        </td>
        <td className="py-2 px-1">
          <input
            className="w-full shadow mx-auto border-0 p-1 rounded"
            defaultValue={item?.cellphone_number}
            onChange={useCallback(
              (e) => {
                dispatch({
                  type: "SET_UPDATE_DETAILS",
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
        <td className="py-2 px-1">
          <input
            className="w-full shadow mx-auto border-0 p-1 rounded"
            defaultValue={item?.phone_number}
            onChange={useCallback(
              (e) => {
                dispatch({
                  type: "SET_UPDATE_DETAILS",
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
        <td className="py-2 px-1">
          <select
            onChange={useCallback(
              (e) => {
                dispatch({
                  type: "SET_UPDATE_DETAILS",
                  payload: {
                    key: "know_us_id",
                    value: e.target.value,
                  },
                });
              },
              [dispatch]
            )}
            className="w-full shadow mx-auto border-0 p-1 rounded"
          >
            <option value="-1">انتخاب کنید</option>
            {KNOW_TOOKO.map((itm, index) => (
              <option
                selected={item?.know_us_id === itm.id}
                key={index}
                value={itm.id}
              >
                {itm.title}
              </option>
            ))}
          </select>
        </td>

        <td className="py-2 px-1">
          <input
            className="w-full shadow mx-auto border-0 p-1 rounded"
            defaultValue={item?.postcode}
            onChange={useCallback(
              (e) => {
                dispatch({
                  type: "SET_UPDATE_DETAILS",
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
        <td className="py-2 px-1">
          <input
            className="w-full shadow mx-auto border-0 p-1 rounded"
            defaultValue={item?.address}
            onChange={useCallback(
              (e) => {
                dispatch({
                  type: "SET_UPDATE_DETAILS",
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
    </React.Fragment>
  );
});
