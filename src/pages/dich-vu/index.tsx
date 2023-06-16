import CategoryItem from "@/components/CategoryItem";
import CategoryPost from "@/components/CategoryPost";
import HotPost from "@/components/HotPost";
import HorizontalDivider from "@/components/common/Divider/Horizontal";
import { ICategory, IPost } from "@/interface";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Services = () => {
  const posts: IPost[] = [
    {
      _id: "1",
      title:
        "SHYNH PREMIUM ĐỒNG HÀNH CHĂM SÓC SỨC KHỎE SẮC ĐẸP CHO GIỌNG CA “VỀ VỚI EM” – VÕ HẠ TRÂM",
      thumbnail: "/images/post-image-1.jpeg",
      content: "",
      createdAt: "",
      description: "",
      updatedAt: "",
      slug: "/test",
    },
    {
      _id: "2",
      title:
        "SHYNH PREMIUM ĐỒNG HÀNH CHĂM SÓC SỨC KHỎE SẮC ĐẸP CHO GIỌNG CA “VỀ VỚI EM” – VÕ HẠ TRÂM",
      thumbnail: "/images/post-image-2.png",
      content: "",
      createdAt: "",
      description: "",
      updatedAt: "",
      slug: "/test",
    },
    {
      _id: "3",
      title:
        "SHYNH PREMIUM ĐỒNG HÀNH CHĂM SÓC SỨC KHỎE SẮC ĐẸP CHO GIỌNG CA “VỀ VỚI EM” – VÕ HẠ TRÂM",
      thumbnail: "/images/post-image-3.jpeg",
      content: "",
      createdAt: "",
      description: "",
      updatedAt: "",
      slug: "/test",
    },
    {
      _id: "4",
      title:
        "SHYNH PREMIUM ĐỒNG HÀNH CHĂM SÓC SỨC KHỎE SẮC ĐẸP CHO GIỌNG CA “VỀ VỚI EM” – VÕ HẠ TRÂM",
      thumbnail: "/images/post-image-3.jpeg",
      content: "",
      createdAt: "",
      description: "",
      updatedAt: "",
      slug: "/test",
    },
    {
      _id: "5",
      title:
        "SHYNH PREMIUM ĐỒNG HÀNH CHĂM SÓC SỨC KHỎE SẮC ĐẸP CHO GIỌNG CA “VỀ VỚI EM” – VÕ HẠ TRÂM",
      thumbnail: "/images/post-image-3.jpeg",
      content: "",
      createdAt: "",
      description: "",
      updatedAt: "",
      slug: "/test",
    },
    {
      _id: "6",
      title:
        "SHYNH PREMIUM ĐỒNG HÀNH CHĂM SÓC SỨC KHỎE SẮC ĐẸP CHO GIỌNG CA “VỀ VỚI EM” – VÕ HẠ TRÂM",
      thumbnail: "/images/post-image-3.jpeg",
      content: "",
      createdAt: "",
      description: "",
      updatedAt: "",
      slug: "/test",
    },
  ];

  const category: ICategory[] = [
    {
      _id: "1",
      name: "Dịch vụ khác",
      description: "",
      thumbnail: "/images/Giam-mo-cay-tinh-chat-Meso-Slim.jpg",
      slug: "dich-vu-khac",
    },
    {
      _id: "2",
      name: "Chăm sóc da",
      description: "",
      thumbnail: "/images/Giam-mo-cay-tinh-chat-Meso-Slim.jpg",
      slug: "cham-soc-da",
    },
    {
      _id: "3",
      name: "Nâng cơ giảm mỡ",
      description: "",
      thumbnail: "/images/Giam-mo-cay-tinh-chat-Meso-Slim.jpg",
      slug: "nang-co-giam-mo",
    },
    {
      _id: "4",
      name: "Giảm béo",
      description: "",
      thumbnail: "/images/Giam-mo-cay-tinh-chat-Meso-Slim.jpg",
      slug: "giam-beo",
    },
    {
      _id: "5",
      name: "Tắm trắng",
      description: "",
      thumbnail: "/images/Giam-mo-cay-tinh-chat-Meso-Slim.jpg",
      slug: "tam-trang",
    },
  ];
  return (
    <div className="service-page 2xl:container mx-auto px-8">
      <h1 className="contact-page-title text-center mt-12">Dịch vụ nổi bật</h1>
      <HorizontalDivider width="15%" />
      <div className="service-page-hot-service mt-8" id="hot-service-swiper">
        <Swiper
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{ clickable: true, el: ".swiper-pagination-hot-service" }}
          autoplay={{
            delay: 2000,
          }}
          spaceBetween={10}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post._id}>
              <HotPost post={post} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination-hot-service"></div>
      </div>
      <h1 className="contact-page-title text-center mt-12">
        Danh Sách Dịch vụ
      </h1>
      <HorizontalDivider width="15%" />
      <div className="swiper-list-service mt-8">
        <Swiper
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-list-service",
          }}
          autoplay={{
            delay: 2000,
          }}
          spaceBetween={10}
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
          {category.map((item) => (
            <SwiperSlide key={item._id}>
              <CategoryItem category={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination-list-service"></div>
      </div>
      <div className="serive-page-content">
        <h1 className="contact-page-title text-center mt-12">Dịch vụ</h1>
        <HorizontalDivider width="10%" />
        <div className="mt-12">
          <CategoryPost posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default Services;
