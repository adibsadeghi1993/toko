import React, { useContext, useEffect, useCallback, useState } from "react";
import { DatePicker } from "jalali-react-datepicker";
import { Link, useParams } from "react-router-dom";

import { ReactComponent as Person } from "../../shared/icons/person.svg";
import { ReactComponent as Graph } from "../../shared/icons/chart.svg";
import { ReactComponent as Card } from "../../shared/icons/card.svg";
import { ReactComponent as Trash } from "../../shared/icons/trash.svg";
import { ReactComponent as Edit } from "../../shared/icons/edit.svg";
import { MemmberContext } from "./state/State";
import Top from "./Top";
import DetailsRowFamilyTwo from "./controls/family/DetailsRowFamilyTwo";

// import moment from "jalali-moment";

export default React.memo(() => {
  const {
    getSubset,
    subset,
    dispatch,
    updateSubset,
  } = useContext(MemmberContext);
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

                <Link to={`/members/${id}/families`}>
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
                      <input
                        className="border-0 p-px rounded"
                        defaultValue={subset?.name}
                        onChange={useCallback(
                          (e) => {
                            dispatch({
                              type: "SET_UPDATE_DETAILS_SUBSET",
                              payload: { key: "name", value: e.target.value },
                            });
                          },
                          [dispatch]
                        )}
                      />
                    </td>
                    <td className="pl-1 py-2 border border-gray-300">
                      {/* {subset?.national_code || "-"} */}
                      <input
                        className="border-0 p-px rounded"
                        defaultValue={subset?.national_code}
                        onChange={useCallback(
                          (e) => {
                            dispatch({
                              type: "SET_UPDATE_DETAILS_SUBSET",
                              payload: {
                                key: "national_code",
                                value: e.target.value,
                              },
                            });
                          },
                          [dispatch]
                        )}
                      />
                    </td>
                    <td className="pl-1 py-2 border border-gray-300">
                      {/* {subset?.father_name || "-"} */}
                      <input
                        className="border-0 p-px rounded"
                        defaultValue={subset?.father_name}
                        onChange={useCallback(
                          (e) => {
                            dispatch({
                              type: "SET_UPDATE_DETAILS_SUBSET",
                              payload: {
                                key: "father_name",
                                value: e.target.value,
                              },
                            });
                          },
                          [dispatch]
                        )}
                      />
                    </td>
                    <td className="pl-1 py-2 border border-gray-300">
                      {/* {subset?.is_married ? "متاهل" : "مجرد"} */}
                      <select
                        onChange={useCallback(
                          (e) => {
                            dispatch({
                              type: "SET_UPDATE_DETAILS_SUBSET",
                              payload: {
                                key: "is_married",
                                value: e.target.value,
                              },
                            });
                          },
                          [dispatch]
                        )}
                        className="w-full shadow mx-auto border p-1 rounded"
                      >
                        <option value={true} selected={subset?.is_married}>
                          مجرد
                        </option>
                        <option value={false} selected={!subset?.is_married}>
                          متاهل
                        </option>
                      </select>
                    </td>
                    <td className="pl-1 py-2 border border-gray-300">
                      {/* {(subset?.birthday &&
                        moment(subset?.birthday, "YYYY-MM-DD")
                          .endOf("jMonth")
                          .format("jYYYY/jM/jD")) ||
                        "-"} */}
                      <DatePicker
                        // label="تا تاریخ"
                        className="shadow mx-auto border-0 p-1 rounded"
                        timePicker={false}
                        value={subset?.birthday || new Date()}
                        onClickSubmitButton={({ value }) =>
                          console.log("value", value._i)
                        }
                        // onClickSubmitButton={useCallback(
                        //   ({ value }) => {
                        //     dispatch({
                        //       type: "SET_UPDATE_DETAILS",
                        //       payload: { key: "birthday", value: value },
                        //     });
                        //   },
                        //   [dispatch]
                        // )}
                      />
                    </td>

                    <td className="pl-1 py-2 border border-gray-300">
                      {/* {subset?.gender ? "آقا" : "خانم"} */}
                      <select
                        onChange={useCallback(
                          (e) => {
                            dispatch({
                              type: "SET_UPDATE_DETAILS_SUBSET",
                              payload: { key: "gender", value: e.target.value },
                            });
                          },
                          [dispatch]
                        )}
                        className="w-full shadow mx-auto border-0 p-1 rounded"
                      >
                        <option value={true} selected={subset?.gender}>
                          آقا
                        </option>
                        <option value={false} selected={!subset?.gender}>
                          خانم
                        </option>
                      </select>
                    </td>
                    <td className="pl-1 py-2 border border-gray-300">
                      {/* {subset?.is_pregnant ? "بله" : "خیر"} */}
                      <select
                        onChange={useCallback(
                          (e) => {
                            dispatch({
                              type: "SET_UPDATE_DETAILS_SUBSET",
                              payload: {
                                key: "is_pregnant",
                                value: e.target.value,
                              },
                            });
                          },
                          [dispatch]
                        )}
                        className="w-full shadow mx-auto border-0 p-1 rounded"
                      >
                        <option value={true} selected={subset?.is_pregnant}>
                          بله
                        </option>
                        <option value={false} selected={!subset?.is_pregnant}>
                          خیر
                        </option>
                      </select>
                    </td>
                    <td className="pl-1 py-2 border border-gray-300">
                      {/* {subset?.height} */}
                      <input
                        className="border-0 p-px rounded"
                        defaultValue={subset?.height}
                        onChange={useCallback(
                          (e) => {
                            dispatch({
                              type: "SET_UPDATE_DETAILS_SUBSET",
                              payload: {
                                key: "height",
                                value: e.target.value,
                              },
                            });
                          },
                          [dispatch]
                        )}
                      />
                    </td>
                    <td className="pl-1 py-2 border border-gray-300">
                      {/* {subset?.weight} */}
                      <input
                        className="border-0 p-px rounded"
                        defaultValue={subset?.weight}
                        onChange={useCallback(
                          (e) => {
                            dispatch({
                              type: "SET_UPDATE_DETAILS_SUBSET",
                              payload: {
                                key: "weight",
                                value: e.target.value,
                              },
                            });
                          },
                          [dispatch]
                        )}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className=" md:flex justify-center mt-5  p-1">
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
                  {!!subset && <DetailsRowFamilyTwo item={subset} />}
                </tbody>
              </table>
            </div>

            <div className="my-10 ">
              <h3 className="text-lg mr-2">اسکن مدارک</h3>
              <hr />
              <div className="flex flex-col space-y-2 mt-2 mx-32">
                {subset?.attachments?.length > 0 &&
                  subset?.attachments?.map((item, index) => (
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
                  onClick={() => updateSubset(family_id, id)}
                >
                  ثبت
                </button>
              </div>
              {/* <form className="flex flex-col items-center mt-10 space-y-5">
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
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
