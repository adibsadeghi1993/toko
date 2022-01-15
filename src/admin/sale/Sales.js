import Top from "admin/members/Top";
import React, { useContext, useEffect, useState } from "react";
import SaleTable from "./panel/SaleTable";
import TableSearch from "./panel/Table_search";
import SaleFilterDropDown from "./panel/SaleFilterDropDown";
import { SaleContext } from "./state/SaleState";
import { DEFAULT_PAGE_NUMBER, DEFAULT_ROW } from "config/constant";
import Pagination from "admin/blog/panel/Pagination";

const Sales = React.memo(() => {
  const {
    dispatch,
    getSalesSearch,
    product_category,
    status_id,
    getProductCategories,
    insurance,
    sales,
    getStatusProduct,
  } = useContext(SaleContext);

  const [page_number, setPageNumber] = useState(DEFAULT_PAGE_NUMBER);

  const [toggle1, settoggle1] = useState(false);
  const [toggle2, settoggle2] = useState(false);

  useEffect(() => {
    getSalesSearch?.({
      product_category_id: 0,
      status_id: 0,
      page: page_number,
      row: DEFAULT_ROW,
    });
  }, [page_number, getSalesSearch]);

  useEffect(() => {
    getProductCategories?.();
  }, [getProductCategories, dispatch]);

  useEffect(() => {
    getStatusProduct?.(insurance || 0);
    !!insurance &&
      getSalesSearch?.({
        product_category_id: insurance,
        status_id: 0,
        page: 1,
        row: 10,
      });
  }, [insurance, getSalesSearch, getStatusProduct]);

  useEffect(() => {
    !!status_id &&
      getSalesSearch?.({
        product_category_id: insurance || 0,
        status_id: status_id,
        page: 1,
        row: 10,
      });
  }, [status_id, getSalesSearch, insurance]);

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

          <SaleTable sales={sales} />

          {!!sales && sales?.count && (
            <div className="py-4">
              <Pagination
                total={sales?.count}
                setCurrentPage={setPageNumber}
                currentPage={page_number}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
});

export default Sales;
