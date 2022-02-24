import Top from "admin/members/Top";
import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { RotateLoader } from "react-spinners";
import { SessionContext } from "shared/system-controls/session/SessionProvider";
import { ReactComponent as Bar } from "../../shared/icons/bar.svg";
import Interval_product from "./Interval_product";


const options = [
  "خاورمیانه",
  "سامان",
  "کارافرین",
  "باران",
  "کمک رسان ایران",
  "پاسارگاد",
  "ایران",
  "ما",
  "پارسیان",
  "ملت",
  "اسیا",
  "اسماری",
];

const categoryOptions = ["بیمه عمر", "بیمه درمان", "بیمه مسئولیت"];

function Newproduct() {
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [product_name, setproduct_name] = useState("دسته بندی محصول");
  const [company_name, setcompany_name] = useState("نام شرکت");
  const [companyId, setcompanId] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  const [show_interval, setshow_interval] = useState(false);
  const [cost, setCost] = useState("");
  const [planName, setPlanName] = useState("");
  const [allInterval, setAllInterval] = useState([]);
  const [from_month, setfrom_month] = useState("");
  const [to_month, setto_month] = useState("");
  const [salePost, setSalePost] = useState({
    from: "",
    to: "",
    tooko: "",
    manager: "",
    supervisor: "",
    adviser: "",
    SaleAssociate: "",
  });

  const {_axios}=useContext(SessionContext)

 

  const deleteIntervalHandler = (index) => {
    const reducedArr = [...allInterval];

    reducedArr.splice(index, 1);

    setAllInterval(reducedArr);
  };

  const submitFormHandler=async(e)=>{
    e.preventDefault()
    const body={
      name:planName,
      description: "این توضیحی برای طرح تست است",
      enable: true,
      id_type:categoryId,
      company:companyId,
      range:allInterval,
      invited_fix_price:cost
    }
    console.log(body)
  const result=await _axios().post("/admin_panel/user/addproduct",body)
  console.log(result)
   
  }

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
                <button className="bg-blue-600 flex hover:bg-blue-800 text-white font-bold py-2 px-3 text-xs rounded">
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
                  {product_name !== "دسته بندی محصول" && (
                    <span className="mr-auto text-xs ">دسته بندی محصول : </span>
                  )}
                  <div>
                    <button
                      type="button"
                      onClick={() => setshow1(!show1)}
                      className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 shadow"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      {product_name}
                      <svg
                        className="mr-1 h-5 w-5 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          transform={`${show1 && "rotate(180 10 10)"}`}
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  {show1 && (
                    <div
                      onClick={() => setshow1(!show1)}
                      className="origin-top-left z-10 absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1"
                    >
                      <div className="py-1" role="none">
                        {categoryOptions.map((item, index) => {
                          return (
                            <div
                              onClick={(e) =>{
                                setproduct_name(e.currentTarget.innerHTML)
                                setCategoryId(index+1)
                              }
                               
                              }
                              className="text-gray-700 block cursor-pointer px-4 py-2 text-sm text-right hover:bg-gray-200"
                              role="menuitem"
                              tabIndex="-1"
                              id="menu-item-0"
                            >
                              {item}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative inline-block text-right md:mr-10 py-5 mt-4">
                  {company_name !== "نام شرکت" && (
                    <span className="mr-auto text-xs ">نام شرکت : </span>
                  )}
                  <div>
                    <button
                      type="button"
                      onClick={() => setshow2(!show2)}
                      className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 shadow"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      {company_name}
                      <svg
                        className="mr-1 h-5 w-5 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          transform={`${show2 && "rotate(180 10 10)"}`}
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  {show2 && (
                    <div
                      onClick={() => setshow2(!show2)}
                      className="origin-top-left z-10 absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabindex="-1"
                    >
                      <div className="py-1" role="none">
                        {options.map((name, index) => {
                          return (
                            <div
                              key={index}
                              onClick={(e) => {
                                setcompany_name(e.currentTarget.innerHTML);
                                setcompanId(index + 1);
                              }}
                              className="text-gray-700 block cursor-pointer px-4 py-2 text-sm text-right hover:bg-gray-200"
                              role="menuitem"
                              tabindex="-1"
                              id={`menu-item-${index}`}
                            >
                              {name}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
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
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center py-5 md:justify-start">
                <div className="flex flex-col items-start mx-5 my-2">
                  <label
                    className="block text-gray-700 text-xs font-bold mb-2"
                    for="cost"
                  >
                    نام طرح
                  </label>
                  <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="cost"
                    value={planName}
                    onChange={(e) => setPlanName(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                setshow_interval((show) => !show);
              }}
              className="bg-blue-600 flex hover:bg-blue-800 text-white font-bold py-2 px-3 text-xs rounded mt-10"
            >
              افزودن بازه زمانی
            </button>
            {show_interval && (
              <Interval_product
                setshow_interval={setshow_interval}
                setfrom_month={setfrom_month}
                setto_month={setto_month}
                salePost={salePost}
                setSalePost={setSalePost}
                setAllInterval={setAllInterval}
                allInterval={allInterval}
              />
            )}

            {allInterval.length > 0 &&
              allInterval.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="border border-gray-300 px-3 py-1 items-center flex justify-between rounded w-1/2 ml-2 text-sm mt-2"
                  >
                    <span>
                      {" "}
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
            <button
              type="submit"
              className="bg-blue-600 flex hover:bg-blue-800 text-white font-bold py-2 px-3 text-xs rounded mt-10 mr-auto"
            >
              ثبت
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Newproduct;
