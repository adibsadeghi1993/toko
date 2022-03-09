import React, { useContext, useEffect } from "react";
import SellNetworkRow from "../controls/SellNetworkRow";
import { CampaignContext } from "../state/State";

export default React.memo(({campaign}) => {
  const { getPercents, percents } = useContext(CampaignContext);
  useEffect(() => {
    getPercents?.({ promoter_id: campaign?.tooko_user_id });
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
