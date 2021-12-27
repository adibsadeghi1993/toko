import React, { useContext } from "react";
import { useCallback } from "react";
import { CategoryContext } from "../state/State";

const BodyAddCategory = React.memo(() => {
  const { dispatch, addCategory } = useContext(CategoryContext);
  const onSubmit = (el) => {
    el.preventDefault();
    addCategory?.();
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-x-6 space-y-4 mt-4 lg:px-6 lg:py-6">
          <h6 className="col-span-full py-1 text-other-muted text-xs font-semibold">
            مشخصات سئو
          </h6>
          {/* input seoName */}
          <div className="col-span-1 flex flex-col">
            <label className="pb-2 font-semibold text-sm text-other-labelColor  ">
              SeoName
            </label>
            <input
              type="text"
              placeholder="SeoName"
              onChange={useCallback(
                (el) => {
                  dispatch({ type: "SET_SEO_NAME", payload: el.target.value });
                },
                [dispatch]
              )}
              className="border border-gray-100 px-3 py-2.5 font-normal text-other-muted text-sm"
            />
          </div>
          <div />
          {/* input SeoTitle */}
          <div className="flex flex-col">
            <label className="pb-2 font-semibold text-sm text-other-labelColor  ">
              SeoTitle
            </label>
            <input
              type="text"
              onChange={useCallback(
                (el) => {
                  dispatch({ type: "SET_SEO_TITLE", payload: el.target.value });
                },
                [dispatch]
              )}
              placeholder="SeoTitle"
              className="border border-gray-100 px-3 py-2.5 font-normal text-other-muted text-sm"
            />
          </div>
          {/* input SeoDescription */}
          <div className="flex flex-col">
            <label className="pb-2 font-semibold text-sm text-other-labelColor  ">
              SeoDescription
            </label>
            <input
              onChange={useCallback(
                (el) => {
                  dispatch({
                    type: "SET_SEO_DESCRIPTION",
                    payload: el.target.value,
                  });
                },
                [dispatch]
              )}
              placeholder="SeoDescription"
              type="text"
              className="border border-gray-100 px-3 py-2.5 font-normal text-other-muted text-sm"
            />
          </div>
          <div className="border-b border-gray-200 py-2 col-span-full" />
          <label className="col-span-full pb-1 my-6 font-semibold text-xs text-other-labelColor ">
            اطلاعات پست
          </label>
          {/* input title */}
          <div className="col-span-full flex flex-col">
            <label className="pb-2 font-semibold text-sm text-other-labelColor  ">
              عنوان
            </label>
            <input
              type="text"
              onChange={useCallback(
                (el) => {
                  dispatch({
                    type: "SET_TITLE",
                    payload: el.target.value,
                  });
                },
                [dispatch]
              )}
              placeholder="SeoTitle"
              className="border border-gray-100 px-3 py-2.5 font-normal text-other-muted text-sm"
            />
          </div>
          {/* input text */}
          <div className="col-span-full flex flex-col">
            <label className="pb-2 font-semibold text-sm text-other-labelColor  ">
              متن
            </label>
            <textarea
              rows={4}
              onChange={useCallback(
                (el) => {
                  dispatch({
                    type: "SET_BODY",
                    payload: el.target.value,
                  });
                },
                [dispatch]
              )}
              placeholder="مثال توضیح بیمه"
              className="border border-gray-100 px-3 py-2.5 font-normal text-other-muted text-sm"
            />
          </div>
          <div className="flex justify-start pt-3 pb-10">
            <button
              type="submit"
              className="btn-hover bg-secondary-background rounded-md text-sm font-normal text-white py-2.5 px-5 flex flex-row items-center justify-center gap-x-0.5"
            >
              ثبت
            </button>
          </div>
        </div>
      </form>
    </>
  );
});

export default BodyAddCategory;
