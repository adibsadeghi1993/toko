import React from 'react'

function Info_covers() {
    return (
        <div className='border-b pb-3'>
        <div className='relative lg:flex lg:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1'>
                <table className='w-full'>
                <thead className='text-sm bg-gray-200'>
                    <tr>
                    <th className='whitespace-nowrap px-4 '>پوشش سرطان</th>
                    <th className='whitespace-nowrap px-4 '>درصد سرمایه امراض خاص</th>
                    <th className='whitespace-nowrap px-4  lg:text-right '>ضریب سرمایه حادثه</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>درصد سرمایه هزینه پزشکی حادثه</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>درصد سرمایه نقص عضو حادثه</th>
                    </tr>
                </thead>
                <tbody>
                        
                    <tr class="bg-emerald-200 text-center text-sm">
                        <td className='pl-1 py-2'>کابر</td>
                        <td className='pl-1 py-2'>تست</td>
                        <td className='pl-1 py-2'>تست</td>
                        <td className='pl-1 py-2'>تست</td>
                        <td className='pl-1 py-2'>تست</td>
                    </tr>
                        
                </tbody>
                </table>
        </div>
        <div className='relative lg:flex lg:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1'>
                <table className='w-full'>
                <thead className='text-sm bg-gray-200'>
                    <tr>
                    <th className='whitespace-nowrap px-4 '>معافیت در صورت از کار افتادگی</th>
                    <th className='whitespace-nowrap px-4 '>پوشش معافیت در صورت فوت</th>
                    <th className='whitespace-nowrap px-4  lg:text-right '>درصد افزایش مستمری</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>مادام العمر</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>روش پرداخت مستمری</th>
                    </tr>
                </thead>
                <tbody>
                        
                    <tr class="bg-emerald-200 text-center text-sm">
                        <td className='pl-1 py-2'>کابر</td>
                        <td className='pl-1 py-2'>تست</td>
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

export default Info_covers
