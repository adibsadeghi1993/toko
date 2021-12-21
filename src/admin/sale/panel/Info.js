import { SaleContext } from "admin/sale/state/SaleState";
import React, { useContext, useEffect, useState } from "react";
import Info_life from "./Info_life/Info_life";
import Info_treatment from "./Info_treatment/Info_treatment";
import Info_responsibility from "./Info_responsibility/Info_responsibility";

const Info = React.memo(({ user }) => {
  const { insurance_name, insurance_status, insurances } =
    useContext(SaleContext);
  const [collspace, setCollspace] = useState(false);
  return (
    <>
      <tr
        onClick={() => setCollspace(!collspace)}
        className="hover:bg-gray-100 cursor-pointer"
      >
        <td className="whitespace-nowrap px-4 text-center py-2 border">
          {user?.product_category || ""}
        </td>
        <td className="whitespace-nowrap px-4 text-center py-2 border">
          {user?.status_id || ""}
        </td>
        <td className="whitespace-nowrap px-4 text-center py-2 border">
          {user?.insured_full_name || ""}
        </td>
        <td className="whitespace-nowrap px-4 text-center py-2 border">
          {user?.buyer_full_name || ""}
        </td>
        <td className="whitespace-nowrap px-4 text-center py-2 border">
          {user?.buyer_cell_number || ""}
        </td>
        <td className="whitespace-nowrap px-4 text-center py-2 border">
          {user?.payment_type || ""}
        </td>
        <td className="whitespace-nowrap px-4 text-center py-2 border">
          {user?.value || ""}
        </td>
        <td
          dir="ltr"
          className="whitespace-nowrap px-4 text-center py-2 border"
        >
          {user?.create_on || ""}
        </td>
        <td className="border text-center px-2" style={{ width: "60px" }}>
          <button className="text-blue-500">جزییات</button>
        </td>
      </tr>
      {user["محصول"] === "بیمه عمر" && (
        <Info_life setshow_info={setCollspace} show_info={collspace} />
      )}

      {user["محصول"] === "بیمه درمان" && (
        <Info_treatment
          setshow_info={setCollspace}
          show_info={collspace}
          payment_status={user["شیوه پرداخت"]}
          ins_status={user["وضعیت"]}
        />
      )}

      {user["محصول"] === "بیمه مسئولیت" && (
        <Info_responsibility
          setshow_info={setCollspace}
          show_info={collspace}
          ins_status={user["وضعیت"]}
        />
      )}
    </>
  );
});

export default Info;
