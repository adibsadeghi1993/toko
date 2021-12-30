import { SaleContext } from 'admin/sale/state/SaleState'
import  moment  from 'jalali-moment'
import React, { useContext, useState } from 'react'
import Time_manipulation from '../../../controls/Time_manipulation'


const Payment_life = React.memo(({ setshow_info }) => {

    const { showPaymentTable, payments, dispatch } = useContext(SaleContext)
    const [show_edit, setshow_edit] = useState(false)

    const [day, setday] = useState('')
    const [month, setmonth] = useState(1)
    const [year, setyear] = useState('')
    const [amount, setamount] = useState('')
    const [id, setid] = useState('')


    const handleEdit = ( payment ) => {
        moment.locale('fa')
        const date = moment(payment['سررسید'], 'jYYYY/jM/jD')
        setday(date.format('D'))
        setyear(date.format('YYYY'))
        setmonth(date.format('M'))
        setamount(payment['مبلغ'])
        setid(payment.id)
    }


    const handleChange = () => {
        let validDate
        try {
            validDate = moment((year +'/' + month + '/' + day), 'jYYYY/jM/jD').isValid()
        } catch(err) {
            window.alert("تاریخ وارد شده معتبر نیست!")
          }
        
        if(validDate){
            const update = {id : id, date: year +'/' + month + '/' + day, amount: amount } 
            dispatch({type: 'change_payment', payload: update })
            setshow_edit(false)
        } else {
            window.alert("تاریخ وارد شده معتبر نیست!")
        }
        
    }

    return (
        <>     
            <div className='relative lg:flex lg:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1'>
                <table className=''>
                <thead className='text-sm bg-gray-100'>
                    <tr>
                    <th className='whitespace-nowrap px-8 border border-gray-200'>سررسید</th>
                    <th className='whitespace-nowrap px-8 border border-gray-200'>مبلغ</th>
                    <th className='whitespace-nowrap px-8 border border-gray-200 '>وضعیت</th>
                    <th className='whitespace-nowrap px-8 border border-gray-200 py-2'>تاریخ پیوست</th>
                    <th className='whitespace-nowrap px-8 border border-gray-200 py-2'>فایل پیوست پرداخت</th>
                    <th className='whitespace-nowrap px-10 border border-gray-200 py-2'></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        payments?.map((payment, index) => (
                            <tr key={index} className="bg-emerald-200 text-center text-sm hover:text-blue-500 cursor-pointer" >
                                <td className='py-2 border'>{payment['سررسید']}</td>
                                <td className='py-2 border'>{payment['مبلغ']}</td>
                                <td className='py-2 border'>{payment['وضعیت']}</td>
                                <td className='py-2 border'>{payment['تاریخ پیوست']}</td>
                                <td className='py-2 border'>{payment['فایل پیوست پرداخت']}</td>
                                <td className='py-2 border text-blue-500 px-2'>
                                    <span onClick={() => {setshow_edit(true); handleEdit(payment)}}>ویرایش | </span>
                                    <span onClick={() => dispatch({type: 'delete_payment', payload: payment.id })}>حذف</span>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
            </div>


            {
            show_edit && 
            <div className='m-2 p-5 rounded shadow'>
            <div className='flex'>
                <div className='flex text-gray-400 items-start flex-col ml-2 flex-auto'>
                    <label className='mb-1'>روز</label>
                    <input type="number" dir='ltr' className='p-2 border rounded focus:outline-none focus:border-blue-400 rtl' value={day} onChange={(e) => setday(e.target.value)}/>
                </div>
                <div className='flex text-gray-400 items-start flex-col ml-2 flex-auto'>
                   <Time_manipulation month={month} setmonth={setmonth} />
                </div>

                <div className='flex text-gray-400 items-start flex-col ml-2 flex-auto'>
                    <label className='mb-1'>سال</label>
                    <input type="number" dir='ltr' className='p-2 border rounded focus:outline-none focus:border-blue-400 rtl' value={year} onChange={(e) => setyear(e.target.value)}/>
                </div>

                <div className='flex text-gray-400 items-start flex-col ml-2 flex-auto'>
                    <label className='mb-1'>مبلغ</label>
                    <input type="number" dir='ltr' className='p-2 border rounded focus:outline-none focus:border-blue-400 rtl' value={amount} onChange={(e) => setamount(e.target.value)}/>
                </div>
            </div>
            <div className='flex justify-end mt-4'>
                <button className=' shadow px-4 py-2 text-white bg-blue-500 rounded hover:shadow-lg' onClick={() => handleChange()}>بروزرسانی</button>
                <button className='mr-3 shadow px-4 py-2 bg-gray-300 text-white rounded hover:shadow-lg' onClick={() => setshow_edit(false)}>انصراف</button>
            </div>
            </div>
        }
            <button className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`} onClick={() => setshow_info(false)}>ثبت</button>
            <button className={`px-4 py-2 border bg-gray-100 shadow m-3 rounded hover:bg-gray-200`} onClick={() => setshow_info(false)}>بستن</button>
        
        </>
    )
})

export default Payment_life
