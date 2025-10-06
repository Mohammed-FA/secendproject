import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "./Button";
import { GrLinkNext } from "react-icons/gr";

export default function Slider({
  spaceBetween,
  breakpoints,
  className,
  titlecontaint,
  children,
  type = "banner",
  slidesPerView = 1,
  autoplay = false,
}) {
  const isBanner = type === "banner";

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className={` relative w-full`}>
      {isBanner || (
        <div className="flex justify-between md:flex-nowrap flex-wrap items-end">
          {titlecontaint}

          <div className="flex gap-2 md:w-fit w-full justify-end md:mt-0  mt-3 ">
            <Button
              className="bg-bg-gray"
              ref={prevRef}
              variant="circular"
              size="cicle"
            >
              <GrLinkNext className="rotate-180" />
            </Button>
            <Button
              className="bg-bg-gray md "
              ref={nextRef}
              variant="circular"
              size="cicle"
            >
              <GrLinkNext />
            </Button>
          </div>
        </div>
      )}
      <Swiper
        onSwiper={setSwiperInstance}
        modules={[Navigation, Autoplay, ...(isBanner ? [Pagination] : [])]}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        pagination={isBanner ? { clickable: true } : false}
        autoplay={autoplay ? { delay: 3000 } : false}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween || 20}
        loop
        breakpoints={
          breakpoints || {
            0: { slidesPerView: slidesPerView == 1 ? 1 : 1 },
            400: { slidesPerView: slidesPerView == 1 ? 1 : 2 },
            640: { slidesPerView: slidesPerView == 1 ? 1 : 3 },
            1024: { slidesPerView: slidesPerView == 1 ? 1 : 4 },
          }
        }
        className={className}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
