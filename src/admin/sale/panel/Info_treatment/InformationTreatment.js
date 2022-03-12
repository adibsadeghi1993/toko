import React, { useContext } from "react";
import SalesTables from "admin/sale/controls/SalesTables";
import { SaleContext } from "admin/sale/state/SaleState";
import { CTG_D_STATUS } from "enum/enum";
import InfoTreatmentTable from "./InfoTreatmentTable";
import TreatmentPeople from "./TreatmentPeople";
import ModalSale from "admin/sale/controls/ModalSale";

const Information_treatment = React.memo(({ setCollspace, ins_status }) => {
  const { dispatch, details, update_status, _sale_id } =
    useContext(SaleContext);

  // useEffect(() => {
  //   dispatch({ type: "set_insurance", payload: 2 });
  // }, [dispatch]);

  const handlechange = (code) => {
    update_status(_sale_id, code, () => {
      dispatch({ type: "SET_UPDATE_PAGE" });
      setCollspace(false);
    });
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

  const next_step = (status) => {
    let back = {
      code: undefined,
      txt: undefined,
    };
    let next = { code: undefined, txt: undefined };
    switch (parseInt(status)) {
      case CTG_D_STATUS.WAIT_COMPELATE:
        next.code = CTG_D_STATUS.WAIT_EXPERT;
        next.txt = "بررسی کارشناس";
        break;
      case CTG_D_STATUS.WAIT_EXPERT:
        next.code = CTG_D_STATUS.WAIT_PAYMENT;
        next.txt = "در انتظار پرداخت";
        back.code = CTG_D_STATUS.WAIT_COMPELATE;
        back.txt = "انتظار تکمیل اطلاعات";
        break;

      case CTG_D_STATUS.WAIT_PAYMENT:
        next.code = undefined;
        next.txt = "ثبت پرداخت";
        back.code = CTG_D_STATUS.WAIT_EXPERT;
        back.txt = "بررسی کارشناس";
        break;

      case CTG_D_STATUS.PAYMENT:
        next.code = CTG_D_STATUS.WAIT_ISSUANCE;
        next.txt = "در انتظار صدور";
        back.code = CTG_D_STATUS.WAIT_PAYMENT;
        back.txt = "در انتظار پرداخت";
        break;

      case CTG_D_STATUS.WAIT_ISSUANCE:
        next.code = CTG_D_STATUS.DONE;
        next.txt = "صادر شده";
        back.code = CTG_D_STATUS.WAIT_PAYMENT;
        back.txt = "در انتظار پرداخت";
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
      {/* new */}

      <div className="pt-2 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right">
            فروش
          </h3>
        </div>
      </div>
      <SalesTables details={details?.sales_network_details} />
      {/* end */}
      {/* پاپ آپ تغییر وضعیت صدور به صادر شده */}
      {/* {showModal && (
        <Treatment_Model
          setshowModal={setshowModal}
          setshowsubmit={setshowsubmit}
        />
      )}
      {/* پاپ در وضعیت صادر شده قابلیت آپلود *
      {showSubmitModal && (
        <Treatment_model_submit setshowSubmitModal={setshowSubmitModal} />
      )} */}

      <div className="flex justify-between mx-5">
        <div>
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
            onClick={() => {
              handlechange(CTG_D_STATUS.CANCEL);
            }}
            className={`px-4 py-2  bg-red-400 text-white m-3 rounded hover:bg-red-500`}
          >
            لغو
          </button>
          {details?.status_id === CTG_D_STATUS.DONE && (
            <button
              className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`}
              onClick={() => {
                dispatch({ type: "OPEN_MODAL_SCANFILE_MANUAL", payload: true });
              }}
            >
              ثبت اسکن بیمه نامه
            </button>
          )}
        </div>

        <button
          className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`}
          onClick={() => setCollspace(false)}
        >
          بستن
        </button>
      </div>
      {/* Modal Upload payment file */}
      <ModalSale key={_sale_id} setCollspace={setCollspace} />
    </>
  );
});

export default Information_treatment;
