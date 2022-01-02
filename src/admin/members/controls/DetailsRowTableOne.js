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
            className="shadow mx-auto border-0 p-1 rounded"
          >
            <option value={true} selected={item?.is_married}>
              مجرد
            </option>
            <option value={false} selected={!item?.is_married}>
              متاهل
            </option>
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
            className="shadow mx-auto border-0 p-1 rounded"
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
      </tr>
    </>
  );
});