import React, { useCallback, useContext } from "react";
import CheckBoxControl from "shared/controls/CheckBoxControl";
import { AcceessContex } from "admin/access/state/AccessState";

const AccessList = React.memo(() => {
  const { dispatch } = useContext(AcceessContex);

  return (
    <div className="">
      <div className="mt-1">
        <fieldset className=" mt-3 flex flex-row gap-x-4">
          <CheckBoxControl
            title="همه"
            onChecked={useCallback(() => {
              dispatch({ type: "set_access", payload: "all" });
            }, [dispatch])}
          />
          <CheckBoxControl
            title="شبکه فروش"
            onChecked={useCallback(() => {
              dispatch({ type: "set_access", payload: "sell_network" });
            }, [dispatch])}
          />
          <CheckBoxControl
            title="کاربر نهایی"
            onChecked={useCallback(() => {
              dispatch({ type: "set_access", payload: "user_final" });
            }, [dispatch])}
          />
          <CheckBoxControl
            title="نویسنده"
            onChecked={useCallback(() => {
              dispatch({ type: "set_access", payload: "writer" });
            }, [dispatch])}
          />
          <CheckBoxControl
            title="ادمین بازاریاب"
            onChecked={useCallback(() => {
              dispatch({ type: "set_access", payload: "admin_network" });
            }, [dispatch])}
          />
          <CheckBoxControl
            title="کارمند دفتری"
            onChecked={useCallback(() => {
              dispatch({ type: "set_access", payload: "user_clerk" });
            }, [dispatch])}
          />
          <CheckBoxControl
            title="ادمین"
            onChecked={useCallback(() => {
              dispatch({ type: "set_access", payload: "admin" });
            }, [dispatch])}
          />
        </fieldset>
      </div>
    </div>
  );
});
export default AccessList;
