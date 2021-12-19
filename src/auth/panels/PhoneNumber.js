import React, { useContext, useState } from "react";
import { AuthContext } from "auth/state/State";

export default React.memo(() => {
  const { submit_phone } = useContext(AuthContext);
  const [phoneNumber, setPhoneNumber] = useState();
  const [msg, setMsg] = useState(false);

  const login = async () => {
    if (!phoneNumber) {
      setMsg(true);
      return;
    } else {
      setMsg(false);
    }
    submit_phone({ phoneNumber });
  };
  return (
    <>
      <div className="flex flex-col items-center">
        <small className="text-other-muted mt-2 mb-4">
          شماره همراه خود را وارد کنید
        </small>
        <h6 className="">
          پس از وارد کردن شماره همراه پیامکی حاوی کد تایید برای شما ارسال می شود
        </h6>
        <div className="flex flex-col space-y-6 w-full px-6 mb-6">
          <input
            type="text"
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="text-center border rounded border-gray-400 pr-8 pl-2.5 py-2.5 text-base"
            placeholder="شماره تلفن"
          />
          {!!msg && (
            <div className="mt-2 bg-red-400 py-2 px-4 text-white text-sm rounded">
              لطفا شماره تلفن را به صورت صحیح وارد کنید
            </div>
          )}
        </div>
        <button
          onClick={() => login()}
          className="bg-secondary-background rounded border border-secondary-background text-white text-base font-semibold px-5 py-2.5"
        >
          ادامه
        </button>
      </div>
    </>
  );
});
