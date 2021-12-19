import React, { useEffect, useContext } from 'react';
import { AcceessContex } from '../state/AccessState';
import Item_access from './Item_access';

const SellNetwork = React.memo(() => {
    const { isUpdate,
        promoter,
        promoter_level,
        percents,
        PercentsDefault,
        set_promoter_level,
        promoter_level_item,
        MemmberLevel,
        updatePercent,
        message_success,
        dispatch
    } = useContext(AcceessContex)

    useEffect(() => {
        dispatch({ 'type': 'set_loading', payload: true })
        promoter_level()
    }, [])
    // const getTitle = (item) => {
    //     switch (parseInt(item)) {
    //         case 1:
    //             return 'اول'
    //         case 2:
    //             return 'دوم'
    //         case 3:
    //             return 'سوم'
    //         case 4:
    //             return 'چهارم'
    //         case 5:
    //             return 'پنجم'
    //         case 6:
    //             return 'ششم'
    //         case 7:
    //             return 'هفتم'
    //         case 8:
    //             return 'هشتم'
    //         case 9:
    //             return 'نهم'
    //         case 10:
    //             return 'دهم'
    //         case 11:
    //             return 'یازدهم'
    //         case 12:
    //             return 'دوازدهم'
    //     }
    // }
    return (
        <div className="mt-4">
            <h2>شبکه فروش</h2>
            <div className="divide-border h-0.5 mt-1" />
            <div className="mt-4">
                <div className="flex flex-row justify-between md:justify-start gap-x-8">
                    <div className="flex flex-col">
                        <label>وضعیت پروموتر</label>
                        <select className="select-box p-2 w-64 text-sm bg-white block border rounded mt-1" onChange={(el) => el.target.value != -1 && MemmberLevel(el.target.value)}>
                            <option value="-1">انتخاب</option>
                            {promoter && promoter.length > 0 && (
                                promoter.map((item, index) => (
                                    <option key={index} value={item.promoter_id}>{item.name}</option>
                                ))
                            )}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label>سرگروه</label>
                        <select className="select-box p-2 w-64 text-sm bg-white block border rounded mt-1" onChange={(el) => el.target.value != -1 && PercentsDefault(el.target.value)}>
                            <>
                                <option value="-1">انتخاب</option>
                                {promoter_level_item && promoter_level_item.length > 0 ? (
                                    promoter_level_item.map((item, index) => (
                                        <option key={index} value={item.id}>{item.name}</option>
                                    ))
                                ) : (
                                    <option value="100001">تست نمایش دیتا</option>
                                )}
                            </>
                        </select>
                    </div>
                </div>

                {percents && (
                    Object.keys(percents).map((key, index) => (
                        <div className="mt-4" key={index}>
                            <div className="w-full p-3">
                                <h2>{key}</h2>
                            </div>
                            {percents[key].map((item, inx) => (
                                <>
                                    <div className={`${item.periods.length == 1 ? 'flex flex-row gap-x-2 space-y-2' : 'w-full'}`}>
                                        <div className={`${item.periods.length == 1 ? 'w-10/12' : 'w-full'} rounded-md bg-gray-400 p-3 mt-2`}>
                                            <h2>شرکت {item.company_name}</h2>
                                        </div>
                                        {item.periods.length == 1 && (
                                            <>
                                                <div className="w-1/6 bg-gray-300 rounded-md p-3 text-center text-sm">
                                                    <input type="number" data-index={`${key}#0#0`} onChange={(el) => dispatch({ type: 'update_percents', payload: el.target })} className="bg-gray-300 text-center" defaultValue={item.periods[0].percent} min={0.1} max={0.9} />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    {item.periods.length > 1 && (
                                        item.periods.map((itm, ind) => (
                                            <div className="mt-2 flex flex-row gap-x-2" key={index}>
                                                <div className="w-10/12 bg-gray-300 rounded-md p-3">
                                                    سال {getTitle(itm.year)}
                                                </div>
                                                <div className="w-1/6 bg-gray-300 rounded-md p-3 text-center text-sm">
                                                    <input type="number" data-index={`${key}#${inx}#${ind}`} onChange={(el) => dispatch({ type: 'update_percents', payload: el.target })} className="bg-gray-300 text-center" defaultValue={itm.percent} min={0.1} max={0.9} />
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </>
                            ))}

                        </div>
                    ))
                )}
                {!!isUpdate && (
                    <button className="mt-4 text-white mx-2 py-2 px-6 rounded-md btn" onClick={() => updatePercent()}>ثبت</button>
                )}
                {!!message_success && (
                    <p className="flex justify-center bg-green-500 mt-4 px-4 text-white rounded-sm p-2">{message_success}</p>
                )}
            </div>
        </div >
    )
})

export default SellNetwork;