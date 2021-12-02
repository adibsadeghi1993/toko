import React from "react";

import Amz from "shared/images/brand/amz.jpg";
export default React.memo(() => {
  return (
    <div className="order-2 ">
      <div className="card card-profile">
        <div className="profile-header">
          <span className="mask bg-gradient-colorpe opacity-70" />
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="order-1">
            <div className="relative">
              <img src={Amz} alt={"amz"} className="rounded-full profile-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
