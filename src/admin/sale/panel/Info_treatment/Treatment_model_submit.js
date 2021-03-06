import React from 'react'

const Treatment_model_submit = React.memo(({ setshowSubmitModal }) => {
    return (
        <div className='bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/3 rounded p-2 shadow border'>
            <h1 className='text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right'>تاریخ صدور بیمه نامه</h1>
            <div className='flex flex-col p-2 mt-10'>
                <label>ثبت شماره بیمه نامه</label>
                <input type='file' className='p-2 rounded border focus:outline-none focus:border-blue-400'/>
            </div>
            <div className='flex justify-end items-end p-2 mt-2'>
                <button className='bg-green-500 hover:bg-green-700 text-white ml-2 py-2 px-4  rounded'  onClick={() => {setshowSubmitModal(false)}}>ثبت</button>
                <button className='shadow hover:bg-gray-200 text-black py-2 px-4 border  rounded' onClick={() => {setshowSubmitModal(false)}}>بستن</button>
            </div>
        </div>
    )
})

export default Treatment_model_submit
