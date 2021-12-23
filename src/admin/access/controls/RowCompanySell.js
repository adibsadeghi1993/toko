import React, { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { AcceessContex } from "../state/AccessState";
import RowProductSell from "./RowProductSell";
import { ReactComponent as Arrow_down } from "../../../shared/icons/arrow-down.svg";
import { ReactComponent as Arrow_up } from "../../../shared/icons/arrow-up.svg";

export default React.memo(({ company, company_name, index }) => {
  const [collspace, setCollspace] = useState(false);
  const { groupBy } = useContext(AcceessContex);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    console.log("cmp:", groupBy(Object.values(company)[index], "product_name"));
    setProduct(groupBy(Object.values(company)[index], "product_name") || []);
  }, [company]);
  return (
    <>
      <div
        onClick={() => {
          setCollspace(!collspace);
        }}
        className="w-full flex flex-row justify-between p-3 cursor-pointer bg-gray-300 mb-px"
      >
        <h1>{company_name}</h1>
        {!collspace && <Arrow_down />}
        {!!collspace && <Arrow_up />}
      </div>
      {!!collspace && (
        <div className="flex flex-col gap-y-2  mb-4">
          <span className="text-sm mb-1">محصول</span>
          {Object.keys(product).map((val, index) => (
            <RowProductSell product={product} val={val} index={index} />
          ))}
        </div>
      )}
    </>
  );
});
