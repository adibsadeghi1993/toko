import React from 'react'

const Info_covers = React.memo(() => {
    return (
        <div className='border-b pb-3 border-gray-400'>
        <div className='relative flex justify-center mt-5 p-1 mb-5 pb-6'>
                <table className='w-11/12'>
                <thead className='text-sm bg-gray-200'>
                    <tr>
                    <th className='whitespace-nowrap px-4 border border-gray-300 '>پوشش سرطان</th>
                    <th className='whitespace-nowrap px-4 border border-gray-300 '>درصد سرمایه امراض خاص</th>
                    <th className='whitespace-nowrap px-4 border border-gray-300 '>ضریب سرمایه حادثه</th>
                    <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>درصد سرمایه هزینه پزشکی حادثه</th>
                    <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>درصد سرمایه نقص عضو حادثه</th>
                    </tr>
                </thead>
                <tbody>
                        
                    <tr class="bg-emerald-200 text-center text-sm">
                        <td className='pl-1 border border-gray-300 py-2'>کابر</td>
                        <td className='pl-1 border border-gray-300 py-2'>تست</td>
                        <td className='pl-1 border border-gray-300 py-2'>تست</td>
                        <td className='pl-1 border border-gray-300 py-2'>تست</td>
                        <td className='pl-1 border border-gray-300 py-2'>تست</td>
                    </tr>
                        
                </tbody>
                </table>
        </div>
        <div className='relative flex justify-center mt-5 p-1 border-gray-300 mb-5 pb-6'>
                <table className='w-11/12'>
                <thead className='bg-gray-200'>
                    <tr>
                    <th className='whitespace-nowrap border border-gray-300 px-4 '>معافیت در صورت از کار افتادگی</th>
                    <th className='whitespace-nowrap border border-gray-300 px-4 '>پوشش معافیت در صورت فوت</th>
                    <th className='whitespace-nowrap border border-gray-300 px-4 '>درصد افزایش مستمری</th>
                    <th className='whitespace-nowrap border border-gray-300 px-4 py-2'>مادام العمر</th>
                    <th className='whitespace-nowrap border border-gray-300 px-4 py-2'>روش پرداخت مستمری</th>
                    </tr>
                </thead>
                <tbody>
                        
                    <tr class="bg-emerald-200 text-center">
                        <td className='pl-1 border border-gray-300 py-2'>کابر</td>
                        <td className='pl-1 border border-gray-300 py-2'>تست</td>
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

export default Info_covers
