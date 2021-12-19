import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import BodyEditCompany from "./panles/BodyEditCompany";
import { CompanyContext } from "./state/State";

export default React.memo(() => {
  const history = useHistory();
  const { id } = useParams();
  const { companies } = useContext(CompanyContext);
  const [find, setFind] = useState();

  useEffect(() => {
    if (id) {
      console.log(
        ":::::::",
        companies,
        companies?.find((item) => item.company_id === id)
      );
      setFind(companies?.find((item) => item.company_id === id));
    }
  }, [id]);
  return (
    <>
      <div className="relative pb-72 h-100 z-10">
        <span className="mask bg-gradient-default opacity-90 "></span>
      </div>
      <div className="relative top-0 z-30 w-full px-30 -mt-72 ">
        <div className="card flex flex-col min-h-screen">
          <div className="card-header py-5 px-6 border-b border-gray-100">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <h3 className="text-primary-color pr-5 text-otherCaption  text-center lg:text-right">
                شرکت جدید
              </h3>
              <div className="flex items-center">
                <button
                  onClick={() => history.push("/companies")}
                  className="btn-hover bg-secondary-background rounded-md text-xs font-semibold  text-white px-2 py-1 lg:py-1 lg:px-2 flex flex-row items-center justify-center gap-x-0.5"
                >
                  بازگشت به لیست
                </button>
              </div>
            </div>
          </div>
          {/* end header box */}
          <div className="overflow-hidden">
            {!!id && <BodyEditCompany company={find} />}
          </div>
        </div>
      </div>
    </>
  );
});
