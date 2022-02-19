import React from "react";
import moment from "moment-jalaali";

function TransactionDetails({
  details,
  showDetails,
  setShowDetails,
  currentId,
  id,
}) {
  return (
    <>
      <tr className={` ${(!showDetails || currentId !== id) && "hidden"}`}>
        <td className="bg-gray-200 p-2" colSpan="100%">
          <div className="card flex flex-col card_transaction">
            <div className="border-b pb-3 border-gray-400">
              <div className="relative flex justify-center mt-15 p-1">
                <table className="w-6/12">
                  <thead className="text-sm bg-gray-200">
                    <tr>
                      <th className="whitespace-nowrap px-4 border-gray-300 border  py-3">
                        وضعیت پرداخت
                      </th>
                      <th className="whitespace-nowrap px-4 border-gray-300 border  py-3">
                        محصول
                      </th>
                      <th className="whitespace-nowrap px-4 border-gray-300 border  py-3">
                        شماره بیمه نامه
                      </th>
                      <th className="whitespace-nowrap px-4 border-gray-300 border  py-3">
                        شماره تماس بازاریاب
                      </th>
                      <th className="whitespace-nowrap px-4 border-gray-300 border  py-3">
                        درصد
                      </th>
                      <th className="whitespace-nowrap px-4 border-gray-300 border  py-3">
                        تاریخ ایجاد
                      </th>
                      <th className="whitespace-nowrap px-4 border-gray-300 border  py-3">
                        مبلغ
                      </th>
                      <th className="whitespace-nowrap px-4 border-gray-300 border  py-3">
                        شماره قسط
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="bg-emerald-200 text-center text-sm">
                      <td className=" border border-gray-300 py-3">
                        {details?.is_pay ? "پرداخت شد" : "باید پرداخت شود"}
                      </td>
                      <td className=" border border-gray-300 py-3">
                        {details?.product_description}
                      </td>
                      <td className=" border border-gray-300 py-3">
                        {details?.issue_number || "-"}
                      </td>
                      <td className=" border border-gray-300 py-3">
                        {details?.phone_number || "-"}
                      </td>
                      <td className=" border border-gray-300 py-3">
                        {details?.network_percent}
                      </td>
                      <td className=" border border-gray-300 py-3">
                        {details?.created_on &&
                          moment(details.created_on, "YYYY-M-D").format(
                            "jYYYY/jM/jD"
                          )}
                      </td>
                      <td className=" border border-gray-300 py-3">
                        {details?.amount?.commaSeparated()}
                      </td>
                      <td className=" border border-gray-300 py-3">
                        {details?.installmet_number || "-"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end">
                <button
                  className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200 mr-auto`}
                  onClick={() => setShowDetails(false)}
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

export default TransactionDetails;
