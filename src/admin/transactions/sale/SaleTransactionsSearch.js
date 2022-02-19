import React, { useCallback, useContext } from "react";
import { ReactComponent as UpArrow } from "../../../shared/icons/arrow-up.svg";
import { ReactComponent as DownArrow } from "../../../shared/icons/arrow-down.svg";
import DatePicker from "shared/controls/DatePicker/DatePickerControl";
import { SaleTransactionsContext } from "admin/transactions/sale/state/SaleTransactionsState";
import InsuranceCategories from "./InsuranceCategories";

const TransactionSaleSearch = React.memo(({ search_submit }) => {
  const {
    startDate,
    endDate,
    insurance_name,
    showCategories,
    dispatch,
    query,
  } = useContext(SaleTransactionsContext);

  /////////////////////////////////
  const searchByQuery = (e) => {
    e.preventDefault();
    if (!query) {
      // toast.info("سرچ باکس خالی می باشد!");
      // return;
      dispatch({ type: "SET_QUERY", payload: undefined });
    }
    search_submit?.();
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
          />
        </form>
      </div>

      <div className="flex justify-evenly flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center md:items-start">
          <label className="text-sm">محصول</label>
          <button
            className="bg-blue-500 hover:bg-blue-700 w-64 md:w-full text-white  py-2 px-5 rounded text-sm flex items-center justify-center"
            onClick={() => {
              dispatch({ type: "TOGGLE_CATEGORIES" });
            }}
          >
            {insurance_name}
            {showCategories ? <UpArrow /> : <DownArrow />}
          </button>
        </div>

        <div className="custom_form mb-2 flex flex-col lg:flex-row items-center mt-5 md:mt-0 gap-2">
          <DatePicker
            className="shadow border-0 p-1 rounded"
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
            className="shadow  border-0 p-1 rounded"
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
          <div className="mx-2 md:mt-auto mt-2">
            <button
              onClick={search_submit}
              className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
            >
              ثبت
            </button>
          </div>
        </div>
      </div>

      <InsuranceCategories
        onClick={() => dispatch({ type: "TOGGLE_CATEGORIES" })}
      />
    </>
  );
});

export default TransactionSaleSearch;
