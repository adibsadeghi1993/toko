import React, { useContext, useRef, useState, useCallback } from "react";
import SalesTables from "admin/sale/controls/SalesTables";
import { SaleContext } from "admin/sale/state/SaleState";
import { CTG_D_STATUS } from "enum/enum";
import ModalHeader from "shared/controls/ModalHeader";
import TextInputControl from "shared/controls/TextInputControl";
import Modal from "shared/panel/Modal";
import InfoTreatmentTable from "./InfoTreatmentTable";
import TreatmentPeople from "./TreatmentPeople";
import Treatment_Model from "./Treatment_Model";
import Treatment_model_submit from "./Treatment_model_submit";
import { toast } from "react-toastify";
import { MainContext } from "main/state/MainState";

const Information_treatment = React.memo(({ setCollspace, ins_status }) => {
  const {
    PaymentScanStatus,
    dispatch,
    details,
    update_status,
    _sale_id,
    modal_payment_manual,
  } = useContext(SaleContext);

  const { uploadMedia } = useContext(MainContext);
  const [showModal, setshowModal] = useState(false);
  const [showSubmit, setshowsubmit] = useState(false);
  const [showSubmitModal, setshowSubmitModal] = useState(false);

  const fileRef = useRef();
  const [track, setTrack] = useState();
  const [fileTrack, setFileTrack] = useState();

  // useEffect(() => {
  //   dispatch({ type: "set_insurance", payload: 2 });
  // }, [dispatch]);

  const handlechange = (code) => {
    update_status(_sale_id, code, () => {
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
  const { next, back } = next_step(details?.details?.status);

  const SubmitPaymentScan = () => {
    if (!track) {
      toast.info("لطفا کد رهگیری را وارد نمایید");
      return;
    }
    // if (!fileTrack) {
    //   toast.info("لطفا فایل را انتخاب نمایید");
    //   return;
    // }
    console.log("file::", fileTrack);
    uploadMedia?.(fileTrack, undefined, (uuid) => {
      console.log("uuid::", uuid);
      PaymentScanStatus?.(uuid, "Payment", _sale_id, track, () => {
        setCollspace(false);
      });
    });
  };

  const changeImageTrack = (e) => {
    let files = e.target.files;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);

    fileReader.onload = (event) => {
      setFileTrack(event.target.result);
    };
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
          {true === "لغو شد" && (
            <button
              className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`}
              onClick={() => setshowSubmitModal(true)}
            >
              ثبت اسکن بیمه نامه
            </button>
          )}

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
          {details?.details?.status === CTG_D_STATUS.DONE && (
            <button
              className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`}
              onClick={() => setshowSubmitModal(true)}
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
      <Modal open={!!modal_payment_manual}>
        <div className="relative md:flex justify-center items-center md:w-full md:h-screen ">
          <div
            className="absolute hidden md:block w-full h-full z-30  bg-matn-primary bg-opacity-50"
            onClick={() => {
              dispatch({ type: "OPEN_MODAL_PAYMENT_MANUAL", payload: false });
            }}
          />
          <div className={" relative z-40 flex justify-center items-center "}>
            <div className=" rounded-lg shadow-lg bg-white">
              <div className="px-4 ">
                <ModalHeader
                  title={"ثبت پرداخت"}
                  close={() => {
                    dispatch({
                      type: "OPEN_MODAL_PAYMENT_MANUAL",
                      payload: false,
                    });
                  }}
                />
              </div>
              <div className="px-16 mb-3">
                <div className="mt-2  data-picker-container   mx-auto  rounded">
                  <div className="px-2 pt-2 pb-1 relative flex flex-col space-y-4">
                    <TextInputControl
                      placeholder="کد پیگیری"
                      number
                      textCenter
                      onChange={useCallback(
                        (e) => {
                          setTrack(e.target.value);
                        },
                        [setTrack]
                      )}
                    />
                    <input
                      type="file"
                      placeholder="فیش"
                      onChange={changeImageTrack}
                      ref={fileRef}
                    />
                    <button
                      onClick={SubmitPaymentScan}
                      className={`px-4 py-2 border border-green-400 text-white bg-green-400 shadow m-3 rounded hover:bg-green-500`}
                    >
                      ثبت
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
});

export default Information_treatment;
