import React, { useCallback, useContext, useEffect, useState } from "react";
import Top from "admin/members/Top";
import Percents from "./panels/Percents";
import { CampaignContext } from "./state/State";
import CampaignRow from "./controls/CampaignRow";
import { ReactComponent as AlignLeft } from "shared/icons/action/format_align_left.svg";
import { useHistory } from "react-router";
import { DEFAULT_PAGE_NUMBER, DEFAULT_ROW } from "config/constant";
import Pagination from "admin/blog/panel/Pagination";
import FilterCampaign from "./controls/FilterCampaign";

export default React.memo(() => {
  const { getCampaigns, campaigns, filter } = useContext(CampaignContext);
  const history = useHistory();

  const [page, setPage] = useState(DEFAULT_PAGE_NUMBER);
  const [row] = useState(DEFAULT_ROW);
  useEffect(() => {
    _getCampaing?.();
  }, [page]);

  const _getCampaing = () => {
    getCampaigns?.(
      page,
      row,
      filter?.campaign_name_or_description,
      filter?.is_active,
      filter?.username,
      filter?.registered_on_after
        ? new Date(filter?.registered_on_after)
            .toLocaleDateString("en-CA") // TODO: for improvment change to moment js
            .split("/")
            .reverse()
            .join("-")
        : undefined,
      filter?.registered_on_before
        ? new Date(filter?.registered_on_before)
            .toLocaleDateString("en-CA") // TODO: for improvment change to moment js
            .split("/")
            .reverse()
            .join("-")
        : undefined
    );
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
                  onClick={() => history.push("/campaign/add")}
                  className="btn-hover bg-secondary-background rounded-md text-sm font-semibold  text-white px-2 py-1 lg:py-3 lg:px-30 flex flex-row items-center justify-center gap-x-0.5"
                >
                  <AlignLeft className="w-3 h-3" />
                  افزودن کمپین
                </button>
              </div>
            </div>
          </div>
          <FilterCampaign />
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
                  campaigns?.result?.length > 0 &&
                  campaigns?.result?.map((item, index) => (
                    <CampaignRow key={index} item={item} />
                  ))}
                {campaigns?.result?.length === 0 && (
                  <tr>
                    <td colspan={5}>
                      <div className="flex justify-center">
                        <span>کمپینی جهت نمایش وجود ندارد!</span>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {!!campaigns && campaigns?.count > 0 && (
              <div className="py-5">
                <Pagination
                  total={campaigns?.count}
                  setCurrentPage={setPage}
                  currentPage={page}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
});
