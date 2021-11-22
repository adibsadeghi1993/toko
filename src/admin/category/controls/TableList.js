import React from "react";

const TableList = React.memo(({ item }) => {
  return (
    <>
      <td className="py-4 px-6 align-top text-bodyTable text-left font-normal">
        {item?.seo?.name}
      </td>
      <td className="py-4 px-6 align-top text-bodyTable font-normal">
        {item?.seo?.title}
      </td>
      <td className="py-4 px-6 align-top text-bodyTable font-normal">
        {item?.title}
      </td>
      <td className="py-4 px-6 align-top text-bodyTable text-center items-center justify-center font-normal flex flex-col md:flex-row space-y-2 md:space-y-0 border-b-0">
        <span className="text-other-color pl-0.5 cursor-pointer">ویرایش</span>
        <span className="text-other-color hidden md:block">|</span>
        <span className="text-other-color pr-0.5 cursor-pointer">حذف</span>
      </td>
    </>
  );
});

export default TableList;
