import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Top from "./Top";
import { ReactComponent as Person } from "../../shared/icons/person.svg";
import { ReactComponent as Graph } from "../../shared/icons/chart.svg";
import { ReactComponent as Card } from "../../shared/icons/card.svg";
import { ReactComponent as Trash } from "../../shared/icons/trash.svg";
import { ReactComponent as Edit } from "../../shared/icons/edit.svg";
import { useState } from "react";
import { MemmberContext } from "./state/State";
import moment from "jalali-moment";

export default React.memo(() => {
  const [id_card, setId_card] = useState("");
  const [certification, setCertification] = useState("");

  const { getSubset, subset } = useContext(MemmberContext);

  const { id, family_id } = useParams();

  useEffect(() => {
    !!getSubset && getSubset({ tooko_user: id, customer_id: family_id });
  }, [id, family_id, getSubset]);

  return (
    <>
      <Top />
      <div className="relative top-0 z-30 w-full px-30 -mt-72 shadow-lg">
        <div className="card flex flex-col min-h-screen">
          <div className="card-header py-5 px-4 border-b border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <h3 className="text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right">
                اطلاعات پریا دهقان
              </h3>
              <div className="flex flex-col md:flex-row items-center ">
                <div className="flex items-center">
                  <div className="tooltip mx-1">
                    <Link to={`/members/details/${id}`}>
                      <Person />
                    </Link>
                    <span className="tooltiptext">مشاهده کاربر</span>
                  </div>
                  <div className="tooltip mx-1">
                    <Link to={`/members/chart/${id}`}>
                      <Graph />
                    </Link>
                    <span className="tooltiptext">مشاهده چارت</span>
                  </div>
                  <div className="tooltip mx-1">
                    <Link to={`/members/access/${id}`}>
                      <Edit />
                    </Link>

                    <span className="tooltiptext">دسترسی ها</span>
                  </div>
                  <div className="tooltip mx-1">
                    <Link to="/members/transactions">
                      <Card />
                    </Link>
                    <span className="tooltiptext">تراکنش ها</span>
                  </div>
                  <div className="tooltip mx-1">
                    <Trash />
                    <span className="tooltiptext">غیرفعال</span>
                  </div>
                </div>

                <Link to={`members/${id}/families`}>
                  <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 my-2 px-3 text-xs rounded">
                    بازگشت به لیست
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative lg:flex xl:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1">
              <table className="md:w-11/12">
                <thead className="text-sm bg-gray-300">
                  <tr>
                    <th className="whitespace-nowrap px-4 border border-gray-300">
                      نام و نام خانوادگی
                    </th>
                    <th className="whitespace-nowrap px-4 border border-gray-300 ">
                      کد ملی
                    </th>
                    <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                      نام پدر
                    </th>
                    <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                      وضعیت تاهل
                    </th>
                    <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                      تاریخ تولد
                    </th>

                    <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                      جنسیت
                    </th>
                    <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                      بارداری
                    </th>
                    <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                      قد
                    </th>
                    <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                      وزن
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-emerald-200 text-center text-sm">
                    <td className="pl-1 py-2 border border-gray-300">
                      {subset?.name || ""} {subset?.family_name || ""}
                    </td>
                    <td className="pl-1 py-2 border border-gray-300">
                      {subset?.national_code || "-"}
                    </td>
                    <td className="pl-1 py-2 border border-gray-300">
                      {subset?.father_name || "-"}
                    </td>
                    <td className="pl-1 py-2 border border-gray-300">
                      {subset?.is_married ? "متاهل" : "مجرد"}
                    </td>
                    <td className="pl-1 py-2 border border-gray-300">
                      {(subset?.birthday &&
                        moment(subset?.birthday, "YYYY-MM-DD")
                          .endOf("jMonth")
                          .format("jYYYY/jM/jD")) ||
                        "-"}
                    </td>

                    <td className="pl-1 py-2 border border-gray-300">
                      {subset?.gender ? "آقا" : "خانم"}
                    </td>
                    <td className="pl-1 py-2 border border-gray-300">
                      {subset?.is_pregnant ? "بله" : "خیر"}
                    </td>
                    <td className="pl-1 py-2 border border-gray-300">
                      {subset?.height}
                    </td>
                    <td className="pl-1 py-2 border border-gray-300">
                      {subset?.weight}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="relative md:flex justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1">
              <table className="md:w-11/12">
                <thead className="text-sm bg-gray-300">
                  <tr>
                    <th className="whitespace-nowrap px-4  border border-gray-300 text-center ">
                      شماره همراه
                    </th>
                    <th className="whitespace-nowrap px-4  border border-gray-300 text-center py-2">
                      تلفن ثابت
                    </th>
                    <th className="whitespace-nowrap px-4  border border-gray-300 text-center py-2">
                      استان
                    </th>
                    <th className="whitespace-nowrap px-4  border border-gray-300 text-center py-2">
                      شهر
                    </th>
                    <th className="whitespace-nowrap px-4  border border-gray-300 text-center py-2">
                      کد پستی
                    </th>
                    <th className="whitespace-nowrap px-4  border border-gray-300 text-center py-2">
                      آدرس
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-emerald-200 text-sm">
                    <td className="pl-1 text-center border border-gray-300">
                      {subset?.cellphone_number || "-"}
                    </td>
                    <td className="pl-1 text-center border border-gray-300">
                      {subset?.phone_number || "-"}
                    </td>
                    <td className="pl-1 text-center border border-gray-300">
                      {subset?.province || "-"}
                    </td>
                    <td className="pl-1 text-center border border-gray-300">
                      {subset?.city || "-"}
                    </td>
                    <td className="pl-1 text-center border border-gray-300">
                      {subset?.postcode}
                    </td>
                    <td className="pl-1 text-center border border-gray-300">
                      {subset?.address || "-"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="my-10 ">
              <h3 className="text-lg mr-2">اسکن مدارک</h3>
              <hr />
              <form className="flex flex-col items-center mt-10 space-y-5">
                <label
                  for="id_card"
                  className="w-3/4 border text-center p-2 rounded cursor-pointer shadow-md hover:shadow-lg"
                >
                  تصویر کارت ملی<span>{id_card && ` : ${id_card}`}</span>
                </label>
                <input
                  id="id_card"
                  type="file"
                  name="id_photo"
                  style={{ display: "none" }}
                  onChange={(e) => setId_card(e.target?.files[0]?.name)}
                />

                <label
                  for="certification"
                  className="w-3/4 border text-center p-2 rounded cursor-pointer shadow-md hover:shadow-lg"
                >
                  تصویر صفحه اول شناسنامه
                  <span>{certification && ` : ${certification}`}</span>
                </label>
                <input
                  id="certification"
                  type="file"
                  name="certificate_photo"
                  style={{ display: "none" }}
                  onChange={(e) => setCertification(e.target?.files[0]?.name)}
                />

                <button
                  type="submit"
                  className="mr-auto ml-5 px-4 py-1 rounded-full hover:shadow-lg"
                  style={{ backgroundColor: "#456285" }}
                >
                  ثبت
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
