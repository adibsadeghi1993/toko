import React from "react";
import SaleTableItemInfo from "../controls/SaleTableItemInfo";

const SaleTable = React.memo(({ sales }) => {
  return (
    <div className="relative lg:flex lg:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1">
      <table className="w-11/12">
        <thead className="text-sm bg-gray-300">
          <tr className="bg-other-bgGrayActiveItem">
            <th className="whitespace-nowrap px-4 text-center py-2 border">
              محصول
            </th>
            <th className="whitespace-nowrap px-4 text-center py-2 border">
              وضعیت
            </th>
            <th className="whitespace-nowrap px-4 text-center py-2 border">
              بازاریاب
            </th>
            <th className="whitespace-nowrap px-4 text-center py-2 border">
              بیمه گذار
            </th>
            <th className="whitespace-nowrap px-4 text-center py-2 border">
              شماره تماس
            </th>
            <th className="whitespace-nowrap px-4 text-center py-2 border">
              شیوه پرداخت
            </th>
            <th className="whitespace-nowrap px-4 text-center py-2 border">
              حق بیمه
            </th>
            <th className="whitespace-nowrap px-4 text-center py-2 border">
              تاریخ ایجاد
            </th>
            <th className="border">#</th>
          </tr>
        </thead>
        <tbody className="table_tbody text-sm">
          {!!sales &&
            !!sales?.result.length &&
            sales?.result?.map((item, index) => (
              <SaleTableItemInfo key={index} user={item} index={index} />
            ))}
          {!sales?.result?.length === 0 && (
            <tr>
              <td colSpan={9}>
                <div className="flex flex-row justify-center py-4">
                  <span className="text-base">
                    لیست سفارشی جهت نمایش وجود ندارد!
                  </span>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
});

export default SaleTable;
