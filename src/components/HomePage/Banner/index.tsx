import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper';

const Banner = () => {
    return (
        <div className='banner-home-page relative' id='banner-hompage'>
            <Swiper
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true, el: '.swiper-pagination' }}
                autoplay ={{
                    delay: 2000
                }}
                loop
            >

                <SwiperSlide>
                    <Link href={'/'}>
                        <img src='/images/banner-image-2.png' />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={'/'}>
                        <img src='/images/banner-image-3.png' />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={'/'}>
                        <img src='/images/banner-image-4.png' />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={'/'}>
                        <img src='/images/banner-image-5.png' />
                    </Link>
                </SwiperSlide>
            </Swiper>
            <div className='swiper-pagination'></div>
        </div>
    )
}

export default Banner