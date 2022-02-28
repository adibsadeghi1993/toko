import React, { useContext, useState } from "react";
import DatePicker from "shared/controls/DatePicker/DatePickerControl";
import JDate from "shared/controls/JDate";
import TextInputControl from "shared/controls/TextInputControl";
import { SaleContext } from "../../state/SaleState";

export default React.memo((callback) => {
  const { _sale_id, OfflineInstallment } = useContext(SaleContext);
  const [date, setDate] = useState(undefined);
  const [issue, setIssue] = useState(undefined);
  const [installments_list, setInstallmentsList] = useState([
    {
      installment_value: undefined,
      installment_date: undefined,
      installment_round: 1,
    },
    {
      installment_value: undefined,
      installment_date: undefined,
      installment_round: 2,
    },
    {
      installment_value: undefined,
      installment_date: undefined,
      installment_round: 3,
    },
  ]);
  const submitInstallment = () => {
    OfflineInstallment?.(
      _sale_id,
      issue,
      new JDate(date).getjDateStr("/"),
      installments_list,
      () => {
        callback?.();
      }
    );
  };
  const updateInstallmentsList = (key, value, index) => {
    let tmp = installments_list;
    tmp[index][key] = value;
    setInstallmentsList(tmp);
  };
  return (
    <>
      <div className="flex justify-center mt-5 mx-5 items-center">
        <div className="w-250">
          <TextInputControl
            onChange={(e) => setIssue(e.target.value)}
            placeholder="شماره بیمه نامه"
            number
            textCenter
          />
        </div>
        <div className="p-2 mx-2 focus:outline-none focus:border-blue-300 flex-grow flex items-center gap-x-3">
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
            onClick={submitInstallment}
            className="py-2 px-4 shadow rounded bg-gray-100 ml-2 hover:bg-gray-200"
          >
            ثبت
          </button>
        </div>
      </div>
      <div className="relative lg:flex lg:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1">
        <table className="">
          <thead className="text-sm bg-gray-100">
            <tr>
              <th className="whitespace-nowrap px-8 border border-gray-200">
                شماره قسط
              </th>
              <th className="whitespace-nowrap px-8 border border-gray-200">
                مبلغ
              </th>
              <th className="whitespace-nowrap px-8 border border-gray-200">
                سررسید
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-emerald-200 text-center text-sm ">
              <td className="py-2 border">1</td>
              <td className="py-2 border px-2">
                <TextInputControl
                  price
                  textCenter
                  number
                  onChange={(e) => {
                    updateInstallmentsList(
                      "installment_value",
                      e.target.value,
                      0
                    );
                  }}
                />
              </td>
              <td className="py-2 border px-2">
                <DatePicker
                  DatePickerInput
                  dateInput
                  date={installments_list[0].installment_date}
                  onChange={(e) => {
                    updateInstallmentsList(
                      "installment_date",
                      new JDate(e.target.value).getjDateStr("/"),
                      0
                    );
                  }}
                />
              </td>
            </tr>
            <tr className="bg-emerald-200 text-center text-sm ">
              <td className="py-2 border">2</td>
              <td className="py-2 border px-2">
                <TextInputControl
                  price
                  textCenter
                  number
                  onChange={(e) => {
                    updateInstallmentsList(
                      "installment_value",
                      e.target.value,
                      1
                    );
                  }}
                />
              </td>
              <td className="py-2 border px-2">
                <DatePicker
                  DatePickerInput
                  dateInput
                  date={installments_list[1].installment_date}
                  onChange={(e) => {
                    updateInstallmentsList(
                      "installment_date",
                      new JDate(e.target.value).getjDateStr("/"),
                      1
                    );
                  }}
                />
              </td>
            </tr>
            <tr className="bg-emerald-200 text-center text-sm ">
              <td className="py-2 border">3</td>
              <td className="py-2 border px-2">
                <TextInputControl
                  price
                  textCenter
                  number
                  onChange={(e) => {
                    updateInstallmentsList(
                      "installment_value",
                      e.target.value,
                      2
                    );
                  }}
                />
              </td>
              <td className="py-2 border px-2">
                <DatePicker
                  DatePickerInput
                  dateInput
                  date={installments_list[2].installment_date}
                  onChange={(e) => {
                    updateInstallmentsList(
                      "installment_date",
                      new JDate(e.target.value).getjDateStr("/"),
                      2
                    );
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
});
