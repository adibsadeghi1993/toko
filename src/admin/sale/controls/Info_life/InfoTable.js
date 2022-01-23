import React from "react";

const Info_table = React.memo(({ details }) => {
  return (
    <div className="border-b pb-3 border-gray-400 px-3n">
      <div className="relative flex justify-center mt-15 p-1">
        <table className="w-11/12">
          <thead className="text-sm bg-gray-200">
            <tr>
              <th className="whitespace-nowrap px-4 border-gray-300 border ">
                نام
              </th>
              <th className="whitespace-nowrap px-4 border-gray-300 border ">
                نام خانوادگی
              </th>
              <th className="whitespace-nowrap px-4 border-gray-300 border ">
                کد ملی
              </th>
              <th className="whitespace-nowrap px-4 border-gray-300 border py-2">
                نام پدر
              </th>
              <th className="whitespace-nowrap px-4 border-gray-300 border py-2">
                تاریخ تولد
              </th>
              <th className="whitespace-nowrap px-4 border-gray-300 border py-2">
                جنسیت
              </th>
              <th className="whitespace-nowrap px-4 border-gray-300 border py-2">
                بارداری
              </th>
              <th className="whitespace-nowrap px-4 border-gray-300 border py-2">
                وزن
              </th>
              <th className="whitespace-nowrap px-4 border-gray-300 border py-2">
                قد
              </th>
              <th className="whitespace-nowrap px-4 border-gray-300 border py-2">
                آیا موتور سواری میکنید؟
              </th>
              <th className="whitespace-nowrap px-4 border-gray-300 border py-2">
                آیا سیگار میکشید
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-emerald-200 text-center text-sm">
              <td className="pl-1 py-2 border border-gray-300">
                {details?.name || "-"}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.family_name || "-"}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.national_code || "-"}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.father_name || "-"}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.birthday || "-"}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {(details?.gender ? "آقا" : "خانم") || "-"}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.is_pregnant ? "بله" : "خیر" || "-"}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.weight || "-"}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.height || "-"}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.holder_is_biker ? "بله" : "خیر" || "-"}
              </td>
              <td className="pl-1 py-2 border border-gray-300">
                {details?.holder_is_smoker ? "بله" : "خیر" || "-"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center">
        <button className="rounded shadow border px-3 py-1 mr-5 mt-2 hover:shadow-lg">
          کارت ملی
        </button>
        <button className="rounded shadow border px-3 py-1 mr-1 mt-2 hover:shadow-lg">
          شناسنامه
        </button>
      </div>
    </div>
  );
});

export default Info_table;
