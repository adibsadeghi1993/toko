import { AuthContext } from "auth/state/State";
import React, { useContext, useEffect, useRef, useState } from "react";

export default React.memo(() => {
  const { submit_verfiy, phoneNumber } = useContext(AuthContext);
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [num3, setNum3] = useState();
  const [num4, setNum4] = useState();
  const [num5, setNum5] = useState();

  const inputOtp1 = useRef();
  const inputOtp2 = useRef();
  const inputOtp3 = useRef();
  const inputOtp4 = useRef();
  const inputOtp5 = useRef();

  const verify = async () => {
    let otp = num1 + num2 + num3 + num4 + num5;
    await submit_verfiy({ otp, phoneNumber });
  };

  useEffect(() => {
    if (num4?.length === 1) {
      verify();
    }
  }, [num5]);

  useEffect(() => {
    inputOtp1?.current?.focus();
  }, [inputOtp1]);
  return (
    <>
      <h3>تایید کد</h3>
      <h6>کد تایید خود را در قسمت زیر وارد کنید</h6>
      <div id="otp" class="flex justify-center">
        <input
          ref={inputOtp1}
          class="appearance-none m-2 text-center form-control form-control-solid rounded focus:border-blue-400 focus:shadow-outline"
          type="number"
          maxLength="1"
          defaultValue={num1}
          onChange={(e) => {
            setNum1(e.target.value);
            if (e.target.value?.length === 1) inputOtp2.current.focus();
          }}
        />
        <input
          ref={inputOtp2}
          class=" m-2 text-center form-control form-control-solid rounded focus:border-blue-400 focus:shadow-outline"
          type="number"
          maxLength="1"
          defaultValue={num2}
          onChange={(e) => {
            setNum2(e.target.value);
            if (e.target.value?.length === 1) inputOtp3.current.focus();
            if (e.target.value?.length === 0) inputOtp1.current.focus();
          }}
        />
        <input
          ref={inputOtp3}
          class=" m-2 text-center form-control form-control-solid rounded focus:border-blue-400 focus:shadow-outline"
          type="number"
          maxLength="1"
          defaultValue={num3}
          onChange={(e) => {
            setNum3(e.target.value);
            if (e.target.value?.length === 1) inputOtp4.current.focus();
            if (e.target.value?.length === 0) inputOtp2.current.focus();
          }}
        />
        <input
          ref={inputOtp4}
          class=" m-2 text-center form-control form-control-solid rounded focus:border-blue-400 focus:shadow-outline"
          type="number"
          maxLength="1"
          defaultValue={num4}
          onChange={(e) => {
            setNum4(e.target.value);
            if (e.target.value?.length === 1) inputOtp5.current.focus();

            if (e.target.value?.length === 0) inputOtp3.current.focus();
          }}
        />
        <input
          ref={inputOtp5}
          class=" m-2 text-center form-control form-control-solid rounded focus:border-blue-400 focus:shadow-outline"
          type="number"
          maxLength="1"
          defaultValue={num5}
          onChange={(e) => {
            setNum5(e.target.value);

            if (e.target.value?.length === 0) inputOtp4.current.focus();
          }}
        />
      </div>
    </>
  );
});
