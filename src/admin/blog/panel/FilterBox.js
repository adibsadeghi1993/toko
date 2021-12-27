import React from "react";
import { useCallback } from "react";
import { useContext } from "react";
import { BlogContext } from "../state/State";

const FilterBox = React.memo(() => {
  const { dispatch, filterBlog } = useContext(BlogContext);
  return (
    <>
      <div className="mt-px flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 px-4 m-1 lg:gap-x-4 space-y-2 lg:space-y-0">
          {/* input */}
          <div className="col-span-full lg:col-span-3">
            <div className="flex flex-col">
              <label className="mb-2 font-light text-base">نویسنده</label>
              <input
                onChange={useCallback(
                  (el) => {
                    dispatch({
                      type: "SET_SEARCH",
                      payload: {
                        key: "author",
                        value: el.target.value,
                      },
                    });
                  },
                  [dispatch]
                )}
                className="border border-gray-200 rounded-sm py-2.5 px-3"
                type="text"
              />
            </div>
          </div>
          {/* input */}
          {/* input */}
          <div className="col-span-full lg:col-span-3">
            <div className="flex flex-col">
              <label className="mb-2 font-light text-base">عنوان</label>
              <input
                onChange={useCallback(
                  (el) => {
                    dispatch({
                      type: "SET_SEARCH",
                      payload: {
                        key: "title__contains",
                        value: el.target.value,
                      },
                    });
                  },
                  [dispatch]
                )}
                className="border border-gray-200 rounded-sm py-2.5 px-3"
                type="text"
              />
            </div>
          </div>
          {/* input */}
          {/* input */}
          <div className="col-span-full lg:col-span-4">
            <div className="flex flex-col">
              <label className="mb-2 font-light text-base">متن</label>
              <input
                onChange={useCallback(
                  (el) => {
                    dispatch({
                      type: "SET_SEARCH",
                      payload: {
                        key: "body__contains",
                        value: el.target.value,
                      },
                    });
                  },
                  [dispatch]
                )}
                className="border border-gray-200 rounded-sm py-2.5 px-3"
                type="text"
              />
            </div>
          </div>
          {/* input */}
          {/* input */}
          <div className="col-span-full lg:col-span-2">
            <div className="flex flex-col">
              <label className="mb-2 font-light text-base">دسته بندی</label>
              <input
                onChange={useCallback(
                  (el) => {
                    dispatch({
                      type: "SET_SEARCH",
                      payload: {
                        key: "id_category",
                        value: el.target.value,
                      },
                    });
                  },
                  [dispatch]
                )}
                className="border border-gray-200 rounded-sm py-2.5 px-3"
                type="text"
              />
            </div>
          </div>
          {/* input */}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 px-4 m-1 lg:gap-x-4 mt-2 space-y-2 lg:space-y-0 lg:mt-8">
          {/* input */}
          <div className="col-span-2">
            <div className="flex flex-col">
              <label className="mb-2 font-light text-base">
                تاریخ ایجاد از
              </label>
              <input
                className="border border-gray-200 rounded-sm py-2.5 px-3"
                type="text"
              />
            </div>
          </div>
          {/* input */}
          {/* input */}
          <div className="col-span-full lg:col-span-2">
            <div className="flex flex-col">
              <label className="mb-2 font-light text-base">تا</label>
              <input
                className="border border-gray-200 rounded-sm py-2.5 px-3"
                type="text"
              />
            </div>
          </div>
          {/* input */}
          {/* input */}
          <div className="col-span-full lg:col-span-2">
            <div className="flex flex-col">
              <label className="mb-2 font-light text-base">
                تاریخ انتشار از
              </label>
              <input
                className="border border-gray-200 rounded-sm py-2.5 px-3"
                type="text"
              />
            </div>
          </div>
          {/* input */}
          {/* input */}
          <div className="col-span-full lg:col-span-2">
            <div className="flex flex-col">
              <label className="mb-2 font-light text-base">تا</label>
              <input
                className="border border-gray-200 rounded-sm py-2.5 px-3"
                type="text"
              />
            </div>
          </div>
          {/* input */}
          {/* input */}
          <div className="col-span-full lg:col-span-4 flex justify-end items-end ">
            <div>
              <button
                onClick={() => filterBlog?.()}
                className="bg-info-background text-xs font-normal text-info-color py-3 px-7 mx-px rounded-sm "
              >
                جست و جو کن
              </button>
            </div>
          </div>
          {/* input */}
        </div>
      </div>
    </>
  );
});

export default FilterBox;
