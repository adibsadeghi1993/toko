import React, { useContext } from "react";
import PCategoryBox from "../controls/PCategoryBox";

export default React.memo(({ categories }) => {
  return (
    <div className="flex justify-center px-4 lg:px-32">
      <div className="grid grid-cols-12 flex-row w-full gap-x-4 gap-y-30">
        {!!categories &&
          categories?.result?.length > 0 &&
          categories?.result?.map((item, index) => (
            <PCategoryBox item={item} index={index} key={index} />
          ))}
      </div>
    </div>
  );
});
