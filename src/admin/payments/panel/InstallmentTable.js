import React from "react";
import InstallmentTableBody from "./InstallmentTableBody";

const InstallmentTable = React.memo(({ installments }) => {
  return (
    <div className="relative lg:flex lg:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1">
      <table className="w-11/12">
        <thead className="text-sm bg-gray-300">
          <tr style={{ backgroundColor: "#F6F9FC" }}>
            <th
              className="whitespace-nowrap px-4 text-center py-2 border"
              style={{ color: "#91A5AD" }}
            >
              شماره قسط
            </th>
            <th
              className="whitespace-nowrap px-4 text-center py-2 border"
              style={{ color: "#91A5AD" }}
            >
              مبلغ قسط
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
              شماره بیمه نامه
            </th>
            <th
              className="whitespace-nowrap px-4 text-center py-2 border"
              style={{ color: "#91A5AD" }}
            >
              کارمزد پیشبینی
            </th>
            <th
              className="whitespace-nowrap px-4 text-center py-2 border"
              style={{ color: "#91A5AD" }}
            >
              تاریخ واریز قسط
            </th>

            <th
              className="whitespace-nowrap px-4 text-center py-2 border"
              style={{ color: "#91A5AD" }}
            >
              کارمزد دریافتی از شرکت{" "}
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
              بیمه گذار
            </th>
            <th
              className="whitespace-nowrap px-4 text-center py-2 border"
              style={{ color: "#91A5AD" }}
            >
              رشته بیمه
            </th>
            <th className="whitespace-nowrap px-4 text-center py-2 border">
              #
            </th>
          </tr>
        </thead>

        <tbody className="table_tbody text-sm">
          {installments &&
            installments.result.map((user, index) => (
              <InstallmentTableBody user={user} key={index} />
            ))}
        </tbody>
      </table>
    </div>
  );
});

export default InstallmentTable;
