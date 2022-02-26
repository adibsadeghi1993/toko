import React, { useContext, useState, useEffect } from "react";
import { InstallmentContext } from "admin/payments/state/InstallmentState";
import InstallmentDetails from "./InstallmentDetails";
import moment from "moment-jalaali";

const InstallmentTable = React.memo(({ installments }) => {
  const [collspace, setCollspace] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(undefined);
  const [orderInstallment, setOrderInstallment] = useState(null);

  useEffect(() => {
    const orderedInstallments = installments?.sort(function (a, b) {
      return new Date(b.installment_date).getTime() - new Date(a.installment_date).getTime();
    });
    setOrderInstallment(orderedInstallments)
  }, [installments]);

 console.log({installments})

  const { getInstallmentDetails, installmentDetails, dispatch } =
    useContext(InstallmentContext);

  useEffect(() => {
    if (collspace && currentIndex !== undefined) {
      getInstallmentDetails(currentIndex);
    } else {
      dispatch({ type: "RESET" });
    }
  }, [collspace, currentIndex, getInstallmentDetails]);

  return (
    <div className="relative lg:block lg:justify-center mt-5 overflow-x-auto overscroll-auto p-1 ">
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
              مبلغ واریزی مشتری
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
          {orderInstallment &&
            orderInstallment.map((user, index) => (
              <React.Fragment key={user.installments_id}>
                <tr
                  onClick={() => {
                    if (user.installments_id === currentIndex && collspace) {
                      setCollspace(false);
                      setCurrentIndex(undefined);
                    } else {
                      setCollspace(true);
                      setCurrentIndex(user?.installments_id);
                    }
                  }}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  <td className="whitespace-nowrap px-4 text-center py-2 border">
                    {user.round}
                  </td>
                  <td className="whitespace-nowrap px-4 text-center py-2 border">
                    {(user?.expected_installments_values).commaSeparated() ||
                      "-"}
                  </td>
                  <td className="whitespace-nowrap px-4 text-center py-2 border">
                    {(user?.paid_installments_values).commaSeparated() || "-"}
                  </td>
                  <td className="whitespace-nowrap px-4 text-center py-2 border">
                    {user?.installment_date &&
                      moment(user?.installment_date, "YYYY-M-D").format(
                        "jYYYY/jM/jD"
                      )}
                  </td>
                  <td className="whitespace-nowrap px-4 text-center py-2 border">
                    {user?.issue_number || "-"}
                  </td>
                  <td className="whitespace-nowrap px-4 text-center py-2 border">
                    {(user?.estimated_installment_profit).commaSeparated() ||
                      "-"}
                  </td>
                  <td className="whitespace-nowrap px-4 text-center py-2 border">
                    {user.payment_date ?
                      moment(user?.payment_date, "YYYY-M-D").format(
                        "jYYYY/jM/jD"
                      ):"-"}
                  </td>
                  <td className="whitespace-nowrap px-4 text-center py-2 border">
                    -
                  </td>

                  <td className="whitespace-nowrap px-4 text-center py-2 border">
                    {user?.promoter_full_name || "-"}
                  </td>
                  <td className="whitespace-nowrap px-4 text-center py-2 border">
                    {user?.insurer_full_name || "-"}
                  </td>

                  <td className="whitespace-nowrap px-4 text-center py-2 border">
                    {user?.product_category || "-"}
                  </td>
                  <td className="border text-center px-2">
                    <button className="text-blue-500">جزییات</button>
                  </td>
                </tr>

                {installmentDetails &&
                  collspace &&
                  user.installments_id === currentIndex && (
                    <InstallmentDetails
                      collspace={collspace}
                      setCollspace={setCollspace}
                      installmentDetails={installmentDetails}
                    />
                  )}
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </div>
  );
});

export default InstallmentTable;
