import React, { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { AcceessContex } from "../state/AccessState";
import RowProductSell from "./RowProductSell";
import { ReactComponent as ArrowDown } from "shared/icons/arrow-down.svg";
import { ReactComponent as ArrowUp } from "shared/icons/arrow-up.svg";

export default React.memo(({ company, company_name, index }) => {
  const [collspace, setCollspace] = useState(true);
  const { groupBy } = useContext(AcceessContex);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    setProduct(groupBy(Object.values(company)[index], "product_name") || []);
  }, [company, index, groupBy]);
  return (
    <>
      <div
        onClick={() => {
          setCollspace(!collspace);
        }}
        className="w-full flex flex-row justify-between p-3 cursor-pointer bg-gray-300 mb-px"
      >
        <h1>{company_name}</h1>
        {!collspace && <ArrowDown />}
        {!!collspace && <ArrowUp />}
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
