import Top from "admin/members/Top";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import TableContent from "./panel/Table_content";
import TableSearch from "./panel/Table_search";
import TableTitles from "./panel/Table_titles";
import { SaleContext } from "./state/SaleState";

const Table_info = React.memo(() => {

  const { insurances, insurance, dispatch, status } = useContext(SaleContext)

  const [toggle1, settoggle1] = useState(false);
  const [toggle2, settoggle2] = useState(false);

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data: insurance_list } = useSWR(
    `http://81.91.145.250:8002/outsource/type_of_insurance`,
    fetcher
  );

  useEffect(() => {
    if (insurance) {
      axios
        .get(`http://81.91.145.250:8002/outsource/type_of_status/${insurance}`)
        .then((res) => dispatch({ type: "set_statuses", payload: res.data }))
        .catch((err) => console.log(err));
    }
  }, [insurance, status]);
  return (
    <>
    <Top />
    <div className='relative top-0 z-30 w-full px-30 -mt-72 shadow-lg'>
        <div className='card flex flex-col min-h-screen'>
            <div className='card-header py-5 px-4 border-b border-gray-100'>
                <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                    <h3 className='text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right'>لیست سفارش بیمه</h3>
                </div>
            </div>
            <div>
                <TableSearch
                    toggle1={toggle1}
                    toggle2={toggle2}
                    settoggle1={settoggle1}
                    settoggle2={settoggle2}
                    insurance_list={insurance_list}
                    />
                    <TableTitles
                      settoggle1={settoggle1}
                      settoggle2={settoggle2}
                      insurance_list={insurance_list}
                    />
                
                </div>

                {insurances && (<TableContent />)}

        </div>
    </div>
    </>
  );
})

export default Table_info;
