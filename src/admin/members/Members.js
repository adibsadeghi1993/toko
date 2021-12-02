import React from 'react'
import { Link } from 'react-router-dom'
import Top from './Top'

const buttons = [
    { name: 'همه'} ,  { name: 'کاربرنهایی'},  { name: 'شبکه فروش'},  { name: 'نویسنده'},  { name: 'ادمین بازاریاب'},  { name: 'کارمند دفتری'},  { name: 'مدیر آموزش و توسعه'},  { name: 'ادمین'},  { name: 'یوزرهای غیرفعال'}
]

const sample_data = [
    { name : 'پریا دهقان', position : 'شبکه فروش', date : '۱۴۰۰/۰۹/۰۷', status: 'فعال', phone: '9106669008'},
    { name : 'پریا دهقان', position : 'شبکه فروش', date : '۱۴۰۰/۰۹/۰۷', status: 'فعال', phone: '9106669008'},
    { name : 'پریا دهقان', position : 'شبکه فروش', date : '۱۴۰۰/۰۹/۰۷', status: 'فعال', phone: '9106669008'}
]

function Members() {
    return (
        <>
            <Top />
            <div className='relative top-0 z-30 w-full px-30 -mt-72 shadow-lg'>
                <div className='card flex flex-col min-h-screen'>
                    <div className='card-header py-5 px-4 border-b border-gray-100'>
                        <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                            <h3 className='text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right'>لیست کاربران</h3>
                            <Link to='/members/maincharts'>
                                <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-3 text-xs rounded">
                                    فلوچارت زیر مجموعه ها
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className='p-5 flex'>
                            <input className=' border border-gray-200  py-3 px-3 w-full focus:outline-none focus:border-blue-500 rounded-r-md ' />
                            <button className='whitespace-nowrap flex-none border-2 text-sm font-bold border-gray-400 text-blue-700 px-5 py-3 rounded-l hover:shadow-lg hover:text-black'>
                                جست و جو کن
                            </button>
                        </div>
                        <div className='flex flex-wrap items-center justify-center'>
                            {  buttons?.map( btn =>
                                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded focus:text-white focus:bg-blue-500 m-2 text-sm'>{btn.name}</button>
                                ) 
                            }
                        </div>
                        <div className='relative md:flex md:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto'>
                            <table className='md:w-11/12'>
                            <thead className='text-sm bg-gray-300'>
                                <tr>
                                <th className='whitespace-nowrap px-4 py-2 w-36'>نام کاربر</th>
                                <th className='whitespace-nowrap px-4  lg:text-right '>تاریخ ثبت نام</th>
                                <th className='whitespace-nowrap px-4  lg:text-right py-2'>وضعیت</th>
                                <th className='whitespace-nowrap px-4  lg:text-right py-2'>شماره همراه</th>
                                <th className='whitespace-nowrap px-4  lg:text-right py-2'>نوار دستور</th>
                                </tr>
                            </thead>
                            <tbody>
                                { sample_data?.map(user => 
                                <tr class="bg-emerald-200 hover:bg-gray-100 hover:text-gray-500">
                                <td className='flex w-60 p-10 md:p-2 items-center'>
                                    <img className='w-14 h-14 rounded-full' src='https://acp.tooko.co/img/brand/man.jpg' />
                                    <Link to='/members/details' className='text-blue-500 hover:text-blue-700 cursor-pointer text-sm mr-2'>{user.name}<span className='block text-xs text-gray-600'>,{user.position}</span></Link>
                                </td>
                                <td className='px-4 py-2 text-sm'>{user.date}</td>
                                <td className='px-4 py-2 text-sm'><span className='bg-blue-600 text-white p-1 rounded-lg'>{user.status}</span></td>
                                <td className='px-4 py-2 text-sm text-blue-500 hover:text-blue-700 cursor-pointer'>{user.phone}</td>
                                <td className='px-4 py-2 text-sm'><Link to='/members/details' className='text-blue-500 hover:text-blue-700 cursor-pointer'>دسترسی ها</Link></td>
                                </tr>
                                 ) }
                            </tbody>
                            </table>
                        </div>
                        <div className='mt-20 mb-5 text-sm'>
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
            </div>
        </>
    )
}

export default Members
