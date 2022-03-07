import React, { useCallback, useContext, useEffect } from "react";
import Top from "admin/members/Top";
import TextInputControl from "shared/controls/TextInputControl";
import TextAreaControl from "shared/controls/TextAreaControl";
import Percents from "./panels/Percents";
import { CampaignContext } from "./state/State";
import CampaignRow from "./controls/CampaignRow";

export default React.memo(() => {
  const { getCampaigns, campaigns } = useContext(CampaignContext);

  useEffect(() => {
    getCampaigns?.();
  }, [getCampaigns]);
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
          <div className="w-full p-6 overflow-auto">
            <table className="w-full">
              <thead className="text-sm bg-gray-300">
                <tr className="bg-other-bgGrayActiveItem">
                  <td className="px-6 whitespace-nowrap font-normal text-base text-center text-other-labelColor py-3">
                    نام
                  </td>
                  <td className="px-6 whitespace-nowrap font-normal text-base text-center text-other-labelColor py-3">
                    کد
                  </td>
                  <td className="px-6 whitespace-nowrap font-normal text-base text-center text-other-labelColor py-3">
                    توضیحات
                  </td>
                  <td className="px-6 whitespace-nowrap font-normal text-base text-center text-other-labelColor py-3">
                    وضعیت
                  </td>
                  <td className="px-6 whitespace-nowrap font-normal text-base text-center text-other-labelColor py-3">
                    #
                  </td>
                </tr>
              </thead>
              <tbody className="table_tbody text-sm">
                {!!campaigns &&
                  campaigns?.length > 0 &&
                  campaigns?.map((item, index) => (
                    <CampaignRow key={index} item={item} />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
});
