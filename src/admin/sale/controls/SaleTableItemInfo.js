import { SaleContext } from "admin/sale/state/SaleState";
import React, { useContext, useEffect, useState } from "react";
import Info_treatment from "../panel/Info_treatment/Info_treatment";
import Info_responsibility from "../panel/Info_responsibility/Info_responsibility";
import { CATEGORY_REVERS } from "config/constant";
import Info_life from "../panel/Info_life";
import moment from "jalali-moment";

const SaleTableItemInfo = React.memo(({ user }) => {
  const { getDetailsSales, details, _sale_id } = useContext(SaleContext);
  const [collspace, setCollspace] = useState(false);
  const [indexCurrent, setIndexCurrent] = useState(0);

  useEffect(() => {
    if (collspace && indexCurrent > 0) {
      getDetailsSales?.(indexCurrent);
    }
  }, [collspace, indexCurrent]);
  return (
    <>
      <tr
        onClick={() => {
          setIndexCurrent(user.sale_id);
          setCollspace(!collspace);
        }}
        className="hover:bg-gray-100 cursor-pointer"
      >
        <td className="whitespace-nowrap px-4 text-center py-2 border">
          {user?.product_category || "-"}
        </td>
        <td className="whitespace-nowrap px-4 text-center py-2 border">
          {user?.status_id || "-"}
        </td>
        <td className="whitespace-nowrap px-4 text-center py-2 border">
          {user?.promoter_full_name || "-"}
        </td>
        <td className="whitespace-nowrap px-4 text-center py-2 border">
          {user?.buyer_full_name || "-"}
        </td>
        <td className="whitespace-nowrap px-4 text-center py-2 border">
          {user?.buyer_cell_number || "-"}
        </td>
        <td className="whitespace-nowrap px-4 text-center py-2 border">
          {user?.payment_type || "-"}
        </td>
        <td className="whitespace-nowrap px-4 text-center py-2 border">
          {user?.value || "-"}
        </td>
        <td
          dir="ltr"
          className="whitespace-nowrap px-4 text-center py-2 border"
        >
          {(user?.create_on &&
            moment(user?.create_on)
              .endOf("jMonth")
              .format("jYYYY/jM/jD h:mm:ss")) ||
            "-"}
        </td>
        <td className="border text-center px-2" style={{ width: "60px" }}>
          <button className="text-blue-500">جزییات</button>
        </td>
      </tr>
      {/* "بیمه عمر" */}
      {!!details &&
        collspace &&
        details?.category_id &&
        _sale_id === user.sale_id &&
        details.category_id === CATEGORY_REVERS.CTG_O && (
          <Info_life setshow_info={setCollspace} sale_id={user.sale_id} />
        )}

      {/* "بیمه درمان" */}
      {!!details &&
        collspace &&
        _sale_id === user.sale_id &&
        details?.category_id &&
        details.category_id === CATEGORY_REVERS.CTG_D && (
          <Info_treatment
            setshow_info={setCollspace}
            show_info={collspace}
            payment_status={user["شیوه پرداخت"]}
            ins_status={user["وضعیت"]}
            details={details}
          />
        )}

      {/* "بیمه مسئولیت" */}
      {!!details &&
        collspace &&
        _sale_id === user.sale_id &&
        details?.category_id &&
        details.category_id === CATEGORY_REVERS.CTG_M && (
          <Info_responsibility
            setshow_info={setCollspace}
            show_info={collspace}
            ins_status={user["وضعیت"]}
          />
        )}
      {/* )} */}
    </>
  );
});

export default SaleTableItemInfo;
