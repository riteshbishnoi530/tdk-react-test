import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SLIDER_LIST } from '../../utils/helper';
import { NextArrow, PrevArrow } from '../../utils/icons';
function FeaturesSlide() {
  return (
    <div className='px-4 py-5 min-h-screen items-center flex'>
        <div className="container relative lg:px-5">
        <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={true}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              1024: {
                autoplay: false
              },
            }}
            loop={true}>
            {SLIDER_LIST.map((item, index) => (
              <SwiperSlide key={index}>
                <div className='' key={index}>
                  <img src={item.image} alt=""/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="max-lg:!hidden swiper-button-prev">
            <PrevArrow/>
          </div>
          <div className="max-lg:!hidden swiper-button-next">
            <NextArrow/>
          </div>
          </div>
    </div>
  )
}

export default FeaturesSlide