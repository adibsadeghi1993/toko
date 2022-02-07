import React, { useState, useContext } from "react";
import DatePicker from "shared/controls/DatePicker/DatePickerControl";
import JDate from "shared/controls/JDate";
import TextInputControl from "shared/controls/TextInputControl";
import { SaleContext } from "../state/SaleState";

export default React.memo(({ callback }) => {
  const [date, setDate] = useState(undefined);
  const [issue, setIssue] = useState(undefined);
  const { construct_installment, _sale_id } = useContext(SaleContext);
  const submitInstallment = () => {
    construct_installment(
      _sale_id,
      issue,
      new JDate(date).getjDateStr("/"),
      () => {
        callback?.();
      }
    );
  };
  return (
    <div className="flex justify-center mt-5 mx-5 items-center">
      <div className="w-250">
        <TextInputControl
          onChange={(e) => setIssue(e.target.value)}
          placeholder="شماره بیمه نامه"
          number
          textCenter
        />
      </div>
      {/* <input className='p-2 mx-2 border rounded focus:outline-none focus:border-blue-300 flex-grow' placeholder='تاریخ صدور'/> */}
      <div className="p-2 mx-2 focus:outline-none focus:border-blue-300 flex-grow flex items-center gap-x-3">
        {/* <DatePicker /> */}
        <div className="w-250">
          <DatePicker
            date={date}
            DatePickerInput
            placeholder="تاریخ صدور"
            dateInput
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <button
          onClick={(e) => submitInstallment()}
          className="py-2 px-4 shadow rounded bg-gray-100 ml-2 hover:bg-gray-200"
        >
          ثبت
        </button>
      </div>
    </div>
  );
});
