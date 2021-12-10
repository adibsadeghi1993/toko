import React from 'react'

function Info_beneficiaries() {
    return (
        <div className='border-b pb-3'>
        <div className='relative lg:flex lg:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1'>
                <table className='w-full'>
                <thead className='text-sm bg-gray-200'>
                    <tr>
                    <th className='whitespace-nowrap px-4 '>نام و نام خانوادگی</th>
                    <th className='whitespace-nowrap px-4 '>کد ملی</th>
                    <th className='whitespace-nowrap px-4  lg:text-right '>سال تولد</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>نسبت</th>
                    </tr>
                </thead>
                <tbody>
                        
                    <tr class="bg-emerald-200 text-center text-sm">
                        <td className='pl-1 py-2'>کابر</td>
                        <td className='pl-1 py-2'>تست</td>
                        <td className='pl-1 py-2'>تست</td>
                        <td className='pl-1 py-2'>تست</td>
                    </tr>
                        
                </tbody>
                </table>
        </div>
        </div>
    )
}

export default Info_beneficiaries
