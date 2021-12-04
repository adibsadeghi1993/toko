import React from "react";
import CompanyBox from "../controls/CompanyBox";

export default React.memo(() => {
  const data = [1, 2, 3, 4, 5];
  return (
    <div className="flex justify-center px-4 lg:px-32">
      <div className="grid grid-cols-12 flex-row w-full gap-x-4 gap-y-30">
        {data?.map((item,index) => (
          <CompanyBox item={item} index={index} key={index}/>
        ))}
      </div>
    </div>
  );
});
