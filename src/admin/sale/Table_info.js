import Top from "admin/members/Top";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import TableContent from "./panel/Table_content";
import TableSearch from "./panel/Table_search";
import TableTitles from "./panel/Table_titles";
import { SaleContext } from "./state/SaleState";

const Table_info = React.memo(() => {
  const {
    insurances,
    insurance,
    dispatch,
    getSalesSearch,
    product_category,
    status_id,
    sales,
    getStatusProduct,
    getProductCategories,
  } = useContext(SaleContext);

  const [toggle1, settoggle1] = useState(false);
  const [toggle2, settoggle2] = useState(false);

  useEffect(() => {
    !!insurance && getStatusProduct(insurance);
  }, [insurance]);

  useEffect(() => {
    !!getSalesSearch &&
      getSalesSearch({
        product_category_id: 0,
        status_id: 100,
        page: 1,
        row: 10,
      });
  }, [getSalesSearch, dispatch]);

  useEffect(() => {
    getProductCategories?.();
  }, [getProductCategories, dispatch]);

  useEffect(() => {
    !!status_id &&
      getSalesSearch?.({
        product_category_id: insurance,
        status_id: status_id,
        page: 1,
        row: 10,
      });
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
            <TableSearch
              toggle1={toggle1}
              toggle2={toggle2}
              settoggle1={settoggle1}
              settoggle2={settoggle2}
            />
            <TableTitles
              settoggle1={settoggle1}
              settoggle2={settoggle2}
              product_categories={product_category}
            />
          </div>

          {insurances && <TableContent sales={sales} />}
        </div>
      </div>
    </>
  );
});

export default Table_info;
