import moment from "moment-jalaali";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MemmberContext } from "../state/State";

export default React.memo(({ item }) => {
  const { roles } = useContext(MemmberContext);
  return (
    <tr className="bg-emerald-200 hover:bg-gray-100 hover:text-gray-500">
      <td className="flex w-60 p-10 md:p-2 items-center">
        <img
          className="w-14 h-14 rounded-full"
          src="https://acp.tooko.co/img/brand/man.jpg"
        />
        <Link
          to={`/members/details/${item?.id}`}
          className="text-blue-500 hover:text-blue-700 cursor-pointer text-sm mr-2"
        >
          {item?.username}
          <span className="block text-xs text-gray-600">
            {!!item?.role_id &&
              !!roles &&
              !!item?.role_id.length &&
              item?.role_id.map((itm) => roles[itm]?.role_farsi || "" + ",")}
          </span>
        </Link>
      </td>
      <td className="px-4 py-2 text-sm text-right" dir="ltr">
        {(item?.register_date &&
          moment(item?.register_date, "YYYY-M-D HH:mm:ss")
            .endOf("jMonth")
            .format("jYYYY/jM/jD HH:mm:ss")) ||
          ""}
      </td>
      <td className="px-4 py-2 text-sm">
        <span className="bg-blue-600 text-white p-1 rounded-lg">
          {item?.is_active ? "فعال" : "غیرفعال"}
        </span>
      </td>
      <td className="px-4 py-2 text-sm text-blue-500 hover:text-blue-700 cursor-pointer">
        {item?.cellphone_number}
      </td>
      <td className="px-4 py-2 text-sm">
        <Link
          to={`/members/details/${item?.id}`}
          className="text-blue-500 hover:text-blue-700 cursor-pointer"
        >
          مشاهده کاربر
        </Link>
      </td>
    </tr>
  );
});
