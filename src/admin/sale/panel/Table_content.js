import moment from "jalali-moment";
import React, { useContext, useState } from "react";
import { SaleContext } from "../state/SaleState";
import Info from "./Info";

const Table_content = React.memo(() => {
  const { insurances, insurance_name, insurance_status, search_name, number, FromTime, ToTime } = useContext(SaleContext)

  return (
    <div className='relative lg:flex lg:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1'>
    <table
    className='w-11/12'
        >
      <thead className='text-sm bg-gray-300'>
        <tr style={{backgroundColor:'#F6F9FC'}}>
          {insurances[0] &&
            Object.entries(insurances[0]).map(([key, val]) => {
              if (insurance_name !== "همه" && key === "محصول") {
                return;
              }
              if (insurance_status !== "همه" && key === "وضعیت") {
                return;
              }

              return (
                key !== "status_id" &&
                key !== "#" && (
                  <th
                    className="whitespace-nowrap px-4 text-center py-2 border"
                    style={{ width: "60px", color:'#91A5AD'}}
                    key={key}
                  >
                    {key}
                  </th>
                )
              );
            })}
          {insurances[0] && <th className='border'>#</th>}
        </tr>
      </thead>
      <tbody className="table_tbody text-sm">
        {insurances &&
          insurances.filter((user) => {
            if (number === "" && search_name === "") {
              return user;
            } else if (
              user["بازاریاب"].includes(search_name) &&
              (number === "" || number === undefined)
            ) {
              return user;
            } else if (
              (search_name === undefined || search_name === "") &&
              parseInt(user["شماره تماس"]) === parseInt(number)
            ) {
              return user;
            } else if (
              user["بازاریاب"].includes(search_name) &&
              parseInt(user["شماره تماس"]) === parseInt(number)
            ) {
              return user;
            }
            return false;
          })
            .filter((user) => {
              if (user["محصول"]) {
                if (insurance_name === "همه" && insurance_status === "همه") {
                  return user;
                } else if (
                  user["محصول"] === insurance_name &&
                  insurance_status === "همه"
                ) {
                  return user;
                } else if (
                  user["وضعیت"] === insurance_status &&
                  insurance_name === "همه"
                ) {
                  return user;
                } else if (
                  user["محصول"] === insurance_name &&
                  user["وضعیت"] === insurance_status
                ) {
                  return user;
                }
                return false;
              }
              return true;
            }).filter(user => {

                if(FromTime === '' && ToTime === ''){ return user}
                else if( FromTime?.isBefore(moment.from(user['تاریخ ایجاد'], 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD')) &&  (ToTime === '' || ToTime === undefined)){ return user}
                else if( ToTime?.isAfter(moment.from(user['تاریخ ایجاد'], 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD')) && ( FromTime === '' || FromTime === undefined)){ return user}
                else if( ToTime?.isAfter(moment.from(user['تاریخ ایجاد'], 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD')) && FromTime?.isBefore(moment.from(user['تاریخ ایجاد'], 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD')) ){ return user}
            })
            .map((user, index) => (
              <Info user={user} />
            ))}
      </tbody>
    </table>
    </div>
  );
})

export default Table_content;
