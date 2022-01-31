import React from "react";

const Info_beneficiaries = React.memo(({ details }) => {
  return (
    <div className="border-b pb-3 border-gray-400">
      <div className="relative flex justify-center mt-5 p-1  mb-5 pb-6">
        <table className="w-11/12">
          <thead className="bg-gray-200">
            <tr>
              <th className="whitespace-nowrap px-4  border border-gray-300">
                نام و نام خانوادگی
              </th>
              <th className="whitespace-nowrap px-4  border border-gray-300">
                کد ملی
              </th>
              <th className="whitespace-nowrap px-4  border border-gray-300 ">
                سال تولد
              </th>
              <th className="whitespace-nowrap px-4  border border-gray-300 py-2">
                نسبت
              </th>
            </tr>
          </thead>
          <tbody>
            {details?.map((item, index) => (
              <React.Fragment key={index}>
                <tr className="bg-emerald-200 text-center">
                  <td className="pl-1 border border-gray-300 py-2">
                    {item?.fullname || "-"}
                  </td>
                  <td className="pl-1 border border-gray-300 py-2">
                    {item?.national_code || "-"}
                  </td>
                  <td className="pl-1 border border-gray-300 py-2">
                    {item?.birth_year || "-"}
                  </td>
                  <td className="pl-1 border border-gray-300 py-2">
                    {item?.relation_id || "-"}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default Info_beneficiaries;
