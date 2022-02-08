import React, { useContext, useState } from "react";
import { AuthContext } from "auth/state/State";
import { useForm } from "react-hook-form";
import UtilityAPI from "shared/utils/UtilityAPI";
import TextInputControl from "shared/controls/TextInputControl";

export default React.memo(() => {
  const { submit_phone } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    submit_phone?.(UtilityAPI.convertPersianNo(data.phoneNumber));
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit(onSubmit)} action="">
          <small className="text-other-muted mt-2 mb-4">
            شماره همراه خود را وارد کنید
          </small>
          <h6 className="">
            پس از وارد کردن شماره همراه پیامکی حاوی کد تایید برای شما ارسال می
            شود
          </h6>
          <div className="flex flex-col space-y-6 w-full px-6 mb-6">
            <TextInputControl
              phoneNo
              {...register("phoneNumber", {
                required: true,
              })}
            />
            {errors.phoneNumber && (
              <span className="mt-2 bg-red-400 py-2 px-4 text-white text-sm rounded">
                لطفا شماره تلفن را به صورت صحیح وارد کنید
              </span>
            )}
          </div>
          <button className="bg-secondary-background rounded border border-secondary-background text-white text-base font-semibold px-5 py-2.5">
            ادامه
          </button>
        </form>
      </div>
    </>
  );
});
