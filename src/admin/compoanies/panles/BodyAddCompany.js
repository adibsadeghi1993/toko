import React, { useContext, useCallback } from "react";
import { CompanyContext } from "../state/State";

export default React.memo(() => {
  const { dispatch, active, AddCompany } = useContext(CompanyContext);
  const ChangeInput = (el) => {
    let files = el.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      dispatch({ type: "SET_LOGO_FILE", payload: e.target.result });
    };
  };

  const onCreate = () => {
    AddCompany?.();
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
        <h6 className="py-1 mb-6 text-other-muted text-xs font-semibold col-span-full">
          مشخصات شرکت
        </h6>
        <div className="flex flex-col">
          <label className="pb-2 font-semibold text-sm text-other-labelColor ">
            نام شرکت
          </label>
          <input
            type="text"
            onChange={useCallback(
              (el) => {
                dispatch({
                  type: "SET_COMPANY_NAME",
                  payload: el.target.value,
                });
              },
              [dispatch]
            )}
            placeholder="نام شرکت بیمه گذار"
            className="border border-gray-100 px-3 py-2.5 font-normal text-other-muted text-sm"
          />
        </div>
        <div />
        <div className="flex flex-row items-center gap-x-2">
          <input
            type="checkbox"
            placeholder="نام شرکت بیمه گذار"
            className="border border-gray-100 font-normal text-other-muted text-sm"
            checked={!!active}
            onChange={useCallback(
              (el) => {
                dispatch({
                  type: "SET_ACTIVE",
                  payload: !active,
                });
              },
              [active]
            )}
          />
          <label className=" font-semibold text-sm text-other-labelColor ">
            فعال کردن شرکت بیمه گذار
          </label>
        </div>
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
