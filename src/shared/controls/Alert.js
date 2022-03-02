import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "shared/i18n/LanguageContext";
import { ReactComponent as IconSuccess } from "shared/icons/alert/icon-check-circle-outline.svg";
import { ReactComponent as IconError } from "shared/icons/alert/icon-info-outline.svg";
import { ReactComponent as IconWarning } from "shared/icons/alert/icon-warning-outline.svg";

export const Alert = ({ alerts, timeout }) => {
	const [visible, setVisible] = useState();
	const {i18n} = useContext(LanguageContext);
	
	useEffect(() => {
		let timer;
		if(alerts && alerts.length && (timeout >= 0 || timeout === undefined)){
			setVisible(true);
			timer = (timeout > 0 || timeout === undefined) && setTimeout(()=> setVisible(false), timeout?timeout:15000);
		}
		return () => timer && clearTimeout(timer);
	}, [timeout, alerts]);

	if(!alerts || !(alerts.length > 0) || !visible){
			return <></>
	}
  
  return (
    <div className="col-span-full mt-2 space-y-1">
      {!!alerts && alerts.length > 0 && alerts.map((item, idx) =>
        <div
          key={idx}
          className={`${item.type === "err"
              ? "bg-error-lightBg"
              : item.type === "war"
                ? "bg-warning-lightBg"
                : "bg-success-lightBg"
            } flex items-center p-2 rounded`}
        >
          <div className="ml-2 icon-sm18">
            {item.type === "err" && (
              <IconError className="icon-sm18 text-error-main " />
            )}
            {item.type === "war" && (
              <IconWarning className="icon-sm18 text-warning-main " />
            )}
            {item.type === "suc" && (
              <IconSuccess className="icon-sm18 text-success-main " />
            )}
          </div>

          <h4
            className={` ${item.type === "err"
                ? "text-error-darkText"
                : item.type === "war"
                  ? "text-warning-darkText"
                  : "text-success-darkText"
              }`}
          >
            {i18n(item.info || "")}
          </h4>
        </div>
      )}
    </div>
  );
};
