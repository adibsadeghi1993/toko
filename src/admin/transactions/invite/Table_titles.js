import React, { useEffect, useState } from "react";
import Titles_invite from "./Titles_invite";

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
        <Titles_invite
          settoggle1={settoggle1}
          insurance_list={insurance_list}
          mobile={mobile}
        />
      )}
    </div>
  );
})

export default Table_titles;
