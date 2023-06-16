import HorizontalDivider from "@/components/common/Divider/Horizontal"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper';

const IntroduceSlice = () => {
    return (
        <div className="mt-20">
            <div className="introduce-info">
                <h2 className="introduce-title text-center">Chào mừng bạn đến với</h2>
                <p className="introduce-title text-center mb-4">viện thẩm mỹ công nghệ cao hàng đầu châu á</p>
                <HorizontalDivider width="20%" />
                <p className="introduce-content text-center mt-10">
                    Viện thẩm mỹ Công nghệ cao SHYNH PREMIUM ra đời năm 2018 với sứ mệnh mang đến cho quý khách hàng những trải nghiệm làm đẹp chất lượng và cao cấp nhất. Tự hào là Viện thẩm mỹ dẫn đầu xu thế làm đẹp với 5 chi nhánh trên cả nước, Shynh Premium hiện đang sở hữu hơn 10 Công nghệ cao hàng đầu Thế giới, hân hạnh đồng hành trong hành trình làm đẹp của hàng triệu phụ nữ Việt Nam.
                </p>
                <p className="introduce-content text-center">
                    Với lối kiến trúc ấn tượng và sang trọng; quy tụ đội ngũ bác sĩ nội khoa hàng đầu, kỹ thuật viên tay nghề cao, giàu kinh nghiệm, quý khách hàng sẽ được tận hưởng một không gian thư giãn đẳng cấp 5 sao cũng như các dịch vụ hoàn hảo tại SHYNH PREMIUM
                </p>
                <p className="introduce-content-slogan text-center">
                    CHỌN SHYNH LÀ XINH ĐẸP!
                </p>
            </div>
            <div className="introduce-slice flex flex-wrap px-2">
                <div className="introduce-slice-swiper">
                <div className='banner-home-page introduce-slice-banner relative' id='banner-hompage'>
                        <Swiper
                            slidesPerView={1}
                            modules={[Pagination]}
                            pagination={{ clickable: true, el: '.swiper-pagination-introduce' }}
                            autoplay={{
                                delay: 2000
                            }}
                            loop
                        >
                            <SwiperSlide>
                                <img src='/images/introduce-image-1.jpeg' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='/images/introduce-image-2.png' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='/images/introduce-image-3.png' />

                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='/images/introduce-image-4.png' />

                            </SwiperSlide>
                        </Swiper>
                        <div className='swiper-pagination-introduce'></div>
                    </div>
                </div>
                <div className="introduce-slice-statistic">
                    <div className="introduce-slice-statistic-campus flex mt-24 items-center">
                        <p className="introduce-slice-statistic-campus-number">5</p>
                        <p className="introduce-slice-statistic-campus-title">Chi nhánh tại TP HCM</p>    
                    </div>
                    <div className="introduce-slice-statistic-service flex items-center">
                        <p className="introduce-slice-statistic-service-number">100+</p>
                        <p className="introduce-slice-statistic-service-title">Dịch vụ làm đẹp hàng đầu</p>    
                    </div>
                    <div className="introduce-slice-statistic-customer flex items-center">
                        <p className="introduce-slice-statistic-customer-number">1.000.000+</p>
                        <p className="introduce-slice-statistic-customer-title">Lượt khách mỗi năm</p>    
                    </div>
                </div>
            </div>
        </div >
    )
}

export default IntroduceSlice