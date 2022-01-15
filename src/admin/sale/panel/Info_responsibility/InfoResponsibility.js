import { SaleContext } from "admin/sale/state/SaleState";
import React, { useContext } from "react";
import Res_insurance from "./Res_insurance";

const InfoResponsibility = React.memo(
  ({ setshow_info, show_info, ins_status }) => {
    const { details } = useContext(SaleContext);
    return (
      <tr className={` ${!show_info && "hidden"}`}>
        <td className="bg-gray-200 p-2" colSpan="100%">
          <Res_insurance
            details={details}
            setshow_info={setshow_info}
            ins_status={ins_status}
          />
        </td>
      </tr>
    );
  }
);

export default InfoResponsibility;
