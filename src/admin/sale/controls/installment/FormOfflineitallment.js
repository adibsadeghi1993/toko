import React, { useContext, useState, useCallback } from "react";
import DatePicker from "shared/controls/DatePicker/DatePickerControl";
import JDate from "shared/controls/JDate";
import TextInputControl from "shared/controls/TextInputControl";
import { SaleContext } from "../../state/SaleState";

export default React.memo(({ callback }) => {
  const { _sale_id, OfflineInstallment } = useContext(SaleContext);
  const [date, setDate] = useState(undefined);
  const [issue, setIssue] = useState(undefined);
  const [installments_list, setInstallmentsList] = useState([
    {
      installment_value: undefined,
      installment_date: undefined,
      installment_round: 1,
    },
  ]);
  const [keyData, setKeyData] = useState(0);
  const submitInstallment = () => {
    let tmpInstallMent = installments_list.map((item) => {
      return {
        ...item,
        installment_date: new JDate(item.installment_date).getjDateStr("/"),
      };
    });
    OfflineInstallment?.(
      _sale_id,
      issue,
      new JDate(date).getjDateStr("/"),
      tmpInstallMent,
      () => {
        callback?.();
      }
    );
  };
  const updateInstallmentsList = useCallback(
    (key, value, index) => {
      let tmp = installments_list;
      console.log("update:", key, value, index);
      tmp[index][key] = value;
      setInstallmentsList(tmp);
      setKeyData((prv) => prv + 1);
    },
    [installments_list, keyData]
  );

  const addItemInstallment = () => {
    setInstallmentsList([
      ...installments_list,
      {
        installment_value: undefined,
        installment_date: undefined,
        installment_round: installments_list.length + 1,
      },
    ]);
  };

  const updateDate = useCallback(
    (e, index) => {
      updateInstallmentsList("installment_date", e.target.value, index);
    },
    [installments_list]
  );
  const delInstallment = (key) => {
    let tmp = installments_list.filter((item, index) => index !== key);
    console.log("tmp:", key, tmp);
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
            className="py-3 px-6 shadow rounded bg-green-400 ml-2 hover:bg-green-600 text-white"
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
              <th className="whitespace-nowrap px-8 border border-gray-200"></th>
            </tr>
          </thead>
          <tbody>
            {installments_list?.map((item, index) => (
              <React.Fragment key={index}>
                <tr className="bg-emerald-200 text-center text-sm ">
                  <td className="py-2 border">{index + 1}</td>
                  <td className="py-2 border px-2">
                    <TextInputControl
                      price
                      textCenter
                      number
                      onChange={(e) => {
                        updateInstallmentsList(
                          "installment_value",
                          e.target.value,
                          index
                        );
                      }}
                    />
                  </td>
                  <td className="py-2 border px-2">
                    <DatePicker
                      DatePickerInput
                      dateInput
                      date={
                        (installments_list[index]?.installment_date &&
                          installments_list[index]?.installment_date) ||
                        undefined
                      }
                      onChange={(e) => updateDate(e, index)}
                    />
                  </td>
                  <td className="py-2 border px-2">
                    <div className="flex gap-x-2">
                      <button
                        className="px-4 py-2 rounded-md bg-green-400 text-white"
                        onClick={addItemInstallment}
                      >
                        +
                      </button>
                      {index + 1 > 1 && (
                        <button
                          className="px-4 py-2 rounded-md bg-red-400 text-white"
                          onClick={() => delInstallment(index)}
                        >
                          -
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
});
