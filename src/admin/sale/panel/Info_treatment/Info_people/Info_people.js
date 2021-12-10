import { SaleContext } from 'admin/sale/state/SaleState'
import React, { useContext } from 'react'
import Insurance_person from './Insurance_person'
import Info_person from './Info_person'

function Info_people({ setshow_info }) {
    const { insurer_treatment } = useContext(SaleContext)
    return (
        <>  
            {
                insurer_treatment ?
                // if بیمه گذار display specific information
                <Insurance_person setshow_info={setshow_info} />
                : 
                <Info_person setshow_info={setshow_info} />
            }
            
        </>
    )
}

export default Info_people
