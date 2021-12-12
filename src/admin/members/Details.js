import React, { useState } from 'react'
import Top from './Top'
import { ReactComponent as Person2 } from '../../shared/icons/person2.svg'
import { ReactComponent as People } from '../../shared/icons/people.svg'
import { ReactComponent as Graph } from '../../shared/icons/chart.svg'
import { ReactComponent as Card } from '../../shared/icons/card.svg'
import { ReactComponent as Trash } from '../../shared/icons/trash.svg'
import { ReactComponent as Edit } from '../../shared/icons/edit.svg'
import { Link } from 'react-router-dom'

function Details() {

    const [id_card, setId_card] = useState('')
    const [certification, setCertification] = useState('')
    const [card, setCard] = useState('')
    const [personal_photo, setPersonal_photo] = useState('')
    const [shaba_number, setShaba_number] = useState('')
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
                            <h3 className='text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right'>اطلاعات کاربر</h3>
                            <div className='flex flex-col md:flex-row items-center '>
                                <div className='flex items-center'>
                                    <div class="tooltip mx-1" onClick={handleclick}>
                                        {user}
                                        <span class="tooltiptext">غیرفعال</span>
                                    </div>
                                    
                                    <div class="tooltip mx-1">
                                        <Link to='/members/family'><People /></Link>
                                        <span class="tooltiptext">خانواده من</span>
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
                                </div>
                                
                                <Link to='/members'>
                                    <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 my-2 px-3 text-xs rounded">
                                    بازگشت به لیست
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='relative xl:flex xl:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1'>
                            <table className='md:w-11/12'>
                            <thead className='text-sm bg-gray-200'>
                                <tr>
                                <th className='whitespace-nowrap px-4 border border-gray-300 '>نام و نام خانوادگی</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300  '>کد ملی</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300  py-2'>نام پدر</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300  py-2'>وضعیت تاهل</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300  py-2'>تاریخ تولد</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300  py-2'>نام کاربری</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300  py-2'>تحصیلات</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300  py-2'>جنسیت</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300  py-2'>بارداری</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300  py-2'>قد</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300  py-2'>وزن</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300  py-2'>شماره شبا</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300  py-2'>ایمیل</th>
                                </tr>
                            </thead>
                            <tbody>
                                 
                                <tr class="bg-emerald-200 text-center text-sm">
                                    <td className='py-2 border border-gray-300'>کاربر</td>
                                    <td className='py-2 border border-gray-300'>99999999</td>
                                    <td className='py-2 border border-gray-300'>تست</td>
                                    <td className='py-2 border border-gray-300'>1400/0/0</td>
                                    <td className='py-2 border border-gray-300'>کاربر</td>
                                    <td className='py-2 border border-gray-300'>تست</td>
                                    <td className='py-2 border border-gray-300'>
                                    <select
                                        className="p-2 focus:outline-none focus:border-blue-400 rtl"
                                    >
                                        <option value='زیردیپلم'>زیردیپلم</option>
                                        <option value='دیپلم'>دیپلم</option>
                                        <option value='کاردانی'>کاردانی</option>
                                        <option value='کارشناسی'>کارشناسی</option>
                                        <option value='کارشناسی'>کارشناسی</option>
                                        <option value='کارشناسی ارشد'>کارشناسی ارشد</option>
                                        <option value='دکترا'>دکترا</option>
                                        <option value='فوق دکترا'>فوق دکترا</option>
                                    </select>
                                    </td>
                                    <td className='py-2 border border-gray-300'>تست</td>
                                    <td className='py-2 border border-gray-300'>تست</td>
                                    <td className='py-2 border border-gray-300'>180</td>
                                    <td className='py-2 border border-gray-300'>80</td>
                                    <td className='py-2 border border-gray-300'>123456</td>
                                    <td className='py-2 border border-gray-300'>sample@gmail.com</td>
                                </tr>
                                 
                            </tbody>
                            </table>
                    </div>
                    <div className='relative md:flex md:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1'>
                            <table className='md:w-11/12'>
                            <thead className='text-sm bg-gray-200'>
                                <tr>
                                <th className='whitespace-nowrap px-4 border border-gray-300'>وضعیت نظام وظیفه</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300 '>شماره همراه</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>شماره همراه ۲</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>تلفن ثابت</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>نحوه آشنایی با توکو</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>استان</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>شهر</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300 py-2'>کد پستی</th>
                                <th className='whitespace-nowrap px-4 border border-gray-300  py-2'>آدرس</th>
                                </tr>
                            </thead>
                            <tbody>
                                 
                                <tr class="bg-emerald-200 text-center  border border-gray-300  text-sm ">
                                <td className='py-2'>
                                    <select
                                        className="p-2 focus:outline-none focus:border-blue-400 rtl"
                                    >
                                        <option value='پایان خدمت '>پایان خدمت </option>
                                        <option value='معافیت پزشکی'>معافیت پزشکی</option>
                                        <option value='معافیت غیر پزشکی'>معافیت غیر پزشکی</option>
                                        <option value='معافیت تحصیلی'>معافیت تحصیلی</option>
                                        <option value='کارکنان وظیفه'>کارکنان وظیفه</option>
                                        <option value='خدمت انجام نشده'>خدمت انجام نشده</option>
                                    </select>
                                </td>
                                <td className=' border border-gray-300 py-2'>09120000000</td>
                                <td className=' border border-gray-300 py-2'>09120000001</td>
                                <td className=' border border-gray-300border border-gray-300  py-2'>444444</td>
                                <td className=' border border-gray-300 py-2'>
                                    <select
                                        className="p-2 focus:outline-none focus:border-blue-400 rtl"
                                    >
                                        <option value='اینترنت'>اینترنت</option>
                                        <option value='دوستان'>دوستان</option>
                                        <option value='تلویزیون'>تلویزیون</option>
                                        <option value='شبکه های اجتماعی'>شبکه های اجتماعی</option>
                                        <option value='روزنامه'>روزنامه</option>
                                        <option value='سایر'>سایر</option>
                                    </select>
                                </td>
                                <td className='border border-gray-300 py-2'>تست</td>
                                <td className='border border-gray-300 py-2'>تست</td>
                                <td className='border border-gray-300 py-2'>12345678</td>
                                <td className='border border-gray-300 py-2'>تست</td>
                                </tr>
                                 
                            </tbody>
                            </table>
                    </div>

                    <div className='my-10 '>
                        <h3 className='text-lg mr-2'>اسکن مدارک</h3>
                        <hr />
                        <form className='flex flex-col items-center mt-10 space-y-5'>
                            <label for="id_card" className='w-3/4 border text-center p-2 rounded cursor-pointer shadow-md hover:shadow-lg'>تصویر کارت ملی<span>{ id_card && ` : ${id_card}` }</span></label>
                            <input id="id_card" type="file" name="id_photo" style={{display: 'none'}} onChange={(e) => setId_card(e.target?.files[0]?.name)} />

                            <label for="certification" className='w-3/4 border text-center p-2 rounded cursor-pointer shadow-md hover:shadow-lg'>تصویر صفحه اول شناسنامه<span>{ certification && ` : ${certification}` }</span></label>
                            <input id="certification" type="file" name="certificate_photo" style={{display: 'none'}} onChange={(e) => setCertification(e.target?.files[0]?.name)} />

                            <label for="card" className='w-3/4 border text-center p-2 rounded cursor-pointer shadow-md hover:shadow-lg'>تصویر کارت پایان خدمت/معافیت/کارت دانشجویی<span>{ card && ` : ${card}` }</span></label>
                            <input id="card" type="file" name="card_photo" style={{display: 'none'}} onChange={(e) => setCard(e.target?.files[0]?.name)} />

                            <label for="personal_photo" className='w-3/4 border text-center p-2 rounded cursor-pointer shadow-md hover:shadow-lg'>تصویر عکس پرسنلی<span>{ personal_photo && ` : ${personal_photo}` }</span></label>
                            <input id="personal_photo" type="file" name="personal_photo" style={{display: 'none'}} onChange={(e) => setPersonal_photo(e.target?.files[0]?.name)} />

                            <label for="shaba_number" className='w-3/4 border text-center p-2 rounded cursor-pointer shadow-md hover:shadow-lg'>دفترچه بانکی صفحه شماره شبا<span>{ shaba_number && ` : ${shaba_number}` }</span></label>
                            <input id="shaba_number" type="file" name="shaba_number" style={{display: 'none'}} onChange={(e) => setShaba_number(e.target?.files[0]?.name)} />

                            <button type='submit' className='mr-auto ml-5 px-4 py-1 rounded-full hover:shadow-lg' style={{backgroundColor: '#456285'}}>ثبت</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details
