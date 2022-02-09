import Top from "admin/members/Top";
import React, { memo, useContext, useState, useEffect } from "react";
import { PaymentsContext } from "./state/PaymentsState";
import PaymentSearch from "./panel/PaymentTable";
import InstallmentTable from "./panel/InstallmentTable";
import axios from "axios";
import useSWR from "swr";
// import TableContent_pa from "./panel/InstallmentTable";
import Payments_upload from "./panel/Payments_upload";
import { DEFAULT_PAGE_NUMBER, DEFAULT_ROW } from "config/constant";
import Pagination from "admin/blog/panel/Pagination";
import SaleFilterDropDown from "./panel/SaleFilterDropDown";

const Payments = React.memo(() => {
  const {
    insurances,
    getPayments,
    installment,
    getProductCategories,
    productCategory,
    productCategoryid,
    date_start,
    date_end,
  } = useContext(PaymentsContext);
  const [page, setPageNumber] = useState(DEFAULT_PAGE_NUMBER);

  const [toggle1, settoggle1] = useState(false);
  const [toggle2, settoggle2] = useState(false);

  useEffect(() => {
    getPayments?.(
      {
        page,
        row: DEFAULT_ROW,
      }
      //   date_start ? date_start : null,
      //   date_end ? date_end : null,
      //   page,
      //   productCategoryid ? productCategoryid : null,
      //   DEFAULT_ROW
    );
  }, [page, getPayments]);

  useEffect(() => {
    getProductCategories?.();
  }, [getProductCategories]);

  useEffect(() => {
    !!productCategoryid &&
      getPayments?.(
        {
          product_category_id: productCategoryid,
          page,
          DEFAULT_ROW,
        }

        // date_start ? date_start : null,
        // date_end ? date_end : null,
        // page,
        // productCategoryid ? productCategoryid : null,
        // DEFAULT_ROW
      );
  }, [productCategoryid]);

  return (
    <>
      <Top />
      <div className="relative top-0 z-30 w-full px-30 -mt-72 shadow-lg">
        <div className="card flex flex-col min-h-screen">
          <div className="card-header py-5 px-4 border-b border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <h3 className="text-primary-color pr-3 font-bold text-otherCaption whitespace-nowrap  text-center lg:text-right">
                لیست اقساط
              </h3>
              <div className="flex w-full justify-end">
                <button className="bg-blue-600 flex hover:bg-blue-800 text-white font-bold py-2 px-3 text-xs rounded">
                  بازگشت به لیست
                </button>
              </div>
            </div>
          </div>

          <div>
            <PaymentSearch
              toggle1={toggle1}
              toggle2={toggle2}
              settoggle1={settoggle1}
              settoggle2={settoggle2}
              productCategory={productCategory}
            />

            <SaleFilterDropDown
              settoggle1={settoggle1}
              settoggle2={settoggle2}
              productCategory={productCategory}
            />
            {/* <InstallmentTable
              data={installment}
              settoggle1={settoggle1}
              insurance_list={insurance_list}
            /> */}
          </div>

          {installment?.count > 0 && (
            <InstallmentTable installment={installment} />
          )}

          {!!installment && installment?.count > 0 && (
            <div className="py-4">
              <Pagination
                total={installment?.count}
                setCurrentPage={setPageNumber}
                currentPage={page}
              />
            </div>
          )}
          {installment?.result?.length === 0 && (
            <div className="flex justify-center mt-4">
              <span>دیتایی جهت نمایش وجود ندارد!</span>
            </div>
          )}
          {insurances && <Payments_upload />}
        </div>
      </div>
    </>
  );
});

export default Payments;
