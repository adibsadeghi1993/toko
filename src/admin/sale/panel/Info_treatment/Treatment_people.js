import { SaleContext } from 'admin/sale/state/SaleState'
import React, { useContext } from 'react'

function Treatment_people({ setshowStatus }) {
    const { treatment_people, dispatch } = useContext(SaleContext)
    return (
        
        <div className='border-b pb-3 border-gray-400'>
        <div className='relative flex justify-center mt-5 p-1'>
                <table className='w-11/12'>
                <thead className=' bg-gray-200'>
                    <tr>
                    <th className='whitespace-nowrap px-4 border border-gray-300'>نام و نام خانوادگی</th>
                    <th className='whitespace-nowrap px-4 border border-gray-300'>نام پدر </th>
                    <th className='whitespace-nowrap px-4 border border-gray-300 '>نسبت</th>
                    <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>درصد فرانشیز</th>
                    <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>تاریخ تولد</th>
                    <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>جنسیت</th>
                    <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>بیمه گر پایه</th>
                    <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>بیمه زندگی</th>
                    <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>#</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {
                        treatment_people?.map((person) => 

                            <tr className="bg-emerald-200 text-center hover:text-blue-500 cursor-pointer" 
                                onClick={() => {
                                        if(person['نسبت'] === 'بیمه گذار'){
                                            dispatch({type: 'set_insurer_treatment', payload : true})
                                        } else { dispatch({type: 'set_insurer_treatment', payload : false}) }
                                        setshowStatus('اطلاعات')
                            }}>
                                <td className='py-2 border border-gray-300'>{person['نام']}</td>
                                <td className='py-2 border border-gray-300'>{person['نام_پدر']}</td>
                                <td className='py-2 border border-gray-300'>{person['نسبت']}</td>
                                <td className='py-2 border border-gray-300'>{person['درصد_فرانشیز']}</td>
                                <td className='py-2 border border-gray-300'>{person['تاریخ_تولد']}</td>
                                <td className='py-2 border border-gray-300'>{person['جنسیت']}</td>
                                <td className='py-2 border border-gray-300'>{person['بیمه_گر_پایه']}</td>
                                <td className='py-2 border border-gray-300'>{person['بیمه_زندگی']}</td>
                                <td className='px-2 border border-gray-300 py-2 text-blue-500'>جزییات</td>
                            </tr>

                        )
                    }
                </tbody>
                </table>
        </div>
    </div>
    )
}

export default Treatment_people
