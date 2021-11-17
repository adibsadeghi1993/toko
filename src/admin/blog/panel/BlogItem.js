import React from "react";
import { ReactComponent as Trash } from "shared/icons/action/trash-can.svg";

const BlogItem = React.memo(() => {
  return (
    <div className="flex flex-1  py-8 bg-gray-100 mt-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
        {/* start modal */}
        <div className="px-5 relative">
          {/* date cart */}
          <div className="date-cart w-200 h-200 absolute flex p-2.5 border border-gray-200  items-center">
            <div className="day text-5xl mx-2.5 items-baseline mt-2.5 text-other-colorDay">
              24
            </div>
            <div className="self-start">
              <div className="month font-bold">8</div>
              <div className="year font-light text-base">1400</div>
            </div>
          </div>
          {/* end date cart */}
          <div className="card-blog bg-white mt-90 mr-3 inline-block relative w-full mb-30 rounded-md">
            <div className="card-image h-3/5 relative overflow-hidden mx-15">
              <div className="relative block overflow-hidden w-full p-0">
                <img
                  className="w-full h-full rounded-md pointer-events-none"
                  src="https://acp.tooko.co/Files/post-6252/poster.jpg?v=6a9f935a-bcc6-4be2-8f56-3bf812f134c9"
                />
              </div>
            </div>
            {/* end image */}
            <div className="card-body1 px-30 py-15">
              <h6 className="text-other-colorTitleCard">بیمه</h6>
              <h4 className="card-caption mt-5 font-bold mb-2 overflow-ellipsis overflow-hidden">
                <a className="text-xl font-bold hover:text-other-linkHover cursor-pointer ">
                  در مورد بیمه استارت آپ چه می دانید؟
                </a>
              </h4>
              <p className="card-description overflow-ellipsis overflow-hidden">
                استارت آپ چیست؟ آیا با تاریخچه استارتاپ آشنایی دارید؟ چگونه
                می‌توان برای استارت آپ بیمه خریداری کرد؟ آیا در جهان امروز
                خریداری بیمه برای استارت آپ نیاز است؟ انواع بیمه برای استارت
                آپ‌ها کدام ...
              </p>
            </div>
            {/* end body */}
            <div className="card-btn flex flex-row gap-x-2 justify-center">
              <div className="flex flex-row gap-x-px btn-warning bg-orange items-center rounded-3xl">
                <Trash className="w-2.5 h-3 text-white" />
                <span className="text-white">ویرایش</span>
              </div>
              <div className="flex flex-row gap-x-px btn-warning bg-error-background items-center rounded-3xl">
                <Trash className="w-2.5 h-3 text-white" />
                <span className="text-white">حذف</span>
              </div>
            </div>
          </div>
        </div>
        {/* end modal */}
      </div>
    </div>
  );
});

export default BlogItem;
