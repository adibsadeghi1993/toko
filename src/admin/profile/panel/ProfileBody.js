import React from 'react';
const ProfileBody = React.memo(() => {
    return (
        <div className="grid grid-cols-2 gap-x-4 mt-4 ">
            <div className="px-4 flex flex-col space-y-4">
                <div className="flex flex-col">
                    <label>نام</label>
                    <input type="text" className="p-2 mt-1 bg-white border border-gray-500 rounded-md" />
                </div>
                <div className="flex flex-col">
                    <label>نام کاربری</label>
                    <input type="text" className="p-2 mt-1 bg-white border border-gray-500 rounded-md" />
                </div>
                <div className="flex flex-col">
                    <label>شبا</label>
                    <input type="text" className="p-2 mt-1 bg-white border border-gray-500 rounded-md" />
                </div>
            </div>
            <div className="px-4 flex flex-col space-y-4">
                <div className="flex flex-col">
                    <label>نام خانوادگی</label>
                    <input type="text" className="p-2 mt-1 bg-white border border-gray-500 rounded-md" />
                </div>
                <div className="flex flex-col">
                    <label>ایمیل</label>
                    <input type="text" className="p-2 mt-1 bg-white border border-gray-500 rounded-md" />
                </div>
                <div className="flex flex-col">
                    <label>شماره تماس</label>
                    <input type="text" className="p-2 mt-1 bg-white border border-gray-500 rounded-md" />
                </div>
            </div>
            <div className="col-span-full px-4 mt-4">
                <div className="flex flex-col">
                    <label>مستندات</label>
                    <input type="text" className="p-2 mt-1 bg-white border border-gray-500 rounded-md" />
                </div>
            </div>
        </div>
    )
})
export default ProfileBody;