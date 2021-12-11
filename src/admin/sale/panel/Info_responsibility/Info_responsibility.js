import { SaleContext } from 'admin/sale/state/SaleState'
import React, { useContext, useState } from 'react'
import Res_modal from './Res_modal'


const Info_responsibility = React.memo(({ setshow_info , show_info }) => {

    const { insurance_status, statuses, dispatch } = useContext(SaleContext)
    const [showSubmit, setshowsubmit] = useState(false)
    const [showSubmitModal, setshowSubmitModal] = useState(false)

    const nextbuttonindex = Object.keys(statuses).findIndex(stat => stat == insurance_status)
    const nextbutton =  Object.keys(statuses)[nextbuttonindex + 1 ]
    const nextbuttonValue = Object.values(statuses)[nextbuttonindex + 1 ]

    const handlechange = () => {

        if(nextbutton !== 'صادر شد') {
            dispatch({type: 'set_insurance_status', payload: nextbutton });
            dispatch({type: 'set_status', payload: nextbuttonValue });
            dispatch({type: 'set_insurance', payload: 3 });
            setshow_info(false)
        } else {
            setshowSubmitModal(true)
        }

        if(nextbutton === undefined){
            dispatch({type: 'set_insurance_status', payload: 'انتظار تکمیل اطلاعات' });
            dispatch({type: 'set_status', payload: 200 });
            dispatch({type: 'set_insurance', payload: 3 });
        }
    }

    return (
        <tr className={` ${ !show_info && 'hidden'}`}>
                <td className='bg-gray-200 p-2' colSpan='100%'>
                <div className='card flex flex-col'>
                    <div className='py-5 px-4 border-b border-gray-100'>
                        <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                            <h3 className='text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right'>اطلاعات درخواست</h3>
                        </div>
                    </div>
                   


                    <div className='relative lg:flex lg:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1'>
                        <table className='w-full'>
                        <thead className='text-sm bg-gray-200'>
                            <tr>
                            <th className='whitespace-nowrap px-4 '>شماره درخواست</th>
                            <th className='whitespace-nowrap px-4 '>نام</th>
                            <th className='whitespace-nowrap px-4  lg:text-right '>نام خانوادگی</th>
                            <th className='whitespace-nowrap px-4  lg:text-right py-2'>شماره تماس</th>
                            <th className='whitespace-nowrap px-4  lg:text-right py-2'>نوع فعالیت شغلی</th>
                            <th className='whitespace-nowrap px-4  lg:text-right py-2'>وضعیت</th>
                            <th className='whitespace-nowrap px-4  lg:text-right py-2'>نوع بیمه</th>
                            <th className='whitespace-nowrap px-4  lg:text-right py-2'>شاخه بیمه ای</th>
                            </tr>
                        </thead>
                        <tbody>
                                
                            <tr className="bg-emerald-200 text-center text-sm">
                                <td className='pl-1 py-2'>تست</td>
                                <td className='pl-1 py-2'>تست</td>
                                <td className='pl-1 py-2'>تست</td>
                                <td className='pl-1 py-2'>تست</td>
                                <td className='pl-1 py-2'>تست</td>
                                <td className='pl-1 py-2'>تست</td>
                                <td className='pl-1 py-2'>تست</td>
                                <td className='pl-1 py-2'>تست</td>
                            </tr>
                                
                        </tbody>
                        </table>
                </div>

                <div className='pt-2 mt-5 px-4'>
                     <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                         <h3 className='text-primary-color pr-3 font-bold  text-center lg:text-right text-sm'>در حال حاضر تحت پوشش کدام شرکت هستید؟</h3>
                    </div>
                 </div>

                 <input className='p-2 rounded border focus:outline-none focus:border-blue-400 mt-5 m-2' />


                 <div className='pt-2 mt-5 px-4'>
                     <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                         <h3 className='text-primary-color pr-3 font-bold  text-center lg:text-right text-sm'>لاگ سفارش</h3>
                    </div>
                 </div>

                 <input className='p-2 rounded border focus:outline-none focus:border-blue-400 mt-5 m-2' />

                    { showSubmitModal && <Res_modal setshowSubmitModal={setshowSubmitModal} setshowsubmit={setshowsubmit} />}


                
                    <div className='flex justify-between mx-5'>
                    <div>
                        {(nextbutton === 'صادر شد' && !showSubmit  ) &&  <button className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`} onClick={() => setshowSubmitModal(true)}> اسکن بیمه نامه</button>}
                        { showSubmit &&  <button className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`} onClick={() => {}}>دانلود اسکن بیمه نامه</button>}
                        {(insurance_status !== 'لغو شد' && nextbutton !== 'صادر شد')  &&  <button className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`} onClick={() => handlechange()}>{(nextbutton === undefined) ? 'انتطار تکمیل اطلاعات' :  nextbutton }</button>}
                        <button className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`}>لغو شده</button>
                    </div>
                    <button className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`} onClick={() => setshow_info(false)}>بستن</button>
                </div>
                </div>
                </td>
                </tr>
    )
})

export default Info_responsibility
