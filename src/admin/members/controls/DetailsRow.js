import React, { useContext, useState } from "react";
import moment from "moment-jalaali";
import { DatePicker } from "jalali-react-datepicker";
import { useCallback } from "react/cjs/react.development";
import { MemmberContext } from "../state/State";

export default React.memo(({ item }) => {
  const [showDatePicket, setShowDatePicker] = useState(false);
  const { dispatch } = useContext(MemmberContext);
  return (
    <>
      <tr className="bg-emerald-200 text-center text-sm">
        <td className="py-2">
          <input
            className="shadow mx-auto border-0 p-1 rounded"
            defaultValue={item?.full_name || "-"}
            onChange={useCallback(
              (e) => {
                dispatch({
                  type: "SET_UPDATE_DETAILS",
                  payload: { key: "full_name", value: e.target.value },
                });
              },
              [dispatch]
            )}
          />
        </td>
        <td className="py-2">
          <input
            className="shadow mx-auto border-0 p-1 rounded"
            defaultValue={item?.national_card || "-"}
            onChange={useCallback(
              (e) => {
                dispatch({
                  type: "SET_UPDATE_DETAILS",
                  payload: { key: "national_card", value: e.target.value },
                });
              },
              [dispatch]
            )}
          />
        </td>
        <td className="py-2">
          <input
            className="shadow mx-auto border-0 p-1 rounded"
            defaultValue={item?.father_name || "-"}
            onChange={useCallback(
              (e) => {
                dispatch({
                  type: "SET_UPDATE_DETAILS",
                  payload: { key: "father_name", value: e.target.value },
                });
              },
              [dispatch]
            )}
          />
        </td>
        <td className="py-2">
          <select className="shadow mx-auto border-0 p-1 rounded">
            <option selected={item?.is_married}>مجرد</option>
            <option selected={!item?.is_married}>متاهل</option>
          </select>
        </td>
        <td className="py-2">
          <DatePicker
            // label="تا تاریخ"
            className="shadow mx-auto border-0 p-1 rounded"
            timePicker={false}
            value={item?.birthday || new Date()}
            onClickSubmitButton={({ value }) => console.log("value", value._i)}
            // onClickSubmitButton={useCallback(
            //   ({ value }) => {
            //     dispatch({
            //       type: "SET_UPDATE_DETAILS",
            //       payload: { key: "birthday", value: value },
            //     });
            //   },
            //   [dispatch]
            // )}
          />
        </td>
        <td className="py-2">
          <input
            className="shadow mx-auto border-0 p-1 rounded"
            defaultValue={item?.username || "-"}
            onChange={useCallback(
              (e) => {
                dispatch({
                  type: "SET_UPDATE_DETAILS",
                  payload: { key: "username", value: e.target.value },
                });
              },
              [dispatch]
            )}
          />
        </td>
        <td className="py-2">{item?.degree_of_education_id || "-"}</td>
        <td className="py-2">
          <select className="shadow mx-auto border-0 p-1 rounded">
            <option selected={item?.gender}>آقا</option>
            <option selected={!item?.gender}>خانم</option>
          </select>
        </td>
        <td className="py-2">
          <select className="shadow mx-auto border-0 p-1 rounded">
            <option selected={item?.is_pregnant}>بله</option>
            <option selected={!item?.is_pregnant}>خیر</option>
          </select>
        </td>
        <td className="py-2">
          <input
            className="shadow mx-auto border-0 p-1 rounded"
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
        <td className="py-2">
          <input
            className="shadow mx-auto border-0 p-1 rounded"
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
        <td className="py-2">
          <input
            className="shadow mx-auto border-0 p-1 rounded"
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
        <td className="py-2">
          <input
            className="shadow mx-auto border-0 p-1 rounded"
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
