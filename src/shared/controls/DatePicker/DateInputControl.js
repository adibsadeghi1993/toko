import React, {
  Fragment,
  useCallback,
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";
import UtilityAPI from "shared/utils/UtilityAPI";
import { ReactComponent as IconCalendar } from "shared/icons/action/icon-calendar-today.svg";
import { ReactComponent as IconEye } from "shared/icons/eye.svg";
import { ReactComponent as IconClose } from "shared/icons/action/icon-close.svg";
import NumberFormat from 'react-number-format';
import JDate from "../JDate";
//-----------------------------------------------------------------------
const DateInputControl = React.memo(
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
    hideHelperText,
    onOpenDatePicker,
  }) => {
    const [_value, setValue] = useState();
    const [focused, setFocused] = useState();
    const inputRef = useRef();
    const wrapperRef = useRef();

    //---------------------------------------------------
    const _onChange = useCallback(
      (values) => {
        const { formattedValue, value } = values;
        let v = UtilityAPI.convertPersianNo(formattedValue);
        if (instantUpdate) {
          v = new JDate().fromJalaali(...formattedValue.split('_')).getDate();
          if (!(v.getTime() > 0)) {
            v = "";
          }
          instantUpdate &&
            setTimeout(() => onChange({ target: { name: name, value: v, instantUpdate: true } }), 10);
        }
        !instantUpdate && setValue(v);
      },
      [
        instantUpdate,
        onChange,
        name,
      ]
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
    const onBlur = useCallback(() => {
      let value = _value && new JDate(_value).getDate();
      onChange &&
        onChange({ target: { name: name, value: value, onBlur: true } });
    }, [name, onChange, _value]);

    //---------------------------------------------------
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (focused && wrapperRef?.current && !wrapperRef.current.contains(event.target)) {
          setFocused(false);
          onBlur();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onBlur, focused]);

    //---------------------------------------------------
    useEffect(() => {
      setValue(value && (new JDate(value).getjDateStr()));
    }, [value]);

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
    const formatError = false;//(phoneNo && !UtilityAPI.validatePhoneNo(_value));

    const _error =
      (validate || (instantCheck && _value)) &&
      ((!_value && !onValidate) ||
        formatError ||
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

    const inputClassName = UtilityAPI.classBuilder({
      "w-full h-full leading-normal outline-none focus:outline-none txt-input-text space-2    rounded": true,
      inputClasses: true,
      "text-matn-disabled bg-white": disabled,
      "text-left": true,
      "text-center": textCenter,
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

    console.log(_value);
    return (
      <div className={divClassName1} onClick={() => inputRef.current?.focus()} ref={wrapperRef}>
        <div className={divClassName2}>
          <span className="flex-grow flex ">
            <NumberFormat
              format="14##/##/##"
              placeholder=" "
              mask="_"
              className={inputClassName}
              getInputRef={(el) => (inputRef.current = el)}
              id={id ? id : name}
              name={name}
              value={_value}
              disabled={disabled}
              autoComplete="off"
              dir="ltr"
              onKeyDown={onKeyPress}
              onValueChange={_onChange}
              onFocus={() => setFocused(true)}
            />
            {/*<input
              placeholder=" "
              className={inputClassName}
              ref={inputRef}
              id={id ? id : name}
              name={name}
              disabled={disabled}
              autoComplete="off"
              dir="ltr"
              type="text"
              value={(
                currency && +_value > 0
                  ? (+_value).commaSeparated()
                  : (_value || +_value === 0 ? _value : "")) || ""
              }
              onKeyDown={onKeyPress}
              onChange={_onChange}
              onFocus={() => setFocused(true)}
            />*/}
            <label
              className={
                `absolute pointer-events-none transition-all right-0 flex items-center bg-transparent bottom-0  pr-1 ` +
                (focused || _value ? " h-200 " : "  h-full ")
              }
            >
              <span className={txtInputLabelClassName}>{placeholder}</span>
            </label>
          </span>
          <div className="mr-2 flex items-center ">
            <IconCalendar
              className="icon-md20 text-matn-secondary mr-2 cursor-pointer"
              onClick={() => onChange({ target: { name: name, value: _value } })}
            />
          </div>
        </div>
        {(!!showHelp || !!_error) && (
          <span className={txtHelperClassName}>
            {!!(value) &&
              !!_value &&
              !!_error &&
              !!formatError && <>فرمت صحیح نمی‌باشد!</>}
            {!!_value && !!_error && !formatError && <>{helperText}</>}
            {!_value && !!_error && !hideHelperText && <>نمی‌تواند خالی باشد</>}
          </span>
        )}
      </div>
    );
  }
);

export default DateInputControl;
