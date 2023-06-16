import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper';

const Recomendation = () => {
    return (
        <div className="recomendation px-2 mt-24 relative" id="recomendation">
            <Swiper
                style={{ padding: '10px 0px' }}
                slidesPerView={1}
                modules={[Pagination, Navigation]}
                navigation
                pagination={{ clickable: true, el: '.swiper-pagination-recomendation' }}
                autoplay={{
                    delay: 2000
                }}
                loop
            >
                <SwiperSlide>
                    <div className="recomendation-component">
                        <div className="recomendation-component-image">
                            <img alt="delis-spa" src="/images/leQuyen.webp" />
                        </div>
                        <div className="recomendation-component-detail">
                            <div className='recomendation-component-detail-icon flex justify-center'>
                                <img src='/images/feedback.png' />
                            </div>
                            <div className='mt-12'>
                                <p className='recomendation-component-detail-content text-center'>
                                    Quyên luôn cố gắng giữ cho vẻ ngoài rạng rỡ và hoàn thiện để xuất hiện thật tuyệt vời trước công chúng. Và Shynh Premium chính là nơi Quyên chọn để giữ cho làn da luôn mướt mịn, trắng khỏe, duy trì vóc dáng thon thả, quyến rũ. Shynh Premium chính là ngôi nhà thứ 2 giúp Quyên lưu giữ thanh xuân và tỏa sáng bất cứ lúc nào.
                                </p>
                                <p className='recomendation-component-detail-author text-center mt-8'>Lệ Quyên</p>
                                <p className='recomendation-component-detail-major text-center mt-4'>Singer</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="recomendation-component">
                        <div className="recomendation-component-image">
                            <img alt="delis-spa" src="/images/leQuyen.webp" />
                        </div>
                        <div className="recomendation-component-detail">
                            <div className='recomendation-component-detail-icon flex justify-center'>
                                <img src='/images/feedback.png' />
                            </div>
                            <div className='mt-12'>
                                <p className='recomendation-component-detail-content text-center'>
                                Bước vào tuổi 40, Quyên chỉ sợ hai điều. Một là sợ béo và hai là sợ nếp nhăn. Nhưng thật may mắn vì đã có Shynh Premium luôn đồng hành và chăm sóc nhan sắc của Lệ Quyên.
                                </p>
                                <p className='recomendation-component-detail-author text-center mt-8'>Lệ Quyên</p>
                                <p className='recomendation-component-detail-major text-center mt-4'>Singer</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='swiper-pagination-recomendation'></div>
        </div>
    )
}

export default Recomendation;
