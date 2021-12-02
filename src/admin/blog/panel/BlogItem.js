import React from "react";
import { ReactComponent as Trash } from "shared/icons/action/trash-can.svg";
import { ReactComponent as PencilSquare } from "shared/icons/action/pencil-square.svg";
import { BlogContext } from "../state/State";
import Pagination from "./Pagination";

const BlogItem = React.memo(() => {
  const { dataBlog } = React.useContext(BlogContext);
  const splitDate = (date) => {
    const dateSplit = date.split('-')
    let year = dateSplit[0]
    let month = dateSplit[1]
    let day = dateSplit[2]

    return { year, month, day }
  }
  return (
    <div className="flex flex-col  py-8 bg-gray-100 mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
        {!!dataBlog && dataBlog.map((item, index) => (
          < div className="px-15 relative" >
            {/* date cart */}
            < div className="date-cart w-200-1 h-200-1 absolute flex p-2.5 border border-gray-200  items-center" >
              <div className="day text-5xl mx-2.5 self-baseline mt-2.5 text-other-colorDay">
                {splitDate(item.date).day}
              </div>
              <div className="self-start">
                <div className="month font-bold">{splitDate(item.date).month}</div>
                <div className="year font-light text-base">{splitDate(item.date).year}</div>
              </div>
            </div>
            {/* end date cart */}
            <div className="card-blog bg-white mt-90 mr-3 inline-block relative w-full mb-30 rounded-md">
              <div className="card-image  h-3/5 relative -mt-30 mx-15 overflow-hidden zoom">
                <div className="relative block overflow-hidden w-full p-0">
                  <img
                    className="w-full h-full rounded-md pointer-events-none"
                    src={item.image}
                  />
                </div>
              </div>
              {/* end image */}
              <div className="card-body1 px-30 py-15">
                {/* start modal */}
                <h6 className="text-other-colorTitleCard">بیمه</h6>
                <h4 className="card-caption mt-5 font-bold mb-2 overflow-ellipsis overflow-hidden">
                  <a className="text-xl font-bold hover:text-other-linkHover cursor-pointer ">
                    {item.title}
                  </a>
                </h4>
                <p className="card-description overflow-ellipsis overflow-hidden">
                  {item.body}
                </p>
              </div>
              {/* end body */}
              <div className="card-btn flex flex-row gap-x-2 justify-center">
                <div className="flex flex-row gap-x-px btn-warning bg-orange items-center rounded-3xl cursor-pointer btn-hover">
                  <PencilSquare className="w-2.5 h-3 text-white" />
                  <span className="text-white">ویرایش</span>
                </div>
                <div className="flex flex-row gap-x-px btn-warning bg-error-background items-center rounded-3xl cursor-pointer btn-hover">
                  <Trash className="w-2.5 h-3 text-white" />
                  <span className="text-white">حذف</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        {!dataBlog && (
          <span>آیتمی جهت نمایش وجود ندارد!</span>
        )}

      </div>
      <Pagination />
    </div>
  );
});

export default BlogItem;
