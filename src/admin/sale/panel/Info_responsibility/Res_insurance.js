import { SaleContext } from "admin/sale/state/SaleState";
import React, { useContext, useEffect, useState } from "react";
import Res_modal from "./Res_modal";

function Res_insurance({ setshow_info, ins_status, details }) {
  const { insurance_status, statuses, dispatch } = useContext(SaleContext);
  const [Submit_status, setsubmit_status] = useState("صادر شده");

  const nextbuttonindex = Object.keys(statuses).findIndex(
    (stat) => stat == ins_status
  );
  const nextbutton = Object.keys(statuses)[nextbuttonindex + 1];
  const nextbuttonValue = Object.values(statuses)[nextbuttonindex + 1];

  const handlechange = () => {
    if (nextbutton !== "صادر شد") {
      dispatch({ type: "set_insurance_status", payload: nextbutton });
      dispatch({ type: "set_status", payload: nextbuttonValue });
      dispatch({ type: "set_insurance", payload: 3 });
      setshow_info(false);
    }

    if (nextbutton === undefined) {
      dispatch({
        type: "set_insurance_status",
        payload: "انتظار تکمیل اطلاعات",
      });
      dispatch({ type: "set_status", payload: 200 });
      dispatch({ type: "set_insurance", payload: 3 });
    }
  };

  useEffect(() => {
    dispatch({ type: "set_insurance", payload: 3 });
  }, []);

  return (
    <div className="card flex flex-col">
      <div className="py-5 px-4 border-b border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <h3 className="text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right">
            اطلاعات درخواست
          </h3>
        </div>
      </div>

      <div className="relative lg:flex lg:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1">
        <table className="w-full">
          <thead className="text-sm bg-gray-200">
            <tr>
              <th className="whitespace-nowrap px-4 border border-gray-300">
                شماره درخواست
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300">
                نام
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300 ">
                نام خانوادگی
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                شماره تماس
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                نوع فعالیت شغلی
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                وضعیت
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                نوع بیمه
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                شاخه بیمه ای
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-emerald-200 text-center text-sm">
              <td className="pl-1 py-2 border border-gray-300">
                {details?.responsibility_id}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.name}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.family_name}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.cellphone_number}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.job_type}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.status}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.subcategory}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.category}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="pt-2 mt-5 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <h3 className="text-primary-color pr-3 font-bold  text-center lg:text-right text-sm">
            در حال حاضر تحت پوشش کدام شرکت هستید؟
          </h3>
        </div>
      </div>

      <input className="p-2 rounded border focus:outline-none focus:border-blue-400 mt-5 m-2" />

      <div className="pt-2 mt-5 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <h3 className="text-primary-color pr-3 font-bold  text-center lg:text-right text-sm">
            لاگ سفارش
          </h3>
        </div>
      </div>

      <input className="p-2 rounded border focus:outline-none focus:border-blue-400 mt-5 m-2" />

      {Submit_status == "نمایش" && (
        <Res_modal setsubmit_status={setsubmit_status} />
      )}

      <div className="flex justify-between mx-5">
        <div>
          {(Submit_status == "اسکن" || Submit_status == "نمایش") && (
            <button
              className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`}
              onClick={() => {
                setsubmit_status("نمایش");
              }}
            >
              {" "}
              اسکن بیمه نامه
            </button>
          )}
          {Submit_status == "دانلود" && (
            <button
              className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`}
            >
              دانلود اسکن بیمه نامه
            </button>
          )}
          {Submit_status == "صادر شده" && nextbutton === "صادر شد" && (
            <button
              className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`}
              onClick={() => {
                setsubmit_status("اسکن");
              }}
            >
              صادر شده
            </button>
          )}
          {insurance_status !== "لغو شد" && nextbutton !== "صادر شد" && (
            <button
              className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`}
              onClick={() => handlechange()}
            >
              {nextbutton === undefined ? "انتطار تکمیل اطلاعات" : nextbutton}
            </button>
          )}
          <button
            className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`}
          >
            لغو شده
          </button>
        </div>
        <button
          className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`}
          onClick={() => setshow_info(false)}
        >
          بستن
        </button>
      </div>
    </div>
  );
}

export default Res_insurance;
