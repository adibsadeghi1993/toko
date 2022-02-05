import { SaleContext } from "admin/sale/state/SaleState";
import React, { useContext, useEffect, useState } from "react";

function TimeManipulation({ month, setmonth }) {
  return (
    <>
      <label for="month" className="mb-1">
        ماه
      </label>
      <select
        className="p-2 border rounded focus:outline-none focus:border-blue-400 rtl"
        value={month}
        onChange={(e) => setmonth(e.target.value)}
      >
        <option value="1" selected={month === 1}>
          فروردین
        </option>
        <option value="2" selected={month === 2}>
          اردیبهشت
        </option>
        <option selected={month === 3} value="3">
          خرداد
        </option>
        <option selected={month === 4} value="4">
          تیر
        </option>
        <option selected={month === 5} value="5">
          مرداد
        </option>
        <option selected={month === 6} value="6">
          شهریور
        </option>
        <option selected={month === 7} value="7">
          مهر
        </option>
        <option selected={month === 8} value="8">
          آبان
        </option>
        <option selected={month === 9} value="9">
          آذر
        </option>
        <option selected={month === 10} value="10">
          دی
        </option>
        <option selected={month === 11} value="11">
          بهمن
        </option>
        <option selected={month === 12} value="12">
          اسفند
        </option>
      </select>
    </>
  );
}

export default TimeManipulation;
