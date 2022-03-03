import React, { useEffect, useState } from "react";
import RowCompanySell from "./RowCompanySell";

import { ReactComponent as Arrow_down } from "shared/icons/arrow-down.svg";
import { ReactComponent as Arrow_up } from "shared/icons/arrow-up.svg";
export default React.memo(({ item, index }) => {
  const [collspaceProduct, setCollspaceProduct] = useState(true);
  return (
    <div className="mt-4">
      {!!item &&
        Object.keys(item).map((val) => (
          <React.Fragment key={index}>
            <div
              onClick={() => setCollspaceProduct(!collspaceProduct)}
              className="w-full mb-1 p-3 bg-gray-200 cursor-pointer flex flex-row justify-between"
            >
              <h1>{val}</h1>
              {!collspaceProduct && <Arrow_down />}
              {!!collspaceProduct && <Arrow_up />}
            </div>

            {!!collspaceProduct &&
              !!item &&
              Object.values(item) &&
              Object.values(item)?.map((company) => (
                <>
                  <span className="text-sm mb-1">شرکت</span>

                  {Object.keys(company).map((company_name, index) => (
                    <>
                      <RowCompanySell
                        key={index}
                        company={company}
                        company_name={company_name}
                        index={index}
                      />
                    </>
                  ))}
                </>
              ))}
          </React.Fragment>
        ))}
    </div>
  );
});
