import { PaymentsContext } from "admin/payments/state/PaymentsState";
import React, { useContext, useEffect, useState } from "react";
import Info_pay from "./Info_pay";
import moment from "moment-jalaali";
import UtilityAPI from "shared/utils/UtilityAPI";

function InstallmentTableBody({ user }) {
  const [show_info, setshow_info] = useState(false);
  const { insurances, installment } = useContext(PaymentsContext);
  //   console.log("instbody", user);
  return (
    <>
      <tr
        onClick={() => setshow_info(!show_info)}
        className="cursor-pointer hover:bg-gray-100"
      >
        {/* {user && Object.entries(user)?.map(([key, val]) => {
                return (
                    (
                    <td key={key} className="m-1 px-2 py-2 text-center border">
                    {val}
                    </td>
                )
                );
            })} */}
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
          {user?.estimated_installment_profit || "-"}
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
      {installment && (
        <Info_pay
          user={user}
          show_info={show_info}
          setshow_info={setshow_info}
        />
      )}
    </>
  );
}

export default InstallmentTableBody;
