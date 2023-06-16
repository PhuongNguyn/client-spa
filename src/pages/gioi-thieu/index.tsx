import HorizontalDivider from "@/components/common/Divider/Horizontal";
import { Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

const Introduce = () => {
  return (
    <>
      <div className="introduce-page xl:container mx-auto px-4">
        <h1 className="contact-page-title text-center mt-12">Về chúng tôi</h1>
        <HorizontalDivider width="15%" />
        <div className="introduce-page-owner mt-24 flex justify-center gap-2 flex-wrap">
          <div className="introduce-page-owner-image">
            <div className="introduce-page-owner-image-wrapper">
              <img src="/images/boss.webp" />
            </div>
          </div>
          <div className="introduce-page-owner-description">
            <h2 className="introduce-page-owner-description-company-name">
              Delis Beauty Spa
            </h2>
            <p className="introduce-page-owner-description-content mt-4">
              Viện thẩm mỹ Công nghệ cao SHYNH PREMIUM ra mắt năm 2018 với sứ
              mệnh mang đến cho quý khách hàng những trải nghiệm làm đẹp chất
              lượng và cao cấp nhất.
            </p>
            <p className="introduce-page-owner-description-content mt-4">
              Với lối kiến trúc ấn tượng và sang trọng; quy tụ đội ngũ Bác sĩ
              hàng đầu, kỹ thuật viên tay nghề cao, giàu kinh nghiệm kết hợp với
              những công nghệ hiện đại và tiên tiến nhất trên thế giới, quý
              khách hàng sẽ được tận hưởng một không gian thư giãn đẳng cấp cũng
              như các dịch vụ hoàn hảo tại SHYNH PREMIUM.
            </p>
          </div>
        </div>
        <h1 className="contact-page-title text-center mt-24">
          Đội ngũ chuyên gia
        </h1>
        <HorizontalDivider width="15%" />
        <div className="introduce-page-expert mt-12">
          <Swiper
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".swiper-pagination-intro" }}
            autoplay={{
              delay: 2000,
            }}
            spaceBetween={50}
            breakpoints={{
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <div className="introduce-page-swiper-item">
                <div className="introduce-page-swiper-item-avatar relative">
                  <img src="/images/doc2.png" className="w-full" />
                </div>
                <div className="introduce-page-swiper-item-information mt-4">
                  <p className="introduce-page-swiper-item-information-name">
                    Nguyễn Trương Thu Thảo
                  </p>
                  <p className="introduce-page-swiper-item-information-role">
                    /Bác sĩ chuyên khoa da liễu
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="introduce-page-swiper-item">
                <div className="introduce-page-swiper-item-avatar relative">
                  <img src="/images/doc1.png" className="w-full" />
                </div>
                <div className="introduce-page-swiper-item-information mt-4">
                  <p className="introduce-page-swiper-item-information-name">
                    Nguyễn Trương Thu Thảo
                  </p>
                  <p className="introduce-page-swiper-item-information-role">
                    /Bác sĩ chuyên khoa da liễu
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="introduce-page-swiper-item">
                <div className="introduce-page-swiper-item-avatar relative">
                  <img src="/images/doc3.png" className="w-full" />
                </div>
                <div className="introduce-page-swiper-item-information mt-4">
                  <p className="introduce-page-swiper-item-information-name">
                    Nguyễn Trương Thu Thảo
                  </p>
                  <p className="introduce-page-swiper-item-information-role">
                    /Bác sĩ chuyên khoa da liễu
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="introduce-page-swiper-item">
                <div className="introduce-page-swiper-item-avatar relative">
                  <img src="/images/doc4.png" className="w-full" />
                </div>
                <div className="introduce-page-swiper-item-information mt-4">
                  <p className="introduce-page-swiper-item-information-name">
                    Nguyễn Trương Thu Thảo
                  </p>
                  <p className="introduce-page-swiper-item-information-role">
                    /Bác sĩ chuyên khoa da liễu
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="introduce-page-swiper-item">
                <div className="introduce-page-swiper-item-avatar relative">
                  <img src="/images/doc5.png" className="w-full" />
                </div>
                <div className="introduce-page-swiper-item-information mt-4">
                  <p className="introduce-page-swiper-item-information-name">
                    Nguyễn Trương Thu Thảo
                  </p>
                  <p className="introduce-page-swiper-item-information-role">
                    /Bác sĩ chuyên khoa da liễu
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-pagination-intro"></div>
        </div>
      </div>
      <div className="recomendation px-4 mt-24 relative" id="introduce">
        <Swiper
          style={{ padding: "10px 0px" }}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-recomendation",
          }}
          autoplay={{
            delay: 2000,
          }}
          loop
          height={100}
        >
          <SwiperSlide>
            <div className="recomendation-component">
              <div className="recomendation-component-image doctor-slide-component-image">
                <img alt="delis-spa" src="/images/doc1.png" />
              </div>
              <div className="recomendation-component-detail">
                <div className="recomendation-component-detail-icon flex justify-center">
                  <img src="/images/feedback.png" />
                </div>
                <div className="mt-12">
                  <p className="recomendation-component-detail-content text-center">
                    Bác sĩ chuyên khoa da liễu, tốt nghiệp đại học y dược TPHCM,
                    từng tu nghiệp tại Pháp, Anh, Đài Loan, Thái Lan,... Bác sĩ
                    có 10 năm kinh nghiệm trong việc điều trị da liễu thẩm mỹ sử
                    dụng công nghệ ánh sáng Laser, Filler, Botox, Căng chỉ,...
                  </p>
                  <p className="recomendation-component-detail-author text-center mt-8">
                    Dr Neang Thi Ra
                  </p>
                  <p className="recomendation-component-detail-major text-center mt-4">
                    Bác sĩ chuyên khoa da liễu
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="recomendation-component">
              <div className="recomendation-component-image doctor-slide-component-image">
                <img alt="delis-spa" src="/images/doc2.png" />
              </div>
              <div className="recomendation-component-detail">
                <div className="recomendation-component-detail-icon flex justify-center">
                  <img src="/images/feedback.png" />
                </div>
                <div className="mt-12">
                  <p className="recomendation-component-detail-content text-center">
                    Bác sĩ chuyên khoa da liễu, tốt nghiệp đại học y dược TPHCM,
                    từng tu nghiệp tại Pháp, Anh, Đài Loan, Thái Lan,... Bác sĩ
                    có 10 năm kinh nghiệm trong việc điều trị da liễu thẩm mỹ sử
                    dụng công nghệ ánh sáng Laser, Filler, Botox, Căng chỉ,...
                  </p>
                  <p className="recomendation-component-detail-author text-center mt-8">
                    Dr Neang Thi Ra
                  </p>
                  <p className="recomendation-component-detail-major text-center mt-4">
                    Bác sĩ chuyên khoa da liễu
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="recomendation-component">
              <div className="recomendation-component-image doctor-slide-component-image">
                <img alt="delis-spa" src="/images/doc3.png" />
              </div>
              <div className="recomendation-component-detail">
                <div className="recomendation-component-detail-icon flex justify-center">
                  <img src="/images/feedback.png" />
                </div>
                <div className="mt-12">
                  <p className="recomendation-component-detail-content text-center">
                    Bác sĩ chuyên khoa da liễu, tốt nghiệp đại học y dược TPHCM,
                    từng tu nghiệp tại Pháp, Anh, Đài Loan, Thái Lan,... Bác sĩ
                    có 10 năm kinh nghiệm trong việc điều trị da liễu thẩm mỹ sử
                    dụng công nghệ ánh sáng Laser, Filler, Botox, Căng chỉ,...
                  </p>
                  <p className="recomendation-component-detail-author text-center mt-8">
                    Dr Neang Thi Ra
                  </p>
                  <p className="recomendation-component-detail-major text-center mt-4">
                    Bác sĩ chuyên khoa da liễu
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="recomendation-component">
              <div className="recomendation-component-image doctor-slide-component-image">
                <img alt="delis-spa" src="/images/doc4.png" />
              </div>
              <div className="recomendation-component-detail">
                <div className="recomendation-component-detail-icon flex justify-center">
                  <img src="/images/feedback.png" />
                </div>
                <div className="mt-12">
                  <p className="recomendation-component-detail-content text-center">
                    Bác sĩ chuyên khoa da liễu, tốt nghiệp đại học y dược TPHCM,
                    từng tu nghiệp tại Pháp, Anh, Đài Loan, Thái Lan,... Bác sĩ
                    có 10 năm kinh nghiệm trong việc điều trị da liễu thẩm mỹ sử
                    dụng công nghệ ánh sáng Laser, Filler, Botox, Căng chỉ,...
                  </p>
                  <p className="recomendation-component-detail-author text-center mt-8">
                    Dr Neang Thi Ra
                  </p>
                  <p className="recomendation-component-detail-major text-center mt-4">
                    Bác sĩ chuyên khoa da liễu
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="recomendation-component">
              <div className="recomendation-component-image doctor-slide-component-image">
                <img alt="delis-spa" src="/images/doc5.png" />
              </div>
              <div className="recomendation-component-detail">
                <div className="recomendation-component-detail-icon flex justify-center">
                  <img src="/images/feedback.png" />
                </div>
                <div className="mt-12">
                  <p className="recomendation-component-detail-content text-center">
                    Bác sĩ chuyên khoa da liễu, tốt nghiệp đại học y dược TPHCM,
                    từng tu nghiệp tại Pháp, Anh, Đài Loan, Thái Lan,... Bác sĩ
                    có 10 năm kinh nghiệm trong việc điều trị da liễu thẩm mỹ sử
                    dụng công nghệ ánh sáng Laser, Filler, Botox, Căng chỉ,...
                  </p>
                  <p className="recomendation-component-detail-author text-center mt-8">
                    Dr Neang Thi Ra
                  </p>
                  <p className="recomendation-component-detail-major text-center mt-4">
                    Bác sĩ chuyên khoa da liễu
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination-recomendation"></div>
      </div>
    </>
  );
};

export default Introduce;
