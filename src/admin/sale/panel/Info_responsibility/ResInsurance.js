import { SaleContext } from "admin/sale/state/SaleState";
import { CTG_S_STATUS } from "enum/enum";
import React, { useContext, useEffect, useState } from "react";
import Res_modal from "./Res_modal";

function ResInsurance({ setCollspace, ins_status, details }) {
  const { insurance_status, statuses, dispatch, update_status, _sale_id } =
    useContext(SaleContext);
  const [Submit_status, setsubmit_status] = useState("صادر شده");

  const nextbuttonindex = Object.keys(statuses).findIndex(
    (stat) => stat == ins_status
  );
  const nextbutton = Object.keys(statuses)[nextbuttonindex + 1];
  const nextbuttonValue = Object.values(statuses)[nextbuttonindex + 1];

  const handlechange = (code) => {
    // if (nextbutton !== "صادر شد") {
    //   dispatch({ type: "set_insurance_status", payload: nextbutton });
    //   dispatch({ type: "set_status", payload: nextbuttonValue });
    //   dispatch({ type: "set_insurance", payload: 3 });
    //   setCollspace(false);
    // }

    // if (nextbutton === undefined) {
    //   dispatch({
    //     type: "set_insurance_status",
    //     payload: "انتظار تکمیل اطلاعات",
    //   });
    //   dispatch({ type: "set_status", payload: 200 });
    //   dispatch({ type: "set_insurance", payload: 3 });
    // }
    update_status(_sale_id, code, () => {
      setCollspace(false);
    });
  };

  useEffect(() => {
    dispatch({ type: "set_insurance", payload: 3 });
  }, []);

  const next_step = (status) => {
    let back = {
      code: undefined,
      txt: undefined,
    };
    let next = { code: undefined, txt: undefined };
    switch (parseInt(status)) {
      case CTG_S_STATUS.WAIT_COMPELATE:
        next.code = CTG_S_STATUS.WAIT_EXPERT;
        next.txt = "بررسی کارشناس";
        break;
      case CTG_S_STATUS.WAIT_EXPERT:
        next.code = CTG_S_STATUS.DONE;
        next.txt = "صادر شده";
        back.code = CTG_S_STATUS.WAIT_COMPELATE;
        back.txt = "انتظار تکمیل اطلاعات";
        break;
      default:
        next.txt = "صادر شده";
        break;
    }
    console.log(`status:`, status, " back:", back, " next:", next);
    return { next, back };
  };
  const { next, back } = next_step(details?.status_id);
  return (
    <div className="card flex flex-col">
      <div className="py-5 px-4 border-b border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <h3 className="text-primary-color pr-3 font-bold text-otherCaption whitespace-nowrap  text-center lg:text-right">
            اطلاعات درخواست
          </h3>
          <div className="prgs w-full">
            <ul
              id="progressbar"
              className="hidden md:flex items-center justify-center"
            >
              <li
                className={`${
                  details?.status_id >= CTG_S_STATUS.WAIT_COMPELATE &&
                  details?.status_id !== CTG_S_STATUS.CANCEL &&
                  "active"
                }`}
              >
                انتظار تکمیل اطلاعات
              </li>
              <li
                className={`${
                  details?.status_id >= CTG_S_STATUS.WAIT_EXPERT &&
                  details?.status_id !== CTG_S_STATUS.CANCEL &&
                  "active"
                }`}
              >
                بررسی کارشناس
              </li>
              <li
                className={`${
                  details?.status_id >= CTG_S_STATUS.DONE &&
                  details?.status_id !== CTG_S_STATUS.CANCEL &&
                  "active"
                }`}
              >
                صادر شده
              </li>
              <li
                className={`${
                  details?.status_id === CTG_S_STATUS.CANCEL && "active"
                }`}
              >
                لغو شده
              </li>
            </ul>
          </div>
          <div className="flex gap-x-px">
            <button className="p-2 shadow rounded bg-gray-100 hover:bg-gray-200">
              اقساط
            </button>
          </div>
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

      <input
        value={details?.current_ins}
        className="p-2 rounded border focus:outline-none focus:border-blue-400 mt-5 m-2"
      />

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
          {/* {(Submit_status == "اسکن" || Submit_status == "نمایش") && (
            <button
              className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`}
              onClick={() => {
                setsubmit_status("نمایش");
              }}
            >
              {" "}
              اسکن بیمه نامه
            </button>
          )} */}
          {/* {Submit_status == "دانلود" && (
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
          )} */}

          {/* {insurance_status !== "لغو شد" && nextbutton !== "صادر شد" && (
            <button
              className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`}
              onClick={() => handlechange()}
            >
              {nextbutton === undefined ? "انتطار تکمیل اطلاعات" : nextbutton}
            </button>
          )} */}
          {back.txt && (
            <button
              className={`px-4 py-2 border border-red-400 text-white bg-red-400 shadow m-3 rounded hover:bg-red-500`}
              onClick={() => {
                back.code && handlechange(back.code);
              }}
            >
              {back.txt}
            </button>
          )}
          <button
            className={`px-4 py-2 border border-green-400 text-white bg-green-400 shadow m-3 rounded hover:bg-green-500`}
            onClick={() => {
              next.code && handlechange(next.code);
              if (!next.code) {
                dispatch({ type: "OPEN_MODAL_PAYMENT_MANUAL", payload: true });
              }
            }}
          >
            {next.txt}
          </button>
          <button
            onClick={() => handlechange(CTG_S_STATUS.CANCEL)}
            className={`px-4 py-2 text-white bg-red-400  m-3 rounded hover:bg-red-500`}
          >
            لغو شده
          </button>
        </div>
        <button
          className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`}
          onClick={() => setCollspace(false)}
        >
          بستن
        </button>
      </div>
    </div>
  );
}

export default ResInsurance;
