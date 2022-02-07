import { SaleContext } from "admin/sale/state/SaleState";
import React, { useContext } from "react";
import ResInsurance from "./ResInsurance";

const InfoResponsibility = React.memo(({ setCollspace, show_info }) => {
  const { details } = useContext(SaleContext);
  const props = { details, setCollspace };
  return (
    <tr className={` ${!show_info && "hidden"}`}>
      <td className="bg-gray-200 p-2" colSpan="100%">
        <ResInsurance {...props} />
      </td>
    </tr>
  );
});

export default InfoResponsibility;
