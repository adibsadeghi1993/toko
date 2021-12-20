import React from 'react'

const Info_call = React.memo(() => {
    return (
        <div className='relative flex justify-center mt-5 p-1 border-b mb-5 pb-6 border-gray-400'>
                <table className='w-11/12'>
                <thead className='bg-gray-200'>
                    <tr className=''>
                        <th className='whitespace-nowrap border border-gray-300'>شماره موبایل</th>
                        <th className='whitespace-nowrap border border-gray-300'>تلفن ثابت</th>
                        <th className='whitespace-nowrap border border-gray-300 '>شهر</th>
                        <th className='whitespace-nowrap border border-gray-300 py-2'>استان</th>
                        <th className='whitespace-nowrap border border-gray-300 py-2'>کد پستی</th>
                        <th className='whitespace-nowrap border border-gray-300 py-2'>آدرس</th>
                    </tr>
                </thead>
                <tbody>
                        
                    <tr className="bg-emerald-200 text-center">
                        <td className='py-2 border border-gray-300'>تست</td>
                        <td className='py-2 border border-gray-300'>تست</td>
                        <td className='py-2 border border-gray-300'>تست</td>
                        <td className='py-2 border border-gray-300'>تست</td>
                        <td className='py-2 border border-gray-300'>تست</td>
                        <td className='py-2 border border-gray-300'>تست</td>
                    </tr>
                        
                </tbody>
                </table>
        </div>
        
    )
})

export default Info_call
