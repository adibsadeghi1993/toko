import React, { useEffect, useCallback, useContext, useState } from "react";
import { BoxLoader } from "shared/controls/Loader";
import AccessList from "admin/access/panel/AccessList";
import SellNetwork from "admin/access/panel/SellNetwork";
import { AcceessContex } from "admin/access/state/AccessState";
import { Link, useParams } from "react-router-dom";
import CheckBoxControl from "shared/controls/CheckBoxControl";
import { ReactComponent as Person } from "../../shared/icons/person.svg";
import { ReactComponent as Graph } from "../../shared/icons/chart.svg";
import { ReactComponent as Card } from "../../shared/icons/card.svg";
import { ReactComponent as Trash } from "../../shared/icons/trash.svg";
import { ReactComponent as People } from "shared/icons/people.svg";

const Access = React.memo(() => {
  const {
    loading,
    access,
    getAccessInfo,
    roles,
    details,
    getRoles,
    updateAccess,
    deactiveUser,
  } = useContext(AcceessContex);
  const [user, setUser] = useState(<Trash />);

  const ROLE_NETWORK = 5;

  const { id } = useParams();
  const [isActive, setIsActive] = useState([]);

  useEffect(() => {
    !!roles && getAccessInfo(id);
  }, [roles]);

  useEffect(() => {
    !!getRoles && getRoles();
  }, [getRoles]);

  useEffect(() => {
    if (!!details) {
      let concat = details?.roles_info?.map((itm) => itm.id);
      setIsActive(concat);
    }
  }, [details]);

  const updateRole = (role_id) => {
    if (!isActive?.includes(role_id)) {
      setIsActive([...isActive, role_id]);
    } else {
      let tmp = isActive?.filter((itm) => itm !== role_id);
      setIsActive(tmp);
    }
  };

  const updateData = () => {
    updateAccess(id, isActive);
  };

  const DeactiveUser = () => {
    if (window.confirm("آیا برای غیر فعال کردن کابر مطمئن هستید؟")) {
      deactiveUser({ tooko_user_id: id });
    }
  };

  return (
    <>
      <div className="flex flex-col px-4 mt-8">
        <BoxLoader loading={!!loading} />
        <div className="px-2 flex flex-row justify-between">
          <h2>دسترسی ها</h2>
          <div className="flex flex-col md:flex-row items-center ">
            <div className="flex items-center">
              <div className="tooltip mx-1">
                <Trash className="cursor-pointer" onClick={DeactiveUser} />
                <span className="tooltiptext">غیرفعال</span>
              </div>
              <div className="tooltip mx-1">
                <Link to={`/members/details/${id}`}>
                  <Person />
                </Link>
                <span className="tooltiptext">مشاهده کاربر</span>
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
                <Link to="/members/transactions">
                  <Card />
                </Link>
                <span className="tooltiptext">تراکنش ها</span>
              </div>
            </div>

            <Link to={`/members/details/${id}`}>
              <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 my-2 px-3 text-xs rounded">
                بازگشت به لیست
              </button>
            </Link>
          </div>
        </div>
        <div className="divide-border h-0.5 mt-1" />

        <div className="border-r-2 border-l-2 border-gray-300 p-2">
          {/* <AccessList /> */}
          <div className="mt-1">
            <fieldset className="pt-3 flex flex-row gap-x-4">
              {!!roles &&
                roles?.map((item, index) => (
                  <CheckBoxControl
                    key={index}
                    title={item.role_farsi}
                    checked={
                      !!isActive &&
                      isActive.length > 0 &&
                      isActive?.includes(item.role_id)
                    }
                    onChecked={() => updateRole(item.role_id)}
                    // onChecked={}
                  />
                ))}
            </fieldset>
          </div>
          {isActive?.includes(ROLE_NETWORK) && <SellNetwork id={id} />}
        </div>
        <div className="flex flex-row justify-end">
          <button
            className="mt-4 text-white mx-2 py-2 px-6 rounded-md bg-primary-background"
            onClick={updateData}
          >
            ثبت
          </button>
        </div>
      </div>

      <div className="flex-grow" />
    </>
  );
});

export default Access;
