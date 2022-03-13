import { SaleContext } from "admin/sale/state/SaleState";
import moment from "jalali-moment";
import React, { useContext } from "react";

// TODO: Complate section download scan file
export default React.memo(({ details }) => {
  const { reverseStatusText, _sale_id } = useContext(SaleContext);
  return (
    <div className="border-b pb-3 border-gray-400">
      <div className="relative flex justify-center mt-5  p-1">
        <table className="w-11/12">
          <thead className=" bg-gray-200">
            <tr>
              <th className="whitespace-nowrap px-4 border border-gray-300 ">
                وضعیت
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300 ">
                شرکت
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300  ">
                طرح
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300  py-2">
                درصد فرانشیر
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300  py-2">
                قیمت
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300  py-2">
                قیمت با تخفیف
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300  py-2">
                نوع تخفیف
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300  py-2">
                نوع پرداخت
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300  py-2">
                تاریخ صدور
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300  py-2">
                شماره بیمه نامه
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-emerald-200 text-center">
              <td className="pl-1 py-2 border border-gray-300">
                {reverseStatusText(details?.details?.status)}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.details?.company || "-"}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.details?.plan_name || "-"}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.details?.fran || "-"} %
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.details?.net_price?.toLocaleString() || "-"}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.details?.off_price?.toLocaleString() || "-"}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.details?.off_category || "-"}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.details?.payment_method ? "نقدی" : "اقساط"}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {(details?.details?.create_on &&
                  moment(details?.details?.create_on, "YYYY-MM-DD")
                    .endOf("jMonth")
                    .format("jYYYY/jM/jD")) ||
                  "-"}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.details?.issue_number || "-"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center">
        {details?.insurance_paper && (
          <a
            target={"_blank"}
            rel="noreferrer"
            download={`insurance_paper_${_sale_id}.png`}
            href={`${details?.insurance_paper}`}
            className="rounded shadow border px-3 py-1 mr-3 mt-2 hover:shadow-lg"
          >
            تصویر بیمه نامه
          </a>
        )}
        {details?.first_payment_scan && (
          <a
            target={"_blank"}
            rel="noreferrer"
            download={`first_payment_scan_${_sale_id}.png`}
            href={`${details?.first_payment_scan}`}
            className="rounded shadow border px-3 py-1 mr-1 mt-2 hover:shadow-lg"
          >
            تصویر اولین اسکن پرداخت
          </a>
        )}
      </div>
    </div>
  );
});
