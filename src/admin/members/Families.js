import React, { useContext, useEffect, useState } from "react";
import Top from "./Top";
import { ReactComponent as Person2 } from "../../shared/icons/person2.svg";
import { ReactComponent as Person } from "../../shared/icons/person.svg";
import { ReactComponent as Graph } from "../../shared/icons/chart.svg";
import { ReactComponent as Card } from "../../shared/icons/card.svg";
import { ReactComponent as Trash } from "../../shared/icons/trash.svg";
import { ReactComponent as Edit } from "../../shared/icons/edit.svg";
import { Link, useHistory, useParams } from "react-router-dom";
import { MemmberContext } from "./state/State";

const sample_data = [];
export default React.memo(() => {
  const { getSubsetInfo, subset_info } = useContext(MemmberContext);

  const [user, setUser] = useState(<Trash />);

  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    !!getSubsetInfo && !!id && getSubsetInfo({ tooko_user: id });
  }, [id, getSubsetInfo]);

  const handleclick = () => {
    if (window.confirm("آیا برای غیر فعال کردن کابر مطمئن هستید؟"))
      setUser(<Person2 />);
  };
  return (
    <>
      <Top />

      <div className="relative top-0 z-30 w-full px-30 -mt-72 shadow-lg">
        <div className="card flex flex-col min-h-screen">
          <div className="card-header py-5 px-4 border-b border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <h3 className="text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right">
                خانواده من
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
                  <div className="tooltip mx-1" onClick={handleclick}>
                    {user}
                    <span className="tooltiptext">غیرفعال</span>
                  </div>
                </div>

                <Link to={`/members/details/${id}`}>
                  <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 my-2 px-3 text-xs rounded">
                    بازگشت به لیست
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative lg:flex lg:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1">
            <table className="md:w-11/12">
              <thead className="text-sm bg-gray-200">
                <tr>
                  <th className="whitespace-nowrap px-4 border border-gray-300 ">
                    نام و نام خانوادگی
                  </th>
                  <th className="whitespace-nowrap px-4 border border-gray-300 ">
                    نسبت
                  </th>
                  <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                    کد ملی
                  </th>
                  <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                    شماره همراه
                  </th>
                  <th className="whitespace-nowrap px-4 border border-gray-300 py-2">
                    تلفن ثابت
                  </th>
                </tr>
              </thead>
              <tbody>
                {subset_info?.map((user, index) => (
                  <tr
                    onClick={() =>
                      history.push(`/members/${id || 0}/family/${user.id}`)
                    }
                    className="bg-emerald-200 text-sm my-2 hover:text-blue-500 cursor-pointer"
                    key={index}
                  >
                    <td className="text-center border border-gray-300 p-2">
                      {user?.full_name || "-"}
                    </td>
                    <td className="text-center border border-gray-300 p-2">
                      {user?.relationship || "-"}
                    </td>
                    <td className="text-center border border-gray-300 p-2">
                      {user?.national_code || "-"}
                    </td>
                    <td className="text-center border border-gray-300 p-2">
                      {user?.phone_number || "-"}
                    </td>
                    <td className="text-center border border-gray-300 p-2">
                      {user?.cellphone_number || "-"}
                    </td>
                  </tr>
                ))}
                {!subset_info && (
                  <tr>
                    <td colSpan={6}>
                      <span className="text-center flex justify-center py-4">
                        دیتایی جهت نمایش وجود ندارد!
                      </span>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
});
