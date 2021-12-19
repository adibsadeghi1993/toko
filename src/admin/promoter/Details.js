import React, { useContext, useState } from "react";
import Top from "./Top";
import { ReactComponent as Person2 } from "../../shared/icons/person2.svg";

import { Link, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { MemmberContext } from "./state/State";
import DetailsRow from "./controls/DetailsRow";
import HeaderDetails from "./panels/HeaderDetails";

export default React.memo(() => {
  const [id_card, setId_card] = useState("");
  const [certification, setCertification] = useState("");
  const [card, setCard] = useState("");
  const [personal_photo, setPersonal_photo] = useState("");
  const [shaba_number, setShaba_number] = useState("");
  const { id } = useParams();

  const { getDetailsUser, details_user } = useContext(MemmberContext);

  useEffect(() => {
    !!getDetailsUser && getDetailsUser(id);
  }, [getDetailsUser, id]);
  const handleclick = () => {
    // if (window.confirm("آیا برای غیر فعال کردن کابر مطمئن هستید؟"))
  };

  return (
    <>
      <Top />

      <div className="relative top-0 z-30 w-full px-30 -mt-72 shadow-lg">
        <div className="card flex flex-col min-h-screen">
          <div className="card-header py-5 px-4 border-b border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <h3 className="text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right">
                اطلاعات کاربر
              </h3>
              <HeaderDetails />
            </div>
          </div>
          <div className="relative xl:flex xl:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1">
            <table className="md:w-11/12">
              <thead className="text-sm bg-gray-300">
                <tr>
                  <th className="whitespace-nowrap px-4 ">
                    نام و نام خانوادگی
                  </th>
                  <th className="whitespace-nowrap px-4  lg:text-right ">
                    کد ملی
                  </th>
                  <th className="whitespace-nowrap px-4  lg:text-right py-2">
                    نام پدر
                  </th>
                  <th className="whitespace-nowrap px-4  lg:text-right py-2">
                    وضعیت تاهل
                  </th>
                  <th className="whitespace-nowrap px-4  lg:text-right py-2">
                    تاریخ تولد
                  </th>
                  <th className="whitespace-nowrap px-4  lg:text-right py-2">
                    نام کاربری
                  </th>
                  <th className="whitespace-nowrap px-4  lg:text-right py-2">
                    تحصیلات
                  </th>
                  <th className="whitespace-nowrap px-4  lg:text-right py-2">
                    جنسیت
                  </th>
                  <th className="whitespace-nowrap px-4  lg:text-right py-2">
                    بارداری
                  </th>
                  <th className="whitespace-nowrap px-4  lg:text-right py-2">
                    قد
                  </th>
                  <th className="whitespace-nowrap px-4  lg:text-right py-2">
                    وزن
                  </th>
                  <th className="whitespace-nowrap px-4  lg:text-right py-2">
                    شماره شبا
                  </th>
                  <th className="whitespace-nowrap px-4  lg:text-right py-2">
                    ایمیل
                  </th>
                </tr>
              </thead>
              <tbody>
                {!!details_user && <DetailsRow item={details_user} />}
              </tbody>
            </table>
          </div>
          <div className="relative md:flex md:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1">
            <table className="md:w-11/12">
              <thead className="text-sm bg-gray-300">
                <tr>
                  <th className="whitespace-nowrap px-4 ">وضعیت نظام وظیفه</th>
                  <th className="whitespace-nowrap px-4  lg:text-right ">
                    شماره همراه
                  </th>
                  <th className="whitespace-nowrap px-4  lg:text-right py-2">
                    شماره همراه ۲
                  </th>
                  <th className="whitespace-nowrap px-4  lg:text-right py-2">
                    تلفن ثابت
                  </th>
                  <th className="whitespace-nowrap px-4  lg:text-right py-2">
                    نحوه آشنایی با توکو
                  </th>
                  <th className="whitespace-nowrap px-4  lg:text-right py-2">
                    استان
                  </th>
                  <th className="whitespace-nowrap px-4  lg:text-right py-2">
                    شهر
                  </th>
                  <th className="whitespace-nowrap px-4  lg:text-right py-2">
                    کد پستی
                  </th>
                  <th className="whitespace-nowrap px-4  lg:text-right py-2">
                    آدرس
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-emerald-200 text-center text-sm ">
                  <td className="py-2">تست</td>
                  <td className="py-2">09120000000</td>
                  <td className="py-2">09120000001</td>
                  <td className="py-2">444444</td>
                  <td className="py-2">تست</td>
                  <td className="py-2">تست</td>
                  <td className="py-2">تست</td>
                  <td className="py-2">12345678</td>
                  <td className="py-2">تست</td>
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

              <label
                for="card"
                className="w-3/4 border text-center p-2 rounded cursor-pointer shadow-md hover:shadow-lg"
              >
                تصویر کارت پایان خدمت/معافیت/کارت دانشجویی
                <span>{card && ` : ${card}`}</span>
              </label>
              <input
                id="card"
                type="file"
                name="card_photo"
                style={{ display: "none" }}
                onChange={(e) => setCard(e.target?.files[0]?.name)}
              />

              <label
                for="personal_photo"
                className="w-3/4 border text-center p-2 rounded cursor-pointer shadow-md hover:shadow-lg"
              >
                تصویر عکس پرسنلی
                <span>{personal_photo && ` : ${personal_photo}`}</span>
              </label>
              <input
                id="personal_photo"
                type="file"
                name="personal_photo"
                style={{ display: "none" }}
                onChange={(e) => setPersonal_photo(e.target?.files[0]?.name)}
              />

              <label
                for="shaba_number"
                className="w-3/4 border text-center p-2 rounded cursor-pointer shadow-md hover:shadow-lg"
              >
                دفترچه بانکی صفحه شماره شبا
                <span>{shaba_number && ` : ${shaba_number}`}</span>
              </label>
              <input
                id="shaba_number"
                type="file"
                name="shaba_number"
                style={{ display: "none" }}
                onChange={(e) => setShaba_number(e.target?.files[0]?.name)}
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
    </>
  );
});
