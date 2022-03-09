import Pagination from "admin/blog/panel/Pagination";
import { DEFAULT_PAGE_NUMBER, DEFAULT_ROW } from "config/constant";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { useEffect } from "react/cjs/react.development";
import { BoxLoader } from "shared/controls/Loader";
import { ReactComponent as AlignLeft } from "shared/icons/action/format_align_left.svg";
import PCategoryBody from "./panles/PCategoryBody";
import { CategoryProductContext } from "./state/State";

export default React.memo(() => {
  const { getList, loading, categories } = useContext(CategoryProductContext);
  const history = useHistory();
  const [page_number, setPageNumber] = useState(DEFAULT_PAGE_NUMBER);
  const [row] = useState(DEFAULT_ROW);

  useEffect(() => {
    !!page_number &&
      getList?.({
        page_number: page_number,
        row: row,
      });
  }, [page_number]);
  return (
    <>
      <BoxLoader loading={loading} />

      <div className="relative pb-72 h-100 z-10">
        <span className="mask bg-secondary-background "></span>
      </div>
      <div className="relative top-0 z-30 w-full px-30 -mt-72 ">
        <div className="card flex flex-col min-h-screen ">
          <div className="card-header py-5 px-6 border-b border-gray-100">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <h3 className="text-primary-color pr-5 text-otherCaption  text-center lg:text-right">
                دسته بندی محصول
              </h3>
              <div className="flex items-center">
                <button
                  onClick={() => history.push("/product/add/category")}
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
            <PCategoryBody categories={categories} />
          </div>
          <div className="mt-20 mb-5 text-sm">
            {!!categories && categories?.count && (
              <Pagination
                total={categories?.count}
                setCurrentPage={setPageNumber}
                currentPage={page_number}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
});
