import React from 'react'
import text from './Text_treatment'

const Info_person = React.memo(({ setshow_info }) => {
    return (
        <>
        <div className='relative flex justify-center mt-5  p-1'>
                <table className='w-11/12'>
                <thead className='bg-gray-200'>
                    <tr>
                    <th className='whitespace-nowrap px-2 border border-gray-300 '>کد ملی</th>
                    <th className='whitespace-nowrap px-2 border border-gray-300 '>شماره شناسنامه</th>
                    <th className='whitespace-nowrap px-2 border border-gray-300 '>نام پدر</th>
                    <th className='whitespace-nowrap px-2 border border-gray-300 py-2'>محل تولد</th>
                    <th className='whitespace-nowrap px-2 border border-gray-300 py-2'>محل صدور </th>
                    <th className='whitespace-nowrap px-2 border border-gray-300 py-2'>تابعیت</th>
                    <th className='whitespace-nowrap px-2 border border-gray-300 py-2'>تعداد فرزند</th>
                    <th className='whitespace-nowrap px-2 border border-gray-300 py-2'>تحصیلات</th>
                    <th className='whitespace-nowrap px-2 border border-gray-300 py-2'>وضعیت تاهل</th>
                    <th className='whitespace-nowrap px-2 border border-gray-300 py-2'>بارداری</th>
                    <th className='whitespace-nowrap px-2 border border-gray-300 py-2'>جنسیت</th>
                    <th className='whitespace-nowrap px-2 border border-gray-300 py-2'>قد</th>
                    <th className='whitespace-nowrap px-2 border border-gray-300 py-2'>وزن</th>
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
                        <td className='pl-1 py-2 border border-gray-300'>تست</td>
                        <td className='pl-1 py-2 border border-gray-300'>تست</td>
                        <td className='pl-1 py-2 border border-gray-300'>تست</td>
                    </tr>
                        
                </tbody>
                </table>
        </div>

        <div className='relative flex justify-center mt-5  p-1'>
                <table className='w-11/12'>
                <thead className=' bg-gray-200'>
                    <tr>
                    <th className='whitespace-nowrap px-2 border border-gray-300 '>تلفن همراه</th>
                    <th className='whitespace-nowrap px-2 border border-gray-300 '>تلفن ثابت</th>
                    <th className='whitespace-nowrap px-2 border border-gray-300 '>تلفن محل کار</th>
                    <th className='whitespace-nowrap px-2 border border-gray-300 py-2'>ایمیل</th>
                    <th className='whitespace-nowrap px-2 border border-gray-300 py-2'>استان</th>
                    <th className='whitespace-nowrap px-2 border border-gray-300 py-2'>شهر</th>
                    <th className='whitespace-nowrap px-2 border border-gray-300 py-2'>منطقه</th>
                    <th className='whitespace-nowrap px-2 border border-gray-300 py-2'>آدرس</th>
                    <th className='whitespace-nowrap px-2 border border-gray-300 py-2'>آدرس محل کار</th>
                    <th className='whitespace-nowrap px-2 border border-gray-300 py-2'>کدپستی</th>
                    <th className='whitespace-nowrap px-2 border border-gray-300 py-2'>شماره شبا</th>
                    <th className='whitespace-nowrap px-2 border border-gray-300 py-2'>نام بانک</th>
                    <th className='whitespace-nowrap px-2 border border-gray-300 py-2'>شغل</th>
                    </tr>
                </thead>
                <tbody>
                        
                    <tr className="bg-emerald-200 text-center">
                        <td className='pl-1 border border-gray-300 py-2'>تست</td>
                        <td className='pl-1 border border-gray-300 py-2'>تست</td>
                        <td className='pl-1 border border-gray-300 py-2'>تست</td>
                        <td className='pl-1 border border-gray-300 py-2'>تست</td>
                        <td className='pl-1 border border-gray-300 py-2'>تست</td>
                        <td className='pl-1 border border-gray-300 py-2'>تست</td>
                        <td className='pl-1 border border-gray-300 py-2'>تست</td>
                        <td className='pl-1 border border-gray-300 py-2'>تست</td>
                        <td className='pl-1 border border-gray-300 py-2'>تست</td>
                        <td className='pl-1 border border-gray-300 py-2'>تست</td>
                        <td className='pl-1 border border-gray-300 py-2'>تست</td>
                        <td className='pl-1 border border-gray-300 py-2'>تست</td>
                        <td className='pl-1 border border-gray-300 py-2'>تست</td>
                    </tr>
                        
                </tbody>
                </table>
        </div>

        <div className='pt-2 px-4'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <h3 className='text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right'>اسکن مدارک</h3>
            </div>
        </div>
        <div className='p-3 flex flex-wrap'>
            <button className='px-3 py-1 rounded shadow border mr-2 mt-2'>تصویر صفحه اول شناسنامه</button>
            <button className='px-3 py-1 rounded shadow border mr-2 mt-2'>تصویر کارت ملی</button>
        </div>

        <div className='pt-2 px-4'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <h3 className='text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right'>فرم ها</h3>
            </div>
        </div>
        <div className='flex justify-between items-center mt-3'>
            <h1>فرم سلامت</h1>
            <button className='bg-gray-300 text-black hover:bg-gray-400 rounded px-3 py-1 border'>دانلود</button>
        </div>

        <textarea className='w-full mt-8 h-32 rounded border focus:outline-none focus:border-blue-400' readonly="readonly">
            { text['1'] }
        </textarea>


        <div className='flex justify-between items-center mt-3'>
            <h1>فرم سوابق بیمه ای</h1>
            <button className='bg-gray-300 text-black hover:bg-gray-400 rounded px-3 py-1 border'>دانلود</button>
        </div>

        <textarea className='w-full mt-8 h-32 rounded border focus:outline-none focus:border-blue-400' readonly="readonly">
            { text['2'] }
        </textarea>

        <div className='flex justify-end'>
            <button className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200 mr-auto`} onClick={() => setshow_info(false)}>بستن</button>
        </div>
        </>

    )
})

export default Info_person
