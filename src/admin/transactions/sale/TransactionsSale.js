import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Top from "admin/members/Top";
import useSWR from "swr";
import Table_search_sale from "./Table_search_sale";
import Table_titles_sale from "./Table_titles_sale";
import TableContent_sale from "./TableContent_sale";
import { TransActionSaleContext } from "./state/State";
import { DEFAULT_PAGE_NUMBER, DEFAULT_ROW } from "config/constant";

const Transcations_sale = React.memo(() => {
  const { insurances, getTransActionSale } = useContext(TransActionSaleContext);
  const [page_number, setPageNumber] = useState(DEFAULT_PAGE_NUMBER);

  const [toggle1, settoggle1] = useState(false);
  const [toggle2, settoggle2] = useState(false);

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data: insurance_list } = useSWR(
    `http://81.91.145.250:8002/outsource/type_of_insurance`,
    fetcher
  );

  useEffect(() => {
    getTransActionSale?.(page_number, DEFAULT_ROW);
  }, [page_number]);
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
            <Table_search_sale
              toggle1={toggle1}
              toggle2={toggle2}
              settoggle1={settoggle1}
              settoggle2={settoggle2}
              insurance_list={insurance_list}
            />
            <Table_titles_sale
              settoggle1={settoggle1}
              settoggle2={settoggle2}
              insurance_list={insurance_list}
            />
          </div>

          {insurances && <TableContent_sale />}
        </div>
      </div>
    </>
  );
});

export default Transcations_sale;
