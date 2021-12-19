import React from 'react'
import Res_insurance from './Res_insurance'


const Info_responsibility = React.memo(({ setshow_info , show_info, ins_status }) => {
    return (
        <tr className={` ${ !show_info && 'hidden'}`}>
                <td className='bg-gray-200 p-2' colSpan='100%'>
                    <Res_insurance setshow_info={setshow_info} ins_status={ins_status}  />
                </td>
                </tr>
    )
})

export default Info_responsibility
