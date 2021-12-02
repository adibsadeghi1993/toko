import React from "react";
import CompanyBox from "../controls/CompanyBox";

export default React.memo(() => {
  const data = [1, 2, 3, 4, 5];
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-30">
        {data?.map((item) => (
          <CompanyBox />
        ))}
      </div>
    </div>
  );
});
