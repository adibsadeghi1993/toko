import { SaleContext } from "admin/sale/state/SaleState";
import React, { useContext, useEffect, useState } from "react";

function Time_manipulation({ month, setmonth }) {
  const [month_name, setmonth_name] = useState('فروردین');
//   const { payment_day } = useContext(SaleContext);

    useEffect(() => {

    if(month_name === 'فروردین'){setmonth(1)}
    // // if(month == 1){document.getElementById('far').click()}
    
    if(month_name === 'اردیبهشت'){setmonth(2)}
    // if(month == 2){setmonth_name('اردیبهشت')}

    if(month_name === 'خرداد'){setmonth(3)}
    // // if(month == 3){document.getElementById('khor')?.click()}
    // if(month == 3){setmonth_name('خرداد')}

    if(month_name === 'تیر'){setmonth(4)}
    // if(month == 4){setmonth_name('تیر')}

    if(month_name === 'مرداد'){setmonth(5)}
    // if(month == 5){setmonth_name('مرداد')}

    if(month_name === 'شهریور'){setmonth(6)}
    // if(month == 6){setmonth_name('شهریور')}

    if(month_name === 'مهر'){setmonth(7)}
    // if(month == 7){setmonth_name('مهر')}

    if(month_name === 'آبان'){setmonth(8)}
    // if(month == 8){setmonth_name('آبان')}

    if(month_name === 'آذر'){setmonth(9)}
    // if(month == 9){setmonth_name('آذر')}

    if(month_name === 'دی'){setmonth(10)}
    // if(month == 10){setmonth_name('دی')}

    if(month_name === 'بهمن'){setmonth(11)}
    // if(month == 11){setmonth_name('بهمن')}

    if(month_name === 'اسفند'){setmonth(12)}
    // if(month == 12){setmonth_name('اسفند')}
    
    }, [month_name])
 
    

  

  return (
    <>
      <label for="month" className="mb-1">
        ماه
      </label>
      <select
        className="p-2 border rounded focus:outline-none focus:border-blue-400 rtl"
        value={month_name}
        onChange={(e) => setmonth_name(e.target.value)}
      >
        <option id='far' value="فروردین">فروردین</option>
        <option value="اردیبهشت">اردیبهشت</option>
        <option id='khor' value="خرداد">خرداد</option>
        <option value="تیر">تیر</option>
        <option value="مرداد">مرداد</option>
        <option value="شهریور">شهریور</option>
        <option value="مهر">مهر</option>
        <option value="آبان">آبان</option>
        <option value="آذر">آذر</option>
        <option value="دی">دی</option>
        <option value="بهمن">بهمن</option>
        <option value="اسفند">اسفند</option>
      </select>
    </>
  );
}

export default Time_manipulation;
