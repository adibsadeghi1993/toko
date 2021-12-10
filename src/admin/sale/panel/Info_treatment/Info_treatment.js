import { SaleContext } from 'admin/sale/state/SaleState';
import React, { useContext, useState } from 'react'
import Information_treatment from './Information_treatment';
import Info_people from './Info_people/Info_people';
import Payment_treatment from './Payment_treatment/Payment_treatment';

function Info_treatment({ setshow_info , show_info }) {

    const [showStatus, setshowStatus] = useState('جزییات')
    const { insurer_treatment } = useContext(SaleContext)

    return (
        <tr className={` ${ !show_info && 'hidden'}`}>
                        <td className='bg-gray-200 p-2' colSpan='100%'>
                        <div className='card flex flex-col'>
                            <div className='py-5 px-4 border-b border-gray-100'>
                                <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                                    <h3 className='text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right'>{showStatus !== 'اطلاعات' ? showStatus : (!insurer_treatment ? 'اطلاعات پرستو دهقان - خواهر'  :  'اطلاعات پریا دهقان - بیمه گذار')}</h3>
                                    <div className=''>
                                        { (showStatus === 'اطلاعات') && <button className='p-2 shadow rounded bg-gray-100 ml-2 hover:bg-gray-200' onClick={() => {setshowStatus('جزییات')}} >بازگشت</button>}
                                        { showStatus === 'جدول اقساط' && <button className='p-2 shadow rounded bg-gray-100 ml-2 hover:bg-gray-200' onClick={() => {setshowStatus('جزییات')} }>جزییات</button>}
                                        { (showStatus === 'جزییات' || showStatus === 'اطلاعات') && <button className='p-2 shadow rounded bg-gray-100 ml-2 hover:bg-gray-200' onClick={() => {setshowStatus('جدول اقساط')}} >اقساط</button>}
                                    </div>
                                </div>


                            { showStatus === 'جزییات' && <Information_treatment setshow_info={setshow_info} setshowStatus={setshowStatus} />}
                            { showStatus === 'اطلاعات' && <Info_people setshow_info={setshow_info} /> }
                            { showStatus === 'جدول اقساط' && <Payment_treatment  setshow_info={setshow_info}  /> }

                            </div>
                            </div>
                        </td>
                        </tr>
    )
}

export default Info_treatment

