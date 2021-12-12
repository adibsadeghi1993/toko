import React from 'react'

const Res_modal = React.memo(({ setsubmit_status }) => {
    return (
        <div className='bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded p-2 shadow border'>
        <h1 className='text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right'>تاریخ صدور بیمه نامه</h1>
        <div className='flex flex-col p-2 mt-10'>
            <label>ثبت شماره بیمه نامه</label>
            <input type='file' className='p-2 rounded border focus:outline-none focus:border-blue-400'/>
        </div>
        
        

        <div className='flex justify-end items-end p-2 mt-5'>
            <button className='bg-green-500 hover:bg-green-700 text-white ml-2 py-2 px-4  rounded'  onClick={() => { setsubmit_status('دانلود') }}>ثبت</button>
            <button className='shadow hover:bg-gray-200 text-black py-2 px-4 border  rounded' onClick={() => {setsubmit_status('اسکن')}}>بستن</button>
        </div>
    </div>
    )
})

export default Res_modal
