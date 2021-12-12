import { SaleContext } from 'admin/sale/state/SaleState';
import React, { useContext, useEffect, useState } from 'react'
import Info_life from './Info_life/Info_life';
import Info_treatment from './Info_treatment/Info_treatment';
import Info_responsibility from './Info_responsibility/Info_responsibility';

const Info = React.memo(({  user  }) => {

    const { insurance_name, insurance_status, insurances } = useContext(SaleContext)
    const [show_info, setshow_info] = useState(false)
    return (
        <>
              <tr>
                {user && Object.entries(user)?.map(([key, val]) => {
                  if (insurance_name !== "همه" && key === "محصول") {
                    return;
                  }
                  if (insurance_status !== "همه" && key === "وضعیت") {
                    return;
                  }
                  
                  return (
                    key !== "status_id" &&
                    key !== "#" && (
                      <td key={key} className="m-1 p-1 pt-2 pb-2 text-center border">
                        {val}
                      </td>
                    )
                  );
                })}
                {insurances[0] && (
                  <td className='border text-center px-2' style={{ width: "60px" }}>
                    <button onClick={() => setshow_info(!show_info)} className="text-blue-500">
                      جزییات
                    </button>
                  </td>
                )}
              </tr>
              {  user['محصول'] === 'بیمه عمر' &&
                    <Info_life  setshow_info={setshow_info} show_info={show_info}/>
                }

              {  user['محصول'] === 'بیمه درمان' &&
                    <Info_treatment  setshow_info={setshow_info} show_info={show_info} payment_status={user['شیوه پرداخت']} ins_status={user['وضعیت']}/>
                }

              {  user['محصول'] === 'بیمه مسئولیت' &&
                    <Info_responsibility  setshow_info={setshow_info} show_info={show_info} ins_status={user['وضعیت']}/>
                }
         </>
    )
})

export default Info
