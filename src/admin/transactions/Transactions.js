import Top from "admin/members/Top";
import axios from "axios";
import React, { useContext, useState } from "react";
import useSWR from "swr";
import Table_content from "./panel/invite/TableContent";
import Table_search from "./panel/invite/Table_search";
import Table_titles from "./panel/invite/Table_titles";
// import TableContent from "./panel/Table_content";
import { TransactionContext } from "./state/TransactionState";

const Table_info = React.memo(() => {

  const { insurances } = useContext(TransactionContext)

  const [toggle1, settoggle1] = useState(false);
  const [toggle2, settoggle2] = useState(false);

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data: insurance_list } = useSWR(
    `http://81.91.145.250:8002/outsource/type_of_insurance`,
    fetcher
  );

  return (
    <>
    <Top />
    <div className='relative top-0 z-30 w-full px-30 -mt-72 shadow-lg'>
        <div className='card flex flex-col min-h-screen'>
            <div className='card-header py-5 px-4 border-b border-gray-100'>
                <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                    <h3 className='text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right'>لیست تراکنش های دعوت از دوستان</h3>
                </div>
            </div>
            <div>
                 <Table_search
                    toggle1={toggle1}
                    toggle2={toggle2}
                    settoggle1={settoggle1}
                    settoggle2={settoggle2}
                    insurance_list={insurance_list}
                    />
                    <Table_titles
                      settoggle1={settoggle1}
                      settoggle2={settoggle2}
                      insurance_list={insurance_list}
                    /> 
                
                </div>

                {insurances && (<Table_content />)}

        </div>
    </div>
    </>
  );
})

export default Table_info;
