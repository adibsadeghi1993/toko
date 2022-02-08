import React, { useContext, useEffect, useState, useCallback } from "react";
import { ReactComponent as UpArrow } from "../../../shared/icons/arrow-up.svg";
import { ReactComponent as DownArrow } from "../../../shared/icons/arrow-down.svg";
import DatePicker from "shared/controls/DatePicker/DatePickerControl";
// import Payment_titles from "./ProductFilterBody";
import { PaymentsContext } from "../state/PaymentsState";
import ProductFilterBody from "./ProductFilterBody";
import { DEFAULT_PAGE_NUMBER, DEFAULT_ROW } from "config/constant";

const Table_search = React.memo(({ toggle1, settoggle1, productCategory }) => {
  const {
    insurance_name,
    dispatch,
    insurance_show,
    installment,
    date_start,
    getPayments,
    date_end,
    productCategoryid,
  } = useContext(PaymentsContext);
  const [mobile, setmobile] = useState(false);
  const [name, setname] = useState("");
  const [FromTime, setFromTime] = useState();
  const [ToTime, setToTime] = useState();

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

  const SubmitHandle = (e) => {
    e.preventDefault();
    if (!isNaN(name)) {
      dispatch({ type: "set_search_name", payload: "" });
      dispatch({ type: "set_number", payload: name });
    } else {
      dispatch({ type: "set_search_name", payload: name });
      dispatch({ type: "set_number", payload: "" });
    }
  };

  const timehandler = (e) => {
    e.preventDefault();
    dispatch({ type: "set_FromTime", payload: FromTime });
    dispatch({ type: "set_ToTime", payload: ToTime });
  };

  const filterByDate = () => {
    getPayments?.({
      installment_expected_date_after:
        date_start &&
        new Date(date_start)
          .toLocaleDateString("en-CA") // TODO: for improvment change to moment js
          .split("/")
          .reverse()
          .join("-"),
      installment_expected_date_before:
        date_end &&
        new Date(date_end)
          .toLocaleDateString("en-CA") // TODO: for improvment change to moment js
          .split("/")
          .reverse()
          .join("-"),
      page: DEFAULT_PAGE_NUMBER,
      product_category_id: productCategoryid || undefined,
      row: DEFAULT_ROW,
    });
    // const params = new URLSearchParams(location.search)
    // if (date_start && params.has("date_from")) {
    //   params.delete("date_from")
    // }
    // if (date_end && params.has("date_to")) {
    //   params.delete("date_to")
    // }
    // if (date_start) {
    //   params.append("date_from", new JDate(date_start).getjDateStr("-"))
    // }
    // if (date_end) {
    //   params.append("date_to", new JDate(date_end).getjDateStr("-"))
    // }
    // history.replace({ pathname: location.pathname, search: params.toString() })
  };
  return (
    <>
      <div className="p-1">
        <form
          onSubmit={SubmitHandle}
          className="flex-col md:flex-row flex space-y-2 md:space-y-0 mx-3  items-center justify-center p-1 m-1 "
        >
          <input
            type="text"
            className="w-full flex-auto p-1 md:rounded-l-none border border-blue-200 rounded focus:outline-none"
            autoComplete="off"
            placeholder="نام و نام خانوادگی , شماره تماس , کد ملی , ایمیل"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="submit"
            className="p-2 mr-2 cursor-pointer rounded bg-gray-100 shadow hover:shadow-lg w-full md:w-32 search_button"
            value="جست و جو کن"
            id="button-addon1"
          />
        </form>
      </div>
      <div className="flex justify-between px-6 items-center flex-col md:flex-row max-w-lg mx-auto">
        <div className="flex gap-x-6">
          <div className="flex flex-col justify-center items-center md:items-start">
            <label className="text-sm">محصول</label>
            <button
              className="bg-blue-500 hover:bg-blue-700 w-64 w-full text-white  py-2 px-5 rounded text-sm flex items-center justify-center"
              onClick={() => {
                settoggle1(!toggle1);
                dispatch({
                  type: "set_insurance_show",
                  payload: !insurance_show,
                });

                dispatch({ type: "set_search_name", payload: "" });
                dispatch({ type: "set_number", payload: "" });
                dispatch({ type: "set_insurance_name", payload: "همه" });
              }}
            >
              {insurance_name}
              {toggle1 ? <UpArrow /> : <DownArrow />}
            </button>
            {mobile && (
              <ProductFilterBody
                settoggle1={settoggle1}
                // insurance_list={insurance_list}
                mobile={mobile}
              />
            )}
            <ProductFilterBody
              settoggle1={settoggle1}
              productCategory={productCategory}
            />
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="flex justify-end items-center gap-x-2">
            {/* <form
            className="custom_form mb-2 flex flex-col lg:flex-row items-center mt-5 md:mt-0"
            onSubmit={timehandler}
          > */}
            <DatePicker
              DatePickerInput
              dateInput
              date={date_start}
              placeholder="از تاریخ"
              onChange={useCallback(
                (e) => {
                  console.log("e data", e);
                  dispatch({
                    type: "SET_DATE_START",
                    payload: e.target.value,
                  });
                },
                [dispatch]
              )}
              // onClickSubmitButton={({ value }) => setFromTime(value)}
            />
            <DatePicker
              DatePickerInput
              dateInput
              date={date_end}
              placeholder="تا تاریخ"
              onChange={useCallback(
                (e) => {
                  dispatch({ type: "SET_DATE_END", payload: e.target.value });
                },
                [dispatch]
              )}
            />
            <div className="mx-2 md:mt-auto mt-2">
              <button
                onClick={() => filterByDate()}
                className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
              >
                ثبت
              </button>
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    </>
  );
});

export default Table_search;
