import React, { useEffect, useState } from "react";
// import TitlesStatus from "./InsuranceStatuses";
// import ProductFilterBody from "./InsuranceCategories";
import InsuranceCategories from "./InsuranceCategories";
import InsuranceStatuses from "./InsuranceStatuses";

const SaleFilterDropDown = React.memo(() => {
  const [mobile, setmobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 620) {
      setmobile(true);
    } else {
      setmobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <div>
      <InsuranceCategories mobile={mobile} />
      <InsuranceStatuses mobile={mobile} />
    </div>
  );
});

export default SaleFilterDropDown;
