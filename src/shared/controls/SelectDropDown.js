import React, {
  Fragment,
  useCallback,
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";
import UtilityAPI from "shared/utils/UtilityAPI";
import { ReactComponent as IconEye } from "shared/icons/eye.svg";
// import { ReactComponent as IconEyeSlash } from "shared/icons/eye-slash.svg";
import { ReactComponent as IconArrow } from "shared/icons/navigation/icon-stor-down.svg";
import { ReactComponent as IconClose } from "shared/icons/action/icon-close.svg";
//-----------------------------------------------------------------------
const SelectDropDown = React.memo(
  ({
    id,
    clear,
    label,
    type,
    defaultValue,
    value,
    disabled,
    name,
    onChange,
    required,
    size,
    filled,
    outlined,
    standard,
    autoComplete,
    autoFocus,
    classes,
    inputClasses,
    onValidate,
    currency,
    number,
    decimal,
    instantUpdate,
    convertPersianNo,
    exitOnEnter,
    instantCheck,
    scrollTo,
    helperText,
    showHelp,
    validate,
    suffix,
    password,
    onFocus,
    placeholder,
    adornmentText,
    adornmentIcon,
    email,
    englishText,
    codemeli,
    mobile,
    shaba,
    suggestion,
    tagListValue,
    sm,
  }) => {
    const [_value, setValue] = useState(
      value || (currency && value >= 0) ? value : undefined
    );
    const [passVisible, showPass] = useState();
    const [focused, setFocused] = useState();
    const inputRef = useRef();
    const menuRef = new useRef();
    //---------------------------------------------------
    const _onChange = useCallback(
      (e) => {
        let v = e.target.value;
        v =
          convertPersianNo ||
          currency ||
          number ||
          decimal ||
          codemeli ||
          mobile
            ? UtilityAPI.convertPersianNo(v)
            : v;
        v = currency || number || decimal ? v.replace(/,/g, "") : v;
        v = (currency || number) && !decimal ? (+v > 0 ? +v : 0) : v;
        v = decimal
          ? parseFloat(v) > 0
            ? v.indexOf(".") === v.length - 1
              ? v
              : parseFloat(v)
            : 0
          : v;
        v = shaba && v ? v.replace(/IR/g, "").replace(/\D/g, "") : v;
        v = shaba ? (v ? `IR${v}` : "IR") : v;

        !instantUpdate && setValue(v);
      },
      [
        currency,
        number,
        decimal,
        convertPersianNo,
        instantUpdate,
        onChange,
        name,
      ]
    );

    //---------------------------------------------------
    useEffect(() => {
      const handleClickOutside = (event) =>
        menuRef &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        setFocused(false);
      const listener = document.addEventListener(
        "mousedown",
        handleClickOutside
      );
      return () => document.removeEventListener("mousedown", listener);
    }, []);
    //---------------------------------------------------
    /*  const onKeyPress = useCallback(
      (item) =>
        onChange &&
        onChange({ target: { name: name, value: _value, onBlur: true } }),
      [name, onChange, _value]
    ); */
    const handleSelect = (value) => {
      setValue(value);
      setFocused(false);
      onChange &&
        onChange({
          target: { name: name, value: value, instantUpdate: true },
        });
    };
    const handleClear = () => {
      setValue();
      onChange &&
        onChange({
          target: { name: name, value: null, instantUpdate: true },
        });
    };
    //---------------------------------------------------
    useEffect(() => {
      setValue(value || (currency && value >= 0) ? value : undefined);
    }, [value, currency]);

    //---------------------------------------------------
    useEffect(() => {
      scrollTo &&
        scrollTo._value &&
        inputRef.current &&
        inputRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      scrollTo &&
        scrollTo._value &&
        inputRef.current &&
        inputRef.current.focus();
    }, [scrollTo]);

    //---------------------------------------------------
    const _error =
      (validate || (instantCheck && _value)) &&
      (!_value ||
        (email && !UtilityAPI.validateEmail(_value)) ||
        (codemeli && !UtilityAPI.validateCodemeli(_value)) ||
        (mobile && !UtilityAPI.validateMobileNo(_value)) ||
        (shaba && !UtilityAPI.validateShaba(_value)) ||
        (onValidate && !onValidate(_value)));

    //---------------------------------------------------
    const divClassName1 = UtilityAPI.classBuilder({
      "relative text-matn-primary bg-white w-full flex flex-col": true,
      disabled: disabled,
      error: _error,
    });

    const divClassName2 = UtilityAPI.classBuilder({
      "p-3": !sm,
      "py-1 pr-1.5 pl-1 rounded border border-border-divider": sm,
      "relative flex flex-row items-center flex-grow border border-border-stroke rounded group": true,
      [classes]: classes,
      "border-border-stroke": disabled,
      "border-error-main": _error,
      "focus-within:border-primary-main": !_error && !disabled,
    });

    const inputClassName = UtilityAPI.classBuilder({
      "txt-input-text": !sm,
      "txt-subtitle2": sm,
      "w-full h-full leading-normal outline-none  focus:outline-none rounded": true,
      inputClasses: true,
      "text-matn-disabled bg-white": disabled,
      "text-left":
        number ||
        currency ||
        decimal ||
        email ||
        englishText ||
        codemeli ||
        shaba ||
        mobile,
      "text-right": !(
        number ||
        currency ||
        decimal ||
        email ||
        englishText ||
        codemeli ||
        shaba ||
        mobile
      ),
    });

    const txtInputLabelClassName = UtilityAPI.classBuilder({
      "txt-input-label px-2": true,
      "text-error-main": _error,
      "text-matn-disabled": disabled,
      "text-primary": !disabled && !_error && focused,
      "text-matn-secondary": !disabled && !_error && !focused,
      "transform scale-75 bg-white": focused || _value,
      "transform scale-100": !(focused || _value),
    });

    const txtHelperClassName = UtilityAPI.classBuilder({
      "helper1 txt-helper-text": true,
      "text-error-main": _error,
      "text-matn-disabled": disabled && !_error,
      "text-secondary": !(disabled && !_error),
    });

    return (
      <div className={divClassName1} ref={menuRef} tabIndex={0}>
        <div
          className={divClassName2}
          onClick={disabled ? undefined : () => setFocused(!focused)}
        >
          <span className="flex-grow">
            <div className={inputClassName}>
              <span>
                {_value ? _value : <span className="invisible">empty</span>}
              </span>
            </div>

            <label
              className={
                `absolute pointer-events-none transition-all right-0 flex items-center bg-transparent bottom-0  pr-1 ` +
                (focused || _value ? " h-200 " : "  h-full ")
              }
            >
              <span className={txtInputLabelClassName}>{placeholder}</span>
            </label>
          </span>
          {!!clear && _value && (
            <div className="mr-2 flex items-center ">
              <IconClose
                onClick={handleClear}
                className="auto-complete-icon text-matn-secondary  icon-md20 "
              />
            </div>
          )}
          {(!!password || !!adornmentIcon) && (
            <span
              className={
                "txt-body1 border-none pl-3 cursor-pointer " +
                (disabled ? " text-matn-disabled " : " text-primary ")
              }
              onMouseDown={() => showPass(true)}
              onMouseUp={(e) => showPass(false)}
            >
              {!password && !!adornmentIcon && !adornmentText && (
                <>{adornmentIcon}</>
              )}
              {!!password && (
                <>
                  {!!password && <IconEye />}
                  {/* {!!passVisible && <IconEyeSlash />} */}
                </>
              )}
            </span>
          )}
          {!password && !!adornmentText && (
            <div
              className={
                "h-full txt-body1 border-none pl-3 flex-grow cursor-default pointer-events-none text-left " +
                (disabled ? " text-matn-disabled " : " text-matn-primary ")
              }
              onClick={() => showPass(!passVisible)}
            >
              {adornmentText}
            </div>
          )}
          <IconArrow className="auto-complete-icon text-matn-secondary  icon-md24 mr-2" />
          <div
            className={`absolute mt-0.5  w-full top-full right-0 z-50  ${
              focused ? "block" : "hidden"
            } rounded shadow-drop2 py-2 bg-white block`}
          >
            <ul className=" overflow-auto max-h-64">
              {suggestion &&
                suggestion.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      onClick={() =>
                        handleSelect(item.title ? item.title : item)
                      }
                      className="py-1.5 cursor-pointer flex items-center  px-4 txt-body1 hover:bg-action-disabledBg"
                    >
                      {item.icon && item.icon}
                      {item.title ? item.title : item}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        {(!!showHelp || !!_error) && (
          <span className={txtHelperClassName}>
            {!email && !codemeli && !mobile && !shaba && !!_error && (
              <>{helperText}</>
            )}
          </span>
        )}
      </div>
    );
  }
);

export default SelectDropDown;
