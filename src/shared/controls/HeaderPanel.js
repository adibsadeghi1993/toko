import React from 'react';
import Avatar from 'shared/images/avatar.jpg';

const HeaderPanel = React.memo(() => {
    return (
        <div className="flex flex-row bg-backgroundPrimary w-full">
            <header className="py-4 border-b border-gray-400">
                <div className="px-16 flex justify-start">
                    <div className="flex flex-row gap-x-2 items-center">
                        <span className="text-white text-sm font-bold">
                            محمدرضا
                        </span>
                        <img src={Avatar} className="rounded avatar" alt="" srcset="" />
                    </div>
                </div>
            </header>
        </div>
    )
})
export default HeaderPanel;