import Top from "admin/members/Top";
import React, { useContext, useEffect, useState } from "react";
import SaleTable from "./panel/SaleTable";
import TableSearch from "./panel/TableSearch";
import SaleFilterDropDown from "./panel/SaleFilterDropDown";
import { SaleContext } from "./state/SaleState";
import { DEFAULT_PAGE_NUMBER, DEFAULT_ROW } from "config/constant";
import Pagination from "admin/blog/panel/Pagination";
import { useLocation, useHistory } from "react-router";
import JDate from "shared/controls/JDate";

const Sales = React.memo(() => {
  const {
    getSalesSearch,
    product_category,
    status_id,
    getProductCategories,
    insurance,
    sales,
    getStatusProduct,
    updateUrl,
    date_start,
    date_end,
  } = useContext(SaleContext);

  const [page_number, setPageNumber] = useState(DEFAULT_PAGE_NUMBER);

  const [toggle1, settoggle1] = useState(false);
  const [toggle2, settoggle2] = useState(false);

  useEffect(() => {
    console.log("update page_number::", page_number)
    // const params = new URLSearchParams(window.location.search);
    getSalesSearch?.({
      page: page_number,
      row: DEFAULT_ROW,
    });
    // if (params.has('page') && (
    //   !params.has('page') && parseInt(params.get('page')) !== page_number
    // )) {

    //   updateUrl?.("page", page_number)
    //   return;
    // }
    // updateUrl?.("page", params.get('page') || page_number)
  }, [page_number, getSalesSearch]);



  useEffect(() => {
    getProductCategories?.();
  }, [getProductCategories]);

  useEffect(() => {
    getStatusProduct?.(insurance || 0);
    // if (!!insurance) {
    // const params = new URLSearchParams(window.location.search);

    // if (params.has('product_category_id') && parseInt(params.get('product_category_id')) === insurance) return;
    // updateUrl?.("product_category_id", insurance)
    !!insurance &&
      getSalesSearch?.({
        product_category_id: insurance,
        page: 1,
        row: 10,
      });
  }, [insurance, getSalesSearch, getStatusProduct]);

  useEffect(() => {
    console.log("status_id:", status_id)
    // if (!!status_id) {
    //   const params = new URLSearchParams(window.location.search);

    //   if (params.has('status_id') && parseInt(params.get('status_id')) === status_id) return;
    //   updateUrl?.("status_id", status_id)
    !!status_id &&
      getSalesSearch?.({
        product_category_id: insurance || 0,
        status_id: status_id,
        page: 1,
        row: 10,
      });
    // }
  }, [status_id]);

  return (
    <>
      <Top />
      <div className="relative top-0 z-30 w-full px-30 -mt-72 shadow-lg">
        <div className="card flex flex-col min-h-screen">
          <div className="card-header py-5 px-4 border-b border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <h3 className="text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right">
                لیست سفارش بیمه
              </h3>
            </div>
          </div>
          <div>
            {/* 
              !! dep edit component remote state convert to Provider api
            */}
            <TableSearch
              toggle1={toggle1}
              toggle2={toggle2}
              settoggle1={settoggle1}
              settoggle2={settoggle2}
            />

            <SaleFilterDropDown
              settoggle1={settoggle1}
              settoggle2={settoggle2}
              product_categories={product_category}
            />
          </div>
          {sales?.result?.length > 0 && (
            <SaleTable sales={sales} />
          )}

          {!!sales && sales?.count > 0 && (
            <div className="py-4">
              <Pagination
                total={sales?.count}
                setCurrentPage={setPageNumber}
                currentPage={page_number}
              />
            </div>
          )}
          {
            sales?.result?.length === 0 && (
              <div className="flex justify-center mt-4">
                <span>دیتایی جهت نمایش وجود ندارد!</span>
              </div>
            )
          }
        </div>
      </div>
    </>
  );
});

export default Sales;
