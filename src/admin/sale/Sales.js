import React, { useContext, useEffect, useState } from "react";
import Top from "admin/members/Top";
import SaleTable from "./panel/SaleTable";
import TableSearch from "./panel/TableSearch";
import SaleFilterDropDown from "./panel/SaleFilterDropDown";
import { SaleContext } from "./state/SaleState";
import { DEFAULT_PAGE_NUMBER, DEFAULT_ROW } from "config/constant";
import Pagination from "admin/blog/panel/Pagination";

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

  const _getSale = () => {
    console.log("fetch one _getSale");

    getSalesSearch?.({
      page: page_number,
      row: DEFAULT_ROW,
      product_category_id: insurance,
      status_id: status_id,
      sold_on_before:
        date_end &&
        new Date(date_end)
          .toLocaleDateString("en-CA") // TODO: for improvment change to moment js
          .split("/")
          .reverse()
          .join("-"),
      sold_on_after:
        date_start &&
        new Date(date_start)
          .toLocaleDateString("en-CA") // TODO: for improvment change to moment js
          .split("/")
          .reverse()
          .join("-"),
    });
  };

  useEffect(() => {
    _getSale?.();
  }, [page_number]);

  useEffect(() => {
    getProductCategories?.();
  }, [getProductCategories]);

  useEffect(() => {
    console.log("fetch one getStatusProduct");
    getStatusProduct?.(insurance || 0);
    page_number === DEFAULT_PAGE_NUMBER
      ? _getSale?.()
      : setPageNumber(DEFAULT_PAGE_NUMBER);
  }, [insurance, getStatusProduct]);

  useEffect(() => {
    console.log("fetch one status_id");

    page_number === DEFAULT_PAGE_NUMBER
      ? _getSale?.()
      : setPageNumber(DEFAULT_PAGE_NUMBER);
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
          <SaleTable sales={sales} />
          {!!sales && sales?.count > 0 && (
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
