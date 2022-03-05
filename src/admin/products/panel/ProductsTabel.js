import React, { useContext, useState } from "react";
import { ProductContext } from "../state/State";
import Pagination from "admin/blog/panel/Pagination";

const ProductsTabel = () => {
  const {
    insurancesCategoriy,
    insuranceName,
    dispatch,
    getAllProducts,
    products,
    page,
    setPageNumber,
    getProductDetailes,
    setShowDetailes,
    setshow_interval,
    setShowProductDetail
  } = useContext(ProductContext);

  const detaileHandler = (id) => {
    getProductDetailes(id);
    setShowDetailes(true);
    setshow_interval(true);
  };

  console.log(products);
  return (
    <>
      {products?.result?.length === 0 ? (
        <p className="mt-4 text-center">دیتایی جهت نمایش وجود ندارد</p>
      ) : (
        <>
          <div className="relative lg:flex lg:justify-center mt-5 overflow-x-scroll lg:overflow-x-auto p-1">
            <table className="w-11/12">
              <thead className="text-sm bg-gray-300">
                <tr className="bg-other-bgGrayActiveItem">
                  <th className="whitespace-nowrap px-4 text-center py-2 border">
                    نام شرکت
                  </th>
                  <th className="whitespace-nowrap px-4 text-center py-2 border">
                    توضیحات
                  </th>
                  <th className="whitespace-nowrap px-4 text-center py-2 border">
                    وضعیت
                  </th>
                  <th className="whitespace-nowrap px-4 text-center py-2 border">
                    محصول
                  </th>
                  <th className="whitespace-nowrap px-4 text-center py-2 border">
                    نام
                  </th>
                  <th className="border">#</th>
                </tr>
              </thead>
              <tbody className="table_tbody text-sm">
                {products.result &&
                  products.result?.map((item, index) => (
                    <tr
                      key={item.product_id}
                      className="cursor-pointer hover:bg-gray-100"
                    >
                      <td className="whitespace-nowrap px-4 text-center py-2 border">
                        {item.company_name}
                      </td>
                      <td className="whitespace-nowrap px-4 text-center py-2 border">
                        {item.description}
                      </td>
                      <td className="whitespace-nowrap px-4 text-center py-2 border">
                        {item.enable ? "فعال" : "غیرفعال"}
                      </td>
                      <td className="whitespace-nowrap px-4 text-center py-2 border">
                        {item.id_type_id}
                      </td>
                      <td className="whitespace-nowrap px-4 text-center py-2 border">
                        {item.name}
                      </td>
                      <td className="border text-center px-2">
                        <button
                          onClick={() => {
                            detaileHandler(item.product_id)
                            setShowProductDetail(true)
                          }}
                          className="text-blue-500"
                        >
                          جزییات
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {!!products && products?.count > 0 && (
            <div className="py-4">
              <Pagination
                total={products?.count}
                setCurrentPage={setPageNumber}
                currentPage={page}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ProductsTabel;
