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
import { ReactComponent as IconEyeSlash } from "shared/icons/eye-slash.svg";
import { ReactComponent as IconSearch } from "shared/icons/icon-search.svg";
import { ReactComponent as IconClose } from "shared/icons/action/icon-close.svg";

//-----------------------------------------------------------------------
const TextInputControl = React.memo(
  ({
    id,
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
    search,
    clear,
    textCenter,
  }) => {
    const [_value, setValue] = useState({ min: "", hour: "" });
    const [passVisible, showPass] = useState();
    const [focused, setFocused] = useState();
    const inputRef = useRef();

    //---------------------------------------------------
    const _onChange = useCallback((e) => {
      let v = e.target.value;
      if (e.target.name === "hour" && e.target.value > 24) {
        v = 24;
      }
      if (e.target.name === "min" && e.target.value > 59) {
        v = 59;
      }
      if (e.target.name === "min" && e.target.value > 0 && _value.hour == 24) {
        v = "00";
      }
      !instantUpdate && setValue({ ..._value, [e.target.name]: v });
      instantUpdate &&
        setTimeout(
          () =>
            onChange({
              target: { name: name, value: _value, instantUpdate: true },
            }),
          10
        );
    });
    //---------------------------------------------------
    const onKeyPress = useCallback(
      (ev) =>
        exitOnEnter &&
        ev.key === "Enter" &&
        onChange &&
        onChange({ target: { name: name, value: _value } }),
      [onChange, exitOnEnter, name, _value]
    );

    //---------------------------------------------------
    const onBlur = useCallback(() => {
      onChange &&
        onChange({ target: { name: name, value: _value, onBlur: true } });
    }, [name, onChange, _value]);

    //---------------------------------------------------
    /*   useEffect(() => {
      setValue({ min: "", hour: "" });
    }, [value, currency]); */

    //---------------------------------------------------
    const handleClear = () => {
      !instantUpdate && setValue();
      instantUpdate &&
        setTimeout(
          () =>
            onChange({
              target: { name: name, value: undefined, instantUpdate: true },
            }),
          10
        );
    };
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
      "relative flex flex-row items-center flex-grow border border-border-stroke  p-3  rounded group": true,
      [classes]: classes,
      "border-border-stroke": disabled,
      "border-error-main": _error,
      "focus-within:border-primary-main": !_error && !disabled,
    });

    const inputClassName1 = UtilityAPI.classBuilder({
      "w-full h-full leading-normal text-left outline-none focus:outline-none txt-input-text space-2    rounded": true,
      inputClasses: true,
      "text-matn-disabled bg-white": disabled,

      "text-center": textCenter,
    });
    const inputClassName2 = UtilityAPI.classBuilder({
      "w-full h-full leading-normal text-left outline-none focus:outline-none txt-input-text space-2    rounded": true,
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
      "text-center": textCenter,
    });

    const txtInputLabelClassName = UtilityAPI.classBuilder({
      "txt-input-label px-2 ": true,
      "text-error-main": _error,
      "text-matn-disabled": disabled,
      "text-primary": !disabled && !_error && focused,
      "text-matn-secondary": !disabled && !_error && !focused,
      "transform scale-75 bg-white": focused || _value.min || _value.hour,
      "transform scale-100": !(focused || _value),
    });

    const txtHelperClassName = UtilityAPI.classBuilder({
      "helper1 txt-helper-text": true,
      "text-error-main": _error,
      "text-matn-disabled": disabled && !_error,
      "text-secondary": !(disabled && !_error),
    });

    return (
      <div className={divClassName1}>
        <div className={divClassName2}>
          <span className="flex-grow flex">
            <input
              type={
                type
                  ? type
                  : (password && !passVisible ? "password" : "text") +
                    (disabled ? " text-matn-disabled " : "")
              }
              placeholder=" "
              className={inputClassName1}
              ref={inputRef}
              id={id ? id : name}
              name="min"
              disabled={disabled}
              autoComplete={autoComplete ? autoComplete : "off"}
              dir={"ltr"}
              type="number"
              value={_value?.min}
              onKeyPress={onKeyPress}
              onChange={_onChange}
              onBlur={() => {
                setFocused(false);
                onBlur();
              }}
              onFocus={() => setFocused(true)}
            />
            {
              <span
                className={`${
                  _value.min || _value.hour || focused ? "block" : "hidden"
                }`}
              >
                :
              </span>
            }
            <input
              type={
                type
                  ? type
                  : (password && !passVisible ? "password" : "text") +
                    (disabled ? " text-matn-disabled " : "")
              }
              placeholder=" "
              className={inputClassName2}
              ref={inputRef}
              id={id ? id : name}
              name="hour"
              disabled={disabled}
              autoComplete={autoComplete ? autoComplete : "off"}
              dir={"ltr"}
              min="24"
              type="number"
              value={_value?.hour}
              onKeyPress={onKeyPress}
              onChange={_onChange}
              onBlur={() => {
                setFocused(false);
                onBlur();
              }}
              onFocus={() => setFocused(true)}
            />
            <label
              className={
                `absolute pointer-events-none transition-all right-0 flex items-center bg-transparent bottom-0  pr-1 ` +
                (focused || _value.min || _value.hour ? " h-200 " : "  h-full ")
              }
            >
              <span className={txtInputLabelClassName}>{placeholder}</span>
            </label>
          </span>
          {!!clear && !!search && (
            <div className="mr-2 flex items-center ">
              {!!clear && _value && (
                <IconClose
                  onClick={handleClear}
                  className="auto-complete-icon text-matn-secondary  icon-md20 "
                />
              )}
              {!!search && (
                <IconSearch className="icon-md20 text-matn-secondary mr-2" />
              )}
            </div>
          )}
          {(!!password || !!adornmentIcon) && (_value || focused) && (
            <span
              className={
                "txt-body1 border-none cursor-pointer flex justify-center items-center mr-2" +
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
                  {!!password && (
                    <IconEye className="icon-md20 text-matn-disabled " />
                  )}
                </>
              )}
            </span>
          )}

          {!password && !!adornmentText && (
            <div
              className={
                "h-full txt-body1 border-none pl-3 mr-2 flex-grow cursor-default pointer-events-none text-left " +
                (disabled ? " text-matn-disabled " : " text-matn-primary ")
              }
              onClick={() => showPass(!passVisible)}
            >
              {adornmentText}
            </div>
          )}
        </div>
        {(!!showHelp || !!_error) && (
          <span className={txtHelperClassName}>
            {!!email && !!_value && !!_error && (
              <>ایمیل را بصورت email@site.com وارد کنید.</>
            )}
            {!!mobile && !!_value && !!_error && <>فرمت صحیح نمی‌باشد!</>}
            {!!codemeli && !!_value && !!_error && (
              <>کد ملی را ده رقمی وارد کنید.</>
            )}
            {!!shaba && !!_value && !!_error && (
              <>شماره شبا را بدون IR و به طول 24 عدد وارد کنید.</>
            )}
            {!_value && !!_error && <>{helperText}</>}
          </span>
        )}
      </div>
    );
  }
);

export default TextInputControl;
