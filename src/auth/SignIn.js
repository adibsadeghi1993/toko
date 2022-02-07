import React, { useContext } from "react";
import { BoxLoader } from "shared/controls/Loader";
import { ReactComponent as LogoFooter } from "shared/icons/logo-footer.svg";
import PhoneNumber from "./panels/PhoneNumber";
import Verify from "./panels/Verify";
import { AuthContext } from "./state/State";
// import the stylesheet

export default React.memo(() => {
  const { step, loading } = useContext(AuthContext);
  return (
    <div className="bg-primary-background h-screen ">
      <BoxLoader loading={loading} />
      <div className="relative mx-auto">
        <div className="header bg-secondary-background py-5 py-lg-7 pt-lg-8">
          <div className="">
            <div className="header-body text-center mb-7 mx-auto">
              <div className="flex justify-center">
                <div className="col-xl-5 col-lg-6 col-md-8 px-5">
                  <div className="align-items-center">
                    <span>
                      <LogoFooter className="logo-footer text-black" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" -mt-32 pb-12 mx-auto">
          <div className="flex mx-auto flex-wrap justify-center">
            <div className="relative px-15 md:w-1/2 lg:w-5/12">
              <div className="card bg-secondary-background border-0 mb-0">
                <div className="bg-transparent pb-5">
                  <section className="multi_step_form" dir="ltr">
                    <div id="msform">
                      <ul id="progressbar">
                        <li className={`active`}>وارد کردن شماره</li>
                        <li
                          className={`${
                            (step === "verify" || step === "done") && "active"
                          }`}
                        >
                          تایید کد{" "}
                        </li>
                        <li className={`${step === "done" && "active"}`}>
                          اعتبار سنجی
                        </li>
                      </ul>
                      <hr className="rounded my-8" />
                      <fieldset>
                        {!!step && step === "login" && <PhoneNumber />}
                        {!!step && step === "verify" && <Verify />}
                      </fieldset>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
