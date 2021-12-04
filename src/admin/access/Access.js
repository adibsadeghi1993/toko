import React, { useContext } from 'react';
import { BoxLoader } from 'shared/controls/Loader';
import AccessList from 'admin/access/panel/AccessList';
import SellNetwork from 'admin/access/panel/SellNetwork';
import { AcceessContex } from 'admin/access/state/AccessState';

const Access = React.memo(() => {
    const { loading, access } = useContext(AcceessContex)
    return (
        <>
            <div className="flex flex-col px-4 mt-8">
                <BoxLoader loading={!!loading} />
               <div className="px-2">
                    <h2>دسترسی ها</h2>
                    <div className="divide-border h-0.5 mt-1" />
               </div>
                <div className="border-r-2 border-l-2 border-gray-300 p-2">
                    <AccessList />
                    {access.indexOf('sell_network') >= 0 && (
                        <SellNetwork />
                    )}
                </div>

            </div>

            <div className="flex-grow" />
        </>
    )
})

export default Access;