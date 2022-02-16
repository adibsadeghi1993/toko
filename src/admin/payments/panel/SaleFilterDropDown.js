import React, { useEffect, useState } from "react";
import TitlesStatus from "./InsuranceStatuses";
import ProductFilterBody from "./InsuranceCategories";

const SaleFilterDropDown = React.memo(
  ({ settoggle1, settoggle2, productCategory }) => {
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
        {/* {!mobile && ( */}
        <ProductFilterBody
          settoggle1={settoggle1}
          productCategory={productCategory}
          mobile={mobile}
        />
        {/* )} */}
        {/* {!mobile &&  */}
        <TitlesStatus settoggle2={settoggle2} mobile={mobile} />
        {/* // } */}
      </div>
    );
  }
);

export default SaleFilterDropDown;
