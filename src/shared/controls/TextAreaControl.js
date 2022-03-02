import React, {
  Fragment,
  useCallback,
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";

import UtilityAPI from "shared/utils/UtilityAPI";

//-----------------------------------------------------------------------
const TextAreaControl = React.memo(
  ({
    id,
    readOnly,
    maxChar,
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
    textLength,
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
    rows,
    shaba,
  }) => {
    const [_value, setValue] = useState(
      value || (currency && value >= 0) ? value : undefined
    );
    const [passVisible, showPass] = useState();
    const [focused, setFocused] = useState();
    const inputRef = useRef();

    //---------------------------------------------------
    const _onChange = useCallback(
      (e) => {
        let v = e.target.value;

        !instantUpdate && setValue(v);
        instantUpdate &&
          setTimeout(
            () =>
              onChange({
                target: { name: name, value: v, instantUpdate: true },
              }),
            10
          );
      },
      [instantUpdate, onChange, name, readOnly]
    );

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
    const onBlur = useCallback(
      () =>
        onChange &&
        onChange({ target: { name: name, value: _value, onBlur: true } }),
      [name, onChange, _value]
    );

    //---------------------------------------------------
    useEffect(() => {
      setValue(value || (currency && value >= 0) ? value : undefined);
    }, [value, currency]);

    //---------------------------------------------------
    useEffect(() => {
      scrollTo?.value &&
        inputRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      scrollTo?.value && inputRef?.current.focus();
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
      "relative flex flex-row items-center flex-grow border border-border-stroke rounded group": true,
      [classes]: classes,
      "border-border-stroke": disabled,
      "border-error-main": _error,
      "focus-within:border-primary-main": !_error && !disabled,
    });

    const inputClassName = UtilityAPI.classBuilder({
      "w-full h-full leading-normal outline-none focus:outline-none txt-input-text space-2 p-3 rounded": true,
      inputClasses: true,
      "text-matn-disabled bg-white": disabled && !readOnly,
      "text-matn-primary bg-white": readOnly,
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
      "text-matn-disabled": disabled && !readOnly,
      "text-primary": !disabled && !_error && focused,
      "text-matn-secondary": !_error && !focused,
      "transform scale-75 bg-white": focused || _value,
      "transform scale-100": !(focused || _value),
    });

    const txtHelperClassName = UtilityAPI.classBuilder({
      "helper1 txt-helper-text": true,
      "text-error-main": _error,
      "text-matn-disabled": disabled && !_error && !readOnly,
      "text-secondary": !(disabled && !_error),
    });

    return (
      <div className={divClassName1} onClick={() => inputRef.current?.focus()}>
        <div className={divClassName2}>
          <span className="flex flex-grow">
            <textarea
              rows={rows}
              maxLength={maxChar}
              type={
                type
                  ? type
                  : (password && !passVisible ? "password" : "text") +
                    (disabled ? " text-matn-disabled " : "")
              }
              placeholder=" "
              className={inputClassName}
              ref={inputRef}
              id={id ? id : name}
              name={name}
              disabled={disabled}
              autoComplete={autoComplete ? autoComplete : "off"}
              type={password && !passVisible ? "password" : "text"}
              value={
                currency && _value >= 0
                  ? (+_value).commaSeparated()
                  : _value
                  ? _value
                  : ""
              }
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
                `absolute pointer-events-none  transition-all right-0 flex   bg-transparent   pr-1 ` +
                (focused || _value ? "-top-2 " : "top-3")
              }
            >
              <span className={txtInputLabelClassName}>{placeholder}</span>
            </label>
          </span>
        </div>
        {!!textLength && (
          <div className="flex justify-end my-0.5">
            <span className="text-matn-secondary txt-helper-text">
              {maxChar}/{(_value && _value.length) || 0}
            </span>
          </div>
        )}

        {(!!showHelp || !!_error) && (
          <span className={txtHelperClassName}>
            {!!email && !!_error && (
              <>ایمیل را بصورت email@site.com وارد کنید.</>
            )}
            {!!mobile && !!_error && (
              <>شماره موبایل را بصورت 09121234567 وارد کنید.</>
            )}
            {!!codemeli && !!_error && <>کد ملی را ده رقمی وارد کنید.</>}
            {!!shaba && !!_error && (
              <>شماره شبا را بدون IR و به طول 24 عدد وارد کنید.</>
            )}
            {!email && !codemeli && !mobile && !shaba && !!_error && (
              <>{helperText}</>
            )}
          </span>
        )}
      </div>
    );
  }
);

export default TextAreaControl;
