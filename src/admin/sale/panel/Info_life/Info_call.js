import React from 'react'

function Info_call() {
    return (
        <div className='relative flex mt-5 overflow-x-scroll lg:overflow-x-auto p-1 border-b'>
                <table className='md:w-full'>
                <thead className='text-sm bg-gray-200'>
                    <tr className=''>
                        <th className='whitespace-nowrap'>شماره موبایل</th>
                        <th className='whitespace-nowrap'>تلفن ثابت</th>
                        <th className='whitespace-nowrap lg:text-right '>شهر</th>
                        <th className='whitespace-nowrap lg:text-right py-2'>استان</th>
                        <th className='whitespace-nowrap lg:text-right py-2'>کد پستی</th>
                        <th className='whitespace-nowrap lg:text-right py-2'>آدرس</th>
                    </tr>
                </thead>
                <tbody>
                        
                    <tr class="bg-emerald-200 text-center text-sm">
                        <td className='py-2'>تست</td>
                        <td className='py-2'>تست</td>
                        <td className='py-2'>تست</td>
                        <td className='py-2'>تست</td>
                        <td className='py-2'>تست</td>
                        <td className='py-2'>تست</td>
                    </tr>
                        
                </tbody>
                </table>
        </div>
        
    )
}

export default Info_call
