import React from "react";
import { ReactComponent as IconChart } from "shared/icons/header/icon-chart.svg";
import { ReactComponent as IconCoin } from "shared/icons/header/icon-coin.svg";
import { ReactComponent as IconHand } from "shared/icons/header/icon-hand.svg";
import { ReactComponent as IconPieChart } from "shared/icons/header/icon-pie-chart.svg";

export default React.memo(() => {
  return (
    <div className="px-15 flex flex-row w-full gap-x-4">
      {/* zero card */}
      <div className="card mb-30 xl:w-3/12 md:w-1/2 w-full">
        <div className="card-body py-4 px-6 flex-1">
          <div className="flex flex-row justify-between">
            <div className="w-auto max-w-full flex flex-col">
              <h5 class="card-title text-uppercase text-other-muted text-bodyTable font-semibold mb-0">
                فروش موفق
              </h5>
              <span class="font-semibold text-xl text-primary-color mb-0">
                209
              </span>
            </div>
            <div>
              <div class="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                <IconChart />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* one card */}
      <div className="card mb-30 xl:w-3/12 md:w-1/2 w-full">
        <div className="card-body py-4 px-6 flex-1">
          <div className="flex flex-row justify-between">
            <div className="w-auto max-w-full flex flex-col">
              <h5 class="card-title text-uppercase text-other-muted text-xs font-semibold mb-0">
                سفارش
              </h5>
              <span class="font-semibold text-xl text-primary-color mb-0">
                209
              </span>
            </div>
            <div>
              <div class="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                <IconCoin />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* two card */}
      <div className="card mb-30 xl:w-3/12 md:w-1/2 w-full">
        <div className="card-body py-4 px-6 flex-1">
          <div className="flex flex-row justify-between">
            <div className="w-auto max-w-full flex flex-col">
              <h5 class="card-title text-uppercase text-other-muted text-xs font-semibold mb-0">
                کاربران جدید
              </h5>
              <span class="font-semibold text-xl text-primary-color mb-0">
                209
              </span>
            </div>
            <div>
              <div class="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                <IconPieChart />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* t card */}
      <div className="card mb-30 xl:w-3/12 md:w-1/2 w-full">
        <div className="card-body py-4 px-6 flex-1">
          <div className="flex flex-row justify-between">
            <div className="w-auto max-w-full flex flex-col">
              <h5 class="card-title text-uppercase text-other-muted text-xs font-semibold mb-0">
                تعداد کاربران
              </h5>
              <span class="font-semibold text-xl text-primary-color mb-0">
                209
              </span>
            </div>
            <div>
              <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                <IconHand />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
