import React from 'react'

function Info_treatment_table() {
    return (
    <div className='border-b pb-3'>
        <div className='relative lg:flex lg:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1'>
                <table className=''>
                <thead className='text-sm bg-gray-200'>
                    <tr>
                    <th className='whitespace-nowrap px-4 '>وضعیت</th>
                    <th className='whitespace-nowrap px-4 '>شرکت</th>
                    <th className='whitespace-nowrap px-4  lg:text-right '>طرح</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>درصد فرانشیر</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>قیمت</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>قیمت با تخفیف</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>نوع تخفیف</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>نوع پرداخت</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>تاریخ صدور</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>شماره بیمه نامه</th>
                    </tr>
                </thead>
                <tbody>
                        
                    <tr className="bg-emerald-200 text-center text-sm">
                        <td className='pl-1 py-2'>تست</td>
                        <td className='pl-1 py-2'>تست</td>
                        <td className='pl-1 py-2'>تست</td>
                        <td className='pl-1 py-2'>تست</td>
                        <td className='pl-1 py-2'>تست</td>
                        <td className='pl-1 py-2'>تست</td>
                        <td className='pl-1 py-2'>تست</td>
                        <td className='pl-1 py-2'>تست</td>
                        <td className='pl-1 py-2'>تست</td>
                        <td className='pl-1 py-2'>تست</td>
                    </tr>
                        
                </tbody>
                </table>
        </div>
        <button className='rounded shadow border px-3 py-1 mr-3 mt-2 hover:shadow-lg'>کارت ملی</button>
        <button className='rounded shadow border px-3 py-1 mr-1 mt-2 hover:shadow-lg'>شناسنامه</button>
    </div>
    )
}

export default Info_treatment_table
