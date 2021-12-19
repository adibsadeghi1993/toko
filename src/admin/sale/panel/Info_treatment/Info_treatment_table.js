import React from 'react'

const Info_treatment_table= React.memo(() => {
    return (
    <div className='border-b pb-3 border-gray-400'>
        <div className='relative flex justify-center mt-5  p-1'>
                <table className='w-11/12'>
                <thead className=' bg-gray-200'>
                    <tr>
                    <th className='whitespace-nowrap px-4 border border-gray-300 '>وضعیت</th>
                    <th className='whitespace-nowrap px-4 border border-gray-300 '>شرکت</th>
                    <th className='whitespace-nowrap px-4 border border-gray-300  '>طرح</th>
                    <th className='whitespace-nowrap px-4 border border-gray-300  py-2'>درصد فرانشیر</th>
                    <th className='whitespace-nowrap px-4 border border-gray-300  py-2'>قیمت</th>
                    <th className='whitespace-nowrap px-4 border border-gray-300  py-2'>قیمت با تخفیف</th>
                    <th className='whitespace-nowrap px-4 border border-gray-300  py-2'>نوع تخفیف</th>
                    <th className='whitespace-nowrap px-4 border border-gray-300  py-2'>نوع پرداخت</th>
                    <th className='whitespace-nowrap px-4 border border-gray-300  py-2'>تاریخ صدور</th>
                    <th className='whitespace-nowrap px-4 border border-gray-300  py-2'>شماره بیمه نامه</th>
                    </tr>
                </thead>
                <tbody>
                        
                    <tr className="bg-emerald-200 text-center">
                        <td className='pl-1 py-2 border border-gray-300'>تست</td>
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
        <div className='flex justify-center items-center'>
            <button className='rounded shadow border px-3 py-1 mr-3 mt-2 hover:shadow-lg'>تصویر بیمه نامه</button>
            <button className='rounded shadow border px-3 py-1 mr-1 mt-2 hover:shadow-lg'>تصویر اولین اسکن پرداخت</button>
        </div>
    </div>
    )
})

export default Info_treatment_table