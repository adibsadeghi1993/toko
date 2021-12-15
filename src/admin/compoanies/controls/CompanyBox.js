import React from "react";

import Amz from "shared/images/brand/amz.jpg";
export default React.memo(({ item }) => {
  return (
    <div className="order-2 col-span-full lg:col-span-4  bg-white">
      <div className="card card-profile mb-0 shadow-lg pb-6">
        <div className="profile-header">
          <span className="mask bg-gradient-colorpe opacity-70" />
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="order-1">
            <div className="relative rounded-full">
              <img src={Amz} alt={"amz"} className="profile-image" />
            </div>
          </div>
        </div>
        {/* end profile img */}
        <div className="card-header bg-white text-center border-0 pt-12 lg:px-6 px-6">
          <div className="flex flex-row justify-between items-center">
            <label className="custom-toggle float-right pt-2">
              <input type="checkbox" className="hidden" />
              <span
                className="custom-toggle-slider rounded-full"
                data-label-on="فعال"
                data-label-off="غیرفعال"
              ></span>
            </label>

            <span className="btn btn-sm btn-info mr-6">ویرایش</span>
          </div>
        </div>
        {/* end header */}
        <div className=" pt-0">
          <div className="flex justify-center">
            <h3 className="pt-6 text-primary-color text-base font-semibold">خاورمیانه</h3>
          </div>
        </div>
      </div>
    </div>
  );
});
