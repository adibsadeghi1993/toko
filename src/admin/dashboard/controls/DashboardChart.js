import React from "react";
import faker from "faker";
import LineChartControl from "shared/controls/LineChartControl";

export default React.memo(() => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
      },
    },
  };
  return (
    <div className="grid grid-cols-12 px-30 -mt-72 gap-x-4">
      <div className="col-span-4 card">
        <div className="card-header bg-transparent py-5 px-6 rounded-md">
          <div className="px-15 flex flex-col">
            <h6 className="text-uppercase text-muted ls-1 mb-1">عملکرد</h6>
            <h5 className="h3 mb-0"> جدول فروش </h5>
          </div>
        </div>
        <div className=" px-6 py-6">
          <LineChartControl options={options} data={data} />
        </div>
      </div>
      <div className="col-span-8 card bg-default ">
        <div className="px-6 py-6">
          <LineChartControl options={options} data={data} />
        </div>
      </div>
    </div>
  );
});
