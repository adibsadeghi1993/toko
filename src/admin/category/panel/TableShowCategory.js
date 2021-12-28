import React, { useContext } from "react";
import TableList from "../controls/TableList";
import { CategoryContext } from "../state/State";

const TableShowCategory = React.memo(() => {
  const { categories } = useContext(CategoryContext);
  return (
    <div className="overflow-auto">
      <table className="table-1 table-striped table-bordered">
        <thead>
          <tr>
            <td className="text-center px-6 text-thead font-semibold text-other-labelColor py-3">
              SEONAME
            </td>
            <td className="text-center px-6 text-thead font-semibold text-other-labelColor py-3">
              SEOTITLE
            </td>
            <td className="text-center px-6 text-thead font-semibold text-other-labelColor py-3">
              عنوان
            </td>
            <td className="text-center px-6 text-thead font-semibold text-other-labelColor py-3">
              #
            </td>
          </tr>
        </thead>
        <tbody>
          {!!categories &&
            !!categories?.result?.length &&
            categories?.result.map((item, index) => (
              <tr>
                <TableList key={index} item={item} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
});

export default TableShowCategory;
