import React, { useContext } from "react";
import moment from "moment-jalaali";

import { InstallmentContext } from "../state/InstallmentState";

function InstallmentDetails({ collspace, setCollspace, installmentDetails }) {
  const { installments, dispatch } = useContext(InstallmentContext);
  console.log(installmentDetails);

  return (
    <>
      <tr className={` ${!collspace && "hidden"}`}>
        <td className="bg-gray-200 p-2" colSpan="100%">
          <div className="card flex flex-col card_transaction">
            <div className="border-b pb-3 border-gray-400">
              <div className="relative flex justify-center mt-15 p-1">
                <table className="w-11/12">
                  <thead className="text-sm bg-gray-200">
                    <tr>
                      <th className="whitespace-nowrap px-2 border-gray-300 border  py-3">
                        محصول
                      </th>
                      <th className="whitespace-nowrap px-2 border-gray-300 border  py-3">
                        بیمه گذار
                      </th>
                      <th className="whitespace-nowrap px-2 border-gray-300 border  py-3">
                        شماره تماس بیمه گذار
                      </th>
                      <th className="whitespace-nowrap px-2 border-gray-300 border  py-3">
                        تاریخ دریافت کارمزد
                      </th>
                      <th className="whitespace-nowrap px-2 border-gray-300 border  py-3">
                        نحوه پرداخت
                      </th>
                      <th className="whitespace-nowrap px-2 border-gray-300 border  py-3">
                        تاریخ صدور
                      </th>
                      <th className="whitespace-nowrap px-2 border-gray-300 border  py-3">
                        تاریخ سررسید
                      </th>
                      <th className="whitespace-nowrap px-2 border-gray-300 border  py-3">
                        مبلغ باقی مانده
                      </th>
                      <th className="whitespace-nowrap px-2 border-gray-300 border  py-3">
                        مبلغ دریافتی تا کنون
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="bg-emerald-200 text-center text-sm">
                      <td className=" border border-gray-300 py-3">
                        {installmentDetails?.product_description}
                      </td>
                      <td className=" border border-gray-300 py-3">
                        {installmentDetails?.insurer_full_name}
                      </td>
                      <td className=" border border-gray-300 py-3">
                        {installmentDetails?.insurer_phone_number}
                      </td>
                      <td className=" border border-gray-300 py-3">
                        {installmentDetails?.payment_date || "-"}
                      </td>
                      <td className=" border border-gray-300 py-3">
                        {installmentDetails?.buy_type}
                      </td>
                      <td className=" border border-gray-300 py-3">
                        {installmentDetails?.calc_date &&
                          moment(
                            installmentDetails?.calc_date,
                            "YYYY-M-D"
                          ).format("jYYYY/jM/jD")}
                      </td>
                      <td className=" border border-gray-300 py-3">
                        {installmentDetails?.installment_date &&
                          moment(
                            installmentDetails?.calc_date,
                            "YYYY-M-D"
                          ).format("jYYYY/jM/jD")}
                      </td>
                      <td className=" border border-gray-300 py-3">
                        {installmentDetails?.total_sale_revenue.commaSeparated()}
                      </td>
                      <td className=" border border-gray-300 py-3">
                        {installmentDetails?.total_paid_installments.commaSeparated()}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end">
                <button
                  className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200 mr-auto`}
                  onClick={() => {
                    setCollspace(false);
                  }}
                >
                  بستن
                </button>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}

export default InstallmentDetails;
