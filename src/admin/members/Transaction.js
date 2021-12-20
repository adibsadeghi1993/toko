import React, { useState } from 'react'
import Top from './Top'
import { ReactComponent as Person2 } from '../../shared/icons/person2.svg'
import { ReactComponent as People } from '../../shared/icons/people.svg'
import { ReactComponent as Graph } from '../../shared/icons/chart.svg'
import { ReactComponent as Card } from '../../shared/icons/card.svg'
import { ReactComponent as Trash } from '../../shared/icons/trash.svg'
import { ReactComponent as Edit } from '../../shared/icons/edit.svg'
import { Link } from 'react-router-dom'
import { DatePicker } from 'jalali-react-datepicker'


const sample_data = [
    {company: "company", insurance: 'insurance', user : 'user_4', insurincer: 'test', insurinced: 'test', cause: 'test', insurance_company: 'test', code: '1234', date:'1400/0/0', income:'test', finilized:"true"},
    {company: "company", insurance: 'insurance', user : 'user_4', insurincer: 'test', insurinced: 'test', cause: 'test', insurance_company: 'test', code: '1234', date:'1400/0/0', income:'test', finilized:"true"},
    {company: "company", insurance: 'insurance', user : 'user_4', insurincer: 'test', insurinced: 'test', cause: 'test', insurance_company: 'test', code: '1234', date:'1400/0/0', income:'test', finilized:"true"},
    {company: "company", insurance: 'insurance', user : 'user_4', insurincer: 'test', insurinced: 'test', cause: 'test', insurance_company: 'test', code: '1234', date:'1400/0/0', income:'test', finilized:"true"},
]

function Transaction() {
    const [user, setUser] = useState(<Trash />)


    const handleclick = () => {
        if(window.confirm("آیا برای غیر فعال کردن کابر مطمئن هستید؟") )
           setUser(<Person2 />)
    } 
    return (
        <>
        <Top />
        <div className='relative top-0 z-30 w-full px-30 -mt-72 shadow-lg'>
            
            <div className='card flex flex-col min-h-screen'>
                    <div className='card-header py-5 px-4 border-b border-gray-100'>
                        <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                            <h3 className='text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right'>تراکنش ها</h3>
                            <div className='flex flex-col md:flex-row items-center '>
                                <div className='flex items-center'>
                                    <div className="tooltip mx-1" onClick={handleclick}>
                                        {user}
                                        <span className="tooltiptext">غیرفعال</span>
                                    </div>                                    
                                    <div className="tooltip mx-1">
                                        <Link to='/members/family'><People /></Link>
                                        <span className="tooltiptext">خانواده من</span>
                                    </div>
                                    <div className="tooltip mx-1">
                                        <Link to='/members/chart'><Graph /></Link>
                                        <span className="tooltiptext">مشاهده چارت</span>
                                    </div>
                                    <div className="tooltip mx-1">
                                        <Edit />
                                        <span className="tooltiptext">دسترسی ها</span>
                                    </div>
                                    <div className="tooltip mx-1">
                                        <Link to='/members/transactions'><Card /></Link>
                                        <span className="tooltiptext">تراکنش ها</span>
                                    </div>
                                </div>
                                
                                <Link to='/members/maincharts'>
                                    <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 my-2 px-3 text-xs rounded ml-1">
                                        بازگشت به زیرمجموعه کلی
                                    </button>
                                </Link>

                                <Link to='/members'>
                                    <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 my-2 px-3 text-xs rounded">
                                    بازگشت به لیست
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <form className='flex flex-col lg:flex-row items-center justify-evenly lg:items-end my-5 space-y-3'>
                        <div className='flex flex-col items-start '>
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                از تاریخ
                            </label>
                            {/* read doc of jalali-react-datepicker */}
                            <DatePicker />
                        </div>
                        <div className='flex flex-col items-start'>
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                تا تاریخ
                            </label>
                            <DatePicker />
                        </div>
                        <button type='submit' className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>جستجو کن</button>
                    </form>

                    <div className='relative lg:flex lg:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1'>
                            <table className='md:w-11/12'>
                            <thead className='text-sm bg-gray-200'>
                                <tr>
                                <th className='whitespace-nowrap px-4 border border-gray-300 '>شرکت</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300 '>بیمه</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>کاربر</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>بیمه گذار</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>بیمه شده</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>تراکنش ناشی از</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>شماره بیمه شده</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>کد سفارش</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>تاریخ</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>درآمد</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>نهایی شد</th>
                                </tr>
                            </thead>
                            <tbody>
                                 {
                                     sample_data?.map(data => 
                                        <tr className="bg-emerald-200 text-sm hover:bg-gray-100 hover:text-gray-500">
                                            <td className='text-center py-2 border border-gray-300'>{data.company}</td>
                                            <td className='text-center py-2 border border-gray-300'>{data.insurance}</td>
                                            <td className='text-center py-2 border border-gray-300'>{data.user}</td>
                                            <td className='text-center py-2 border border-gray-300'>{data.insurincer}</td>
                                            <td className='text-center py-2 border border-gray-300'>{data.insurinced}</td>
                                            <td className='text-center py-2 border border-gray-300'>{data.cause}</td>
                                            <td className='text-center py-2 border border-gray-300'>{data.insurance_company}</td>
                                            <td className='text-center py-2 border border-gray-300'>{data.code}</td>
                                            <td className='text-center py-2 border border-gray-300'>{data.date}</td>
                                            <td className='text-center py-2 border border-gray-300'>{data.income}</td>
                                            <td className='text-center py-2 border border-gray-300'>{data.finilized}</td>
                                        </tr>
                                        )}
                                 
                            </tbody>
                            </table>
                    </div>
                    <div className='mt-20 mb-3 text-sm'>
                            <ul className='flex flex-row cursor-pointer justify-center'>
                                <li><span className='py-1 px-3  activated text-blue-500 border rounded-r'>1</span></li>
                                <li><span className='py-1 px-3 hover:bg-blue-100  text-blue-500 border'>2</span></li>
                                <li><span className='py-1 px-3 hover:bg-blue-100  text-blue-500 border'>3</span></li>
                                <li><span className='py-1 px-3 hover:bg-blue-100  text-blue-500 border'>4</span></li>
                                <li><span className='py-1 px-3 hover:bg-blue-100  text-blue-500 border'>5</span></li>
                                <li><span className='py-1 px-3 hover:bg-blue-100 hidden lg:inline text-blue-500 border'>6</span></li>
                                <li><span className='py-1 px-3 hover:bg-blue-100 hidden lg:inline text-blue-500 border'>7</span></li>
                                <li><span className='py-1 px-3 hover:bg-blue-100 hidden lg:inline text-blue-500 border'>8</span></li>
                                <li><span className='py-1 px-3 hover:bg-blue-100 hidden lg:inline text-blue-500 border'>9</span></li>
                                <li><span className='py-1 px-3 hover:bg-blue-100 hidden lg:inline text-blue-500 border'>10</span></li>
                                <li><span className='py-1 px-3 hover:bg-blue-100  text-blue-500 border'>...</span></li>
                                <li><span className='py-1 px-3 hover:bg-blue-100  text-blue-500 border'>&#62;</span></li>
                                <li><span className='py-1 px-3 hover:bg-blue-100  text-blue-500 border'>&#62; &#62;</span></li>
                            </ul>
                        </div>
            </div>
        </div>
        </>
    )
}

export default Transaction
