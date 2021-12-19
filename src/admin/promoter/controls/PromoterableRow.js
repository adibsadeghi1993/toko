import moment from "moment-jalaali";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MemmberContext } from "../state/State";
import { ReactComponent as Trash } from "shared/icons/trash.svg";
import { ReactComponent as People } from "shared/icons/people.svg";
import { ReactComponent as Graph } from "shared/icons/chart.svg";
import { ReactComponent as Card } from "shared/icons/card.svg";
import { ReactComponent as Edit } from "shared/icons/edit.svg";
export default React.memo(({ item }) => {
  return (
    <tr class="bg-emerald-200 hover:bg-gray-100 hover:text-gray-500">
      <td className="flex p-10 md:p-2 items-center w-full">
        <img
          className="w-14 h-14 rounded-full"
          src="https://acp.tooko.co/img/brand/man.jpg"
        />
        <Link
          to={`/members/details/${item.id}`}
          className="text-blue-500 hover:text-blue-700 cursor-pointer text-sm mr-2"
        >
          {item?.username || "-"}
        </Link>
      </td>
      <td className="px-4 py-2 text-sm text-right whitespace-nowrap" dir="ltr">
        {moment(item.register_date, "YYYY-M-D HH:mm:ss")
          .endOf("jMonth")
          .format("jYYYY/jM/jD HH:mm:ss") || ""}
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-sm">
        <span className="bg-blue-600 text-white p-1 rounded-lg">
          {item?.is_active ? "فعال" : "غیرفعال"}
        </span>
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-sm text-blue-500 hover:text-blue-700 cursor-pointer">
        {item?.cellphone_number}
      </td>
      <td className="px-4 py-2 text-sm whitespace-nowrap">
        <Link
          to="/members/details"
          className="text-blue-500 hover:text-blue-700 cursor-pointer"
        >
          دسترسی ها
        </Link>
      </td>
    </tr>
  );
});
