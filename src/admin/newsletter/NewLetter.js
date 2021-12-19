import React, { useContext } from "react";
import { NewsLetterContext } from "./state/State";

export default React.memo(() => {
  const { news } = useContext(NewsLetterContext);
  return (
    <>
      <div className="relative pb-72 h-100 z-10">
        <span className="mask bg-gradient-default opacity-90 "></span>
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
            {!!news &&
              news.map((item, index) => (
                <tr key={index}>
                  <td className="text-bodyTable font-normal py-4 px-6">{item.created_At}</td>
                  <td className="text-bodyTable font-normal py-4 pr-6">
                    {item.active ? (
                      <input
                        checked="checked"
                        className="check-box"
                        disabled="disabl  ر  ed"
                        type="checkbox"
                      />
                    ) : (
                      <div>sal</div>
                    )}
                  </td>
                  <td className="text-bodyTable font-normal py-4 pr-6">{item.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
});
