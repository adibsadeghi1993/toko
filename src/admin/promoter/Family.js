import React, { useState } from 'react'
import Top from './Top'
import { ReactComponent as Person2 } from '../../shared/icons/person2.svg'
import { ReactComponent as Person } from '../../shared/icons/person.svg'
import { ReactComponent as Graph } from '../../shared/icons/chart.svg'
import { ReactComponent as Card } from '../../shared/icons/card.svg'
import { ReactComponent as Trash } from '../../shared/icons/trash.svg'
import { ReactComponent as Edit } from '../../shared/icons/edit.svg'
import { Link } from 'react-router-dom'


const sample_data = [
    {name: "پریا دهقان", relationship: 'test', card_id : '99999999', phone: '09120000000', email: 'sample@gmail.com', telephone: '444444'},
    {name: "پرستو دهقان", relationship: 'test', card_id : '99999999', phone: '09120000000', email: 'sample@gmail.com', telephone: '444444'}
]
function Family() {
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
                            <h3 className='text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right'>خانواده من</h3>
                            <div className='flex flex-col md:flex-row items-center '>
                                <div className='flex items-center'>
                            
                                <div class="tooltip mx-1">
                                    <Link to='/members/details'><Person /></Link>
                                    <span class="tooltiptext">مشاهده کاربر</span>
                                </div>
                                <div class="tooltip mx-1">
                                    <Link to='/members/chart'><Graph /></Link>
                                    <span class="tooltiptext">مشاهده چارت</span>
                                </div>
                                <div class="tooltip mx-1">
                                    <Edit />
                                    <span class="tooltiptext">دسترسی ها</span>
                                </div>
                                <div class="tooltip mx-1">
                                    <Link to='/members/transactions'><Card /></Link>
                                    <span class="tooltiptext">تراکنش ها</span>
                                </div>
                                <div class="tooltip mx-1" onClick={handleclick}>
                                    {user}
                                    <span class="tooltiptext">غیرفعال</span>
                                </div>
                            </div>
                            
                            <Link to='/members'>
                                <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 my-2 px-3 text-xs rounded">
                                بازگشت به لیست
                                </button>
                            </Link>
                        </div>
                    </div>
                    </div>
                    <div className='relative lg:flex lg:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1'>
                                <table className='md:w-11/12'>
                                <thead className='text-sm bg-gray-300'>
                                    <tr>
                                    <th className='whitespace-nowrap px-4 '>نام و نام خانوادگی</th>
                                    <th className='whitespace-nowrap px-4 '>نسبت</th>
                                    <th className='whitespace-nowrap px-4 py-2'>کد ملی</th>
                                    <th className='whitespace-nowrap px-4 py-2'>شماره همراه</th>
                                    <th className='whitespace-nowrap px-4 py-2'>ایمیل</th>
                                    <th className='whitespace-nowrap px-4 py-2'>تلفن ثابت</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { sample_data?.map(user => 
                                        <tr class="bg-emerald-200 text-sm my-2 hover:text-blue-500">
                                            <td className='text-center p-2'><Link to='/members/id'>{user.name}</Link></td>
                                            <td className='text-center p-2'><Link to='/members/id'>{user.relationship}</Link></td>
                                            <td className='text-center p-2'><Link to='/members/id'>{user.card_id}</Link></td>
                                            <td className='text-center p-2'><Link to='/members/id'>{user.phone}</Link></td>
                                            <td className='text-center p-2'><Link to='/members/id'>{user.email}</Link></td>
                                            <td className='text-center p-2'><Link to='/members/id'>{user.telephone}</Link></td>        
                                        </tr>
                                        )}
                                </tbody>
                                </table>
                            </div>
                </div>
            </div>
        </>
    )
}

export default Family