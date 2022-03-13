import Percents from "admin/campaign/panels/Percents";
import SaleState from "admin/sale/state/SaleState";
import React, { useState, useEffect } from "react";

const Range = ({ percents, setAllInterval, allInterval, addPercent,index:id,deleteIntervalHandler }) => {
  console.log(allInterval);
  console.log(percents);
  console.log(addPercent);
  console.log(id)
  const [showInterval, setShowInterval] = useState(false);
  const [salePost, setSalePost] = useState({
    from: "",
    to: "",
    tooko: "",
    manager: "",
    supervisor: "",
    adviser: "",
    SaleAssociate: "",
  });

  useEffect(() => {
    console.log(addPercent);

    if (addPercent) {
      setShowInterval(true);
    }
  }, []);



  const confirmPercentHandler = (e) => {
     
    e.preventDefault();

    if (addPercent) {
        const oldInterval=[...allInterval]
        const newInterval=[...oldInterval,[
            salePost.from,
            salePost.to,
            salePost.tooko,
            salePost.manager,
            salePost.supervisor,
            salePost.adviser,
            salePost.SaleAssociate,
          ]]
     
          setAllInterval(newInterval)


      console.log(allInterval)
    }else{
        setAllInterval(allInterval?.map((item,index)=>{
            if(index===id){
               
                return [
                    salePost.from,
                    salePost.to,
                    salePost.tooko,
                    salePost.manager,
                    salePost.supervisor,
                    salePost.adviser,
                    salePost.SaleAssociate,
                  ]
            }else{
              
                return item
            }
        }))
    }

    setShowInterval(false);
  };
  useEffect(() => {
    if (percents !== undefined) {
      setSalePost({
        from: percents[0],
        to: percents[1],
        tooko: percents[2],
        manager: percents[3],
        supervisor: percents[4],
        adviser: percents[5],
        SaleAssociate: percents[6],
      });
    }
  }, [percents]);

  const changeHandle = (e) => {
    const { name, value } = e.target;
    setSalePost({ ...salePost, [name]: parseInt(value) });
  };

  const removeInterval=()=>{
    deleteIntervalHandler(id)
  }

  console.log({allInterval})
  return (
    <div>
      {showInterval && (
        <>
          <div className="flex">
            <div className="mt-5 flex flex-col justify-start w-32 ml-2 text-sm">
              <label>از ماه</label>
              <input
                value={salePost.from}
                onChange={changeHandle}
                name="from"
                type="number"
                className="border rounded p-1 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="mt-5 flex flex-col justify-start w-32 text-sm">
              <label>تا ماه</label>
              <input
                value={salePost.to}
                onChange={changeHandle}
                name="to"
                type="number"
                className="border rounded p-1 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>

          <div className="flex justify-start flex-col mt-5 w-full">
            <div className="flex">
              <h3>سمت در شبکه فروش</h3>
              <h3 className="mr-28">درصد</h3>
            </div>

            <div className="flex flex-col mt-1">
              <div className="flex items-end ">
                <div className="border border-gray-300 p-1 rounded w-52 ml-2 text-sm">
                  توکو
                </div>
                <div className="flex flex-col justify-start text-sm">
                  <input
                    type="number"
                    name="tooko"
                    value={salePost.tooko}
                    onChange={changeHandle}
                    className="border border-gray-300 rounded p-1 focus:outline-none focus:border-blue-400 w-20"
                  />
                </div>
              </div>
              <div className="flex items-end mt-2">
                <div className="border border-gray-300 p-1 rounded w-52 ml-2 text-sm">
                  مدیر ارشد فروش
                </div>
                <div className="flex flex-col justify-start text-sm">
                  <input
                    type="number"
                    value={salePost.manager}
                    name="manager"
                    onChange={changeHandle}
                    className="border border-gray-300 rounded p-1 focus:outline-none focus:border-blue-400 w-20"
                  />
                </div>
              </div>
              <div className="flex items-end mt-2">
                <div className="border border-gray-300 p-1 rounded w-52 ml-2 text-sm">
                  سرپرست فروش
                </div>
                <div className="flex flex-col justify-start text-sm">
                  <input
                    type="number"
                    value={salePost.supervisor}
                    name="supervisor"
                    onChange={changeHandle}
                    className="border border-gray-300 rounded p-1 focus:outline-none focus:border-blue-400 w-20"
                  />
                </div>
              </div>
              <div className="flex items-end mt-2">
                <div className="border border-gray-300 p-1 rounded w-52 ml-2 text-sm">
                  کارشناس فروش
                </div>
                <div className="flex flex-col justify-start text-sm">
                  <input
                    type="number"
                    value={salePost.adviser}
                    name="adviser"
                    onChange={changeHandle}
                    className="border border-gray-300 rounded p-1 focus:outline-none focus:border-blue-400 w-20"
                  />
                </div>
              </div>
              <div className="flex items-end mt-2">
                <div className="border border-gray-300 p-1 rounded w-52 ml-2 text-sm">
                  مشاور فروش
                </div>
                <div className="flex flex-col justify-start text-sm">
                  <input
                    type="number"
                    value={salePost.SaleAssociate}
                    name="SaleAssociate"
                    onChange={changeHandle}
                    className="border border-gray-300 rounded p-1 focus:outline-none focus:border-blue-400 w-20"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            className="bg-blue-600 flex hover:bg-blue-800 text-white font-bold py-2 px-4 text-xs rounded mt-8"
            onClick={confirmPercentHandler}
          >
            ثبت
          </button>
        </>
      )}
      {showInterval || addPercent || (
        <div className="border border-gray-300 px-3 py-1 items-center flex justify-between rounded w-full ml-2 text-sm mt-2">
          <span>
            درصد ها از ماه {percents[0]} تا ماه {percents[1]}
          </span>
          <span>توکو {percents[2]} درصد</span>
          <span>مدیر ارشد فروش {percents[3]} درصد</span>
          <span>سرپرست فروش {percents[4]} درصد</span>
          <span>کارشناس فروش {percents[5]} درصد</span>
          <span>مشاور فروش {percents[6]} درصد</span>
          <button
            onClick={() => setShowInterval(true)}
            className=" bg-blue-600 text-white font-bold py-2 px-3 text-xs rounded"
          >
            ویرایش
          </button>
          <button onClick={removeInterval} className=" bg-red-600 text-white font-bold py-2 px-3 text-xs rounded">
            حذف
          </button>
        </div>
      )}
    </div>
  );
};

export default Range;
