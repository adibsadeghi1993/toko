import React, { useState, useContext } from "react";
import { SaleTransactionsContext } from "../state/SaleTransactionsState";
import TransactionDetails from "../TransactionDetails";
import moment from "jalali-moment";

function SaleTransaction({ transaction }) {
  const { getTransactionDetails, details, dispatch } = useContext(
    SaleTransactionsContext
  );
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

    if (validDate) return `${year}/${month}/${day}`;
  };

  // console.log(transaction);
  return (
    <>
      <tr
        onClick={() => {
          dispatch({ type: "HIDE_DETAILS", payload: false });
          setshow_info(!show_info);
          if (!show_info) getTransactionDetails({ finance_id: transaction.id });
        }}
        className="hover:bg-gray-100 cursor-pointer"
      >
        <td className="m-1 p-1 pt-2 pb-2 text-center border">
          {transaction?.amount?.commaSeparated()}
        </td>
        <td className="m-1 p-1 pt-2 pb-2 text-center border">
          {transaction?.expected_payment_date
            ? calculateDate(transaction?.expected_payment_date)
            : "-"}
        </td>
        <td className="m-1 p-1 pt-2 pb-2 text-center border">
          {transaction?.payment_date
            ? calculateDate(transaction?.payment_date)
            : "-"}
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
          {transaction?.expected_installments_value?.commaSeparated()}
        </td>
        <td className="border text-center px-2" style={{ width: "60px" }}>
          <button className="text-blue-500">جزییات</button>
        </td>
      </tr>

      {show_info && (
        <TransactionDetails
          show_info={show_info}
          setshow_info={setshow_info}
          id={transaction?.id}
          details={details}
        />
      )}
    </>
  );
}

export default SaleTransaction;
