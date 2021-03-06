import Top from "admin/members/Top";
import React, { useContext, useState, useEffect } from "react";
import { InstallmentContext } from "./state/InstallmentState";
import InstallmentSearch from "./panel/InstallmentSearch";
import InstallmentTable from "./panel/InstallmentTable";
import Upload from "./panel/Upload";
import { DEFAULT_PAGE_NUMBER, DEFAULT_ROW } from "config/constant";
import Pagination from "admin/blog/panel/Pagination";
import SaleFilterDropDown from "./panel/SaleFilterDropDown";

const Installment = React.memo(() => {
  const {
    getInstallments,
    installments,
    insurance,
    insuranceStatuses,
    insuranceCategories,
    query,
    startDate,
    endDate,
    getInsuranceCategories,
    getInsuranceStatuses,
    status,
    statusName,
   
    dispatch,
  } = useContext(InstallmentContext);
  const [page, setPageNumber] = useState(DEFAULT_PAGE_NUMBER);

  const [toggle1, settoggle1] = useState(false);
  const [toggle2, settoggle2] = useState(false);

  const calcDate = (date) => {
    return new Date(date)
      .toLocaleDateString("en-CA")
      .split("/")
      .reverse()
      .join("-");
  };

  console.log(installments)

  const _getInstallments = () => {
    getInstallments({
      page,
      product_category_id: insurance,
      query,
      row: DEFAULT_ROW,
      startDate: startDate && calcDate(startDate),
      endDate: endDate && calcDate(endDate),
    });
  };

 

  useEffect(() => {
    _getInstallments?.();
  }, [page, insurance, status]);

  useEffect(() => {
    getInsuranceStatuses(insurance || 0);
  }, [insurance, getInsuranceStatuses]);

  useEffect(() => {
    getInsuranceCategories?.();
  }, [getInsuranceCategories]);

  const searchHandler = (e) => {
    _getInstallments();
  };


  return (
    <>
      <Top />
      <div className="relative top-0 z-30 w-full px-30 -mt-72 shadow-lg">
        <div className="card flex flex-col min-h-screen">
          <div className="card-header py-5 px-4 border-b border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <h3 className="text-primary-color pr-3 font-bold text-otherCaption whitespace-nowrap  text-center lg:text-right">
                ???????? ??????????
              </h3>
              <div className="flex w-full justify-end">
                <button className="bg-blue-600 flex hover:bg-blue-800 text-white font-bold py-2 px-3 text-xs rounded">
                  ???????????? ???? ????????
                </button>
              </div>
            </div>
          </div>

          <div>
            <InstallmentSearch
              toggle1={toggle1}
              toggle2={toggle2}
              settoggle1={settoggle1}
              settoggle2={settoggle2}
              insuranceCategories={insuranceCategories}
              searchHandler={searchHandler}
            />

            <SaleFilterDropDown />
          </div>

          {installments?.result?.length > 0 && (
            <InstallmentTable installments={installments.result} />
          )}

          {!!installments && installments?.count > 0 && (
            <div className="py-4">
              <Pagination
                total={installments?.count}
                setCurrentPage={setPageNumber}
                currentPage={page}
              />
            </div>
          )}
          {installments?.result?.length === 0 && (
            <div className="flex justify-center mt-4">
              <span>???????????? ?????? ?????????? ???????? ??????????!</span>
            </div>
          )}
          {installments && <Upload />}
        </div>
      </div>
    </>
  );
});

export default Installment;
