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
                                    <option value={item.promoter_id}>{item.name}</option>
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
                                        <option value={item.id}>{item.name}</option>
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
                        <div className="mt-4">
                            <div className="w-full p-3">
                                <h2>{key}</h2>
                            </div>
                            {percents[key].map((item, inx) => (
                                <Item_access item={item} inx={inx} key={key} />
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