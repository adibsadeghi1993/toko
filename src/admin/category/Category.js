import React, { useContext, useEffect } from "react";
import { DEFAULT_PAGE_NUMBER, DEFAULT_ROW } from "config/constant";
import { useHistory } from "react-router-dom";
import { ReactComponent as AlignLeft } from "shared/icons/action/format_align_left.svg";
import TableShowCategory from "./panel/TableShowCategory";
import { CategoryContext } from "./state/State";

const Category = React.memo(() => {
  const history = useHistory();

  const { getCategories } = useContext(CategoryContext);

  useEffect(() => {
    getCategories?.(DEFAULT_PAGE_NUMBER, DEFAULT_ROW);
  }, [getCategories]);

  return (
    <>
      <div className="relative pb-72 h-100 z-10">
        <span className="mask bg-secondary-background "></span>
      </div>
      <div className="relative top-0 z-30 w-full px-30 -mt-72 ">
        <div className="card flex flex-col min-h-screen">
          <div className="card-header py-5 px-6 border-b border-gray-100">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <h3 className="text-primary-color pr-5 text-otherCaption  text-center lg:text-right">
                دسته بندی پست
              </h3>
              <div className="flex items-center">
                <button
                  onClick={() => history.push("/category/add")}
                  className="btn-hover bg-secondary-background rounded-md text-sm font-semibold  text-white px-2 py-1 lg:py-3 lg:px-30 flex flex-row items-center justify-center gap-x-0.5"
                >
                  <AlignLeft className="w-3 h-3" />
                  افزودن دسته بندی
                </button>
              </div>
            </div>
          </div>
          {/* end header box */}
          <div className="overflow-hidden">
            <TableShowCategory />
          </div>
        </div>
      </div>
    </>
  );
});

export default Category;
