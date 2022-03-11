import React, { useCallback, memo } from "react";
import JDate from "shared/controls/JDate";
import DatePickerCarouselControl from "./DatePickerCarouselControl";
import ModalHeader from "shared/controls/ModalHeader";
import DatePickerDays from "shared/controls/DatePicker/DatePickerDays";

const DatePickerMD = memo(
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
    let jDate = new JDate(date || new Date());
    const onSelectYear = useCallback(
      (y) => {
        let jDate = new JDate(date || new Date());
        onSetDate(
          new JDate().fromJalaali(y, jDate.jMonth(), jDate.jDay()).getDate()
        );
      },
      [date, onSetDate]
    );
    const onSelectDay = useCallback(
      (d) => {
        let jDate = new JDate(date || new Date());
        onSetDate(
          new JDate().fromJalaali(jDate.jYear(), jDate.jMonth(), d).getDate()
        );
      },
      [date, onSetDate]
    );

    const getItems = () => {
      let items = new Array(100)
        .fill(0)
        .map((c, idx) => new JDate(new Date()).jYear() - idx);
      let items_newYear = new Array(10)
        .fill(0)
        .map((c, idx) => new JDate(new Date()).jYear() + idx);

      let concat = items.concat(items_newYear).sort();
      let unique = [...new Set(concat)];
      return unique;
    };
    return (
      <div
        className={
          " relative z-40 flex justify-center items-center " + (className || "")
        }
      >
        <div className=" rounded-lg shadow-lg bg-white">
          <div className="px-4 ">
            <ModalHeader title={title || "انتخاب بازه زمانی"} close={onClose} />
            {children}
          </div>
          <div className="px-16 mb-3">
            <div className="mt-2  data-picker-container  border mx-auto border-border-divider rounded">
              <div className="px-2 pt-2 pb-1 relative">
                <DatePickerCarouselControl
                  selected={jDate.jYear()}
                  items={getItems()}
                  onSelect={onSelectYear}
                />
              </div>
              <div className="px-4">
                <div className="w-full bg-border-divider h-px  my-1" />
              </div>
              <div className="flex">
                <div className="flex flex-col justify-center">
                  <div
                    style={{ width: 172 }}
                    className="grid grid-cols-12 gap-y-3 gap-x-1 "
                  >
                    {JDate.monthNames.map((item, idx) => (
                      <div
                        key={idx}
                        className={` cursor-pointer rounded ${
                          idx === jDate.jMonth() - 1
                            ? "bg-primary-background text-primary-dark"
                            : ""
                        } flex justify-center col-span-4 items-center h-7 `}
                        onClick={() =>
                          onSetDate(
                            new JDate()
                              .fromJalaali(jDate.jYear(), idx + 1, jDate.jDay())
                              .getDate()
                          )
                        }
                      >
                        <h6 className="text-center">{item}</h6>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="py-4 flex flex-col justify-center ">
                  <div
                    style={{ height: 164 }}
                    className="  bg-border-divider w-px mx-1"
                  ></div>
                </div>
                <div style={{ width: 196 }}>
                  <DatePickerDays
                    selectedDay={jDate.jDay()}
                    weekDay={
                      new Date(
                        new JDate(jDate.getDate()).startOfJMonth()._date
                      ).getDay() + 1
                      // (new JDate(jDate.getDate()).startOfJMonth().jDay() + 1) %
                      // 7
                    }
                    daysNo={jDate.jMonthLength()}
                    activeDay={jDate.jDay()}
                    today={
                      jDate.jYear() === new JDate(new Date()).jYear() &&
                      jDate.jMonth() === new JDate(new Date()).jMonth() &&
                      jDate.jDay()
                    }
                    onSelect={onSelectDay}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-1 pr-14 pl-4 mb-8 flex justify-between items-center">
            <button
              className="btn-medium-text text-sm text-blue-500 btn-secondary-text"
              onClick={onSelectToday}
            >
              برو به امروز
            </button>
            <div className="flex pl-4">
              <button
                className="btn-medium-text text-sm text-gray-400 ml-2"
                onClick={onClose}
              >
                انصراف
              </button>
              <button
                className="btn-medium-text text-sm text-blue-600 btn-tertiary-text"
                onClick={onApprove}
              >
                تایید
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default DatePickerMD;
