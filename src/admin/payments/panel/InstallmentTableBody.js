import React, { useContext, useState, useEffect } from "react";
import { InstallmentContext } from "admin/payments/state/InstallmentState";
import InstallmentDetails from "./InstallmentDetails";
import moment from "moment-jalaali";

function InstallmentTableBody({ user }) {
  const [collspace, setCollspace] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { installments, getInstallmentDetails, installmentDetails, dispatch } =
    useContext(InstallmentContext);

  useEffect(() => {
    if (collspace && currentIndex > 0) {
      getInstallmentDetails(currentIndex);
    } else {
      dispatch({ type: "RESET" });
    }
  }, [collspace, currentIndex, getInstallmentDetails]);

  return (
    <>
      <tr
        onClick={() => {
          setCurrentIndex(user?.installments_id);
          setCollspace(!collspace);
          // setshow_info(!show_info);

          // if (!show_info) {
          //   getInstallmentDetails(user?.installments_id);
          // }
        }}
        className="cursor-pointer hover:bg-gray-100"
      >
        <td className="whitespace-nowrap px-4 text-center py-2 border">-</td>
        <td className="whitespace-nowrap px-4 text-center py-2 border">
          {(user?.expected_installments_values).commaSeparated() || "-"}
        </td>
        <td className="whitespace-nowrap px-4 text-center py-2 border">
          {user?.installment_date &&
            moment(user?.installment_date, "YYYY-M-D").format("jYYYY/jM/jD")}
        </td>
        <td className="whitespace-nowrap px-4 text-center py-2 border">
          {user?.issue_number || "-"}
        </td>
        <td className="whitespace-nowrap px-4 text-center py-2 border">
          {(user?.estimated_installment_profit).commaSeparated() || "-"}
        </td>
        <td className="whitespace-nowrap px-4 text-center py-2 border">
          {user?.payment_date || "-"}
        </td>
        <td className="whitespace-nowrap px-4 text-center py-2 border">-</td>

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

      {installments && (
        <InstallmentDetails
          // show_info={show_info}
          // setshow_info={setshow_info}
          collspace={collspace}
          currentIndex={currentIndex}
          installmentDetails={installmentDetails}
        />
      )}
    </>
  );
}

export default InstallmentTableBody;
