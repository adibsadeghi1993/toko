import { SaleContext } from 'admin/sale/state/SaleState'
import React, { useContext, useEffect, useState } from 'react'
import Info_treatment_table from './Info_treatment_table'
import Treatment_people from './Treatment_people'
import Treatment_Model from './Treatment_Model';
import Treatment_model_submit from './Treatment_model_submit';

const Information_treatment = React.memo(({ setshow_info, setshowStatus, ins_status }) => {


    const { insurance_status, statuses, dispatch } = useContext(SaleContext)
    const [showModal, setshowModal] = useState(false)
    const [showSubmit, setshowsubmit] = useState(false)
    const [showSubmitModal, setshowSubmitModal] = useState(false)

    const nextbuttonindex = Object.keys(statuses).findIndex(stat => stat == ins_status)
    const nextbutton =  Object.keys(statuses)[nextbuttonindex + 1 ]
    const nextbuttonValue = Object.values(statuses)[nextbuttonindex + 1 ]


    useEffect(() => {
        dispatch({type: 'set_insurance', payload: 2 })
    }, [])

    const handlechange = () => {

        if(nextbutton !== 'صادر شد') {
            dispatch({type: 'set_insurance_status', payload: nextbutton });
            dispatch({type: 'set_status', payload: nextbuttonValue });
            dispatch({type: 'set_insurance', payload: 2 });
            setshow_info(false)
        } else {
            setshowModal(true)
        }

        if(nextbutton === undefined){
            dispatch({type: 'set_insurance_status', payload: 'انتظار تکمیل اطلاعات' });
            dispatch({type: 'set_status', payload: 200 });
            dispatch({type: 'set_insurance', payload: 2 });
        }
    }
    return (
            <>
            
            <Info_treatment_table />


            <div className='pt-2 px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                    <h3 className='text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right'>اطلاعات افراد</h3>
                </div>
            </div>
            <Treatment_people setshowStatus={setshowStatus} />

            <div className='pt-2 px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                    <h3 className='text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right'>رویدادها</h3>
                </div>
            </div>

            <div className='m-2 border h-24 rounded'></div>
                                    
            { showModal && <Treatment_Model setshowModal={setshowModal} setshowsubmit={setshowsubmit} />}
            { showSubmitModal && <Treatment_model_submit setshowSubmitModal={setshowSubmitModal} />}

            <div className='flex justify-between mx-5'>
                <div>
                    {showSubmit &&  <button className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`} onClick={() => setshowSubmitModal(true)}>ثبت اسکن بیمه نامه</button>}
                    {(nextbutton !== 'پرداخت شده' && (insurance_status !== 'لغو شد' && !showSubmit))  &&  <button className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`} onClick={() => handlechange()}>{(nextbutton === undefined) ? 'انتطار تکمیل اطلاعات' :  nextbutton }</button>}
                     <button className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`}>لغو شده</button>
                </div>
                <button className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`} onClick={() => setshow_info(false)}>بستن</button>
            </div>
            </>
        
    )
})

export default Information_treatment
