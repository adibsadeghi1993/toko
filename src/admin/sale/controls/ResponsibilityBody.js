import React, { useContext } from "react";
import { SaleContext } from "../state/SaleState";
import SalesTables from "./SalesTables";

export default React.memo(({ details }) => {
  const { _sale_id } = useContext(SaleContext);
  return (
    <>
      <div className="relative lg:flex lg:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1">
        <table className="w-full">
          <thead className="text-sm bg-gray-200">
            <tr>
              <th className="whitespace-nowrap px-4 border border-gray-300">
                شماره درخواست
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300">
                نام
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300 ">
                نام خانوادگی
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                شماره تماس
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                نوع فعالیت شغلی
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                وضعیت
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                نوع بیمه
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                شاخه بیمه ای
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-emerald-200 text-center text-sm">
              <td className="pl-1 py-2 border border-gray-300">
                {details?.responsibility_id}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.name}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.family_name}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.cellphone_number}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.job_type}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.status}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.subcategory}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.category}
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
      <div className="pt-2 mt-5 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <h3 className="text-primary-color pr-3 font-bold  text-center lg:text-right text-sm">
            در حال حاضر تحت پوشش کدام شرکت هستید؟
          </h3>
        </div>
      </div>

      <input
        value={details?.current_ins}
        className="p-2 rounded border focus:outline-none focus:border-blue-400 mt-5 m-2"
      />

      <div className="pt-2 mt-5 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <h3 className="text-primary-color pr-3 font-bold  text-center lg:text-right text-sm">
            لاگ سفارش
          </h3>
        </div>
      </div>

      <input className="p-2 rounded border focus:outline-none focus:border-blue-400 mt-5 m-2" />
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
    </>
  );
});
