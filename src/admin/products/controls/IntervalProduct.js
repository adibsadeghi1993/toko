import React, { useCallback, useEffect, useState } from "react";

const Interval_product = React.memo(
  ({
    setAllInterval,
    allInterval,
    setshow_interval,
    setfrom_month,
    setto_month,
    // percent,
    setSalePost,
    appendPercent,
    productDetailes,
    submit
  }) => {
    console.log(productDetailes)

    


    const [percent, setPercent] = useState({
      from: undefined,
      to: undefined,
      tooko: undefined,
      manager: undefined,
      supervisor: undefined,
      adviser: undefined,
      SaleAssociate: undefined,
    });


    const intervalHandler = () => {
      console.log("percent:", percent);
      // if (
      //   !percent.from ||
      //   !percent.to ||
      //   percent.from > 12 ||
      //   percent.to <= 0 ||
      //   percent.from <= 0 ||
      //   percent.from > percent.to
      // ) {
      //   window.alert("لطفا مقادیر را درست وارد کنید");
      // } else {
      appendPercent(percent);
      setAllInterval([
        ...allInterval,
        [
          percent.from,
          percent.to,
          percent.tooko,
          percent.manager,
          percent.supervisor,
          percent.adviser,
          percent.SaleAssociate,
        ],
      ]);
      setSalePost({
        from: "",
        to: "",
        tooko: "",
        manager: "",
        supervisor: "",
        adviser: "",
        SaleAssociate: "",
      });
      setshow_interval((show) => !show);

      // }
    };

    const changeHandle = (value, name) => {
      let tmpP = percent;
      tmpP[name] = value;
      setPercent(tmpP);
    };

    useEffect(()=>{
    if(productDetailes?.product_percents){
      setPercent({
        from:productDetailes?.product_percents.range[0][0],
        to:productDetailes?.product_percents.range[0][1],
        tooko:productDetailes?.product_percents.range[0][2],
        manager:productDetailes?.product_percents.range[0][3],
        supervisor:productDetailes?.product_percents.range[0][4],
        adviser:productDetailes?.product_percents.range[0][5],
        SaleAssociate:productDetailes?.product_percents.range[0][6],
      })
    }
    },[productDetailes])

    return (
      <div>
        <div className="flex">
          <div className="mt-5 flex flex-col justify-start w-32 ml-2 text-sm">
            <label>از ماه</label>
            <input
              value={percent.from}
              onChange={useCallback((e) => {
                changeHandle(parseInt(e.target.value), "from");
              }, [])}
              name="from"
              type="number"
              className="border rounded p-1 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mt-5 flex flex-col justify-start w-32 text-sm">
            <label>تا ماه</label>
            <input
              value={percent.to}
              onChange={useCallback((e) => {
                changeHandle(parseInt(e.target.value), "to");
              }, [])}
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
                  value={percent.tooko}
                  onChange={useCallback((e) => {
                    changeHandle(parseFloat(e.target.value), "tooko");
                  }, [])}
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
                  value={percent.manager}
                  name="manager"
                  onChange={useCallback((e) => {
                    changeHandle(parseFloat(e.target.value), "manager");
                  }, [])}
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
                  value={percent.supervisor}
                  name="supervisor"
                  onChange={useCallback((e) => {
                    changeHandle(parseFloat(e.target.value), "supervisor");
                  }, [])}
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
                  value={percent.adviser}
                  name="adviser"
                  onChange={useCallback((e) => {
                    changeHandle(parseFloat(e.target.value), "adviser");
                  }, [])}
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
                  value={percent.SaleAssociate}
                  name="SaleAssociate"
                  onChange={useCallback((e) => {
                    changeHandle(parseFloat(e.target.value), "SaleAssociate");
                  }, [])}
                  className="border border-gray-300 rounded p-1 focus:outline-none focus:border-blue-400 w-20"
                />
              </div>
            </div>
          </div>
        </div>
       {submit &&  <button
          className="bg-blue-600 flex hover:bg-blue-800 text-white font-bold py-2 px-4 text-xs rounded mt-8"
          onClick={intervalHandler}
          type="button"
        >
          ثبت
        </button>}
      </div>
    );
  }
);

export default Interval_product;
