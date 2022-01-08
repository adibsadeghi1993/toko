import React from "react";

export default React.memo(({ details }) => {
  return (
    <>
      {!!details && (
        <div className="border-b pb-3 border-gray-400 px-10">
          <div className="relative flex justify-center mt-15 p-1">
            <table className="w-full">
              <thead className="text-sm bg-gray-200">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 border-gray-300 border">
                    نام و نام خانوادگی
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 border-gray-300 border">
                    سمت
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 border-gray-300 border">
                    بازه زمانی
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 border-gray-300 border">
                    درصد
                  </th>
                </tr>
              </thead>
              <tbody>
                {details?.map((item, index) => (
                  <React.Fragment key={index}>
                    <tr className="bg-emerald-200 text-center text-sm">
                      <td className="pl-1 py-2 border border-gray-300">
                        {item?.full_name}
                      </td>
                      <td className="pl-1 py-2 border border-gray-300">
                        {item?.level_title}
                      </td>
                      <td className="pl-1 py-2 border border-gray-300">
                        <span>
                          از {item?.range[0]} تا {item.range[1]} ماه
                        </span>
                        
                      </td>
                      <td className="pl-1 py-2 border border-gray-300">
                        {item.percent}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
});
