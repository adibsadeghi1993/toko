import React, { useState, useContext, useEffect } from "react";
import { SaleTransactionsContext } from "../state/SaleTransactionsState";
import TransactionDetails from "../TransactionDetails";
import moment from "jalali-moment";

const SaleTransactionsTable = React.memo(({ saleTransactions }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const { details, getTransactionDetails, dispatch } = useContext(
    SaleTransactionsContext
  );

  useEffect(() => {
    if (currentId !== 0 && showDetails) {
      getTransactionDetails?.(currentId);
    } else {
      dispatch({ type: "RESET" });
    }
  }, [showDetails, currentId, getTransactionDetails]);

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
            <th
              className="whitespace-nowrap px-4 text-center py-2 border"
              style={{ color: "#91A5AD" }}
            >
              شماره بیمه نامه
            </th>

            <td className="whitespace-nowrap px-4 text-center py-2 border">
              #
            </td>
          </tr>
        </thead>

        <tbody className="table_tbody text-sm">
          {saleTransactions?.map((transaction) => (
            <React.Fragment key={transaction.id}>
              <tr
                onClick={() => {
                  if (currentId && currentId !== transaction.id) {
                    setShowDetails(true);
                    setCurrentId(transaction.id);
                  } else {
                    setShowDetails(!showDetails);
                    setCurrentId(transaction.id);
                  }
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
                <td className="m-1 p-1 pt-2 pb-2 text-center border">
                  {transaction?.issue_number}
                </td>
                <td
                  className="border text-center px-2"
                  style={{ width: "60px" }}
                >
                  <button className="text-blue-500">جزییات</button>
                </td>
              </tr>

              {showDetails && currentId !== undefined && (
                <TransactionDetails
                  id={transaction?.id}
                  details={details}
                  showDetails={showDetails}
                  setShowDetails={setShowDetails}
                  currentId={currentId}
                />
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default SaleTransactionsTable;
