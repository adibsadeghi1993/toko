import { SaleContext } from "admin/sale/state/SaleState";
import { STEP_SALE_TAB } from "config/constant";
import React, { useContext, useState } from "react";
import InformationTreatment from "./InformationTreatment";
import InfoPeople from "./Info_people/InfoPeople";
import PaymentTreatment from "./Payment_treatment/PaymentTreatment";

const InfoTreatment = React.memo(
  ({ setshow_info, show_info, payment_status, ins_status }) => {
    /**
     * 1 => information
     */

    const { insurer_treatment } = useContext(SaleContext);
    //new
    /**
     * 0 => details
     * 1 => infotmation
     * 2 => aghsat
     */
    const [step, setStep] = useState(0);

    return (
      <tr className={` ${!show_info && "hidden"}`}>
        <td className="bg-gray-200 p-2" colSpan="100%">
          <div className="card flex flex-col">
            <div className="py-5 px-4 border-b border-gray-100">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <h3 className="text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right">
                  {step !== STEP_SALE_TAB.INFORMATION
                    ? "اطلاعات"
                    : !insurer_treatment
                    ? "اطلاعات پرستو دهقان - خواهر"
                    : "اطلاعات پریا دهقان - بیمه گذار"}
                </h3>
                <div className="">
                  {step === STEP_SALE_TAB.INFORMATION && (
                    <button
                      className="p-2 shadow rounded bg-gray-100 ml-2 hover:bg-gray-200"
                      onClick={() => {
                        setStep(STEP_SALE_TAB.DETAILS);
                      }}
                    >
                      بازگشت
                    </button>
                  )}
                  {step === STEP_SALE_TAB.CTG_M && (
                    <button
                      className="p-2 shadow rounded bg-gray-100 ml-2 hover:bg-gray-200"
                      onClick={() => {
                        // setshowStatus("جزییات");
                        setStep(STEP_SALE_TAB.DETAILS);
                      }}
                    >
                      جزییات
                    </button>
                  )}
                  {/* payment_status === "اقساطی" && */}
                  {/* // (showStatus === "جزییات" || showStatus === "اطلاعات") && ( */}
                  <button
                    className="p-2 shadow rounded bg-gray-100 ml-2 hover:bg-gray-200"
                    // onClick={() => {
                    //   // setshowStatus("جدول اقساط");
                    // }}
                  >
                    اقساط
                  </button>
                  {/* // )} */}
                </div>
              </div>

              {step === STEP_SALE_TAB.DETAILS && (
                <InformationTreatment
                  setshow_info={setshow_info}
                  // setshowStatus={setshowStatus}
                  ins_status={ins_status}
                />
              )}
              {step === STEP_SALE_TAB.INFORMATION && (
                <InfoPeople setshow_info={setshow_info} />
              )}
              {step === STEP_SALE_TAB.CTG_M && (
                <PaymentTreatment setshow_info={setshow_info} />
              )}
            </div>
          </div>
        </td>
      </tr>
    );
  }
);

export default InfoTreatment;
