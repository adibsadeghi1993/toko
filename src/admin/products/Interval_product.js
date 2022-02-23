import React, { useState } from "react";

function Interval_product({
  setAllInterval,
  allInterval,
  setshow_interval,
  setfrom_month,
  setto_month,
  salePost,
  setSalePost,
}) {
  const [from, setfrom] = useState();
  const [to, setto] = useState();

  const handelSubmit = (e) => {
    e.preventDefault();

    if (
      !salePost.from ||
      !salePost.to ||
      salePost.to > 12 ||
      salePost.from > 12 ||
      salePost.to <= 0 ||
      salePost.from <= 0 ||
      salePost.from > salePost.to
    ) {
      window.alert("لطفا مقادیر را درست وارد کنید");
    } else {
      setshow_interval((show) => !show);
      setfrom_month(from);
      setto_month(to);

      setAllInterval([
        ...allInterval,
        [
          salePost.from,
          salePost.to,
          salePost.tooko,
          salePost.manager,
          salePost.supervisor,
          salePost.adviser,
          salePost.SaleAssociate,
        ],
      ]);
    }
  };

  const changeHandle = (e) => {
    const { name, value } = e.target;
    setSalePost({ ...salePost, [name]: parseInt(e.target.value) });
  };

  return (
    <div>
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
        onClick={(e) => handelSubmit(e)}
      >
        ثبت
      </button>
    </div>
  );
}

export default Interval_product;
