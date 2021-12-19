import React from 'react'

const Info_insurance = React.memo(() => {
    return (
        <div className='border-b border-gray-400'>
        <div className='pb-3'>
        <div className='relative flex justify-center mt-5 p-1'>
                <table className='w-11/12'>
                <thead className='bg-gray-200'>
                    <tr>
                    <th className='whitespace-nowrap border border-gray-300 py-2 px-1'>حق بیمه</th>
                    <th className='whitespace-nowrap border border-gray-300 py-2 px-1'>شیوه پرداخت</th>
                    <th className='whitespace-nowrap border border-gray-300 py-2 px-1'>مدت قرارداد</th>
                    <th className='whitespace-nowrap border border-gray-300 py-2 px-1'>شرکت بیمه</th>
                    <th className='whitespace-nowrap border border-gray-300 py-2 px-1'>سرمایه فوت</th>
                    <th className='whitespace-nowrap border border-gray-300 py-2 px-1'>درصد رشد حق بیمه</th>
                    <th className='whitespace-nowrap border border-gray-300 py-2 px-1'>درصد رشد سرمایه فوت</th>
                    <th className='whitespace-nowrap border border-gray-300 py-2 px-1'>ذخیره بیمه نامه</th>
                    <th className='whitespace-nowrap border border-gray-300 py-2 px-1'>اندوخته پیش بینی</th>
                    <th className='whitespace-nowrap border border-gray-300 py-2 px-1'>پرداخت کل</th>
                    </tr>
                </thead>
                <tbody>
                        
                    <tr className="bg-emerald-200 text-center">
                        <td className='pl-1 py-2 border border-gray-300'>کابر</td>
                        <td className='pl-1 py-2 border border-gray-300'>تست</td>
                        <td className='pl-1 py-2 border border-gray-300'>تست</td>
                        <td className='pl-1 py-2 border border-gray-300'>تست</td>
                        <td className='pl-1 py-2 border border-gray-300'>تست</td>
                        <td className='pl-1 py-2 border border-gray-300'>تست</td>
                        <td className='pl-1 py-2 border border-gray-300'>تست</td>
                        <td className='pl-1 py-2 border border-gray-300'>تست</td>
                        <td className='pl-1 py-2 border border-gray-300'>تست</td>
                        <td className='pl-1 py-2 border border-gray-300'>تست</td>
                    </tr>
                        
                </tbody>
                </table>
            </div>
        </div>
        <div className='relative flex justify-center mt-5 p-1 pb-5'>
                <table className='w-11/12'>
                <thead className='text-sm bg-gray-200'>
                    <tr>
                    <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>حق بیمه</th>
                    <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>شیوه پرداخت</th>
                    <th className='whitespace-nowrap px-4 border border-gray-300 py-2 '>مدت قرارداد</th>
                    <th className='whitespace-nowrap px-4 border border-gray-300  py-2'>شرکت بیمه</th>
                    </tr>
                </thead>
                <tbody>
                        
                    <tr class="bg-emerald-200 text-center text-sm">
                        <td className='pl-1  border border-gray-300py-2'>کابر</td>
                        <td className='pl-1 border border-gray-300 py-2'>تست</td>
                        <td className='pl-1 border border-gray-300 py-2'>تست</td>
                        <td className='pl-1 border border-gray-300 py-2'>تست</td>
                    </tr>
                        
                </tbody>
                </table>
            </div>
        
        </div>
    )
})

export default Info_insurance
