import React, { useContext, useEffect } from "react";
import { CampaignContext } from "../state/State";

export default React.memo(() => {
  const { getPercents } = useContext(CampaignContext);
  useEffect(() => {
    getPercents?.();
  }, [getPercents]);
  return (
    <div>
      <p>Load Data</p>
    </div>
  );
});
