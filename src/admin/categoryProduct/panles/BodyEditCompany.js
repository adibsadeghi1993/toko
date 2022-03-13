import React, { useCallback, useContext } from "react";
import { CategoryProductContext } from "../state/State";

export default React.memo(() => {
  const { dispatch, updateCategory, details } = useContext(
    CategoryProductContext
  );
  const ChangeInput = (el) => {
    let files = el.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      dispatch({ type: "UPDATE_CATEGORY", payload: { logo_new: e.target.result } });
    };
  };

  const _submitUpdate = useCallback(() => {
    updateCategory?.();
  }, [updateCategory]);
  return (
    <>
      <div className="grid grid-cols-2 gap-x-6 space-y-4 mt-4 lg:px-6 lg:py-6">
        <div className="flex flex-col mb-6 col-span-full">
          <label className="pb-2 font-normal text-base text-other-labelColor ">
            Logo
          </label>
          <input
            type="file"
            onChange={ChangeInput}
            className="border border-gray-100 px-3 py-2.5 font-normal text-other-muted text-sm rounded-sm"
          />
          <span className="mt-1 text-other-muted text-xs">
            عکس خودرا در آپلود کنید
          </span>
          <a href={details?.logo} target={"_blank"}>
            عکس قبلی
          </a>
        </div>

        <div className="flex flex-col">
          <label className="pb-2 font-semibold text-sm text-other-labelColor ">
            نام دسته بندی
          </label>
          <input
            type="text"
            value={details?.category_name}
            onChange={useCallback(
              (e) => {
                dispatch({
                  type: "UPDATE_CATEGORY",
                  payload: { category_name: e.target.value },
                });
              },
              [dispatch]
            )}
            placeholder="نام شرکت بیمه گذار"
            className="border border-gray-100 px-3 py-2.5 font-normal text-other-muted text-sm"
          />
        </div>
        <div />

        <div className="flex flex-col">
          <label className="pb-2 font-semibold text-sm text-other-labelColor ">
            لینک:
          </label>
          <input
            type="text"
            value={details?.link_name}
            onChange={useCallback(
              (el) => {
                dispatch({
                  type: "UPDATE_CATEGORY",
                  payload: { link_name: el.target.value },
                });
              },
              [dispatch]
            )}
            placeholder="لینک"
            className="border border-gray-100 px-3 py-2.5 font-normal text-other-muted text-sm"
          />
        </div>
        <div />

        <div className="flex flex-row items-center gap-x-2">
          <input
            type="checkbox"
            checked={!!details?.enabled}
            onChange={useCallback(
              (el) => {
                dispatch({
                  type: "UPDATE_CATEGORY",
                  payload: { enabled: !details?.enable },
                });
              },
              [dispatch, details]
            )}
            className="border border-gray-100 font-normal text-other-muted text-sm"
          />
          <label className=" font-semibold text-sm text-other-labelColor ">
            فعال
          </label>
        </div>
        <div className="flex justify-start pt-3 pb-10 col-span-full">
          <button
            onClick={_submitUpdate}
            className="btn-hover bg-secondary-background rounded-md text-sm font-normal text-white py-2.5 px-5 flex flex-row items-center justify-center gap-x-0.5"
          >
            ویرایش
          </button>
        </div>
      </div>
    </>
  );
});
