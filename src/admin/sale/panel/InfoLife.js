import { SaleContext } from "admin/sale/state/SaleState";
import { CTG_D_STATUS } from "enum/enum";
import React, { useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import InfoBeneficiaries from "../controls/Info_life/InfoBeneficiaries";
import InfoCall from "../controls/Info_life/InfoCall";
import InfoCovers from "../controls/Info_life/InfoCovers";
import InfoInsurance from "../controls/Info_life/InfoInsurance";
import InfoTable from "../controls/Info_life/InfoTable";
import PaymentLife from "../controls/Info_life/PaymentLife";
import SalesTables from "../controls/SalesTables";

const InfoLife = React.memo(({ setCollspace, sale_id }) => {
  const {
    showEdit,
    dispatch,
    showPayment,
    showPaymentTable,
    details,
    getRefSale,
    getInstallmentSale,
    _sale_id,
  } = useContext(SaleContext);

  useEffect(() => {
    !!showEdit && getRefSale?.(sale_id);
  }, [showEdit, getRefSale, sale_id]);
  return (
    <tr>
      <td className="bg-gray-200 p-2" colSpan={9}>
        <div className="card flex flex-col">
          <div className="py-5 px-4 border-b border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <h3 className="text-primary-color pr-3 font-bold text-otherCaption whitespace-nowrap  text-center lg:text-right">
                {!showEdit && !showPayment && "مشخصات بیمه گذار"}{" "}
                {showEdit && !showPayment && "مشخصات بیمه شده"}{" "}
                {!showEdit && showPayment && "اقساط"}
              </h3>
              <div className="prgs w-full">
                <ul
                  id="progressbar"
                  className="hidden md:flex items-center justify-center"
                >
                  <li className={`${details?.status_id >= 100 && "active"}`}>
                    استعلام
                  </li>
                  <li className={`${details?.status_id >= 105 && "active"}`}>
                    سفارش اولیه
                  </li>
                  <li className={`${details?.status_id >= 120 && "active"}`}>
                    فرم پیشنهاد
                  </li>
                  <li className={`${details?.status_id >= 130 && "active"}`}>
                    پرداخت و انتظار صدور
                  </li>

                  <li className={`${details?.status_id >= 140 && "active"}`}>
                    صدور موفق
                  </li>
                  <li className={`${details?.status_id >= 150 && "active"}`}>
                    پرداخت ناموفق
                  </li>
                  <li className={`${details?.status_id >= 160 && "active"}`}>
                    صدور ناموفق
                  </li>
                </ul>
              </div>
              <div className="flex gap-x-px">
                <button
                  className="p-2 shadow rounded bg-gray-100 ml-2 hover:bg-gray-200"
                  onClick={() => {
                    dispatch({ type: "set_showEdit", payload: !showEdit });
                    dispatch({ type: "set_showPayment", payload: false });
                  }}
                >
                  {!showEdit && !showPayment && "ویرایش"}{" "}
                  {showEdit && !showPayment && "جزییات"}{" "}
                  {!showEdit && showPayment && "ویرایش"}
                </button>
                {!showPayment && (
                  <button
                    className="p-2 shadow rounded bg-gray-100 hover:bg-gray-200"
                    onClick={() => {
                      dispatch({
                        type: "set_showPayment",
                        payload: !showPayment,
                      });
                      dispatch({ type: "set_showEdit", payload: false });
                    }}
                  >
                    اقساط
                  </button>
                )}
                {showPayment && (
                  <button
                    className="p-2 shadow rounded bg-gray-100 hover:bg-gray-200"
                    onClick={() =>
                      dispatch({
                        type: "set_showPayment",
                        payload: !showPayment,
                      })
                    }
                  >
                    جزییات
                  </button>
                )}
              </div>
            </div>
          </div>

          {!showEdit && !showPayment && (
            <>
              <InfoTable details={details?.insurer_customer_info} />

              <div className="pt-2 px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  <h3 className="text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right">
                    مشخصات بیمه شده
                  </h3>
                </div>
              </div>
              <InfoTable details={details?.insured_customer_info} />

              <div className="pt-2 px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <h3 className="text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right">
                    اطلاعات تماس بیمه گذار
                  </h3>
                </div>
              </div>
              <InfoCall details={details?.insurer_call_info} />

              <div className="pt-2 px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <h3 className="text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right">
                    اطلاعات بیمه نامه
                  </h3>
                </div>
              </div>
              <InfoInsurance details={details?.policy_info} />

              <div className="pt-2 px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <h3 className="text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right">
                    پوشش ها
                  </h3>
                </div>
              </div>
              <InfoCovers details={details?.coverages_info} />

              <div className="border-b border-gray-400">
                <div className="pt-2 px-4 ">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <h3 className="text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right">
                      جداول
                    </h3>
                  </div>
                </div>
                <div className="flex justify-center items-center my-5">
                  <button className="px-4 py-2 border rounded shadow mx-1 hover:bg-gray-100">
                    دانلود جدول پوشش ها{" "}
                  </button>
                  <button className="px-4 py-2 border rounded shadow mx-1 hover:bg-gray-100">
                    دانلود جدول مستمری
                  </button>
                </div>
              </div>

              <div className="pt-2 px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <h3 className="text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right">
                    ذینفعان
                  </h3>
                </div>
              </div>

              <InfoBeneficiaries details={details?.death_bens_info} />

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
              <div className="pt-2 px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <h3 className="text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right">
                    آخرین لاگ سفارش
                  </h3>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <input className="p-2 rounded shadow border w-full mx-5 focus:outline-none focus:border-blue-400" />
              </div>
            </>
          )}

          {showEdit && !showPayment && (
            <div className="p-5">
              <div className="flex flex-col px-5 my-2 ">
                <label for="code">Ref code</label>
                <input
                  id="code"
                  className="focus:outline-none focus:border-blue-300 border rounded p-1"
                />
              </div>
              <div className="flex flex-col px-5 my-2 ">
                <label for="payment">Payment ref</label>
                <input
                  id="payment"
                  className="focus:outline-none focus:border-blue-300 border rounded p-1"
                />
              </div>
            </div>
          )}

          {!showEdit && showPayment && <PaymentLife />}

          <div className="flex justify-between mx-5">
            {showEdit && (
              <button className="px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200">
                ثبت
              </button>
            )}
            {showPayment && (
              <button
                className="px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200"
                onClick={() =>
                  dispatch({
                    type: "set_showPaymentTable",
                    payload: !showPaymentTable,
                  })
                }
              >
                ثبت
              </button>
            )}
            <button
              className={`${
                !showEdit && "mr-auto"
              } px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`}
              onClick={() => setCollspace(false)}
            >
              بستن
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
});

export default InfoLife;
