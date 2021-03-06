import React, { useContext, useEffect, useState, useCallback } from "react";
import { useHistory, useLocation } from "react-router";
import DatePicker from "shared/controls/DatePicker/DatePickerControl";
import JDate from "shared/controls/JDate";
import { ReactComponent as UpArrow } from "shared/icons/arrow-up.svg";
import { ReactComponent as DownArrow } from "shared/icons/arrow-down.svg";

import TitlesInsurance from "./Titles/Titles_insurance";
import TitlesStatus from "./Titles/Titles_status";
// import { DatePicker } from "jalali-react-datepicker";
import { SaleContext } from "../state/SaleState";
import { toast } from "react-toastify";
import {
  DEFAULT_PAGE_NUMBER,
  DEFAULT_ROW,
  DEFAULT_VALUE,
} from "config/constant";

const TableSearch = React.memo(
  ({ toggle1, settoggle1, toggle2, settoggle2, insurance_list }) => {
    const {
      insurance_name,
      insurance_status,
      dispatch,
      insurance_show,
      status_show,
      insurance,
      status_id,
      getSalesSearch,
      date_start,
      date_end,
    } = useContext(SaleContext);
    const [mobile, setmobile] = useState(false);
    // const [num, setnum] = useState("");
    const [search, setSearch] = useState("");
    const [FromTime, setFromTime] = useState();
    const [ToTime, setToTime] = useState();
    const history = useHistory();
    const location = useLocation();

    // function onChange(e) {
    //   const re = /^[0-9\b]+$/;
    //   if (e.target.value === "" || re.test(e.target.value)) {
    //     setnum(e.target.value);
    //   }
    // }

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

    const timehandler = (e) => {
      e.preventDefault();
      dispatch({ type: "set_FromTime", payload: FromTime });
      dispatch({ type: "set_ToTime", payload: ToTime });
    };

    const onSearch = () => {
      const params = new URLSearchParams(location.search);
      if (params.has("q")) {
        params.delete("q");
      }
      if (!search) {
        toast.info("?????? ???????? ???????? ???? ????????!");
        return;
      }
      if (search) {
        params.append("q", search);
      }
      history.replace({
        pathname: location.pathname,
        search: params.toString(),
      });
      getSalesSearch?.({
        page: DEFAULT_PAGE_NUMBER,
        row: DEFAULT_ROW,
        q: search,
      });
    };

    const filterByDate = () => {
      getSalesSearch?.({
        product_category_id: insurance || undefined,
        status_id: status_id || undefined,
        page: DEFAULT_PAGE_NUMBER,
        sold_on_before:
          date_end &&
          new Date(date_end)
            .toLocaleDateString("en-CA") // TODO: for improvment change to moment js
            .split("/")
            .reverse()
            .join("-"),
        sold_on_after:
          date_start &&
          new Date(date_start)
            .toLocaleDateString("en-CA") // TODO: for improvment change to moment js
            .split("/")
            .reverse()
            .join("-"),
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
        <div className="p-1 max-w-lg  mx-auto">
          <div className="flex-col md:flex-row flex space-y-2 md:space-y-0 mx-3  items-center justify-center p-1 m-1 ">
            <input
              type="text"
              className="w-full flex-auto p-1 md:rounded-l-none border border-blue-200 rounded focus:outline-none"
              autoComplete="off"
              placeholder="?????? ?? ?????? ???????????????? , ?????????? ????????"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* <input
            type="text"
            className=" w-full flex-auto p-1 md:rounded-r-none border border-blue-200 rounded focus:outline-none"
            autoComplete="off"
            placeholder="?????????? ????????"
            value={num}
            onChange={(e) => onChange(e)}
          /> */}
            <input
              type="submit"
              className="p-2 mr-2 cursor-pointer rounded bg-gray-100 shadow hover:shadow-lg w-full md:w-32 search_button"
              value="?????? ?? ???? ????"
              id="button-addon1"
              onClick={() => onSearch()}
            />
          </div>
        </div>

        <div className="flex justify-between px-6 items-center flex-col md:flex-row max-w-lg mx-auto">
          <div className="flex gap-x-6">
            <div className="flex flex-col justify-center items-center md:items-start">
              <label className="text-sm">??????????</label>
              <button
                className="bg-blue-500 hover:bg-blue-700 w-64 md:w-full text-white  py-2 px-5 rounded text-sm flex items-center justify-center"
                onClick={() => {
                  settoggle1(!toggle1);
                  dispatch({
                    type: "set_insurance_show",
                    payload: !insurance_show,
                  });
                  status_show &&
                    dispatch({
                      type: "set_status_show",
                      payload: !status_show,
                    });
                  toggle2 && settoggle2(!toggle2);
                  dispatch({ type: "set_search_name", payload: "" });
                  dispatch({ type: "set_number", payload: "" });
                  dispatch({ type: "set_insurance_name", payload: "??????" });
                  dispatch({ type: "set_status", payload: "" });
                }}
              >
                {insurance_name}
                {toggle1 ? <UpArrow /> : <DownArrow />}
              </button>
              {mobile && (
                <TitlesInsurance
                  settoggle1={settoggle1}
                  insurance_list={insurance_list}
                  mobile={mobile}
                />
              )}
            </div>

            <div className="flex flex-col justify-center items-center md:items-start'">
              <label className="text-sm md:ml-auto">??????????</label>
              <button
                className="bg-blue-500 hover:bg-blue-700 w-64 md:w-full text-white py-2 px-5 rounded text-sm flex items-center justify-center"
                onClick={() => {
                  insurance && settoggle2(!toggle2);
                  dispatch({ type: "set_status_show", payload: !status_show });
                  insurance_show &&
                    dispatch({
                      type: "set_insurance_show",
                      payload: !insurance_show,
                    }) &&
                    dispatch({
                      type: "set_status_show",
                      payload: !status_show,
                    });
                  toggle1 && settoggle1(!toggle1);
                  dispatch({ type: "set_search_name", payload: "" });
                  dispatch({ type: "set_number", payload: "" });
                }}
              >
                {insurance_status}
                {toggle2 ? <UpArrow /> : <DownArrow />}{" "}
              </button>
              {mobile && (
                <TitlesStatus settoggle2={settoggle2} mobile={mobile} />
              )}
            </div>
          </div>
          {/* <form
            className="custom_form mb-2 flex flex-col lg:flex-row items-center mt-5 md:mt-0"
            onSubmit={timehandler}
          > */}
          <div className="flex gap-x-6">
            <div className="flex justify-end items-center gap-x-2">
              <DatePicker
                DatePickerInput
                dateInput
                date={date_start}
                placeholder="???? ??????????"
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
              />
              <DatePicker
                DatePickerInput
                dateInput
                date={date_end}
                placeholder="???? ??????????"
                onChange={useCallback(
                  (e) => {
                    console.log("e data", e);
                    dispatch({
                      type: "SET_DATE_END",
                      payload: e.target.value,
                    });
                  },
                  [dispatch]
                )}
              />
            </div>
            {/* <DatePicker
              label="???? ??????????"
              className="shadow mx-auto border-0 p-1 rounded "
              timePicker={false}
              onClickSubmitButton={({ value }) => setToTime(value)}
            /> */}
            <div className="mx-2 md:mt-auto mt-2">
              <button
                onClick={() => filterByDate()}
                className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
              >
                ??????
              </button>
            </div>
          </div>
          {/* </form> */}
        </div>
      </>
    );
  }
);

export default TableSearch;
