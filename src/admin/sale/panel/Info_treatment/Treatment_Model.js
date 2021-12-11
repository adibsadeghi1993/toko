import React from 'react'

const Treatment_Model = React.memo(({ setshowModal, setshowsubmit }) => {
    return (
        <div className='bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded p-2 shadow border'>
            <h1 className='text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right'>تاریخ صدور بیمه نامه</h1>
            <div className='flex flex-col p-2 mt-10'>
                <label>شماره بیمه نامه</label>
                <input className='p-2 rounded border focus:outline-none focus:border-blue-400'/>
            </div>
            <div className='flex p-2 justify-center items-center'>

                <div className='flex text-gray-400 items-start flex-col ml-2 flex-auto'>
                    <label className='mb-1'>روز</label>
                    <input type="number" placeholder={14} dir='ltr' className='p-2 border rounded focus:outline-none focus:border-blue-400 rtl w-32'/>
                </div>
                <div className='flex text-gray-400 items-start flex-col ml-2 flex-auto'>
                <label for="month" className="mb-1">
                    ماه
                </label>
                <select
                    className="p-2 border rounded focus:outline-none focus:border-blue-400 rtl"
                >
                    <option id='far' value="فروردین">فروردین</option>
                    <option value="اردیبهشت">اردیبهشت</option>
                    <option id='khor' value="خرداد">خرداد</option>
                    <option value="تیر">تیر</option>
                    <option value="مرداد">مرداد</option>
                    <option value="شهریور">شهریور</option>
                    <option value="مهر">مهر</option>
                    <option value="آبان">آبان</option>
                    <option value="آذر">آذر</option>
                    <option value="دی">دی</option>
                    <option value="بهمن">بهمن</option>
                    <option value="اسفند">اسفند</option>
                </select>
                </div>
                <div className='flex text-gray-400 items-start flex-col ml-2 flex-auto'>
                    <label className='mb-1'>سال</label>
                    <input type="number" placeholder={1400} dir='ltr' className='p-2 border rounded focus:outline-none focus:border-blue-400 rtl w-32'/>
                </div>
            </div>

            <div className='flex justify-end items-end p-2 mt-16'>
                <button className='bg-green-500 hover:bg-green-700 text-white ml-2 py-2 px-4  rounded'  onClick={() => {setshowModal(false); setshowsubmit(true)}}>ثبت</button>
                <button className='shadow hover:bg-gray-200 text-black py-2 px-4 border  rounded' onClick={() => setshowModal(false)}>بستن</button>
            </div>
        </div>
    )
})

export default Treatment_Model
