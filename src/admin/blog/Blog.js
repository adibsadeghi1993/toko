import React, { useContext, useEffect, useState } from "react";
import { ReactComponent as AlignLeft } from "shared/icons/action/format_align_left.svg";
import { useHistory } from "react-router-dom";
import FilterBox from "./panel/FilterBox";
import BlogItem from "./panel/BlogItem";
import { BlogContext } from "./state/State";
import { DEFAULT_PAGE_NUMBER, DEFAULT_ROW } from "config/constant";
import Pagination from "./panel/Pagination";

const Blog = React.memo(() => {
  const history = useHistory();
  const { getBlogs, blogs, update_page } = useContext(BlogContext);
  const [page_number, setPageNumber] = useState(DEFAULT_PAGE_NUMBER);

  useEffect(() => {
    getBlogs?.(page_number, DEFAULT_ROW);
  }, [page_number, update_page]);
  return (
    <>
      <div className="relative pb-72 h-100 z-10">
        <span className="mask bg-secondary-background "></span>
      </div>
      <div className="relative top-0 z-30 w-full px-30 -mt-72 ">
        <div className="card flex flex-col min-h-screen">
          <div className="card-header py-5 px-6 border-b border-gray-100">
            <div className="flex flex-col lg:flex-row justify-between my-30">
              <h3 className="text-primary-color pr-5 text-h3 text-center lg:text-right">
                پست ها
              </h3>
              <div className="flex flex-row justify-center gap-x-2 mt-4">
                <button
                  onClick={() => history.push("/blog/add")}
                  className="btn-hover bg-secondary-background rounded-r30 text-xs text-white px-2 py-1 lg:py-3 lg:px-30 flex flex-row items-center justify-center gap-x-0.5"
                >
                  <AlignLeft className="w-3 h-3" />
                  افزودن پست
                </button>
                <button
                  onClick={() => history.push("/blog/comment")}
                  className="btn-hover bg-error-background rounded-r30 text-xs text-white px-2 py-1 lg:py-3 lg:px-30 flex flex-row items-center justify-center gap-x-0.5"
                >
                  <AlignLeft className="w-3 h-3" />
                  مدیریت کامنت ها
                </button>
              </div>
            </div>
          </div>
          {/* end header box */}
          <FilterBox />
          <BlogItem />
          {!!blogs && blogs?.count && (
            <div className="bg-gray-100">
              <Pagination
                total={blogs?.count}
                setCurrentPage={setPageNumber}
                currentPage={page_number}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
});

export default Blog;
