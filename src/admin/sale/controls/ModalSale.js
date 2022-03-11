import { MainContext } from "main/state/MainState";
import React, { useContext, useRef, useState, useCallback } from "react";
import { toast } from "react-toastify";
import ModalHeader from "shared/controls/ModalHeader";
import TextInputControl from "shared/controls/TextInputControl";
import Modal from "shared/panel/Modal";
import { SaleContext } from "../state/SaleState";

export default React.memo(({ setCollspace }) => {
  const {
    modal_payment_manual,
    modal_scan_file,
    dispatch,
    SaleScanFileStatus,
    PaymentScanStatus,
    _sale_id,
  } = useContext(SaleContext);
  const { uploadMedia } = useContext(MainContext);
  //   const [showSubmitModal, setshowSubmitModal] = useState(false);
  const fileRef = useRef();
  const [track, setTrack] = useState();
  const [fileTrack, setFileTrack] = useState();
  const [fileScan, setFileScan] = useState();

  //----------------------------------------------------------------
  const SubmitScanFile = () => {
    // if (!fileTrack) {
    //   toast.info("لطفا فایل را انتخاب نمایید");
    //   return;
    // }
    uploadMedia?.(fileScan, undefined, (uuid) => {
      console.log("uuid::", uuid);
      SaleScanFileStatus?.(uuid, "health_insurance_scan", _sale_id, () => {
        dispatch({ type: "OPEN_MODAL_SCANFILE_MANUAL", payload: false });
      });
    });
  };

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
        dispatch({ type: "OPEN_MODAL_PAYMENT_MANUAL", payload: false });
        setCollspace(false);
      });
    });
  };
  //----------------------------------------------------------------

  const changeImageTrack = (e) => {
    let files = e.target.files;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);

    fileReader.onload = (event) => {
      setFileTrack(event.target.result);
    };
  };
  const changeImageScan = (e) => {
    let files = e.target.files;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);

    fileReader.onload = (event) => {
      setFileScan(event.target.result);
    };
  };
  return (
    <>
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
      <Modal open={!!modal_scan_file}>
        <div className="relative md:flex justify-center items-center md:w-full md:h-screen ">
          <div
            className="absolute hidden md:block w-full h-full z-30  bg-matn-primary bg-opacity-50"
            onClick={useCallback(() => {
              dispatch({ type: "OPEN_MODAL_SCANFILE_MANUAL", payload: false });
            }, [dispatch])}
          />
          <div className={" relative z-40 flex justify-center items-center "}>
            <div className=" rounded-lg shadow-lg bg-white">
              <div className="px-4 ">
                <ModalHeader
                  title={"صدور بیمه نامه"}
                  close={useCallback(() => {
                    dispatch({
                      type: "OPEN_MODAL_SCANFILE_MANUAL",
                      payload: false,
                    });
                  }, [dispatch])}
                />
              </div>
              <div className="px-16 mb-3">
                <div className="flex flex-col p-2 mt-10">
                  <label>ثبت شماره بیمه نامه</label>
                  <input
                    type="file"
                    onChange={changeImageScan}
                    className="p-2 rounded border focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div className="flex justify-end items-end p-2 mt-2">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white ml-2 py-2 px-4  rounded"
                    onClick={useCallback(() => {
                      SubmitScanFile?.();
                    }, [])}
                  >
                    ثبت
                  </button>
                  <button
                    className="shadow hover:bg-gray-200 text-black py-2 px-4 border  rounded"
                    onClick={useCallback(() => {
                      dispatch({
                        type: "OPEN_MODAL_SCANFILE_MANUAL",
                        payload: false,
                      });
                    }, [dispatch])}
                  >
                    بستن
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
});
