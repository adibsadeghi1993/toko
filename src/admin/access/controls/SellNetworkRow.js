import React from "react";

export default React.memo(({ key, percents, index }) => {
  return (
    <div className="mt-4" key={index}>
      <div className="w-full p-3 bg-gray-300">
        <h2>{key}</h2>
      </div>
      {percents[key].map((item, inx) => (
        <>
          <div className="flex flex-row gap-x-2 space-y-2">
            <div className={`w-10/12  rounded-md bg-gray-400 p-3 mt-2`}>
              <h2>{item?.product_name}</h2>
            </div>
            <div
              className={`w-1/5  rounded-md p-3 bg-gray-400  mt-2 flex flex-row justify-center`}
            >
              <h2>
                <input
                  defaultValue={item?.percent}
                  className="text-center"
                  type="number,"
                />
              </h2>
            </div>
          </div>
        </>
      ))}
    </div>
  );
});
