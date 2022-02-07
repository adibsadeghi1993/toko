import React, { useContext, useState } from "react";
import { useCallback } from "react/cjs/react.development";
import DatePicker from "shared/controls/DatePicker/DatePickerControl";
import { MemmberContext } from "../state/State";
import moment from "jalali-moment";

export default React.memo(({ item }) => {
  const [showDatePicket, setShowDatePicker] = useState(false);
  const { dispatch, details_user_update } = useContext(MemmberContext);
  return (
    <>
      <tr className="bg-emerald-200 text-center text-sm">
        <td className="py-2">
          <input
            className="shadow mx-auto border-0 p-1 rounded"
            defaultValue={item?.name || "-"}
            onChange={useCallback(
              (e) => {
                dispatch({
                  type: "SET_UPDATE_DETAILS",
                  payload: { key: "name", value: e.target.value },
                });
              },
              [dispatch]
            )}
          />
        </td>
        <td className="py-2">
          <input
            className="shadow mx-auto border-0 p-1 rounded"
            defaultValue={item?.family_name || "-"}
            onChange={useCallback(
              (e) => {
                dispatch({
                  type: "SET_UPDATE_DETAILS",
                  payload: { key: "family_name", value: e.target.value },
                });
              },
              [dispatch]
            )}
          />
        </td>
        <td className="py-2">
          <input
            className="shadow mx-auto border-0 p-1 rounded"
            defaultValue={item?.national_code || "-"}
            onChange={useCallback(
              (e) => {
                dispatch({
                  type: "SET_UPDATE_DETAILS",
                  payload: { key: "national_code", value: e.target.value },
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
          {/* <DatePicker
            // label="تا تاریخ"
            className="shadow mx-auto border-0 p-1 rounded"
            timePicker={false}
            value={item?.birthday || new Date()}
            onClickSubmitButton={({ value }) => console.log("value", value)}
          /> */}
          <DatePicker
            DatePickerInput
            dateInput
            date={details_user_update?.birthday || item?.birthday}
            // placeholder="تاریخ تولد"
            onChange={useCallback(
              (e) => {
                console.log("e data", e);
                dispatch({
                  type: "SET_UPDATE_DETAILS",
                  payload: { key: "birthday", value: e.target.value },
                });
              },
              [dispatch]
            )}
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
            {!item.degree_of_education_id ? (
              <>
                <option value="0">انتخاب کنید</option>
                <option value="1">زیردیپلم</option>
                <option value="2">دیپلم</option>
                <option value="3">کاردانی</option>
                <option value="4">کارشناسی</option>
                <option value="5">کارشناسی ارشد</option>
                <option value="6">دکترا</option>
                <option value="7">فوق دکترا</option>
              </>
            ) : (
              <>
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
                <option selected={item?.degree_of_education_id === 6} value="6">
                  دکترا
                </option>
                <option selected={item?.degree_of_education_id === 7} value="7">
                  فوق دکترا
                </option>
              </>
            )}
          </select>
        </td>
      </tr>
    </>
  );
});
