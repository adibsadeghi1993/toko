import React, { memo, useCallback } from "react";
import JDate from "shared/controls/JDate";
import DatePickerCarouselControl from "./DatePickerCarouselControl";
import ModalHeader from "shared/controls/ModalHeader";
import DatePickerDays from "shared/controls/DatePicker/DatePickerDays";

const DatePickerSM = memo(
  ({
    title,
    onClose,
    onSetDate,
    onSelectToday,
    onApprove,
    date,
    children,
    className,
  }) => {
    let jDate = new JDate(date);
    const onSelectYear = useCallback(
      (y) => {
        let jDate = new JDate(date);
        onSetDate(
          new JDate().fromJalaali(y, jDate.jMonth(), jDate.jDay()).getDate()
        );
      },
      [date, onSetDate]
    );

    const onSelectMonth = useCallback(
      /*  */
      (month) => {
        let jDate = new JDate(date);
        onSetDate(
          new JDate()
            .fromJalaali(
              jDate.jYear(),
              JDate.monthNames.findIndex((c) => c === month) + 1,
              jDate.jDay()
            )
            .getDate()
        );
      },
      [date, onSetDate]
    );
    const onSelectDay = useCallback(
      (d) => {
        let jDate = new JDate(date);
        onSetDate(
          new JDate().fromJalaali(jDate.jYear(), jDate.jMonth(), d).getDate()
        );
      },
      [date, onSetDate]
    );

    return (
      <div className={"bg-white h-screen grid-cols-12 " + (className || "")}>
        <div className="px-4 ">
          <ModalHeader title={title || "انتخاب بازه زمانی"} close={onClose} />
          <div className="flex justify-center items-center">{children}</div>
          <div className="data-picker-container py-2 mt-2 rounded border mx-auto border-border-divider">
            <div className=" px-2 relative">
              <div className="py-1 ">
                <DatePickerCarouselControl
                  selected={jDate.jYear()}
                  items={new Array(10)
                    .fill(0)
                    .map((c, idx) => new JDate(new Date()).jYear() - idx)}
                  onSelect={onSelectYear}
                />
              </div>
            </div>
            <div className="px-2">
              <div className="w-full px-2 bg-border-divider h-px my-1" />
            </div>
            <div className="relative px-2 ">
              <div className="py-1 ">
                <DatePickerCarouselControl
                  items={JDate.monthNames}
                  onSelect={onSelectMonth}
                  selected={jDate.jMonthName()}
                  idx={jDate.jMonth()}
                  loop
                />
              </div>
            </div>
            <div className="px-2">
              <div className="w-full px-2 bg-border-divider h-px my-1" />
            </div>

            <DatePickerDays
              selectedDay={jDate.jDay()}
              weekDay={(new JDate(jDate.getDate()).startOfJMonth().jDay() + 1) % 7}
              daysNo={jDate.jMonthLength()}
              activeDay={jDate.jDay()}
              today={
                jDate.jYear() === new JDate(new Date()).jYear() &&
                jDate.jMonth() === new JDate(new Date()).jMonth() &&
                jDate.jDay()
              }
              onSelect={onSelectDay}
            />
            <div className="px-2">
              <div className="mt-1 p-1 flex justify-between items-center">
                <div>
                  <button
                    className="btn-small-text btn-secondary-text"
                    onClick={onSelectToday}
                  >
                    برو به امروز
                  </button>
                </div>
                <div className="flex">
                  <button
                    className="btn-small-text btn-tertiary-text ml-2"
                    onClick={onClose}
                  >
                    انصراف
                  </button>
                  <button
                    className="btn-small-text btn-tertiary-text"
                    onClick={onApprove}
                  >
                    تایید
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default DatePickerSM;
