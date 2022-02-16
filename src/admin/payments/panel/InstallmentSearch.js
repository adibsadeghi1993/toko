import React, { useContext, useEffect, useState, useCallback } from "react";
import { useHistory, useLocation } from "react-router";
import { ReactComponent as UpArrow } from "../../../shared/icons/arrow-up.svg";
import { ReactComponent as DownArrow } from "../../../shared/icons/arrow-down.svg";
import DatePicker from "shared/controls/DatePicker/DatePickerControl";
import { InstallmentContext } from "../state/InstallmentState";
import InsuranceCategories from "./InsuranceCategories";
import InsuranceStatuses from "./InsuranceStatuses";

const InstallmentSearch = React.memo(
  ({
    toggle1,
    settoggle1,
    toggle2,
    settoggle2,
    insuranceCategories,
    searchHandler,
  }) => {
    const {
      query,
      showInsurance,
      insuranceName,
      startDate,
      endDate,
      statusName,
      showStatus,
      dispatch,
    } = useContext(InstallmentContext);

    const [mobile, setmobile] = useState(false);

    // const history = useHistory();
    // const location = useLocation();

    const handleResize = () => {
      if (window.innerWidth < 700) {
        setmobile(true);
      } else {
        setmobile(false);
      }
    };

    useEffect(() => {
      window.addEventListener("resize", handleResize);
      handleResize();
    }, []);

    // const onSearch = () => {
    //   const params = new URLSearchParams(location.search);
    //   if (params.has("q")) {
    //     params.delete("q");
    //   }
    //   if (!search) {
    //     toast.info("سرچ باکس خالی می باشد!");
    //     return;
    //   }
    //   if (search) {
    //     params.append("q", search);
    //   }
    //   history.replace({
    //     pathname: location.pathname,
    //     search: params.toString(),
    //   });
    //   getPayments?.({
    //     page: DEFAULT_PAGE_NUMBER,
    //     row: DEFAULT_ROW,
    //     q: search,
    //   });
    // };

    return (
      <>
        <div className="p-1 max-w-lg mx-auto">
          <div className="flex-col md:flex-row flex space-y-2 md:space-y-0 mx-3  items-center justify-center p-1 m-1 ">
            <input
              type="text"
              className="w-full flex-auto p-1 md:rounded-l-none border border-blue-200 rounded focus:outline-none"
              autoComplete="off"
              placeholder="نام و نام خانوادگی , شماره تماس , کد ملی , ایمیل"
              value={query}
              onChange={(e) =>
                dispatch({ type: "SET_QUERY", payload: e.target.value })
              }
            />
            <input
              type="submit"
              className="p-2 mr-2 cursor-pointer rounded bg-gray-100 shadow hover:shadow-lg w-full md:w-32 search_button"
              value="جست و جو کن"
              id="button-addon1"
              onClick={() => searchHandler()}
            />
          </div>
        </div>

        <div className="flex justify-between px-6 items-center flex-col md:flex-row max-w-lg ">
          <div className="flex gap-x-6">
            <div className="flex flex-col justify-center items-center md:items-start">
              <label className="text-sm">محصول</label>
              <button
                className="bg-blue-500 hover:bg-blue-700 w-64 md:w-full text-white  py-2 px-5 rounded text-sm flex items-center justify-center"
                onClick={() => {
                  dispatch({
                    type: "TOGGLE_SHOW_INSURANCE",
                    payload: !showInsurance,
                  });
                  dispatch({ type: "TOGGLE_SHOW_STATUS", payload: false });
                }}
              >
                {insuranceName}
                {showInsurance ? <UpArrow /> : <DownArrow />}
              </button>
              {mobile && (
                <InsuranceCategories
                  settoggle1={settoggle1}
                  insuranceCategories={insuranceCategories}
                  mobile={mobile}
                />
              )}
            </div>

            <div className="flex flex-col justify-center items-center md:items-start'">
              <label className="text-sm md:ml-auto">وضعیت</label>
              <button
                className="bg-blue-500 hover:bg-blue-700 w-64 md:w-full text-white py-2 px-5 rounded text-sm flex items-center justify-center"
                onClick={() => {
                  dispatch({
                    type: "TOGGLE_SHOW_STATUS",
                    payload: !showStatus,
                  });
                  dispatch({ type: "TOGGLE_SHOW_INSURANCE", payload: false });
                }}
              >
                {statusName}
                {showStatus ? <UpArrow /> : <DownArrow />}{" "}
              </button>
              {mobile && (
                <InsuranceStatuses settoggle2={settoggle2} mobile={mobile} />
              )}
            </div>
          </div>

          <div className="flex gap-x-6">
            <div className="flex justify-end items-center gap-x-2">
              <DatePicker
                DatePickerInput
                dateInput
                date={startDate}
                placeholder="از تاریخ"
                onChange={useCallback(
                  (e) => {
                    // console.log("e data", e);
                    dispatch({
                      type: "SET_START_DATE",
                      payload: e.target.value,
                    });
                  },
                  [dispatch]
                )}
              />
              <DatePicker
                DatePickerInput
                dateInput
                date={endDate}
                placeholder="تا تاریخ"
                onChange={useCallback(
                  (e) => {
                    dispatch({ type: "SET_END_DATE", payload: e.target.value });
                  },
                  [dispatch]
                )}
              />
              <div className="mx-2 md:mt-auto mt-2">
                <button
                  onClick={() => searchHandler()}
                  className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                >
                  ثبت
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
);

export default InstallmentSearch;
