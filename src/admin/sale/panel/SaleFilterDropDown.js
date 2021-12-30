import React, { useEffect, useState } from "react";
import TitlesInsurance from "./Titles/Titles_insurance";
import TitlesStatus from "./Titles/Titles_status";

const SaleFilterDropDown = React.memo(
  ({ settoggle1, settoggle2, product_categories }) => {
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
        {!mobile && (
          <TitlesInsurance
            settoggle1={settoggle1}
            insurance_list={product_categories}
            mobile={mobile}
          />
        )}
        {!mobile && <TitlesStatus settoggle2={settoggle2} mobile={mobile} />}
      </div>
    );
  }
);

export default SaleFilterDropDown;
