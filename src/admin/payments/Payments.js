import Top from 'admin/members/Top'
import React, { memo, useContext, useState } from 'react'
import { PaymentsContext } from './state/PaymentsState';
import Payment_search from './panel/Payment_search'
import Payment_table_titles from './panel/Payment_table_titles'
import axios from 'axios';
import useSWR from 'swr';
import TableContent_pa from './panel/TableContent_pa';
import Payments_upload from './panel/Payments_upload';

function Payments() {

    const { insurances } = useContext(PaymentsContext)

    const [toggle1, settoggle1] = useState(false);

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
                            <h3 className='text-primary-color pr-3 font-bold text-otherCaption whitespace-nowrap  text-center lg:text-right'>لیست اقساط</h3>
                            <div className='flex w-full justify-end'>
                                <button class="bg-blue-600 flex hover:bg-blue-800 text-white font-bold py-2 px-3 text-xs rounded">
                                بازگشت به لیست
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                         <Payment_search
                            toggle1={toggle1}
                            settoggle1={settoggle1}
                            insurance_list={insurance_list}
                            />
                        <Payment_table_titles
                        settoggle1={settoggle1}
                        insurance_list={insurance_list}
                        />  
                
                    </div>

                        {insurances && (<TableContent_pa />)}
                        {insurances && (<Payments_upload />)}

                </div>

            </div>
        </>
    )
}

export default memo(Payments)
