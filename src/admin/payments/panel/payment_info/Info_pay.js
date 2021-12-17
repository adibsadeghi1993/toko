import React, { useState } from 'react'

function Info_pay({ show_info, setshow_info }) {
    return (
        <>
            <tr className={` ${ !show_info && 'hidden'}`}>
                <td className='bg-gray-200 p-2' colSpan='100%'>
                    <div className='card flex flex-col card_transaction'>
                    <div className='border-b pb-3 border-gray-400'>
                        <div className='relative flex justify-center mt-15 p-1'>
                                <table className='w-11/12'>
                                <thead className='text-sm bg-gray-200'>
                                    <tr>
                                    <th className='whitespace-nowrap px-2 border-gray-300 border  py-3'>نام شرکت</th>
                                    <th className='whitespace-nowrap px-2 border-gray-300 border  py-3'>نام طرح </th>
                                    <th className='whitespace-nowrap px-2 border-gray-300 border  py-3'>تاریخ صدور</th>
                                    <th className='whitespace-nowrap px-2 border-gray-300 border  py-3'>تعداد قسط</th>
                                    <th className='whitespace-nowrap px-2 border-gray-300 border  py-3'>نحوه پرداخت</th>
                                    <th className='whitespace-nowrap px-2 border-gray-300 border  py-3'>تاریخ دریافت کارمزد </th>
                                    <th className='whitespace-nowrap px-2 border-gray-300 border  py-3'>مبلغ دریافتی تا کنون</th>
                                    <th className='whitespace-nowrap px-2 border-gray-300 border  py-3'>مبلغ باقی مانده</th>
                                    <th className='whitespace-nowrap px-2 border-gray-300 border  py-3'>شماره تماس بیمه گذار</th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                        
                                    <tr className="bg-emerald-200 text-center text-sm">
                                        <td className=' border border-gray-300 py-3'>توکو</td>
                                        <td className=' border border-gray-300 py-3'>تست</td>
                                        <td className=' border border-gray-300 py-3'>1400/10/08</td>
                                        <td className=' border border-gray-300 py-3'>2</td>
                                        <td className=' border border-gray-300 py-3'>قسطی</td>
                                        <td className=' border border-gray-300 py-3'>1400/10/10</td>
                                        <td className=' border border-gray-300 py-3'>500.000</td>
                                        <td className=' border border-gray-300 py-3'>تست</td>
                                        <td className=' border border-gray-300 py-3'>09120000000</td>
                                    </tr>
                                        
                                </tbody>
                                </table>
                            </div>
                            <div className='flex justify-end'>
                            <button className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200 mr-auto`} onClick={() => setshow_info(false)}>بستن</button>
                            </div>
                        </div>
                        
                    </div>
                </td>
            </tr>
    </>
          
    )
}

export default Info_pay
