import React, { useCallback, useState, useEffect, useRef } from "react";
import UtilityAPI from "shared/utils/UtilityAPI";
import { ReactComponent as IconEye } from "shared/icons/eye.svg";
// import { ReactComponent as IconEyeSlash } from "shared/icons/eye-slash.svg";
import { ReactComponent as IconCalendar } from "shared/icons/action/icon-calendar-today.svg";
import { ReactComponent as IconSearch } from "shared/icons/icon-search.svg";
import { ReactComponent as IconClose } from "shared/icons/action/icon-close.svg";
import JDate from "./JDate";

//-----------------------------------------------------------------------
const TextInputControl = React.forwardRef(
  (
    {
      id,
      value,
      disabled,
      name,
      onChange,
      autoComplete,
      classes,
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
      password,
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
      areaCode,
      phoneNo,
      hideHelperText,
      textLength,
      maxChar,
      readOnly,
      onSearch,
      datePicker,
      onOpenDatePicker,
      left,
      forceUpdateValue,
      direction,
    },
    props
  ) => {
    const [_value, setValue] = useState(
      value || (currency && value >= 0) ? value : undefined
    );
    const [passVisible, showPass] = useState();
    const [focused, setFocused] = useState();
    const inputRef = useRef();
    const wrapperRef = useRef();

    //---------------------------------------------------

    const _onChange = useCallback(
      (e) => {
        let v = e.target.value;
        if (textLength && maxChar < v.length) {
          return;
        }

        v =
          v &&
          (datePicker ||
            convertPersianNo ||
            currency ||
            number ||
            decimal ||
            codemeli ||
            areaCode ||
            phoneNo ||
            mobile)
            ? UtilityAPI.convertPersianNo(v)
            : v;
        v = currency || number || decimal ? v?.replace(/,/g, "") : v;
        v =
          (currency || number) && !decimal
            ? +v > 0
              ? +v
              : v !== "" && +v === 0
              ? 0
              : ""
            : v;
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
        instantUpdate &&
          setTimeout(
            () =>
              onChange({
                target: { name: name, value: v, instantUpdate: true },
              }),
            10
          );
      },
      [
        areaCode,
        codemeli,
        mobile,
        phoneNo,
        shaba,
        currency,
        number,
        decimal,
        convertPersianNo,
        instantUpdate,
        onChange,
        name,
        textLength,
        maxChar,
        datePicker,
      ]
    );

    readOnly = readOnly || datePicker;
    direction = direction || "rtl";
    //---------------------------------------------------
    const onBlur = useCallback(() => {
      onChange &&
        onChange({ target: { name: name, value: _value, onBlur: true } });
    }, [name, onChange, _value]);

    //---------------------------------------------------
    const onKeyPress = useCallback(
      (ev) => {
        exitOnEnter &&
          ev.key === "Enter" &&
          onChange &&
          !onSearch &&
          !datePicker &&
          onChange({ target: { name: name, value: _value } });
        exitOnEnter &&
          ev.key === "Enter" &&
          onSearch &&
          !datePicker &&
          onSearch({ target: { name: name, value: _value } });
        if (ev.key === "Tab") {
          setFocused(false);
          onBlur();
        }
      },
      [onChange, onSearch, exitOnEnter, onBlur, name, _value, datePicker]
    );

    //---------------------------------------------------
    useEffect(() => {
      setValue(
        value || (currency && value >= 0)
          ? datePicker
            ? new JDate(value).getjDateStr()
            : value
          : undefined
      );
    }, [value, currency, datePicker, forceUpdateValue]);

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
        scrollTo.value &&
        inputRef.current &&
        inputRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      scrollTo &&
        scrollTo.value &&
        inputRef.current &&
        inputRef.current.focus();
    }, [scrollTo]);

    //---------------------------------------------------
    const formatError =
      (email && !UtilityAPI.validateEmail(_value)) ||
      (codemeli && !UtilityAPI.validateCodemeli(_value)) ||
      (mobile && !UtilityAPI.validateMobileNo(_value)) ||
      (shaba && !UtilityAPI.validateShaba(_value)) ||
      (areaCode && !UtilityAPI.validateAreaCode(_value)) ||
      (phoneNo && !UtilityAPI.validatePhoneNo(_value));

    const _error =
      (validate || (instantCheck && _value)) &&
      ((!_value && !onValidate) ||
        formatError ||
        (onValidate && !onValidate(_value)));

    //---------------------------------------------------
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          focused &&
          wrapperRef?.current &&
          !wrapperRef.current.contains(event.target)
        ) {
          setFocused(false);
          onBlur();
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [onBlur, focused]);
    //---------------------------------------------------
    const divClassName1 = UtilityAPI.classBuilder({
      "relative text-matn-primary bg-white w-full flex flex-col": true,
      disabled: disabled,
      error: _error,
    });

    const divClassName2 = UtilityAPI.classBuilder({
      "relative flex flex-row items-center flex-grow border border-border-stroke  p-3  rounded group": true,
      [classes]: classes,
      "border-border-stroke": disabled && !readOnly,
      "border-error-main": _error,
      "focus-within:border-primary-main": !_error && !disabled,
    });

    const inputClassName = UtilityAPI.classBuilder({
      "w-full h-full leading-normal outline-none focus:outline-none txt-input-text space-2    rounded": true,
      inputClasses: true,
      "text-matn-disabled bg-white": disabled && !readOnly,
      "text-matn-primary bg-white": readOnly,
      "text-left":
        number ||
        currency ||
        decimal ||
        email ||
        englishText ||
        left ||
        codemeli ||
        shaba ||
        phoneNo ||
        areaCode ||
        mobile ||
        datePicker,
      "text-right": !(
        textCenter ||
        number ||
        currency ||
        decimal ||
        email ||
        englishText ||
        left ||
        codemeli ||
        shaba ||
        phoneNo ||
        areaCode ||
        mobile ||
        datePicker
      ),
      "text-center": textCenter,
      "mr-7": textCenter && clear && search,
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
      "helper1 txt-helper-text py-0.5": true,
      "text-error-main": _error,
      "text-matn-disabled": disabled && !_error,
      "text-matn-secondary": !(disabled && !_error),
    });

    // console.log(name, value, _value, value === _value);
    return (
      <div
        className={divClassName1}
        onClick={() => inputRef.current?.focus()}
        ref={wrapperRef}
      >
        <div dir={direction} className={divClassName2}>
          <span className="flex-grow flex ">
            <input
              placeholder=" "
              readOnly={readOnly}
              className={inputClassName}
              ref={inputRef}
              id={id ? id : name}
              name={name}
              disabled={disabled}
              autoComplete={autoComplete ? autoComplete : "off"}
              dir={
                currency ||
                number ||
                decimal ||
                codemeli ||
                mobile ||
                phoneNo ||
                areaCode ||
                email ||
                englishText ||
                codemeli ||
                shaba ||
                datePicker
                  ? "ltr"
                  : "rtl"
              }
              type={password && !passVisible ? "password" : "text"}
              value={
                (currency && +_value > 0
                  ? (+_value).commaSeparated()
                  : _value || +_value === 0
                  ? _value
                  : "") || ""
              }
              onKeyDown={onKeyPress}
              onChange={_onChange}
              onFocus={() => setFocused(true)}
              maxLength={maxChar && maxChar}
              {...props}
            />
            <label
              className={
                `absolute pointer-events-none transition-all right-0 flex items-center bg-transparent bottom-0  pr-1 ` +
                (focused || _value ? " h-200 " : "  h-full ")
              }
            >
              <span className={txtInputLabelClassName}>{placeholder}</span>
            </label>
          </span>
          {((!!clear && _value) || !!search || !!datePicker) && (
            <div className="mr-2 flex items-center ">
              {!!clear && _value && (
                <IconClose
                  onClick={handleClear}
                  className="auto-complete-icon text-matn-secondary  icon-md20 "
                />
              )}
              {!!search && (
                <IconSearch
                  className="icon-md20 text-matn-secondary mr-2 cursor-pointer"
                  onClick={() =>
                    onSearch({ target: { name: name, value: _value } })
                  }
                />
              )}
              {!!datePicker && (
                <IconCalendar
                  className="icon-md20 text-matn-secondary mr-2 cursor-pointer"
                  onClick={onOpenDatePicker}
                />
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
                "h-full txt-body1 border-none  mr-2  cursor-default pointer-events-none text-left " +
                (disabled ? " text-matn-disabled " : " text-matn-primary ") +
                (focused ? "  text-matn-primary " : " text-matn-secondary ")
              }
              onClick={() => showPass(!passVisible)}
            >
              {adornmentText}
            </div>
          )}
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
            {!!email && !!_value && !!_error && !!formatError && (
              <>ایمیل را بصورت email@site.com وارد کنید.</>
            )}
            {!!(mobile || phoneNo || areaCode) &&
              !!_value &&
              !!_error &&
              !!formatError && <>فرمت صحیح نمی‌باشد!</>}
            {!!codemeli && !!_value && !!_error && !!formatError && (
              <>کد ملی را ده رقمی وارد کنید.</>
            )}
            {!!shaba && !!_value && !!_error && !!formatError && (
              <>شماره شبا را بدون IR و به طول 24 عدد وارد کنید.</>
            )}
            {!!_value && !!(_error || showHelp) && !formatError && (
              <>{helperText}</>
            )}
            {!_value && !!_error && !hideHelperText && <>نمی‌تواند خالی باشد</>}
          </span>
        )}
      </div>
    );
  }
);

export default TextInputControl;
