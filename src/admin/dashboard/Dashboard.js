import React from "react";

import DashboardCard from "./controls/DashboardCard";
import DashboardChart from "./controls/DashboardChart";
import DashboardHeader from "./controls/DashboardHeader";

export default React.memo(() => {
  return (
    <>
      <div className=" pb-72  bg-secondary-background">
        <div className="px-30">
          <div className="py-6">
            <DashboardHeader />
          </div>
          <div className="flex flex-row">
            <DashboardCard />
          </div>
        </div>
      </div>
      <DashboardChart />
    </>
  );
});
