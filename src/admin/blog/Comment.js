import React from "react";
import { useHistory } from "react-router";
import { ReactComponent as AlignLeft } from "shared/icons/action/format_align_left.svg";
import { ReactComponent as Close } from "shared/icons/action/close.svg";
import { ReactComponent as ThumbUp } from "shared/icons/action/thumb-up.svg";

const Comment = React.memo(() => {
  const history = useHistory();
  return (
    <>
      <div className="relative pb-72 h-100 z-10">
        <span className="mask bg-gradient-default opacity-90 "></span>
      </div>
      <div className="relative top-0 z-30 w-full px-2 md:px-30 -mt-72 ">
        <div className="card flex flex-col min-h-screen">
          {/* card header */}
          <div className="card-header py-5 px-2 md:px-6 border-b border-gray-100">
            <div className="grid grid-cols-4">
              <h3 className="col-span-2 text-primary-color pr-5 text-base font-semibold">
                کامنت ها
              </h3>
              <div className="col-span-2 flex justify-end ">
                <button
                  onClick={() => history.push("/blog")}
                  className="btn-hover text-xs font-semibold bg-secondary-background rounded-sm  text-white px-2 py-1 flex flex-row items-center justify-center gap-x-0.5"
                >
                  <AlignLeft className="w-3 h-3" />
                  بازگشت به وبلاگ
                </button>
              </div>
            </div>
          </div>
          {/* end header card */}
          <div className="card-body mt-4">
            <div className="flex flex-col">
              <div className="flex justify-center gap-x-2">
                <button className="btn-hover transition duration-500 border border-secondary-background hover:shadow-md  hover:bg-secondary-background hover:text-white px-5 py-2.5 text-secondary-background text-sm font-semibold rounded-md">
                  همه
                </button>
                <button className="btn-hover transition duration-500 border border-secondary-background hover:shadow-md hover:bg-secondary-background hover:text-white px-5 py-2.5 text-secondary-background text-sm font-semibold rounded-md">
                  رد
                </button>
                <button className="btn-hover transition duration-500 border border-secondary-background hover:shadow-md hover:bg-secondary-background hover:text-white px-5 py-2.5 text-secondary-background text-sm font-semibold rounded-md">
                  نمایش
                </button>
                <button className="btn-hover transition duration-500 bg-secondary-background px-5 py-2.5 text-white text-sm font-semibold rounded-md">
                  جدید
                </button>
              </div>
              {/* end box filter */}

              <div className="flex mt-6">
                <tabel className="w-full text-other-labelColor overflow-x-scroll">
                  <thead>
                    <tr>
                      <td className="text-center font-semibold py-3 text-thead px-6 border-b border-t border-other-borderColor pt-3 text-other-muted bg-other-bgGrayActiveItem">
                        ID_STATUS
                      </td>
                      <td className="text-center font-semibold py-3 text-thead px-6 border-b border-t border-other-borderColor pt-3 text-other-muted bg-other-bgGrayActiveItem">
                        MESSAGE
                      </td>
                      <td className="text-center font-semibold py-3 text-thead px-6 border-b border-t border-other-borderColor pt-3 text-other-muted bg-other-bgGrayActiveItem">
                        CREATION
                      </td>
                      <td className="text-center font-semibold py-3 text-thead px-6 border-b border-t border-other-borderColor pt-3 text-other-muted bg-other-bgGrayActiveItem">
                        NAME
                      </td>
                      <td className="text-center font-semibold py-3 text-thead px-6 border-b border-t border-other-borderColor pt-3 text-other-muted bg-other-bgGrayActiveItem">
                        عنوان پست
                      </td>
                      <td className="text-center font-semibold py-3 text-thead px-6 border-b border-t border-other-borderColor pt-3 text-other-muted bg-other-bgGrayActiveItem">
                        عملیات
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-6 py-4 font-normal text-sm">جدید</td>
                      <td className="px-6 py-4 font-normal text-sm">salam</td>
                      <td className="px-6 py-4 font-normal text-sm">
                        30/03/1400 01:46:00 ب.ظ
                      </td>
                      <td className="px-6 py-4 font-normal text-sm"></td>
                      <td className="px-6 py-4 font-normal text-sm">
                        اگر زمین می لرزد؛ بیمه زلزله را انتخاب کنید!
                      </td>
                      <td className="px-6 py-4 font-normal text-sm">
                        <div className="flex justify-center gap-x-2">
                          <button className="btn-hover bg-secondary-background flex flex-row items-center gap-x-1 px-2 py-1 text-white text-xs font-semibold rounded-md">
                            <ThumbUp className="w-3 h-3 mb-0.5" />
                            <span>تایید</span>
                          </button>
                          <button className="btn-hover bg-error-background flex flex-row items-center gap-x-0.5 px-2 py-1 text-white text-xs font-semibold rounded-md">
                            <Close className="w-3 h-3 font-black" />
                            <span>رد</span>
                          </button>
                          <button className="btn-hover bg-success-background flex flex-row items-center gap-x-0.5 px-2 py-1 text-other-labelColor text-xs font-semibold rounded-md">
                            <AlignLeft className="w-3 h-3" />
                            <span>پاسخ</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </tabel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Comment;
