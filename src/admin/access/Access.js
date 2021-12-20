import React, { useEffect, useCallback, useContext, useState } from "react";
import { BoxLoader } from "shared/controls/Loader";
import AccessList from "admin/access/panel/AccessList";
import SellNetwork from "admin/access/panel/SellNetwork";
import { AcceessContex } from "admin/access/state/AccessState";
import { useParams } from "react-router-dom";
import CheckBoxControl from "shared/controls/CheckBoxControl";

const Access = React.memo(() => {
  const { loading, access, getAccessInfo, roles, details, getRoles } =
    useContext(AcceessContex);

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

  return (
    <>
      <div className="flex flex-col px-4 mt-8">
        <BoxLoader loading={!!loading} />
        <div className="px-2">
          <h2>دسترسی ها</h2>
          <div className="divide-border h-0.5 mt-1" />
        </div>
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
          {isActive?.includes(ROLE_NETWORK) && <SellNetwork />}
        </div>
        <div className="flex flex-row justify-end">
          <button
            className="mt-4 text-white mx-2 py-2 px-6 rounded-md bg-primary-background"
            // onClick={() => updatePercent()}
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
