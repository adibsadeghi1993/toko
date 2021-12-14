import React, { useState } from 'react'
import Info_transactions from './Info_transactions';

function Info_sale({ user, insurances }) {
    const [show_info, setshow_info] = useState(false)
    return (
        <>
                <tr>
                {user && Object.entries(user)?.map(([key, val]) => {
                    if(key === 'محصول'){return false} 
                  return (
                       (
                      <td key={key} className="m-1 p-1 pt-2 pb-2 text-center border">
                        {val}
                      </td>
                    )
                  );
                })}

                 <td className='border text-center px-2' style={{ width: "60px" }}>
                    <button
                        onClick={() => setshow_info(!show_info)}
                        className="text-blue-500">
                        جزییات
                    </button>
                 </td>

                
                </tr>
                {insurances[0] && <Info_transactions show_info={show_info} setshow_info={setshow_info} />}
                </>
    )
}

export default Info_sale
