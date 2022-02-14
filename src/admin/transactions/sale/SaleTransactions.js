import React, { useContext, useEffect, useState } from "react";
import Top from "admin/members/Top";
import TransactionSaleSearch from "./SaleTransactionsSearch";
// import TableContent_sale from "./sale-transactions-table";
import SaleTransactionsTable from "./panels/SaleTransactionsTable";
import { SaleTransactionsContext, useSaleTransactions } from "./state/State";
import { DEFAULT_PAGE_NUMBER, DEFAULT_ROW } from "config/constant";
import Pagination from "admin/blog/panel/Pagination";

const Transcations_sale = React.memo(() => {
  const {
    getSaleTransactions,
    query,
    startDate,
    endDate,
    getInsuranceCategories,
    insurance,
    saleTransactions,
  } = useContext(SaleTransactionsContext);
  const [page_number, setPageNumber] = useState(DEFAULT_PAGE_NUMBER);

  const calcDate = (date) => {
    return new Date(date)
      .toLocaleDateString("en-CA")
      .split("/")
      .reverse()
      .join("-");
  };

  const _getTransactionSale = () => {
    console.log("page_number", page_number);
    getSaleTransactions({
      page_number: page_number,
      row: DEFAULT_ROW,
      q: query,
      finance_expected_date_before: startDate && calcDate(startDate),
      finance_expected_date_after: endDate && calcDate(endDate),
      product_category_id: insurance,
    });
  };
  // init fetch data
  useEffect(() => {
    console.log("page_number:::", page_number);
    _getTransactionSale?.();
  }, [page_number]);

  useEffect(() => {
    _getTransactionSale?.();
  }, [insurance]);

  useEffect(() => {
    getInsuranceCategories?.();
  }, [getInsuranceCategories]);

  // search
  const search_submit = (e) => {
    _getTransactionSale();
  };

  return (
    <>
      <Top />
      <div className="relative top-0 z-30 w-full px-30 -mt-72 shadow-lg">
        <div className="card flex flex-col min-h-screen">
          <div className="card-header py-5 px-4 border-b border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <h3 className="text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right">
                لیست اقساط
              </h3>
              <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 my-2 px-3 text-xs rounded">
                بازگشت به لیست
              </button>
            </div>
          </div>
          <div>
            <TransactionSaleSearch search_submit={search_submit} />
          </div>

          {saleTransactions && (
            <SaleTransactionsTable
              saleTransactions={saleTransactions?.result}
            />
          )}
          {!!saleTransactions && saleTransactions?.count && (
            <div className="my-4">
              <Pagination
                total={saleTransactions?.count}
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

export default Transcations_sale;
