import React, { useContext } from "react";
import CompanyBox from "../controls/CompanyBox";
import { CompanyContext } from "../state/State";

export default React.memo(() => {
  const { companies } = useContext(CompanyContext);
  return (
    <div className="flex justify-center px-4 lg:px-32">
      <div className="grid grid-cols-12 flex-row w-full gap-x-4 gap-y-30">
        {!!companies &&
          companies?.result?.map((item, index) => (
            <CompanyBox item={item} index={index} key={index} />
          ))}
      </div>
    </div>
  );
});
