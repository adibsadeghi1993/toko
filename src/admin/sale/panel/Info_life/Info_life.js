import { SaleContext } from 'admin/sale/state/SaleState'
import React, { useContext } from 'react'
import Info_beneficiaries from './Info_beneficiaries'
import Info_call from './Info_call'
import Info_covers from './Info_covers'
import Info_insurance from './Info_insurance'
import Info_table from './Info_table'
import Payment_life from './Payment_life'

function Info_life({ setshow_info, show_info }) {

    const { showEdit, dispatch, showPayment, showPaymentTable } = useContext(SaleContext)

    return (
        <tr className={` ${ !show_info && 'hidden'}`}>
                            <td className='bg-gray-200 p-2' colSpan='100%'>
                      <div className='card flex flex-col'>
                        <div className='py-5 px-4 border-b border-gray-100'>
                            <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                                <h3 className='text-primary-color pr-3 font-bold text-lg   text-center lg:text-right xl:text-2xl'>{ (!showEdit && !showPayment) && 'مشخصات بیمه گذار' } { (showEdit && !showPayment) && 'مشخصات بیمه شده' } {(!showEdit && showPayment) && 'اقساط'}</h3>
                                <div className=''>
                                    <button className='p-2 shadow rounded bg-gray-100 ml-2 hover:bg-gray-200' onClick={() => {dispatch({ type: "set_showEdit", payload: !showEdit }); dispatch({ type: "set_showPayment", payload: false })}} >{ (!showEdit && !showPayment) && 'ویرایش'} { ( showEdit && !showPayment ) && 'جزییات'} {(!showEdit && showPayment) && 'ویرایش'}</button>
                                    { !showPayment && <button className='p-2 shadow rounded bg-gray-100 hover:bg-gray-200' onClick={() => {dispatch({ type: "set_showPayment", payload: !showPayment }); dispatch({ type: "set_showEdit", payload: false })}}>اقساط</button>}
                                    { showPayment && <button className='p-2 shadow rounded bg-gray-100 hover:bg-gray-200' onClick={() => dispatch({ type: "set_showPayment", payload: !showPayment })}>جزییات</button>}
                                </div>
                            </div>
                        </div>
                        
                        
                        { (!showEdit && !showPayment) &&
                        <>
                        <Info_table />

                        <div className='pt-2 px-4'>
                            <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                                <h3 className='text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right'>مشخصات بیمه شده</h3>
                            </div>
                        </div>
                        <Info_table />
                           

                        <div className='pt-2 px-4'>
                            <div className='flex flex-col md:flex-row justify-between items-center'>
                                <h3 className='text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right'>اطلاعات تماس بیمه گذار</h3>
                            </div>
                        </div>
                        <Info_call />


                        <div className='pt-2 px-4'>
                            <div className='flex flex-col md:flex-row justify-between items-center'>
                                <h3 className='text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right'>اطلاعات بیمه نامه</h3>
                            </div>
                        </div>
                        <Info_insurance />

                        <div className='pt-2 px-4'>
                            <div className='flex flex-col md:flex-row justify-between items-center'>
                                <h3 className='text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right'>پوشش ها</h3>
                            </div>
                        </div>
                        <Info_covers />

                        <div className='border-b border-gray-400'>
                            <div className='pt-2 px-4 '>
                                <div className='flex flex-col md:flex-row justify-between items-center'>
                                    <h3 className='text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right'>جداول</h3>
                                </div>
                            </div>
                            <div className='flex justify-center items-center my-5'>
                                <button className='px-4 py-2 border rounded shadow mx-1 hover:bg-gray-100'>دانلود جدول پوشش ها </button>
                                <button className='px-4 py-2 border rounded shadow mx-1 hover:bg-gray-100'>دانلود جدول مستمری</button>
                            </div>
                        </div>

                        <div className='pt-2 px-4'>
                            <div className='flex flex-col md:flex-row justify-between items-center'>
                                <h3 className='text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right'>ذینفعال</h3>
                            </div>
                        </div>

                        <Info_beneficiaries />


                        <div className='pt-2 px-4'>
                            <div className='flex flex-col md:flex-row justify-between items-center'>
                                <h3 className='text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right'>آخرین لاگ سفارش</h3>
                            </div>
                        </div>

                        <div className='flex justify-center items-center'>
                            <input className='p-2 rounded shadow border w-full mx-5 focus:outline-none focus:border-blue-400' />
                        </div>
                        
                        </> }

                        {
                            (showEdit && !showPayment) &&
                            <div className='p-5'>
                                <div className='flex flex-col px-5 my-2 '>
                                    <label for='code'>Ref code</label>
                                    <input id='code' className='focus:outline-none focus:border-blue-300 border rounded p-1'/>
                                </div>
                                <div className='flex flex-col px-5 my-2 '>
                                    <label for='payment'>Payment ref</label>
                                    <input  id='payment' className='focus:outline-none focus:border-blue-300 border rounded p-1'/>
                                </div>
                            </div>
                        }

                        {
                            (!showEdit && showPayment) && 
                            <Payment_life />
                        }

                        <div className='flex justify-between mx-5'>
                           { showEdit && <button className='px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200'>ثبت</button>}
                           { showPayment && <button className='px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200' onClick={() => dispatch({type: 'set_showPaymentTable', payload: !showPaymentTable})}>ثبت</button>}
                            <button className={`${ !showEdit && 'mr-auto'  } px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`} onClick={() => setshow_info(false)}>بستن</button>
                        </div>
                      </div>
                    </td>
                    </tr>
    )
}

export default Info_life

