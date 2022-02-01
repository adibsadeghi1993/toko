import React, { useCallback, useContext } from "react";
import moment from "jalali-moment";
import { SaleContext } from "admin/sale/state/SaleState";
import { STEP_SALE_TAB } from "config/constant";

const Treatment_people = React.memo(({ person_info }) => {
  const { dispatch, _sale_id, getfamily_person_info } = useContext(SaleContext);
  const _get_relation = (relation) => {
    switch (relation) {
      case "Insurer":
        return "بیمه گذار";
      case "Spouse":
        return "همسر";
      case "Child":
        return "فرزند";
      case "Father":
        return "پدر";
      case "Mother":
        return "مادر";
      case "Brother":
        return "برادر";
      case "Sister":
        return "خواهر";
      case "Employer":
        return "کارفرما";
      default:
        return "-";
    }
  };
  return (
    <div className="border-b pb-3 border-gray-400">
      <div className="relative flex justify-center mt-5 p-1">
        <table className="w-11/12">
          <thead className=" bg-gray-200">
            <tr>
              <th className="whitespace-nowrap px-4 border border-gray-300">
                نام و نام خانوادگی
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300">
                نام پدر
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300 ">
                نسبت
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                درصد فرانشیز
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                تاریخ تولد
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                جنسیت
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                بیمه گر پایه
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                بیمه زندگی
              </th>
              <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                #
              </th>
            </tr>
          </thead>
          <tbody>
            {person_info?.map((person) => (
              <tr
                className="bg-emerald-200 text-center hover:text-blue-500 cursor-pointer"
                onClick={() => {
                  dispatch({
                    type: "SET_REAL",
                    payload: `اطلاعات ${person?.full_name} - ${
                      person?.relation === "Insurer"
                        ? "بیمه گذار"
                        : person?.relation
                    }`,
                  });
                  //    در صورت نمایش دیتای بیمه گذار
                  if (person?.relation === "Insurer") {
                    dispatch({ type: "SET_INSURER_TREATMENT", payload: true });
                  }
                  getfamily_person_info?.(person?.customer_id, _sale_id);
                  dispatch({
                    type: "SET_STEP",
                    payload: STEP_SALE_TAB.DETAILS,
                  });
                }}
              >
                <td className="py-2 border border-gray-300">
                  {person?.full_name}
                </td>
                <td className="py-2 border border-gray-300">
                  {person?.father_name || "-"}
                </td>
                <td className="py-2 border border-gray-300">
                  {_get_relation(person?.relation) || "-"}
                </td>
                <td className="py-2 border border-gray-300">
                  {person?.fran || "-"}
                </td>
                <td className="py-2 border border-gray-300">
                  {" "}
                  {(moment(person?.birthday, "YYYY-MM-DD").isValid() &&
                    moment(person?.birthday, "YYYY-MM-DD")
                      .endOf("jMonth")
                      .format("jYYYY/jM/jD")) ||
                    person?.birthday}
                </td>
                <td className="py-2 border border-gray-300">
                  {person?.gender ? "آقا" : "خانم" || "-"}
                </td>
                <td className="py-2 border border-gray-300">
                  {person?.base_ins ? "بله" : "خیر" || "-"}
                </td>
                <td className="py-2 border border-gray-300">
                  {person?.life_company || "-"}
                </td>
                <td className="px-2 border border-gray-300 py-2 text-blue-500">
                  جزییات
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default Treatment_people;
