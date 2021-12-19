import { PaymentsContext } from 'admin/payments/state/PaymentsState';
import React, { useContext, useEffect, useState } from 'react'
import Info_pay from './Info_pay';

function Payment_info({ user }) {
    const [show_info, setshow_info] = useState(false)
    const { insurances } = useContext(PaymentsContext)
    
    return (
        <>
            <tr onClick={() => setshow_info(!show_info)} className='cursor-pointer hover:bg-gray-100'>
            {user && Object.entries(user)?.map(([key, val]) => {
                return (
                    (
                    <td key={key} className="m-1 px-2 py-2 text-center border">
                    {val}
                    </td>
                )
                );
            })}

                <td className='border text-center px-2'>
                <button
                    className="text-blue-500">
                    جزییات
                </button>
                </td>

            
            </tr>
            {insurances[0] && <Info_pay show_info={show_info} setshow_info={setshow_info} />}
            </>
    )
}

export default Payment_info
