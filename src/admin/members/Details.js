import React, { useContext, useEffect } from "react";
import Top from "./Top";
import { useParams } from "react-router-dom";

import { MemmberContext } from "./state/State";
import DetailsRowTableOne from "./controls/DetailsRowTableOne";
import HeaderDetails from "./panels/HeaderDetails";
import DetailsRowTableTwo from "./controls/DetailsRowTableTwo";
import DetailsRowTableThree from "./controls/DetailsRowTableThree";
import DetailsRowTableFour from "./controls/DetailsRowTableFour";

export default React.memo(() => {
  const { id } = useParams();
  // city

  const { getDetailsUser, details_user, updateUser } =
    useContext(MemmberContext);

  useEffect(() => {
    getDetailsUser?.(id);
  }, [getDetailsUser, id]);

  const update = () => {
    updateUser?.(id);
  };

  return (
    <>
      <Top />
      <div className="relative top-0 z-30 w-full px-30 -mt-72 shadow-lg">
        <div className="card flex flex-col min-h-screen">
          <div className="card-header py-5 px-4 border-b border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <h3 className="text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right">
                اطلاعات کاربر {details_user?.family_name}
              </h3>
              <HeaderDetails />
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="w-full flex justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1">
              <table className="md:w-11/12">
                <thead className="text-sm bg-gray-300">
                  <tr>
                    <th className="whitespace-nowrap px-4 ">نام</th>
                    <th className="whitespace-nowrap px-4 ">نام خانوادگی</th>
                    <th className="whitespace-nowrap px-4  lg:text-right ">
                      کد ملی
                    </th>
                    <th className="whitespace-nowrap px-4  lg:text-right py-2">
                      نام پدر
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
                  </tr>
                </thead>
                <tbody>
                  {!!details_user && <DetailsRowTableOne item={details_user} />}
                </tbody>
              </table>
            </div>

            {/* table-2 split */}
            <div className=" w-full flex justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1">
              <table className="md:w-11/12">
                <thead className="text-sm bg-gray-300">
                  <tr>
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
                  {!!details_user && <DetailsRowTableTwo item={details_user} />}
                </tbody>
              </table>
            </div>

            <div className="flex w-full justify-center mt-5 p-1">
              <table className="md:w-11/12">
                <thead className="text-sm bg-gray-300">
                  <tr>
                    <th className="whitespace-nowrap px-4 ">
                      وضعیت نظام وظیفه
                    </th>
                    <th className="whitespace-nowrap px-4  lg:text-right ">
                      شماره همراه
                    </th>
                    {/* <th className="whitespace-nowrap px-4  lg:text-right py-2">
                    شماره همراه ۲
                  </th> */}
                    <th className="whitespace-nowrap px-4  lg:text-right py-2">
                      تلفن ثابت
                    </th>
                    <th className="whitespace-nowrap px-4  lg:text-right py-2">
                      نحوه آشنایی با توکو
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
                  <DetailsRowTableThree item={details_user} />
                </tbody>
              </table>
            </div>

            <div className="flex w-full justify-center mt-5 p-1">
              <table className="md:w-11/12">
                <thead className="text-sm bg-gray-300">
                  <tr>
                    <th className="whitespace-nowrap px-4  lg:text-right py-2">
                      وضعیت تاهل
                    </th>
                    <th className="whitespace-nowrap px-4  lg:text-right py-2">
                      استان
                    </th>
                    <th className="whitespace-nowrap px-4  lg:text-right py-2">
                      شهر
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {!!details_user && (
                    <DetailsRowTableFour item={details_user} />
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="my-10 ">
            <h3 className="text-lg mr-2">اسکن مدارک</h3>
            <hr />
            <div className="flex flex-col space-y-2 mt-2 mx-32">
              {details_user?.attachments?.length > 0 &&
                details_user?.attachments?.map((item, index) => (
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    download={`${item.attachment_name}.png`}
                    href={`${item.base64}`}
                    className=" items-center w-full text-center rounded py-4 px-2 bg-gray-200 cursor-pointer"
                    key={index}
                  >
                    {item?.attachment_name}
                  </a>
                ))}
            </div>
            <div className="flex mt-4">
              <button
                type="submit"
                className="mr-auto ml-5 px-8 py-2 rounded-full hover:shadow-lg bg-primary-background text-white"
                onClick={() => update()}
                // style={{ backgroundColor: "#456285" }}
              >
                ثبت
              </button>
            </div>
            {/* <div className="flex flex-col items-center mt-10 space-y-5">
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
                className="mr-auto ml-5 px-4 py-1 rounded-full hover:shadow-lg bg-primary-background text-white"
                onClick={() => update()}
                // style={{ backgroundColor: "#456285" }}
              >
                ثبت
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
});
