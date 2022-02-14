import React, { useState, useEffect } from "react";
import Info_transactions from "./Info_transactions";
import moment from "jalali-moment";

function SaleTransaction({ transaction, insurances }) {
  const [show_info, setshow_info] = useState(false);

  const calculateDate = (paymentDate) => {
    moment.locale("fa");
    const date = moment(new Date(paymentDate));
    const year = date.format("YYYY");
    const month = date.format("M");
    const day = date.format("D");
    const validDate = moment(
      year + "/" + month + "/" + day,
      "jYYYY/jM/jD"
    ).isValid();

    if (validDate) return `${day}/${month}/${year}`;

    console.log(date);
  };

  return (
    <>
      <tr
        onClick={() => setshow_info(!show_info)}
        className="hover:bg-gray-100 cursor-pointer"
      >
        {/* {user && Object.entries(user)?.map(([key, val]) => {
          Object.entries(transaction)?.map(([key, val]) => {
            if (key === "محصول") {
              return false;
            }
            return (
              <td key={key} className="m-1 p-1 pt-2 pb-2 text-center border">
                {val}
              </td>
            );
          })} */}

        <td className="m-1 p-1 pt-2 pb-2 text-center border">
          {transaction?.amount}
        </td>
        <td className="m-1 p-1 pt-2 pb-2 text-center border">
          {calculateDate(transaction?.expected_payment_date)}
        </td>
        <td className="m-1 p-1 pt-2 pb-2 text-center border">
          {calculateDate(transaction?.payment_date)}
        </td>
        <td className="m-1 p-1 pt-2 pb-2 text-center border">
          {transaction?.insurer_full_name}
        </td>
        <td className="m-1 p-1 pt-2 pb-2 text-center border">
          {transaction?.payee_full_name}
        </td>
        <td className="m-1 p-1 pt-2 pb-2 text-center border">
          {transaction?.level_title}
        </td>
        <td className="m-1 p-1 pt-2 pb-2 text-center border">
          {transaction?.expected_installments_value}
        </td>
        <td className="border text-center px-2" style={{ width: "60px" }}>
          <button className="text-blue-500">جزییات</button>
        </td>
      </tr>

      <Info_transactions show_info={show_info} setshow_info={setshow_info} />
    </>
  );
}

export default SaleTransaction;
