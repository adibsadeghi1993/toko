import React from "react";
import Top from "admin/members/Top";
import TextInputControl from "shared/controls/TextInputControl";
import TextAreaControl from "shared/controls/TextAreaControl";
import Percents from "./panels/Percents";

export default React.memo(() => {
  return (
    <>
      <Top />
      <div className="relative top-0 z-30 w-full px-30 -mt-72 shadow-lg">
        <div className="card flex flex-col min-h-screen">
          <div className="card-header py-5 px-4 border-b border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <h3 className="text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right">
                کمپین
              </h3>
            </div>
          </div>
          <div className="flex flex-col px-4 py-4 space-y-4">
            <div className="flex flex-row">
              <div>
                <TextInputControl placeholder="نام کمپین" />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-96">
                <TextAreaControl placeholder="توضیحات" rows={4} />
              </div>
            </div>
            <Percents />
          </div>
        </div>
      </div>
    </>
  );
});
