import { SaleContext } from 'admin/sale/state/SaleState'
import React, { useContext } from 'react'

function Treatment_people({ setshowStatus }) {
    const { treatment_people, dispatch } = useContext(SaleContext)
    return (
        
        <div className='border-b pb-3'>
        <div className='relative lg:flex lg:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1'>
                <table className='w-full'>
                <thead className='text-sm bg-gray-200'>
                    <tr>
                    <th className='whitespace-nowrap px-4 '>نام و نام خانوادگی</th>
                    <th className='whitespace-nowrap px-4 '>نام پدر </th>
                    <th className='whitespace-nowrap px-4  lg:text-right '>نسبت</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>درصد فرانشیز</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>تاریخ تولد</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>جنسیت</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>بیمه گر پایه</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>بیمه زندگی</th>
                    <th className='whitespace-nowrap px-4  lg:text-right py-2'>#</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {
                        treatment_people?.map((person) => 

                            <tr className="bg-emerald-200 text-center text-sm hover:text-blue-500 cursor-pointer" 
                                onClick={() => {
                                        if(person['نسبت'] === 'بیمه گذار'){
                                            dispatch({type: 'set_insurer_treatment', payload : true})
                                        } else { dispatch({type: 'set_insurer_treatment', payload : false}) }
                                        setshowStatus('اطلاعات')
                            }}>
                                <td className='py-2'>{person['نام']}</td>
                                <td className='py-2'>{person['نام_پدر']}</td>
                                <td className='py-2'>{person['نسبت']}</td>
                                <td className='py-2'>{person['درصد_فرانشیز']}</td>
                                <td className='py-2'>{person['تاریخ_تولد']}</td>
                                <td className='py-2'>{person['جنسیت']}</td>
                                <td className='py-2'>{person['بیمه_گر_پایه']}</td>
                                <td className='py-2'>{person['بیمه_زندگی']}</td>
                                <td className='px-2 py-2 text-blue-500'>جزییات</td>
                            </tr>

                        )
                    }
                </tbody>
                </table>
        </div>
        <button className='rounded shadow border px-3 py-1 mr-3 mt-2 hover:shadow-lg'>کارت ملی</button>
        <button className='rounded shadow border px-3 py-1 mr-1 mt-2 hover:shadow-lg'>شناسنامه</button>
    </div>
    )
}

export default Treatment_people
