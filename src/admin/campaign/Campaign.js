import React, { useCallback, useContext } from "react";
import Top from "admin/members/Top";
import TextInputControl from "shared/controls/TextInputControl";
import TextAreaControl from "shared/controls/TextAreaControl";
import Percents from "./panels/Percents";
import { CampaignContext } from "./state/State";

export default React.memo(() => {
  const { dispatch, description, name, submitCampaign } =
    useContext(CampaignContext);
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
