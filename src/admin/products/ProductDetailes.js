import Top from "admin/members/Top";
import React, { useState, useContext, useEffect, useCallback } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import IntervalProduct from "./controls/IntervalProduct";
import Range from "./controls/Range";
import { specifiedCategory } from "./panel/SpecifiedCategoriy";
import { ProductContext } from "./state/State";

const options = [
  { id: 1, title: "خاورمیانه" },
  { id: 2, title: "سامان" },
  { id: 3, title: "کارافرین" },
  { id: 4, title: "باران" },
  { id: 5, title: "کمک رسان ایران (SOS)" },
  { id: 7, title: "پاسارگاد" },
  { id: 8, title: "ایران" },
  { id: 9, title: "ما" },
  { id: 10, title: "پارسیان" },
  { id: 11, title: "ملت" },
  { id: 12, title: "آسیا" },
  { id: 13, title: "آسماری" },
];
const Newproduct = React.memo(() => {
  const history = useHistory();
  const {
    setShowDetailes,
    show_interval,
    setshow_interval,
    insurancesCategoriy,
    getProductCategories,
    productDetailes,
    getDetailsProduct,
    dispatch,
    updatedProductDetaile,
    loadingEdit,
    deleteProduct,
    loadingDelete,
  } = useContext(ProductContext);
  console.log({ productDetailes });
  console.log({ insurancesCategoriy });

  const [status, setStatus] = useState(productDetailes.enable);

  const [allInterval, setAllInterval] = useState([]);

  const [addPercent, setAddPercent] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    getProductCategories();
    getDetailsProduct?.(id);
  }, [id]);

  useEffect(() => {
    setStatus(productDetailes.enable);
  }, [productDetailes]);

  useEffect(() => {
    setAllInterval(productDetailes?.product_percents?.range);
  }, [productDetailes]);

  console.log({ allInterval });

  const deleteIntervalHandler = (index) => {
    const reducedArr = [...allInterval];

    reducedArr.splice(index, 1);

    setAllInterval(reducedArr);
  };

  console.log({ addPercent });

  const submitFormHandler = (e) => {
    e.preventDefault();

    const bodyRequest = {
      product_id: productDetailes.product_id,
      id_type: parseInt(productDetailes.id_type_id),
      company: parseInt(productDetailes.company_id),
      name: productDetailes.name,
      description: productDetailes.description,
      invited_fix_price: parseInt(productDetailes.invited_fix_price),
      product_percents: allInterval,
    };
    updatedProductDetaile(bodyRequest, () => {
      history.push("/products");
    });
  };

  const onConfirm = () => {
    setStatus(!status);
    deleteProduct({ enable: status, product_id: productDetailes.product_id });
  };

  return (
    <>
      <Top />
      <div className="relative top-0 z-30 w-full px-30 -mt-72 shadow-lg">
        <div className="card flex flex-col min-h-screen">
          <div className="card-header py-5 px-4 border-b border-gray-100 rounded">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <h3 className="text-primary-color pr-3 font-bold text-otherCaption whitespace-nowrap  text-center lg:text-right">
                محصول جدید
              </h3>
              <Link to="/products">
                <button
                  onClick={() => setShowDetailes(false)}
                  className="bg-blue-600 flex hover:bg-blue-800 text-white font-bold py-2 px-3 text-xs rounded"
                >
                  بازگشت به لیست
                </button>
              </Link>
            </div>
          </div>
          <form className="p-5" onSubmit={submitFormHandler}>
            <div className="mt-10">
              <h3>مشخصات محصول</h3>
              <hr />

              <div className="flex items-center  w-full flex-col md:flex-row md:justify-start  ">
                <div className="relative inline-block text-right py-15 mt-4">
                  <label className="mb-2 text-sm">دسته بندی محصول:</label>
                  <select
                    className="select-box p-2 w-64 text-sm bg-white block border rounded mt-1"
                    placeholder="دسته بندی محصول"
                    onClick={useCallback(
                      (e) => {
                        dispatch({
                          type: "UPDATE_PRODUCT",
                          payload: +e.target.value,
                        });
                      },
                      [dispatch]
                    )}
                  >
                    {insurancesCategoriy.map((item, index) => {
                      return (
                        <option
                          key={index}
                          selected={
                            productDetailes?.id_type_id === item?.category_id
                          }
                          className="text-gray-700 block cursor-pointer px-4 py-2 text-sm text-right hover:bg-gray-200"
                          value={item.category_id}
                        >
                          {item.category_name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="relative inline-block text-right py-15 mt-4 mr-4">
                  <label className="mb-2 text-sm">نام شرکت</label>
                  <select
                    className="select-box p-2 w-64 text-sm bg-white block border rounded mt-1"
                    placeholder="نام شرکت"
                    onClick={useCallback(
                      (e) => {
                        dispatch({
                          type: "UPDATE_COMPANY",
                          payload: +e.target.value,
                        });
                      },
                      [dispatch]
                    )}
                  >
                    {options.map((item, index) => {
                      return (
                        <option
                          key={index}
                          selected={productDetailes?.company_id === item?.id}
                          className="text-gray-700 block cursor-pointer px-4 py-2 text-sm text-right hover:bg-gray-200"
                          value={item.id}
                        >
                          {item.title}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center py-5 md:justify-start">
                <div className="flex flex-col items-start mx-5 my-2">
                  <label
                    className="block text-gray-700 text-xs font-bold mb-2"
                    htmlFor="cost"
                  >
                    نام محصول
                  </label>
                  <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="cost"
                    value={productDetailes?.name}
                    onChange={useCallback(
                      (e) => {
                        dispatch({
                          type: "UPDATE_NAME",
                          payload: e.target.value,
                        });
                      },
                      [dispatch]
                    )}
                  />
                </div>

                <div className="flex flex-col px-5 md:px-0  md:mx-10 my-2">
                  <label
                    className="block text-gray-700 text-xs font-bold mb-2"
                    htmlFor="cost"
                  >
                    مبلغ ثابت دعوت از دوستان
                  </label>
                  <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="cost"
                    value={productDetailes?.invited_fix_price}
                    onChange={useCallback(
                      (e) => {
                        dispatch({
                          type: "UPDATE_INVITED_PRICE",
                          payload: e.target.value,
                        });
                      },
                      [dispatch]
                    )}
                  />
                </div>

                <div>
                  <label className="custom-toggle float-right ">
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={status}
                      onChange={onConfirm}
                    />
                    <span
                      className="custom-toggle-slider rounded-full"
                      data-label-on="فعال"
                      data-label-off="غیرفعال"
                    ></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="px-3">
              <textarea
                value={productDetailes?.description}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="3"
                placeholder="توضیحات"
                onChange={useCallback(
                  (e) => {
                    dispatch({
                      type: "UPDATE_DESCRIPTION",
                      payload: e.target.value,
                    });
                  },
                  [dispatch]
                )}
              />
            </div>

            {allInterval?.map((item, index) => {
              return (
                <Range
                  key={index}
                  allInterval={allInterval}
                  index={index}
                  percents={item}
                  setAllInterval={setAllInterval}
                  deleteIntervalHandler={deleteIntervalHandler}
                />
              );
            })}

            <button
              onClick={(e) => {
                e.preventDefault();
                setAddPercent(!addPercent);
              }}
              className="bg-blue-600 flex hover:bg-blue-800 text-white font-bold py-2 px-4 text-xs rounded mt-8"
            >
              افزودن بازه زمانی
            </button>
            {addPercent && (
              <Range
                addPercent={addPercent}
                setAllInterval={setAllInterval}
                allInterval={allInterval}
              />
            )}

            <div className="flex  justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-3 py-1  hover:bg-blue-600 "
              >
                ارسال
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
});

export default Newproduct;
