import React, { useContext, useCallback } from "react";
import { CategoryProductContext } from "../state/State";

export default React.memo(() => {
  const { dispatch, cr_data, AddCategoryProduct } = useContext(
    CategoryProductContext
  );
  const ChangeInput = (el) => {
    let files = el.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      dispatch({
        type: "SET_CREATE_CATEGORY",
        payload: { logo: e.target.result },
      });
    };
  };

  const onCreate = () => {
    AddCategoryProduct?.();
  };
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
        </div>

        <div className="flex flex-col">
          <label className="pb-2 font-semibold text-sm text-other-labelColor ">
            نام دسته بندی محصول
          </label>
          <input
            type="text"
            onChange={useCallback(
              (el) => {
                dispatch({
                  type: "SET_CREATE_CATEGORY",
                  payload: { category_name: el.target.value },
                });
              },
              [dispatch]
            )}
            placeholder="نام دسته بندی محصول"
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
            onChange={useCallback(
              (el) => {
                dispatch({
                  type: "SET_CREATE_CATEGORY",
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
            className="border border-gray-100 font-normal text-other-muted text-sm"
            checked={!!cr_data?.enabled}
            onChange={useCallback(
              (el) => {
                dispatch({
                  type: "SET_CREATE_CATEGORY",
                  payload: { enabled: !cr_data?.enabled },
                });
              },
              [cr_data, dispatch]
            )}
          />
          <label className=" font-semibold text-sm text-other-labelColor ">
            فعال
          </label>
        </div>
        <div />
        <div className="flex justify-start pt-3 pb-10 col-span-full">
          <button
            onClick={onCreate}
            className="btn-hover bg-secondary-background rounded-md text-sm font-normal text-white py-2.5 px-5 flex flex-row items-center justify-center gap-x-0.5"
          >
            ثبت
          </button>
        </div>
      </div>
    </>
  );
});
