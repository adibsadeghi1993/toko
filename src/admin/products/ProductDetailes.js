import Top from "admin/members/Top";
import React, { useState, useContext, useEffect, useCallback } from "react";
import { Link, useParams,useHistory } from "react-router-dom";
import IntervalProduct from "./controls/IntervalProduct";
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
  const {
    setShowDetailes,
    show_interval,
    setshow_interval,
    insurancesCategoriy,
    getProductCategories,
    productDetailes,
    getDetailsProduct,
    dispatch,
  } = useContext(ProductContext);
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [product_name, setproduct_name] = useState(
    productDetailes.id_type_id || "دسته بندی محصول"
  );
  const [company_name, setcompany_name] = useState(
    productDetailes.company_name || "نام شرکت"
  );
  const [companyId, setcompanId] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  const [cost, setCost] = useState("");
  const [planName, setPlanName] = useState(productDetailes.name || "");
  const [allInterval, setAllInterval] = useState([]);
  const [from_month, setfrom_month] = useState("");
  const [to_month, setto_month] = useState("");
  const [description, setDescription] = useState(
    productDetailes.description || ""
  );
  const [salePost, setSalePost] = useState();

  const { id } = useParams();

  useEffect(() => {
    getProductCategories();
    getDetailsProduct?.(id);
  }, [id]);

  useEffect(() => {
    let tempData = [];
    productDetailes?.product_percents?.range?.map((item, index) => {
      tempData.push({
        from: item[0],
        to: item[1],
        tooko: item[2],
        manager: item[3],
        supervisor: item[4] || "",
        adviser: item[5] || "",
        SaleAssociate: item[6] || "",
      });
    });
    console.log("tempData:::", tempData);
    setSalePost(tempData);
  }, [productDetailes]);

  const appendPercent = useCallback((items) => {
    let tmp = [];
    tmp[0] = items.from;
    tmp[1] = items.to;
    tmp[2] = items.tooko;
    tmp[3] = items.manager;
    tmp[4] = items.supervisor;
    tmp[5] = items.adviser;
    tmp[6] = items.SaleAssociate;
    dispatch({ type: "UPDATE_PERCENT", payload: tmp });
  });

  const deleteIntervalHandler = (index) => {
    const reducedArr = [...allInterval];

    reducedArr.splice(index, 1);

    setAllInterval(reducedArr);
  };

  const submitFormHandler = async (e) => {
    // e.preventDefault();
    // const body = {
    //   name: planName,
    //   description: description,
    //   enable: true,
    //   id_type: categoryId,
    //   company: companyId,
    //   range: allInterval,
    //   invited_fix_price: parseInt(cost),
    // };
    // const result = await _axios().post("/admin_panel/user/addproduct", body);
    // console.log(result);
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
                            productDetailes?.product_id === item?.category_id
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
                  <select
                    className="select-box p-2 w-64 text-sm bg-white block border rounded mt-1"
                    placeholder="نام شرکت"
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
              

                <div className="flex flex-col px-5 md:px-0  md:mx-10 my-2">
                  <label
                    className="block text-gray-700 text-xs font-bold mb-2"
                    for="cost"
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
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center py-5 md:justify-start">
                <div className="flex flex-col items-start mx-5 my-2">
                  <label
                    className="block text-gray-700 text-xs font-bold mb-2"
                    for="cost"
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

           
            {show_interval && (
              <IntervalProduct
                setshow_interval={setshow_interval}
                setfrom_month={setfrom_month}
                setto_month={setto_month}
                salePost={salePost}
                setSalePost={setSalePost}
                setAllInterval={setAllInterval}
                allInterval={allInterval}
                appendPercent={(items) => appendPercent(items)}
              />
            )}

            {productDetailes?.product_percents?.range?.length > 0 &&
              productDetailes?.product_percents?.range?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="border border-gray-300 px-3 py-1 items-center flex justify-between rounded w-1/2 ml-2 text-sm mt-2"
                  >
                    <span>
                      درصد ها از ماه {item[0]} تا ماه {item[1]}
                    </span>
                    <button
                      onClick={() => deleteIntervalHandler(index)}
                      className=" bg-red-600 text-white font-bold py-2 px-3 text-xs rounded"
                    >
                      حذف
                    </button>
                  </div>
                );
              })}
           
          </form>
        </div>
      </div>
    </>
  );
});

export default Newproduct;
