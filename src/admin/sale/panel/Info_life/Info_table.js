import React from 'react'

function Info_table() {
    return (
    <div className='border-b pb-3'>
        <div className='relative lg:flex lg:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1'>
                <table className=''>
                <thead className='text-sm bg-gray-200'>
                    <tr>
                    <th className='whitespace-nowrap px-4 '>نام</th>
                    <th className='whitespace-nowrap px-4 '>نام خانوادگی</th>
                    <th className='whitespace-nowrap px-4  lg:text-right '>کد ملی</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>نام پدر</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>تاریخ تولد</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>جنسیت</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>بارداری</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>وزن</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>قد</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>بارداری</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>آیا موتور سواری میکنید؟</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>آیا سیگار میکشید</th>
                    </tr>
                </thead>
                <tbody>
                        
                    <tr className="bg-emerald-200 text-center text-sm">
                        <td className='pl-1 py-2'>کابر</td>
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

export default Info_table
