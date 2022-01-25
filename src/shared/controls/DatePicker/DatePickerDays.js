import React, { memo } from "react";

const DatePickerDays = memo(
  ({ weekDay, daysNo, selectedDay, today, onSelect }) => {
    console.log(
      weekDay, daysNo, selectedDay, today, onSelect
    )
    return (
      <>
        <div children="p-1 md:p-0">
          <div className="txt-subtitle2 data-picker-gap text-matn-secondary flex justify-center items-center">
            {["ش", "ی", "د", "س", "چ", "پ", "ج"].map((item, idx) => (
              <span
                key={idx}
                className="w-7 h-7 flex justify-center items-center"
              >
                {item}
              </span>
            ))}
          </div>
          <div>
            <div className="txt-subtitle2 data-picker-gap text-matn-secondary flex-wrap flex justify-center items-center">
              {weekDay > 0 && weekDay < 7 &&
                new Array(weekDay)
                  .fill(0)
                  .map((item, idx) => (
                    <span
                      key={idx}
                      className="w-7 h-7 flex justify-center items-center"
                    ></span>
                  ))}
              {new Array(daysNo).fill(0).map((item, idx) => (
                <span
                  key={idx}
                  className={`cursor-pointer w-7 h-7 rounded ${idx === selectedDay - 1
                    ? "bg-primary-background text-primary-dark "
                    : ""
                    } ${idx === today - 1 && idx !== selectedDay - 1 ? "bg-grey-50" : ""
                    } flex justify-center  items-center`}
                  onClick={() => onSelect(idx + 1)}
                >
                  {idx + 1}
                </span>
              ))}
              {7 - ((daysNo + weekDay) % 7) > 0 &&
                new Array(7 - ((daysNo + weekDay) % 7))
                  .fill(0)
                  .map((item, idx) => (
                    <span
                      key={idx}
                      className="w-7 h-7 flex justify-center items-center"
                    ></span>
                  ))}
            </div>
          </div>
        </div>
      </>
    );
  }
);

export default DatePickerDays;
