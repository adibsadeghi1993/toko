import Top from 'admin/members/Top'
import React from 'react'
import { ReactComponent as Bar } from '../../shared/icons/bar.svg'
import { Link } from 'react-router-dom'

function Products() {
    return (
        <>
        <Top />
        <div className='relative top-0 z-30 w-full px-30 -mt-72 shadow-lg'>
                <div className='card flex flex-col min-h-screen'>
                    <div className='card-header py-5 px-4 border-b border-gray-100'>
                        <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                            <h3 className='text-primary-color pr-3 font-bold text-otherCaption whitespace-nowrap  text-center lg:text-right'>لیست محصولات</h3>
                            <div className='flex w-full justify-center'>
                                <Link to='/products/add'>
                                    <button className="bg-blue-600 flex hover:bg-blue-800 text-white font-bold py-2 px-3 text-xs rounded">
                                    <Bar /> <span className='mx-2'>افزودن محصول</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-wrap md:p-12 p-4 justify-center items-center '>

                            <div className='w-64 m-3 shadow-lg border  rounded '>
                                <img src='https://acp.tooko.co/img/theme/img-1-1000x600.jpg' className='rounded-t' />
                                <div className='flex m-3'>
                                    <label className="switch">
                                        <input type="checkbox" id="togBtn" />
                                        <div className="slider round"></div>
                                    </label>
                                    <button className='bg-gray-300 mr-auto hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded text-sm inline-flex items-center'>ویرایش</button>
                                </div>
                                <p className='p-2 text-center mb-5'>بیمه عمر خاورمیانه</p>
                            </div>


                            <div className='w-64 m-3 shadow-lg border  rounded '>
                                <img src='https://acp.tooko.co/img/theme/img-1-1000x600.jpg' className='rounded-t' />
                                <div className='flex m-3'>
                                    <label className="switch">
                                        <input type="checkbox" id="togBtn" />
                                        <div className="slider round"></div>
                                    </label>
                                    <button className='bg-gray-300 mr-auto hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded text-sm inline-flex items-center'>ویرایش</button>
                                </div>
                                <p className='p-2 text-center mb-5'>بیمه عمر خاورمیانه</p>
                            </div>


                            <div className='w-64 m-3 shadow-lg border  rounded '>
                                <img src='https://acp.tooko.co/img/theme/img-1-1000x600.jpg' className='rounded-t' />
                                <div className='flex m-3'>
                                    <label className="switch">
                                        <input type="checkbox" id="togBtn" />
                                        <div className="slider round"></div>
                                    </label>
                                    <button className='bg-gray-300 mr-auto hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded text-sm inline-flex items-center'>ویرایش</button>
                                </div>
                                <p className='p-2 text-center mb-5'>بیمه عمر خاورمیانه</p>
                            </div>
        
                    </div>
                </div>
        </div>
        </>
    )
}

export default Products
