import React, { useEffect, useState } from "react";
import PaymentTitles from "./PaymentTitles";

// the only purpose of this component is to display insurance buttons when it's not in mobile view
// there is a reason behind it
const Table_titles = React.memo(({
  settoggle1,
  insurance_list,
}) => {
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
        <PaymentTitles
          settoggle1={settoggle1}
          insurance_list={insurance_list}
          mobile={mobile}
        />
      )}
    </div>
  );
})

export default Table_titles;
