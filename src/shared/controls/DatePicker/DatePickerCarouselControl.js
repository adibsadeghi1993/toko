import React, { memo, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper/core";

SwiperCore.use([Navigation, Pagination]);

const DatePickerCarouselControl = memo(({ items, onSelect, selected, loop }) => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    swiper?.slideTo(items?.findIndex(c => c === selected));
  }, [swiper, items, selected]);
  
  return (
    <div className="px-4 mx-auto carousel-container ">
      <Swiper
        onSwiper={setSwiper}
        loop={loop}
        navigation
        initialSlide={0}
        dir="rtl"
        breakpoints={{
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 4,
            width: 180,
          },
          699: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            width: 320,
          },
        }}
      >
        {!!items &&
          items.length > 0 &&
          items.map((item, idx1) => (
            <SwiperSlide key={idx1}>
              <div
                className={`py-1  rounded ${items[idx1] === selected
                  ? "bg-primary-background text-primary-dark"
                  : "text-matn-primary"
                  }  justify-center flex items-center overflow-hidden`}
              >
                <div
                  className="txt-subtitle2 text-center cursor-pointer"
                  onClick={() => onSelect(items[idx1])}
                >
                  {items[idx1]}
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
);
export default DatePickerCarouselControl;
