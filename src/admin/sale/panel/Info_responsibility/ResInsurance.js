import React, { useContext, useEffect, useState } from "react";
import ResponsibilityBody from "admin/sale/controls/ResponsibilityBody";
import { SaleContext } from "admin/sale/state/SaleState";
import { CTG_S_STATUS } from "enum/enum";
import Res_modal from "./Res_modal";
import SaleInstallment from "admin/sale/controls/SaleInstallment";

function ResInsurance({ setCollspace, details }) {
  const { dispatch, update_status, _sale_id } = useContext(SaleContext);
  const [step, setStep] = useState(1);
  const handlechange = (code) => {
    update_status(_sale_id, code, () => {
      setCollspace(false);
    });
  };

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
          <div className="flex gap-x-2">
            <button
              onClick={() => setStep(2)}
              className="p-2 shadow rounded bg-gray-100 hover:bg-gray-200"
            >
              اقساط
            </button>
            {step === 2 && (
              <button
                onClick={() => setStep(1)}
                className="p-2 shadow rounded bg-gray-100 hover:bg-gray-200"
              >
                بازگشت
              </button>
            )}
          </div>
        </div>
      </div>

      {step === 1 && <ResponsibilityBody details={details} />}
      {step === 2 && <SaleInstallment />}

      {/* TODO: change this code */}
      {/* {Submit_status == "نمایش" && (
        <Res_modal setsubmit_status={setsubmit_status} />
      )} */}

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
