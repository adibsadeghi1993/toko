import React, { useContext, useCallback } from "react";
import { MemmberContext } from "../state/State";

export default React.memo(({ item }) => {
  const { dispatch } = useContext(MemmberContext);
  return (
    <>
      <tr className="bg-emerald-200 text-center text-sm">
        <td className="py-2 px-1">
          <select
            onChange={useCallback(
              (e) => {
                dispatch({
                  type: "SET_UPDATE_DETAILS",
                  payload: { key: "gender", value: e.target.value },
                });
              },
              [dispatch]
            )}
            className="w-full shadow mx-auto border-0 p-1 rounded"
          >
            <option value={true} selected={item?.gender}>
              آقا
            </option>
            <option value={false} selected={!item?.gender}>
              خانم
            </option>
          </select>
        </td>
        <td className="py-2 px-1">
          <select
            onChange={useCallback(
              (e) => {
                dispatch({
                  type: "SET_UPDATE_DETAILS",
                  payload: { key: "is_pregnant", value: e.target.value },
                });
              },
              [dispatch]
            )}
            className="w-full shadow mx-auto border-0 p-1 rounded"
          >
            <option value={true} selected={item?.is_pregnant}>
              بله
            </option>
            <option value={false} selected={!item?.is_pregnant}>
              خیر
            </option>
          </select>
        </td>
        <td className="py-2 px-1">
          <input
            className="w-full shadow mx-auto border-0 p-1 rounded"
            defaultValue={item?.height || "-"}
            onChange={useCallback(
              (e) => {
                dispatch({
                  type: "SET_UPDATE_DETAILS",
                  payload: { key: "height", value: e.target.value },
                });
              },
              [dispatch]
            )}
          />
        </td>
        <td className="py-2 px-1">
          <input
            className="w-full shadow mx-auto border-0 p-1 rounded"
            defaultValue={item?.weight || "-"}
            onChange={useCallback(
              (e) => {
                dispatch({
                  type: "SET_UPDATE_DETAILS",
                  payload: { key: "weight", value: e.target.value },
                });
              },
              [dispatch]
            )}
          />
        </td>
        <td className="py-2 px-1">
          <input
            className="w-full shadow mx-auto border-0 p-1 rounded"
            defaultValue={item?.sheba_card || "-"}
            onChange={useCallback(
              (e) => {
                dispatch({
                  type: "SET_UPDATE_DETAILS",
                  payload: { key: "sheba_card", value: e.target.value },
                });
              },
              [dispatch]
            )}
          />
        </td>
        <td className="py-2 px-1">
          <input
            className="w-full shadow mx-auto border-0 p-1 rounded"
            defaultValue={item?.email || "-"}
            onChange={useCallback(
              (e) => {
                dispatch({
                  type: "SET_UPDATE_DETAILS",
                  payload: { key: "email", value: e.target.value },
                });
              },
              [dispatch]
            )}
          />
        </td>
      </tr>
    </>
  );
});
