import { SaleContext } from 'admin/sale/state/SaleState'
import  moment  from 'jalali-moment'
import React, { useContext, useState } from 'react'
import Time_manipulation from './Time_manipulation'
import { DatePicker } from "jalali-react-datepicker";


const  Payment_life = React.memo(() => {

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
        console.log(payment['سررسید'])
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



        { !showPaymentTable ?
            <div className='flex justify-center mt-5 mx-5'>
                <input className='p-2 mx-2 border rounded focus:outline-none focus:border-blue-300 flex-grow' placeholder='شماره بیمه نامه'/>
                {/* <input className='p-2 mx-2 border rounded focus:outline-none focus:border-blue-300 flex-grow' placeholder='تاریخ صدور'/> */}
                <div className='p-2 mx-2 focus:outline-none focus:border-blue-300 flex-grow flex'>
                    <label className='text-gray-400'>تاریخ صدور:</label>
                    <DatePicker />
                </div>
                
            </div>
            :

            <>
            <div className='flex justify-evenly mt-3'>
                <div className='flex mx-2'>
                    <h2 className='text-lg ml-5'>شماره بیمه نامه</h2>
                    <p>00894432244</p>
                </div>
                <div className='flex mx-2'>
                    <h2 className='text-lg ml-5'>تاریخ صدور</h2>
                    <p>1400/09/09</p>
                </div>
            </div>
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
                            <tr key={index} className="bg-emerald-200 text-center text-sm hover:text-blue-500 cursor-pointer" onClick={() => {setshow_edit(true); handleEdit(payment)}}>
                                <td className='py-2 border'>{payment['سررسید']}</td>
                                <td className='py-2 border'>{payment['مبلغ']}</td>
                                <td className='py-2 border'>{payment['وضعیت']}</td>
                                <td className='py-2 border'>{payment['تاریخ پیوست']}</td>
                                <td className='py-2 border'>{payment['فایل پیوست پرداخت']}</td>
                                <td className='py-2 border text-blue-500'>ویرایش</td>
                            </tr>
                        ))
                    }
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
            </>
        }
        </>
    )
})

export default Payment_life
