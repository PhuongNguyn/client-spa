import HorizontalDivider from "@/components/common/Divider/Horizontal"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper';

const Trial = () => {
    return (
        <div className="trial-page mt-8">
            <h1 className="booking-page-title text-center mt-24">
                Trải Nghiệm Sự Khác Biệt
            </h1>
            <HorizontalDivider width="15%" />
            <div className="trial-page-slide mt-12" id="trial-page-slide">
                <Swiper
                    slidesPerView={1}
                    modules={[Pagination, Navigation]}
                    navigation
                    pagination={{ clickable: true, el: '.swiper-pagination-trial' }}
                    autoplay={{
                        delay: 2000
                    }}
                    breakpoints={{
                        576: {
                            slidesPerView: 1,
                          },
                          768: {
                            slidesPerView: 2,
                          },
                          1024: {
                            slidesPerView: 3,
                          },
                    }}
                >
                    <SwiperSlide>
                        <img src='/images/trials-2.webp' className="w-full"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='/images/trials.webp'className="w-full"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='/images/trials-2.webp' className="w-full"/>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='/images/trials.webp' className="w-full"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='/images/trials-2.webp' className="w-full"/>
                    </SwiperSlide>
                </Swiper>
                <div className='swiper-pagination-trial'></div>
            </div>
        </div>
    )
}

export default Trial