import React from "react";
import SaleTransaction from "../controls/SaleTransaction";

const SaleTransactionsTable = React.memo(({ saleTransactions }) => {
  return (
    <div className="relative lg:flex lg:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1">
      <table className="w-11/12">
        <thead className="text-sm bg-gray-300">
          <tr style={{ backgroundColor: "#F6F9FC" }}>
            <th
              className="whitespace-nowrap px-4 text-center py-2 border"
              style={{ color: "#91A5AD" }}
            >
              مبلغ
            </th>
            <th
              className="whitespace-nowrap px-4 text-center py-2 border"
              style={{ color: "#91A5AD" }}
            >
              تاریخ سررسید
            </th>
            <th
              className="whitespace-nowrap px-4 text-center py-2 border"
              style={{ color: "#91A5AD" }}
            >
              تاریخ پرداخت
            </th>
            <th
              className="whitespace-nowrap px-4 text-center py-2 border"
              style={{ color: "#91A5AD" }}
            >
              بیمه گذار
            </th>
            <th
              className="whitespace-nowrap px-4 text-center py-2 border"
              style={{ color: "#91A5AD" }}
            >
              بازاریاب
            </th>
            <th
              className="whitespace-nowrap px-4 text-center py-2 border"
              style={{ color: "#91A5AD" }}
            >
              سمت
            </th>
            <th
              className="whitespace-nowrap px-4 text-center py-2 border"
              style={{ color: "#91A5AD" }}
            >
              مبلغ قسط
            </th>

            <td className="whitespace-nowrap px-4 text-center py-2 border">
              #
            </td>
          </tr>
        </thead>

        <tbody className="table_tbody text-sm">
          {saleTransactions?.map((transaction) => (
            <SaleTransaction key={transaction.id} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default SaleTransactionsTable;
