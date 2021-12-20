import React, { useState } from 'react'

function Interval_product({ setshow_interval, setfrom_month, setto_month, from_month, to_month }) {

    const [from, setfrom] = useState()
    const [to, setto] = useState()

    const handelSubmit = (e) => {
        e.preventDefault() 
        

        if( !from || !to || to > 12 || from > 12 || to <= 0 || from <= 0 || from > to  ){
            window.alert('لطفا مقادیر را درست وارد کنید')
        } else {
            setshow_interval(show => !show)
            setfrom_month(from)
            setto_month(to)
        }

        
    }

    return (
        <div>
            <div className='flex'>
                <div className='mt-5 flex flex-col justify-start w-32 ml-2 text-sm'>
                    <label>از ماه</label>
                    <input value={from} onChange={(e) => setfrom(parseInt(e.target.value)) } type="number" className='border rounded p-1 focus:outline-none focus:border-blue-400' />
                </div>
                <div className='mt-5 flex flex-col justify-start w-32 text-sm'>
                    <label>تا ماه</label>
                    <input value={to} onChange={(e) => setto(parseInt(e.target.value)) } type="number" className='border rounded p-1 focus:outline-none focus:border-blue-400' />
                </div>
            </div>

            <div className='flex justify-start flex-col mt-5 w-full'>
                <div className='flex'>
                    <h3>سمت در شبکه فروش</h3>
                    <h3 className='mr-28'>درصد</h3>
                </div>
                
                <div className='flex flex-col mt-1'>
                    <div className='flex items-end '>
                        <div className='border border-gray-300 p-1 rounded w-52 ml-2 text-sm'>توکو</div>
                        <div className='flex flex-col justify-start text-sm'>
                            <input type="number" className='border border-gray-300 rounded p-1 focus:outline-none focus:border-blue-400 w-20'/>
                        </div>
                    </div>
                    <div className='flex items-end mt-2'>
                        <div className='border border-gray-300 p-1 rounded w-52 ml-2 text-sm'>مدیر ارشد فروش</div>
                        <div className='flex flex-col justify-start text-sm'>
                            <input type="number" className='border border-gray-300 rounded p-1 focus:outline-none focus:border-blue-400 w-20'/>
                        </div>
                    </div>
                    <div className='flex items-end mt-2'>
                        <div className='border border-gray-300 p-1 rounded w-52 ml-2 text-sm'>سرپرست فروش</div>
                        <div className='flex flex-col justify-start text-sm'>
                            <input type="number" className='border border-gray-300 rounded p-1 focus:outline-none focus:border-blue-400 w-20'/>
                        </div>
                    </div>
                    <div className='flex items-end mt-2'>
                        <div className='border border-gray-300 p-1 rounded w-52 ml-2 text-sm'>کارشناس فروش</div>
                        <div className='flex flex-col justify-start text-sm'>
                            <input type="number" className='border border-gray-300 rounded p-1 focus:outline-none focus:border-blue-400 w-20'/>
                        </div>
                    </div>
                    <div className='flex items-end mt-2'>
                        <div className='border border-gray-300 p-1 rounded w-52 ml-2 text-sm'>مشاور فروش</div>
                        <div className='flex flex-col justify-start text-sm'>
                            <input type="number" className='border border-gray-300 rounded p-1 focus:outline-none focus:border-blue-400 w-20'/>
                        </div>
                    </div>
                </div>
            </div>
            <button className='bg-blue-600 flex hover:bg-blue-800 text-white font-bold py-2 px-4 text-xs rounded mt-8' onClick={(e) => handelSubmit(e)}>ثبت</button>

        </div>
    )
}

export default Interval_product
