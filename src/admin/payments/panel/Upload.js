import DatePicker from "shared/controls/DatePicker/DatePickerControl";
import { ReactComponent as UpArrow } from "../../../shared/icons/arrow-up-black.svg";
import { ReactComponent as DownArrow } from "../../../shared/icons/arrow-down-black.svg";
import React, { useContext, useState } from "react";
import { InstallmentContext } from "../state/InstallmentState";

function Upload() {
  const { differences, dispatch } = useContext(InstallmentContext);
  const [show_differ, setshow_differ] = useState(false);
  const [show_upload, setshow_upload] = useState(false);
  const [succeed, setsucceed] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <div className="w-full">
        <button
          onClick={() => setshow_differ(!show_differ)}
          className="p-2 hover:bg-gray-200 bg-gray-100 m-1 w-full shadow border rounded flex justify-center"
        >
          مغایرت ها<span>{show_differ ? <UpArrow /> : <DownArrow />}</span>
        </button>
        <div className="w-full flex justify-center">
          <table className="w-full">
            <tbody>
              {show_differ &&
                differences?.map((differ) => (
                  <tr className="hover:bg-gray-100 border-b mb-2 text-sm">
                    <td className="pr-3 py-3">
                      شماره بیمه نامه {differ["شماره بیمه نامه"]}
                    </td>
                    <td className=" py-3">
                      مقدار مغایرت {differ["مقدار مغایرت"]} ریال
                    </td>
                    <td className=" py-3">شرکت {differ["شرکت"]}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full">
        <button
          onClick={() => {
            setshow_upload(!show_upload);
            setsucceed(false);
          }}
          className="p-2 hover:bg-gray-200 bg-gray-100 m-1 w-full shadow border rounded "
        >
          آپلود فایل گزارش شرکت
        </button>
        {show_upload && (
          <div className="w-full flex flex-col justify-center">
            <div className="flex mt-3 justify-center items-center">
              <input
                placeholder="نام شرکت"
                className="p-2 border rounded focus:outline-none focus:border-blue-500  mx-2"
              ></input>
              <DatePicker
                className="p-2 border rounded focus:outline-none focus:border-blue-500  mx-2"
                DatePickerInput
                dateInput
                placeholder="از تاریخ"
                // date={startDate}
                // onChange={useCallback(
                //   (e) => {
                //     dispatch({
                //       type: "SET_START_DATE",
                //       payload: e.target.value,
                //     });
                //   },
                //   [dispatch]
                // )}

                // timePicker={false}
              />
              <DatePicker
                className="p-2 border rounded focus:outline-none focus:border-blue-500  mx-2"
                DatePickerInput
                dateInput
                placeholder="تا تاریخ"
                // date={endDate}
                // onChange={useCallback(
                //   (e) => {
                //     dispatch({
                //       type: "SET_END_DATE",
                //       payload: e.target.value,
                //     });
                //   },
                //   [dispatch]
                // )}

                // timePicker={false}
              />
            </div>
            <label className="w-full border bg-blue-500 mt-2 rounded py-3 text-center cursor-pointer">
              <input
                className="hidden"
                type={"file"}
                onChange={() => {
                  setshow_upload(false);
                  dispatch({ type: "set_demonstrate" });
                  setsucceed(true);
                }}
              />
              آپلود
            </label>
          </div>
        )}
      </div>
      {succeed && <span className="mt-4">فایل با موفقیت آپلود شد</span>}
    </div>
  );
}

export default Upload;
