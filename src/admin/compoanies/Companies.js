import React, { useContext } from "react";
import { useHistory } from "react-router";
import { useEffect } from "react/cjs/react.development";
import { ReactComponent as AlignLeft } from "shared/icons/action/format_align_left.svg";
import CompanyBody from "./panles/CompanyBody";
import { CompanyContext } from "./state/State";

export default React.memo(() => {
  const { getList } = useContext(CompanyContext);
  const history = useHistory();
  useEffect(() => {
    getList();
  }, [getList]);
  return (
    <>
      <div className="relative pb-72 h-100 z-10">
        <span className="mask bg-gradient-default opacity-90 "></span>
      </div>
      <div className="relative top-0 z-30 w-full px-30 -mt-72 ">
        <div className="card flex flex-col min-h-screen ">
          <div className="card-header py-5 px-6 border-b border-gray-100">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <h3 className="text-primary-color pr-5 text-otherCaption  text-center lg:text-right">
                لیست شرکت های بیمه
              </h3>
              <div className="flex items-center">
                <button
                  onClick={() => history.push("/companies/add")}
                  className="btn-hover bg-secondary-background rounded-md text-sm font-semibold  text-white px-2 py-1 lg:py-3 lg:px-30 flex flex-row items-center justify-center gap-x-0.5"
                >
                  <AlignLeft className="w-3 h-3" />
                  افزودن شرکت
                </button>
              </div>
            </div>
          </div>
          {/* end header box */}
          <div className="overflow-hidden">
            <CompanyBody />
          </div>
        </div>
      </div>
    </>
  );
});
