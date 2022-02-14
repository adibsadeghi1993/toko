import React, { useEffect, useState, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ReactComponent as UpArrow } from "../../../shared/icons/arrow-up.svg";
import { ReactComponent as DownArrow } from "../../../shared/icons/arrow-down.svg";
import DatePicker from "shared/controls/DatePicker/DatePickerControl";
import { useSaleTransactions } from "admin/transactions/sale/state/State";
import InsuranceCategories from "./InsuranceCategories";
import { toast } from "react-toastify";

const TransactionSaleSearch = React.memo(() => {
  const {
    startDate,
    endDate,
    transactionsSearch,
    page,
    insuranceCategories,
    query,
    showCategories,
    dispatch,
  } = useSaleTransactions();

  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    transactionsSearch(startDate, endDate, page, insuranceCategories, query);
  }, [
    query,
    page,
    insuranceCategories,
    startDate,
    endDate,
    transactionsSearch,
  ]);
  // console.log("startDate", startDate);
  // console.log("endDate", endDate);

  // const [mobile, setmobile] = useState(false);

  // const handleResize = () => {
  //   if (window.innerWidth < 700) {
  //     setmobile(true);
  //   } else {
  //     setmobile(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   handleResize();
  // }, []);

  // const SubmitHandle = (e) => {
  //   e.preventDefault();
  //   if (name) {
  //     dispatch({ type: "SET_SEARCH_QUERY", payload: name });
  //     // dispatch({ type: "set_number", payload: name });
  //   } else {
  //     dispatch({ type: "SET_SEARCH_QUERY", payload: undefined });
  //     // dispatch({ type: "set_number", payload: '' });
  //   }
  // };

  // const timehandler = (e) => {
  //   e.preventDefault();
  //   dispatch({ type: "set_FromTime", payload: FromTime });
  //   dispatch({ type: "set_ToTime", payload: ToTime });
  // };

  /////////////////////////////////
  const searchByQuery = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(location.search);
    if (params.has("q")) params.delete("q");

    if (!searchQuery) {
      toast.info("سرچ باکس خالی می باشد!");
      return;
    }

    if (searchQuery) {
      params.append("q", searchQuery);
      dispatch({ type: "SET_QUERY", payload: searchQuery });
    }

    history.replace({
      pathname: location.pathname,
      search: params.toString,
    });

    // transactionsSearch?.({
    //   page: DEFAULT_PAGE_NUMBER,
    //   row: DEFAULT_ROW,
    //   query: searchQuery,
    // });
  };

  const calcDate = (date) => {
    return new Date(date)
      .toLocaleDateString("en-CA")
      .split("/")
      .reverse()
      .join("-");
  };

  const searchByDate = () => {
    // getSalesSearch?.({
    //   product_category_id: insurance || undefined,
    //   status_id: status_id || undefined,
    //   page: DEFAULT_PAGE_NUMBER,
    //   sold_on_before:
    //     date_end &&
    //     new Date(date_end)
    //       .toLocaleDateString("en-CA") // TODO: for improvment change to moment js
    //       .split("/")
    //       .reverse()
    //       .join("-"),
    //   sold_on_after:
    //     date_start &&
    //     new Date(date_start)
    //       .toLocaleDateString("en-CA") // TODO: for improvment change to moment js
    //       .split("/")
    //       .reverse()
    //       .join("-"),
    //   row: DEFAULT_ROW,
    // });
  };

  return (
    <>
      <div className="p-1">
        <form
          className="flex-col md:flex-row flex space-y-2 md:space-y-0 mx-3  items-center justify-center p-1 m-1 "
          onSubmit={searchByQuery}
        >
          <input
            type="text"
            className="w-full flex-auto p-1 md:rounded-l-none border border-blue-200 rounded focus:outline-none"
            autoComplete="off"
            placeholder="نام و نام خانوادگی , شماره تماس , کد ملی , ایمیل"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <input
            type="submit"
            className="p-2 mr-2 cursor-pointer rounded bg-gray-100 shadow hover:shadow-lg w-full md:w-32 search_button"
            value="جست و جو کن"
            id="button-addon1"
          />
        </form>
      </div>

      <div className="flex justify-evenly flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center md:items-start">
          <label className="text-sm">محصول</label>
          <button
            className="bg-blue-500 hover:bg-blue-700 w-64 md:w-full text-white  py-2 px-5 rounded text-sm flex items-center justify-center"
            onClick={() => {
              // settoggle1(!toggle1);
              // dispatch({
              //   type: "set_insurance_show",
              //   payload: !insurance_show,
              // });
              dispatch({ type: "TOGGLE_CATEGORIES" });
              // setShowCategories(!showCategories);
              // dispatch({ type: "set_search_name", payload: "" });
              // dispatch({ type: "set_number", payload: "" });
              // dispatch({ type: "set_insurance_name", payload: "همه" });
            }}
          >
            {showCategories ? <UpArrow /> : <DownArrow />}
          </button>
        </div>

        <form
          className="custom_form mb-2 flex flex-col lg:flex-row items-center mt-5 md:mt-0"
          // onSubmit={timehandler}
        >
          <DatePicker
            className="shadow border-0 p-1 rounded mx-2"
            DatePickerInput
            dateInput
            date={startDate}
            placeholder="از تاریخ"
            onChange={useCallback(
              (e) => {
                dispatch({
                  type: "SET_START_DATE",
                  payload: e.target.value,
                });
              },
              [dispatch]
            )}
          />
          <DatePicker
            className="shadow mx-auto border-0 p-1 rounded mx-2"
            DatePickerInput
            dateInput
            date={endDate}
            placeholder="تا تاریخ"
            onChange={useCallback(
              (e) => {
                dispatch({
                  type: "SET_END_DATE",
                  payload: e.target.value,
                });
              },
              [dispatch]
            )}
          />
          {/* <DatePicker
            label="از تاریخ"
            className="shadow border-0 p-1 rounded mx-2"
            timePicker={false}
            onClickSubmitButton={({ value }) => setFromTime(value)}
          />
          <DatePicker
            label="تا تاریخ"
            className="shadow mx-auto border-0 p-1 rounded mx-2"
            timePicker={false}
            onClickSubmitButton={({ value }) => setToTime(value)}
          /> */}
          <div className="mx-2 md:mt-auto mt-2">
            <button
              className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
              // onClick={() =>
              //   getTransactionsSearch(
              //     startDate,
              //     endDate,
              //     page,
              //     insuranceCategory,
              //     query
              //   )
              // }
            >
              ثبت
            </button>
          </div>
        </form>
      </div>

      {/* <div>
        {showCategories &&
          insuranceCategories.map((insurance) => (
            <button className="bg-blue-500 hover:bg-blue-700 w-64 md:w-full text-white  py-2 px-5 rounded text-sm flex items-center justify-center">
              {insurance}
            </button>
          ))}
      </div> */}
      <InsuranceCategories
        // settoggle1={settoggle1}
        // product_categories={product_categories}
        // mobile={mobile}
        onClick={() => dispatch({ type: "TOGGLE_CATEGORIES" })}
      />
    </>
  );
});

export default TransactionSaleSearch;
