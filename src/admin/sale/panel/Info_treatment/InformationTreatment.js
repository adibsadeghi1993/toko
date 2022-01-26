import { SaleContext } from "admin/sale/state/SaleState";
import React, { useContext, useEffect, useState } from "react";
import InfoTreatmentTable from "./InfoTreatmentTable";
import TreatmentPeople from "./TreatmentPeople";
import Treatment_Model from "./Treatment_Model";
import Treatment_model_submit from "./Treatment_model_submit";

const Information_treatment = React.memo(
  ({ setCollspace, ins_status }) => {
    const { insurance_status, statuses, dispatch, details } =
      useContext(SaleContext);
    const [showModal, setshowModal] = useState(false);
    const [showSubmit, setshowsubmit] = useState(false);
    const [showSubmitModal, setshowSubmitModal] = useState(false);

    const nextbuttonindex = Object.keys(statuses).findIndex(
      (stat) => stat === ins_status
    );
    const nextbutton = Object.keys(statuses)[nextbuttonindex + 1];
    const nextbuttonValue = Object.values(statuses)[nextbuttonindex + 1];

    // useEffect(() => {
    //   dispatch({ type: "set_insurance", payload: 2 });
    // }, [dispatch]);

    const handlechange = () => {
      // if (nextbutton !== "صادر شد") {
      //   dispatch({ type: "set_insurance_status", payload: nextbutton });
      //   dispatch({ type: "set_status", payload: nextbuttonValue });
      //   dispatch({ type: "set_insurance", payload: 2 });
      //   setCollspace(false);
      // } else {
      //   setshowModal(true);
      // }

      // if (nextbutton === undefined) {
      //   dispatch({
      //     type: "set_insurance_status",
      //     payload: "انتظار تکمیل اطلاعات",
      //   });
      //   dispatch({ type: "set_status", payload: 200 });
      //   dispatch({ type: "set_insurance", payload: 2 });
      // }
    };
    return (
      <>
        {/* section show information Gilmp */}
        <InfoTreatmentTable details={details} />

        {/* Table show users */}
        <div className="pt-2 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <h3 className="text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right">
              اطلاعات افراد
            </h3>
          </div>
        </div>
        <TreatmentPeople person_info={details?.person_info} />

        <div className="pt-2 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <h3 className="text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right">
              رویدادها
            </h3>
          </div>
        </div>

        <div className="m-2 border h-24 rounded"></div>

        {/* پاپ آپ تغییر وضعیت صدور به صادر شده */}
        {showModal && (
          <Treatment_Model
            setshowModal={setshowModal}
            setshowsubmit={setshowsubmit}
          />
        )}
        {/* پاپ در وضعیت صادر شده قابلیت آپلود */}
        {showSubmitModal && (
          <Treatment_model_submit setshowSubmitModal={setshowSubmitModal} />
        )}

        <div className="flex justify-between mx-5">
          <div>
            {nextbutton === "لغو شد" && (
              <button
                className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`}
                onClick={() => setshowSubmitModal(true)}
              >
                ثبت اسکن بیمه نامه
              </button>
            )}
            {showSubmit && (
              <button
                className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`}
                onClick={() => setshowSubmitModal(true)}
              >
                ثبت اسکن بیمه نامه
              </button>
            )}
            {nextbutton !== "لغو شد" &&
              nextbutton !== "پرداخت شده" &&
              insurance_status !== "لغو شد" &&
              !showSubmit && (
                <button
                  className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`}
                  onClick={() => handlechange()}
                >
                  {nextbutton === undefined
                    ? "انتطار تکمیل اطلاعات"
                    : nextbutton}
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
            onClick={() => setCollspace(false)}
          >
            بستن
          </button>
        </div>
      </>
    );
  }
);

export default Information_treatment;
