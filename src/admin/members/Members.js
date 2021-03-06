import Pagination from "admin/blog/panel/Pagination";
import { DEFAULT_PAGE_NUMBER, DEFAULT_ROW } from "config/constant";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useCallback } from "react/cjs/react.development";
import { BoxLoader } from "shared/controls/Loader";
import MemmberRoles from "./controls/MemmberRoles";
import MemmberTableRow from "./controls/MemmberTableRow";
import { MemmberContext } from "./state/State";
import Top from "./Top";

export default React.memo(() => {
  const {
    getRoles,
    roles,
    getMemmbers,
    memmbers,
    search,
    loading,
    role_id,
    getSearchMember,
    dispatch,
  } = useContext(MemmberContext);
  const [page_number, setPageNumber] = useState(DEFAULT_PAGE_NUMBER);

  useEffect(() => {
    !!getRoles && getRoles();
  }, [getRoles, dispatch]);

  useEffect(() => {
    getMemmbers?.(page_number, DEFAULT_ROW, role_id);
  }, [page_number, role_id, getMemmbers]);
  useEffect(() => {
    setPageNumber(DEFAULT_PAGE_NUMBER);
  }, [role_id]);

  const searchClick = () => {
    if (!search) {
      toast.warn("لطفا مقداری برای جستجو وارد کنید!");
      return;
    }
    getSearchMember({ page_number: 1, row: 10, search });
  };
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
                <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-3 text-xs rounded">
                  فلوچارت زیر مجموعه ها
                </button>
              </Link>
            </div>
          </div>
          <div>
            <div className="p-5 flex">
              <input
                onChange={useCallback(
                  (e) => {
                    dispatch({ type: "SET_SEARCH", payload: e.target.value });
                  },
                  [dispatch]
                )}
                className=" border border-gray-200  py-3 px-3 w-full focus:outline-none focus:border-blue-500 rounded-r-md "
              />
              <button
                onClick={searchClick}
                className="whitespace-nowrap flex-none border-2 text-sm font-bold border-gray-400 text-blue-700 px-5 py-3 rounded-l hover:shadow-lg hover:text-black"
              >
                جست و جو کن
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-center">
              <MemmberRoles roles={roles} />
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
                    memmbers?.result?.length > 0 &&
                    memmbers?.result?.map((item, index) => (
                      <MemmberTableRow key={index} item={item} />
                    ))}
                </tbody>
              </table>
            </div>
            {!!memmbers && memmbers?.count && (
              <div className="py-4">
                <Pagination
                  total={memmbers?.count}
                  setCurrentPage={setPageNumber}
                  currentPage={page_number}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
});
