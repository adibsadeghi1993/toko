import React, { useContext, useState } from 'react'
import { AcceessContex } from '../state/AccessState'
import { ReactComponent as Arrow_down } from '../../../shared/icons/arrow-down.svg'
import { ReactComponent as Arrow_up } from '../../../shared/icons/arrow-up.svg'

function Item_access({ item, inx, key }) {

    const { dispatch } = useContext(AcceessContex)
    const [show_plans, setshow_plans] = useState(false)
    return (
        <>
            <div className='w-full' onClick={() => setshow_plans(!show_plans)}>
                <div className={` 'w-full' rounded-md bg-gray-400 flex justify-between p-3 mt-2 ${item.plans && 'cursor-pointer'} `}>
                    <h2>شرکت {item.company_name}</h2>
                    <span>
                    {   item.plans && (
                         show_plans ? <Arrow_up /> : <Arrow_down />
                        )
                    }
                    </span>
                         
                </div>
                {/* {item.periods.length == 1 && (
                    <>
                        <div className="w-1/6 bg-gray-300 rounded-md p-3 text-center text-sm">
                            <input type="number" data-index={`${key}#0#0`} onChange={(el) => dispatch({ type: 'update_percents', payload: el.target })} className="bg-gray-300 text-center" defaultValue={item.periods[0].percent} min={0.1} max={0.9} />
                        </div>
                    </>
                )} */}
            </div>
            {item.periods && (
                item.periods.map((itm, ind) => (
                    <>
                    <div className="mt-2 flex flex-row gap-x-2">
                        <div className="w-10/12 bg-gray-300 rounded-md p-3">
                            {itm.year}
                        </div>
                        <div className="w-1/6 bg-gray-300 rounded-md p-3 text-center text-sm">
                            <span>%</span>
                            <input type="number"
                                data-index={`${key}#${inx}#${ind}`}
                                onChange={(el) => dispatch({ type: 'update_percents', payload: el.target })}
                                className="bg-gray-300 text-center w-5"
                                defaultValue={itm.percent}
                                min={1}
                                max={100}
                                    /> 
                        </div>
                    </div>
                    </>
                ))
            )}
            <div className='flex flex-wrap'>
                            {(item.plans && show_plans) && item.plans.map((pln) =>
                            <div className='flex w-1/2 text-sm'>
                                <div className='p-5 border rounded-lg px-10 my-2 w-full ml-2'>
                                    {pln.plan}
                                </div>
                                <div className='p-5 border rounded-lg px-10 my-2 ml-2'>{pln.percent}%</div>
                            </div>
                            )
                        }</div>
        </>
    )
}

export default Item_access
