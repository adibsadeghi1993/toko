import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as Trash } from "shared/icons/trash.svg";
import { ReactComponent as People } from "shared/icons/people.svg";
import { ReactComponent as Graph } from "shared/icons/chart.svg";
import { ReactComponent as Card } from "shared/icons/card.svg";
import { ReactComponent as Edit } from "shared/icons/edit.svg";
import { MemmberContext } from "../state/State";

export default React.memo(() => {
  const { deactiveUser } = useContext(MemmberContext);
  const { id } = useParams();
  const DeactiveUser = () => {
    if (window.confirm("آیا برای غیر فعال کردن کابر مطمئن هستید؟")) {
      deactiveUser({ tooko_user_id: id });
    }
  };
  return (
    <div className="flex flex-col md:flex-row items-center ">
      <div className="flex items-center">
        <div className="tooltip mx-1">
          <Trash className="cursor-pointer" onClick={DeactiveUser} />
          <span className="tooltiptext">غیرفعال</span>
        </div>

        <div className="tooltip mx-1">
          <Link to={`/members/${id}/families`}>
            <People />
          </Link>
          <span className="tooltiptext">خانواده من</span>
        </div>
        <div className="tooltip mx-1">
          <Link to={`/members/chart/${id}`}>
            <Graph />
          </Link>
          <span className="tooltiptext">مشاهده چارت</span>
        </div>
        <div className="tooltip mx-1">
          <Link to={`/members/access/${id}`}>
            <Edit className="cursor-pointer" />
          </Link>

          <span className="tooltiptext">دسترسی ها</span>
        </div>
        <div className="tooltip mx-1">
          <Link to="/members/transactions">
            <Card />
          </Link>
          <span className="tooltiptext">تراکنش ها</span>
        </div>
      </div>

      <Link to="/members">
        <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 my-2 px-3 text-xs rounded">
          بازگشت به لیست
        </button>
      </Link>
    </div>
  );
});
