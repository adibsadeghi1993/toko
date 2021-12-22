import React, { useEffect, useState } from "react";

export default React.memo(({ item, index }) => {
  const [collspaceProduct, setCollspaceProduct] = useState(false);
  const [collspaceItems, setCollspaceItems] = useState(false);

  return (
    <div className="mt-4">
      {!!item &&
        Object.keys(item).map((val) => (
          <>
            <div
              onClick={() => setCollspaceProduct(!collspaceProduct)}
              className="w-full mb-1 p-3 bg-gray-200 cursor-pointer flex flex-row justify-between"
            >
              <h1>{val}</h1>
            </div>

            {!!collspaceProduct &&
              !!item &&
              Object.values(item) &&
              Object.values(item)?.map((company) => (
                <>
                  <span className="text-sm mb-1">محصول</span>

                  {Object.keys(company).map((company_name, index) => (
                    <>
                      <div
                        onClick={() => setCollspaceItems(!collspaceItems)}
                        className="w-full p-3 cursor-pointer bg-gray-300"
                      >
                        <h1>{company_name}</h1>
                      </div>
                      {!!collspaceItems && (
                        <div className="flex flex-col space-y-px mb-4">
                          {Object.values(company)[index].map(
                            (company_items) => (
                              <>
                                <div className="flex flex-row">
                                  <div className="w-10/12 p-3 bg-gray-400">
                                    <h1>
                                      ماه {company_items.range[0]} تا{" "}
                                      {company_items.range[1]}
                                    </h1>
                                  </div>
                                  <div className="w-1/5 flex justify-center items-center p-3 bg-gray-500">
                                    <input
                                      type="number"
                                      className="text-center"
                                      defaultValue={company_items.percent}
                                    />
                                  </div>
                                </div>
                              </>
                            )
                          )}
                        </div>
                      )}
                    </>
                  ))}
                </>
              ))}
          </>
        ))}
    </div>
  );
});
