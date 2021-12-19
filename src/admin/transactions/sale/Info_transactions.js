import React, { useState } from 'react'

function Info_transactions({ show_info, setshow_info }) {
    return (
        <>
            <tr className={` ${ !show_info && 'hidden'}`}>
                <td className='bg-gray-200 p-2' colSpan='100%'>
                    <div className='card flex flex-col card_transaction'>
                    <div className='border-b pb-3 border-gray-400'>
                        <div className='relative flex justify-center mt-15 p-1'>
                                <table className='w-6/12'>
                                <thead className='text-sm bg-gray-200'>
                                    <tr>
                                    <th className='whitespace-nowrap px-4 border-gray-300 border  py-3'>کابر</th>
                                    <th className='whitespace-nowrap px-4 border-gray-300 border  py-3'>سمت</th>
                                    <th className='whitespace-nowrap px-4 border-gray-300 border  py-3'>درآمد</th>
                                    <th className='whitespace-nowrap px-4 border-gray-300 border  py-3'>شماره تماس</th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                        
                                    <tr className="bg-emerald-200 text-center text-sm">
                                        <td className=' border border-gray-300 py-3'>مدیر ارشد</td>
                                        <td className=' border border-gray-300 py-3'>تست</td>
                                        <td className=' border border-gray-300 py-3'>تست</td>
                                        <td className=' border border-gray-300 py-3'>09380123456</td>
                                    </tr>
                                    <tr className="bg-emerald-200 text-center text-sm">
                                        <td className=' border border-gray-300 py-3'>سرپرست فروش</td>
                                        <td className=' border border-gray-300 py-3'>تست</td>
                                        <td className=' border border-gray-300 py-3'>تست</td>
                                        <td className=' border border-gray-300 py-3'>09572345678</td>
                                    </tr>
                                    <tr className="bg-emerald-200 text-center text-sm">
                                        <td className=' border border-gray-300 py-3'>کارشناس فروش</td>
                                        <td className=' border border-gray-300 py-3'>تست</td>
                                        <td className=' border border-gray-300 py-3'>تست</td>
                                        <td className=' border border-gray-300 py-3'>09121234567</td>
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

export default Info_transactions
