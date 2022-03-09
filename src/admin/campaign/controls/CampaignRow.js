import React from "react";
import { useHistory } from "react-router-dom";

export default React.memo(({ key, item }) => {
  const history = useHistory();
  return (
    <React.Fragment key={item.id}>
      <tr
        className="cursor-pointer"
        onClick={() => {
          history.push(`/campaign/edit/${item.tooko_user_id}`);
        }}
      >
        <td className="whitespace-nowrap px-4 text-center py-2 border">
          {item?.campaign_name}
        </td>
        <td className="whitespace-nowrap px-4 text-center py-2 border">
          {item?.username}
        </td>
        <td className="whitespace-nowrap px-4 text-center py-2 border">
          {item?.description}
        </td>
        <td className="whitespace-nowrap px-4 text-center py-2 border">
          {item?.is_active ? "فعال" : "غیرفعال"}
        </td>
        <td className="whitespace-nowrap px-4 text-center py-2 border">
          <button className="text-blue-500">جزییات</button>
        </td>
      </tr>
    </React.Fragment>
  );
});
