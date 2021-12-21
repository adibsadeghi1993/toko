import Top from 'admin/members/Top'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RotateLoader } from 'react-spinners'
import { ReactComponent as Bar } from '../../shared/icons/bar.svg'
import Interval_product from './Interval_product'


function Newproduct() {

    const [show1, setshow1] = useState(false)
    const [show2, setshow2] = useState(false)
    const [product_name, setproduct_name] = useState('نام محصول')
    const [company_name, setcompany_name] = useState('نام شرکت')
    const [show_interval, setshow_interval] = useState(false)
    
    const [from_month, setfrom_month] = useState('')
    const [to_month, setto_month] = useState('')

    return (
        <>
         <Top />
        <div className='relative top-0 z-30 w-full px-30 -mt-72 shadow-lg'>
                <div className='card flex flex-col min-h-screen'>
                    <div className='card-header py-5 px-4 border-b border-gray-100 rounded'>
                        <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                            <h3 className='text-primary-color pr-3 font-bold text-otherCaption whitespace-nowrap  text-center lg:text-right'>محصول جدید</h3>
                            <Link to='/products'>
                                <button className="bg-blue-600 flex hover:bg-blue-800 text-white font-bold py-2 px-3 text-xs rounded">
                                بازگشت به لیست
                                </button>
                            </Link>
                        </div>
                    </div>
                    <form className='p-5'>
                        <h3 className='text-lg'>Logo</h3>
                        <input type='file' className='w-full border p-2 rounded text-sm' />
                        <p className='text-xs pt-1 text-gray-600'>عکس خود را آپلود کنید</p>
                        <div className='mt-10'>
                            <h3>مشخصات محصول</h3>
                            <hr />
                            <div className='flex flex-col md:flex-row items-center justify-center py-5 md:justify-start'>
                                <div className='flex flex-col items-start mx-5 my-2'>
                                    <label className="block text-gray-700 text-xs font-bold mb-2" for="cost">
                                        مبلغ ثابت دعوت از دوستان
                                    </label>
                                    <input type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='cost'/>
                                </div>
                                <div className='flex flex-col items-start mx-5 my-2'>

                                    <label className="block text-gray-700 text-xs font-bold mb-2" for="cost">
                                        درصد سازمان از فروش
                                    </label>
                                    <input type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='cost'/>
                                </div>
                                <div className='flex flex-col items-start mx-5 my-2'>
                                    <label className="block text-gray-700 text-xs font-bold mb-2" for="cost">
                                        نام طرح
                                    </label>
                                    <input type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='cost'/>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center flex-col md:flex-row md:justify-evenly md:w-1/2 '>
                            <div className="relative inline-block text-right py-15">
                            { product_name !== 'نام محصول' && <span className='mr-auto text-xs'>نام محصول : </span> }
                                <div>
                                    <button type="button" onClick={() => setshow1(!show1)} className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 shadow" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                        {product_name}
                                            <svg className='mr-1 h-5 w-5 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path transform={`${show1 && 'rotate(180 10 10)'}`} fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                            </svg>
                                    </button>
                                </div>
                                { show1 &&
                                    <div onClick={() => setshow1(!show1)} className="origin-top-left z-10 absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                        <div className="py-1" role="none">
                                            <a onClick={(e) => setproduct_name(e.currentTarget.innerHTML)} className="text-gray-700 block cursor-pointer px-4 py-2 text-sm text-right hover:bg-gray-200" role="menuitem" tabindex="-1" id="menu-item-0">بیمه عمر</a>
                                            <a onClick={(e) => setproduct_name(e.currentTarget.innerHTML)} className="text-gray-700 block cursor-pointer px-4 py-2 text-sm text-right hover:bg-gray-200" role="menuitem" tabindex="-1" id="menu-item-1">بیمه درمان</a>
                                            <a onClick={(e) => setproduct_name(e.currentTarget.innerHTML)} className="text-gray-700 block cursor-pointer px-4 py-2 text-sm text-right hover:bg-gray-200" role="menuitem" tabindex="-1" id="menu-item-2">بیمه مسئولیت</a>
                                        </div>
                                    </div>
                                }
                            </div>

                            <div className="relative inline-block text-right py-5">
                                { company_name !== 'نام شرکت' && <span className='mr-auto text-xs'>نام شرکت : </span> }
                                <div>
                                    <button type="button" onClick={() => setshow2(!show2)} className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 shadow" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                        {company_name}
                                            <svg className='mr-1 h-5 w-5 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path transform={`${show2 && 'rotate(180 10 10)'}`} fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                            </svg>
                                    </button>
                                </div>
                                { show2 &&
                                    <div onClick={() => setshow2(!show2)} className="origin-top-left z-10 absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                        <div className="py-1" role="none">
                                            <a onClick={(e) => setcompany_name(e.currentTarget.innerHTML)} className="text-gray-700 block cursor-pointer px-4 py-2 text-sm text-right hover:bg-gray-200" role="menuitem" tabindex="-1" id="menu-item-0">کارآفرین</a>
                                            <a onClick={(e) => setcompany_name(e.currentTarget.innerHTML)} className="text-gray-700 block cursor-pointer px-4 py-2 text-sm text-right hover:bg-gray-200" role="menuitem" tabindex="-1" id="menu-item-1">خاورمیانه</a>
                                            <a onClick={(e) => setcompany_name(e.currentTarget.innerHTML)} className="text-gray-700 block cursor-pointer px-4 py-2 text-sm text-right hover:bg-gray-200" role="menuitem" tabindex="-1" id="menu-item-2">سامانه</a>
                                            <a onClick={(e) => setcompany_name(e.currentTarget.innerHTML)} className="text-gray-700 block cursor-pointer px-4 py-2 text-sm text-right hover:bg-gray-200" role="menuitem" tabindex="-1" id="menu-item-2">کمک رسان ایران</a>
                                        </div>
                                    </div>
                                }
                            </div>

                        </div>
                            <button onClick={(e) => {e.preventDefault() ;setshow_interval(show => !show)}} className='bg-blue-600 flex hover:bg-blue-800 text-white font-bold py-2 px-3 text-xs rounded mt-10'>
                                افزودن بازه زمانی
                            </button>
                            {
                                show_interval && <Interval_product setshow_interval={setshow_interval} setfrom_month={setfrom_month} setto_month={setto_month} />
                            }
                            
                            {
                                (!show_interval && from_month )  && 
                                <div className='border border-gray-300 p-1 rounded w-1/3 ml-2 text-sm mt-2'>
                                        درصد ها از ماه { from_month } تا ماه {to_month}
                                </div>
                            }
                            <button type='submit' className="bg-blue-600 flex hover:bg-blue-800 text-white font-bold py-2 px-3 text-xs rounded mt-10 mr-auto">ثبت</button>

                    </form>
            </div>
        </div>
            
        </>
    )
}

export default Newproduct
