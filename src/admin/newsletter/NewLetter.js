import { DEFAULT_PAGE_NUMBER, DEFAULT_ROW } from "config/constant";
import moment from "jalali-moment";
import React, { useContext, useEffect } from "react";
import { NewsLetterContext } from "./state/State";

export default React.memo(() => {
  const { subscribe } = useContext(NewsLetterContext);
  const { getSubscribe } = useContext(NewsLetterContext);
  useEffect(() => {
    getSubscribe?.(DEFAULT_PAGE_NUMBER, DEFAULT_ROW);
  }, [getSubscribe]);
  return (
    <>
      <div className="relative pb-72 h-100 z-10">
        <span className="mask bg-secondary-background "></span>
      </div>
      <div className="w-full p-6 overflow-auto">
        <table className="table-1 table-striped table-bordered overflow-x-scroll">
          <thead>
            <tr>
              <td className="px-6 text-thead font-semibold text-other-labelColor py-3">
                CREATEON
              </td>
              <td className="px-6 text-thead font-semibold text-other-labelColor py-3">
                ACTIVE
              </td>
              <td className="px-6 text-thead font-semibold text-other-labelColor py-3">
                EMAIL
              </td>
            </tr>
          </thead>
          <tbody>
            {!!subscribe &&
              !!subscribe?.result?.length &&
              subscribe?.result?.map((item, index) => (
                <tr key={index}>
                  <td className="text-bodyTable font-normal py-4 px-6" dir="ltr">
                    {(item?.createon &&
                      moment(item?.createon, "YYYY-MM-DD")
                        .endOf("jMonth")
                        .format("jYYYY/jM/jD")) ||
                      "-"}
                  </td>
                  <td className="text-bodyTable font-normal py-4 pr-6">
                    <input
                      checked="checked"
                      className="check-box"
                      disabled={true}
                      type="checkbox"
                    />
                  </td>
                  <td className="text-bodyTable font-normal py-4 pr-6">
                    {item?.email}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      ``
    </>
  );
});
