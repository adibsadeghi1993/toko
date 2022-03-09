import React, { useCallback, useContext } from "react";
import Top from "admin/members/Top";
import TextInputControl from "shared/controls/TextInputControl";
import TextAreaControl from "shared/controls/TextAreaControl";
import Percents from "./panels/Percents";
import { CampaignContext } from "./state/State";
import { useHistory } from "react-router-dom";

export default React.memo(() => {
  const { dispatch, description, name, submitCampaign, code } =
    useContext(CampaignContext);
  const history = useHistory();
  const _submitCampaign = () => {
    submitCampaign?.();
  };
  return (
    <>
      <Top />
      <div className="relative top-0 z-30 w-full px-30 -mt-72 shadow-lg">
        <div className="card flex flex-col min-h-screen">
          <div className="card-header py-5 px-4 border-b border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <h3 className="text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right">
                کمپین
              </h3>
              <div className="flex items-center">
                <button
                  onClick={() => history.push("/campaigns")}
                  className="btn-hover bg-secondary-background rounded-md text-xs font-semibold  text-white px-2 py-1 lg:py-1 lg:px-2 flex flex-row items-center justify-center gap-x-0.5"
                >
                  بازگشت به لیست
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-4 py-4 space-y-4">
            <div className="flex flex-row align-center">
              <div>
                <TextInputControl
                  onChange={useCallback((e) => {
                    dispatch({ type: "SET_NAME", payload: e.target.value });
                  })}
                  value={name}
                  placeholder="نام کمپین"
                />
              </div>
              <div className="flex align-center mr-4">
                <button
                  className="bg-green-400 text-white px-4 py-2"
                  onClick={_submitCampaign}
                >
                  ثبت
                </button>
              </div>
              <div className="mr-4">
                <TextInputControl
                  disabled
                  value={code}
                  placeholder="کد تخفیف"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-96">
                <TextAreaControl
                  value={description}
                  onChange={useCallback((e) => {
                    dispatch({
                      type: "SET_DESCRIPTION",
                      payload: e.target.value,
                    });
                  })}
                  placeholder="توضیحات"
                  rows={4}
                />
              </div>
            </div>
            <Percents />
          </div>
        </div>
      </div>
    </>
  );
});
