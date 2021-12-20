import moment from "moment-jalaali";
import React from "react";

export default React.memo(({ item }) => {
  return (
    <tr className="bg-emerald-200 text-center text-sm">
      <td className="py-2">
        <input defaultValue={item?.full_name || "-"} />
      </td>
      <td className="py-2">
        <input defaultValue={item?.national_card || "-"} />
      </td>
      <td className="py-2">
        <input defaultValue={item?.father_name || "-"} />
      </td>
      <td className="py-2">
        <select>
          <option >مجرد</option>
          <option>متاهل</option>
        </select>
        {item?.is_married ? "متاهل" : "مجرد"}
      </td>
      <td className="py-2">
        {(item?.birthday &&
          moment(item?.birthday, "YYYY-MM-DD")
            .endOf("jMonth")
            .format("jYYYY/jM/jD")) ||
          "-"}
      </td>
      <td className="py-2">{item?.username || "-"}</td>
      <td className="py-2">{item?.degree_of_education_id || "-"}</td>
      <td className="py-2">{item?.gender ? "آقا" : "خانم"}</td>
      <td className="py-2">{item?.is_pregnant ? "بله" : "خیر"}</td>
      <td className="py-2">{item?.height || "-"}</td>
      <td className="py-2">{item?.weight || "-"}</td>
      <td className="py-2">{item?.sheba_card || "-"}</td>
      <td className="py-2">{item?.email || "-"}</td>
    </tr>
  );
});
