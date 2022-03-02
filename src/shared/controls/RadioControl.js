import React, {
  Fragment,
  useCallback,
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";
import { ReactComponent as RadioChecked } from "shared/icons/action/icon-radio-button-checked.svg";
import { ReactComponent as RadioUnchecked } from "shared/icons/action/icon-radio-button-unchecked.svg";

export const RadioControl = React.memo(
  ({ title, active, disabled, primary, secondary, medium, small, onClick }) => {
    const classBuilder = (classes) =>
      Object.keys(classes)
        .reduce(
          (t, k) =>
            classes[k]
              ? t.concat(k.split(" ").filter((c) => !t.find((tc) => tc === c)))
              : t,
          []
        )
        .join(" ");

    const activePrimary = !disabled && primary && active;
    const activeSecondary = !disabled && secondary && active;
    const activeDisabled = disabled && active;
    const inactiveDisabled = disabled && !active;
    const inactiveNotDisabled = !disabled && !active;

    const className = classBuilder({
      " icon-md24 ": medium,
      " icon-md20 ": small,
      " text-primary ": activePrimary,
      " text-secondary ": activeSecondary,
      " text-action-disabledText ": activeDisabled,
      " text-matn-disabled ": inactiveDisabled,
      " text-matn-secondary  ": inactiveNotDisabled,
      " cursor-default  ": disabled,
      " cursor-pointer  ": !disabled,
    });
    return (
      <>
        {!!title && (
          <div className="flex flex-row items-center">
            {!!active && (
              <RadioChecked
                className={className}
                onClick={!disabled ? onClick : undefined}
              />
            )}
            {!active && (
              <RadioUnchecked
                className={className}
                onClick={!disabled ? onClick : undefined}
              />
            )}
            <span className="pr-1 txt-body1">{title}</span>
          </div>
        )}
        {!title && (
          <>
            {!!active && (
              <RadioChecked
                className={className}
                onClick={!disabled ? onClick : undefined}
              />
            )}
            {!active && (
              <RadioUnchecked
                className={className}
                onClick={!disabled ? onClick : undefined}
              />
            )}
          </>
        )}
      </>
    );
  }
);

export default RadioControl;
