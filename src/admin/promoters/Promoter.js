import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { BoxLoader } from "shared/controls/Loader";
import MemmberRoles from "./controls/MemmberRoles";
import MemmberTableRow from "./controls/MemmberTableRow";
import { PromotersContext } from "./state/State";
import Top from "./Top";

const buttons = [
  { name: "همه" },
  { name: "کاربرنهایی" },
  { name: "شبکه فروش" },
  { name: "نویسنده" },
  { name: "ادمین بازاریاب" },
  { name: "کارمند دفتری" },
  { name: "مدیر آموزش و توسعه" },
  { name: "ادمین" },
  { name: "یوزرهای غیرفعال" },
];

const sample_data = [
  {
    name: "پریا دهقان",
    position: "شبکه فروش",
    date: "۱۴۰۰/۰۹/۰۷",
    status: "فعال",
    phone: "9106669008",
  },
  {
    name: "پریا دهقان",
    position: "شبکه فروش",
    date: "۱۴۰۰/۰۹/۰۷",
    status: "فعال",
    phone: "9106669008",
  },
  {
    name: "پریا دهقان",
    position: "شبکه فروش",
    date: "۱۴۰۰/۰۹/۰۷",
    status: "فعال",
    phone: "9106669008",
  },
];

export default React.memo(() => {
  const { getRoles, roles, getMemmbers, memmbers, loading, role_id, dispatch } =
    useContext(PromotersContext);

  useEffect(() => {
    !!getRoles && getRoles();
  }, [getRoles, dispatch]);

  useEffect(() => {
    !!getMemmbers && getMemmbers(1, 10);
  }, [getMemmbers, dispatch]);

  return (
    <>
      <BoxLoader loading={!!loading} />
      <Top />
      <div className="relative top-0 z-30 w-full px-30 -mt-72 shadow-lg">
        <div className="card flex flex-col min-h-screen">
          <div className="card-header py-5 px-4 border-b border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <h3 className="text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right">
                لیست کاربران
              </h3>
              <Link to="/members/maincharts">
                <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-3 text-xs rounded">
                  فلوچارت زیر مجموعه ها
                </button>
              </Link>
            </div>
          </div>
          <div>
            <div className="p-5 flex">
              <input className=" border border-gray-200  py-3 px-3 w-full focus:outline-none focus:border-blue-500 rounded-r-md " />
              <button className="whitespace-nowrap flex-none border-2 text-sm font-bold border-gray-400 text-blue-700 px-5 py-3 rounded-l hover:shadow-lg hover:text-black">
                جست و جو کن
              </button>
            </div>

            <div className="relative md:flex md:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto">
              <table className="md:w-11/12">
                <thead className="text-sm bg-gray-300">
                  <tr>
                    <th className="whitespace-nowrap px-4 py-2 w-36">
                      نام کاربر
                    </th>
                    <th className="whitespace-nowrap px-4  lg:text-right ">
                      تاریخ ثبت نام
                    </th>
                    <th className="whitespace-nowrap px-4  lg:text-right py-2">
                      وضعیت
                    </th>
                    <th className="whitespace-nowrap px-4  lg:text-right py-2">
                      شماره همراه
                    </th>
                    <th className="whitespace-nowrap px-4  lg:text-right py-2">
                      نوار دستور
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {!!memmbers &&
                    memmbers?.result?.map((item, index) => (
                      <MemmberTableRow key={index} item={item} />
                    ))}
                </tbody>
              </table>
            </div>
            <div className="mt-20 mb-5 text-sm">
              <ul className="flex flex-row cursor-pointer justify-center">
                <li>
                  <span className="py-1 px-3  activated text-blue-500 border rounded-r">
                    1
                  </span>
                </li>
                <li>
                  <span className="py-1 px-3 hover:bg-blue-100  text-blue-500 border">
                    2
                  </span>
                </li>
                <li>
                  <span className="py-1 px-3 hover:bg-blue-100  text-blue-500 border">
                    3
                  </span>
                </li>
                <li>
                  <span className="py-1 px-3 hover:bg-blue-100  text-blue-500 border">
                    4
                  </span>
                </li>
                <li>
                  <span className="py-1 px-3 hover:bg-blue-100  text-blue-500 border">
                    5
                  </span>
                </li>
                <li>
                  <span className="py-1 px-3 hover:bg-blue-100 hidden lg:inline text-blue-500 border">
                    6
                  </span>
                </li>
                <li>
                  <span className="py-1 px-3 hover:bg-blue-100 hidden lg:inline text-blue-500 border">
                    7
                  </span>
                </li>
                <li>
                  <span className="py-1 px-3 hover:bg-blue-100 hidden lg:inline text-blue-500 border">
                    8
                  </span>
                </li>
                <li>
                  <span className="py-1 px-3 hover:bg-blue-100 hidden lg:inline text-blue-500 border">
                    9
                  </span>
                </li>
                <li>
                  <span className="py-1 px-3 hover:bg-blue-100 hidden lg:inline text-blue-500 border">
                    10
                  </span>
                </li>
                <li>
                  <span className="py-1 px-3 hover:bg-blue-100  text-blue-500 border">
                    ...
                  </span>
                </li>
                <li>
                  <span className="py-1 px-3 hover:bg-blue-100  text-blue-500 border">
                    &#62;
                  </span>
                </li>
                <li>
                  <span className="py-1 px-3 hover:bg-blue-100  text-blue-500 border">
                    &#62; &#62;
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
