import React, { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { CategoryProductContext } from "../state/State";

const TableList = React.memo(({ item }) => {
  const { deleteCategory } = useContext(CategoryProductContext);
  const [status, setStatus] = useState(item?.enable);
  const history = useHistory();
  const onConfirm = () => {
    if (window.confirm("آیا برای تغییر وضعیت دسته بندی مطمئن هستید؟")) {
      deleteCategory?.(item.id, !status, (res) => {
        if (res) {
          setStatus((prv) => !prv);
        }
      });
    }
  };
  return (
    <>
      <td className="py-4 px-6 align-top text-bodyTable text-left font-normal">
        {item?.seo_name || "-"}
      </td>
      <td className="py-4 px-6 align-top text-bodyTable font-normal">
        {item?.seo_title || "-"}
      </td>
      <td className="py-4 px-6 align-top text-bodyTable font-normal">
        {item?.title || "-"}
      </td>
      <td className="py-4 px-6 align-top text-bodyTable text-center items-center justify-center font-normal flex flex-col md:flex-row space-y-2 md:space-y-0 border-b-0">
        <span
          className="text-other-color pl-0.5 cursor-pointer"
          onClick={() => {
            history.push(`/category/${item.id}`);
          }}
        >
          ویرایش
        </span>
        <span className="text-other-color hidden md:block">|</span>
        <span
          onClick={onConfirm}
          className="text-other-color pr-0.5 cursor-pointer"
        >
          {!!status && <span>غیرفعال سازی</span>}
          {!status && <span>فعال سازی</span>}
        </span>
      </td>
    </>
  );
});

export default TableList;
