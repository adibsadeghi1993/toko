import React, { useContext, useEffect } from "react";
import SellNetworkRow from "../controls/SellNetworkRow";
import { CampaignContext } from "../state/State";

export default React.memo(() => {
  const { getPercents, percents } = useContext(CampaignContext);
  useEffect(() => {
    getPercents?.();
  }, [getPercents]);
  return (
    <div>
      {!!percents &&
        !!percents?.length > 0 &&
        percents?.map((item, index) => (
          <SellNetworkRow item={item} index={index} />
        ))}
    </div>
  );
});
