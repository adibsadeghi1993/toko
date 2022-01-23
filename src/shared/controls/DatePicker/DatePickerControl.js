import React, { memo, useCallback, useEffect, useState } from "react";
import DateTitle from "shared/controls/DatePicker/DateTitle";
import DatePickerSM from "shared/controls/DatePicker/DatePickerSM";
import DatePickerMD from "shared/controls/DatePicker/DatePickerMD";
import TextInputControl from "../TextInputControl";
import Modal from "shared/panel/Modal";

const DatePicker = memo(
  ({
    title,
    rangePicker,
    date,
    fromDate,
    toDate,
    name,
    onChange,
    dateInput,
    placeholder,
    validate,
  }) => {
    // const [_date1, setDate1] = useState(
    //   (rangePicker && fromDate) || date
    //     ? new Date((rangePicker && fromDate) || date)
    //     : new Date()
    // );
    // const [_date2, setDate2] = useState(toDate ? new Date(toDate) : new Date());
    const [selectedDate1, setSelectedDate1] = useState(
      (rangePicker && fromDate) || date
        ? new Date((rangePicker && fromDate) || date)
        : undefined
    );
    const [selectedDate2, setSelectedDate2] = useState(
      toDate ? new Date(toDate) : undefined
    );
    // const [scrollPostion] = useState(0);
    const [isOpen, open] = useState();
    const [activeDateIndex, setActiveDateIndex] = useState(0);

    const onOpen1 = useCallback(() => {
      !isOpen && onOpen();
      !isOpen && setActiveDateIndex(0);
    }, [isOpen]);
    const onOpen2 = useCallback(() => {
      !isOpen && onOpen();
      !isOpen && setActiveDateIndex(1);
    }, [isOpen]);

    // const enable = () => {
    //   let enableScrollPosition = window.pageYOffset;
    //   setScrollPostion(enableScrollPosition);
    //   document.body.classList.add("disable-scroll");
    //   document.body.style.top = `-${enableScrollPosition}px`;
    // };
    // const disable = () => {
    //   document.body.classList.remove("disable-scroll");
    //   window.scrollTo(0, scrollPostion);
    // };
    const _onChange = useCallback(() => {
      onChange(
        rangePicker
          ? {
            target: {
              name: name,
              value: { fromDate: selectedDate1, toDate: selectedDate2 },
            },
          }
          : { target: { name, value: selectedDate1 } }
      );
      open(false);
    }, [selectedDate1, selectedDate2, rangePicker, name, onChange]);

    const onClose = useCallback(() => {
      setSelectedDate1(
        (rangePicker && fromDate) || date
          ? new Date((rangePicker && fromDate) || date)
          : undefined
      );
      setSelectedDate2(toDate ? new Date(toDate) : undefined);
      open(false);
      // disable();
    }, [date, fromDate, toDate, rangePicker]);

    useEffect(() => {
      // date && setDate1(new Date(date));
      setSelectedDate1(date ? new Date(date) : undefined);
    }, [date]);

    useEffect(() => {
      rangePicker && setSelectedDate1(fromDate ? new Date(fromDate) : undefined);
    }, [fromDate, rangePicker]);

    useEffect(() => {
      rangePicker && setSelectedDate2(toDate ? new Date(toDate) : undefined);
    }, [toDate, rangePicker]);
    const onOpen = () => {
      open(true);
    };

    //return <></>
    // name && console.log(name, date, _date1, selectedDate1)
    //*
    return (
      <>
        {!!dateInput &&
          <>
            <TextInputControl
              datePicker
              placeholder={placeholder}
              value={date}
              validate={validate}
              onOpenDatePicker={() => open(true)}
            />
          </>}
        {!dateInput &&
          <DateTitle
            placeholder={placeholder}
            rangePicker={rangePicker}
            selectedDate1={(rangePicker && fromDate) || date}
            selectedDate2={toDate}
            onOpen1={onOpen1}
            onOpen2={onOpen2}
          />}
        <Modal open={isOpen}>
          <div className="relative md:flex justify-center items-center md:w-full md:h-screen ">
            <div
              className="absolute hidden md:block w-full h-full z-30  bg-matn-primary bg-opacity-50"
              onClick={onClose}
            />
            <DatePickerSM
              title={title}
              SelectRange1
              selectDay1
              className="md:hidden"
              date={activeDateIndex ? selectedDate2 : selectedDate1}
              onClose={onClose}
              onSetDate={useCallback(
                (d) => {
                  !activeDateIndex && setSelectedDate1(d);
                  activeDateIndex && setSelectedDate2(d);
                },
                [activeDateIndex]
              )}
              onSelectToday={useCallback(() => {
                !activeDateIndex && setSelectedDate1(new Date());
                activeDateIndex && setSelectedDate2(new Date());
              }, [activeDateIndex])}
              onApprove={_onChange}
            >
              <DateTitle
                rangePicker={rangePicker}
                selectedDate1={selectedDate1}
                selectedDate2={selectedDate2}
                activeDateIndex={activeDateIndex}
                onSetActiveIndex={setActiveDateIndex}
              />
            </DatePickerSM>
            <DatePickerMD
              title={title}
              className="hidden md:flex"
              date={activeDateIndex ? selectedDate2 : selectedDate1}
              onClose={onClose}
              onSetDate={useCallback(
                (d) => {
                  !activeDateIndex && setSelectedDate1(d);
                  activeDateIndex && setSelectedDate2(d);
                },
                [activeDateIndex]
              )}
              onSelectToday={useCallback(() => {
                !activeDateIndex && setSelectedDate1(new Date());
                activeDateIndex && setSelectedDate2(new Date());
              }, [activeDateIndex])}
              onApprove={_onChange}
            >
              <DateTitle
                rangePicker={rangePicker}
                selectedDate1={selectedDate1}
                selectedDate2={selectedDate2}
                activeDateIndex={activeDateIndex}
                onSetActiveIndex={setActiveDateIndex}
              />
            </DatePickerMD>
          </div>
        </Modal>
      </>
    );
  }
);

export default DatePicker;
