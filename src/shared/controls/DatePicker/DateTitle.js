import React, { memo } from "react";
import { ReactComponent as IconCalendar } from "shared/icons/action/icon-calendar-today.svg";
import UtilityAPI from "shared/utils/UtilityAPI";
import JDate from "shared/controls/JDate";

const DateTitle = memo(
  ({
    onOpen1,
    onOpen2,
    onSetActiveIndex,
    activeDateIndex,
    rangePicker,
    selectedDate1,
    selectedDate2,
  }) => {
    const jSelectedDate1 = new JDate(selectedDate1);
    const jSelectedDate2 = new JDate(selectedDate2);

    const className1 = UtilityAPI.classBuilder({
      "txt-subtitle2": true,
      "text-matn-primaryDark": !rangePicker || activeDateIndex !== 0,
      "text-primary-dark border-b border-primary-dark":
        rangePicker && activeDateIndex === 0,
      "cursor-pointer": !!onSetActiveIndex,
    });

    const className2 = UtilityAPI.classBuilder({
      "txt-subtitle2": true,
      "text-matn-primaryDark": !rangePicker || activeDateIndex !== 1,
      "text-primary-dark border-b border-primary-dark":
        rangePicker && activeDateIndex === 1,
      "cursor-pointer": !!onSetActiveIndex,
    });

    return (
      <div
        className={
          "flex items-center justify-center " +
          (onOpen1 ? " cursor-pointer" : "")
        }

      >
        <IconCalendar className="icon-md20 text-matn-secondary ml-2 my-1" />
        <span
          className={className1}
          onClick={() =>
            (rangePicker && onSetActiveIndex && onSetActiveIndex(0)) || (onOpen1 && onOpen1()) || undefined
          }
        >
          {selectedDate1
            ? `${jSelectedDate1.jDay()} ${jSelectedDate1.jMonthName()} ${jSelectedDate1.jYear()}`
            : "انتخاب تاریخ"}
        </span>
        {!!rangePicker && (
          <>
            <span className="mx-2 txt-subtitle2 text-matn-primary">تا</span>
            <span
              className={className2}
              onClick={() =>
                (onSetActiveIndex && onSetActiveIndex(1)) || (onOpen2 && onOpen2()) || undefined
              }
            >
              {selectedDate2
                ? `${jSelectedDate2.jDay()} ${jSelectedDate2.jMonthName()} ${jSelectedDate2.jYear()}`
                : "انتخاب تاریخ"}
            </span>
          </>
        )}
      </div>
    );
  }
);

export default DateTitle;
