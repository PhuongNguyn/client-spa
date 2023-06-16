import CategoryPost from "@/components/CategoryPost";
import HorizontalDivider from "@/components/common/Divider/Horizontal";
import { IPost } from "@/interface";

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

const CategoryDetail = () => {
  return (
    <div className="category-detail-page news-container mx-auto">
      <h1 className="contact-page-title text-center mt-12">Dịch vụ</h1>
      <HorizontalDivider width="10%" />
      <div className="mt-12">
        <CategoryPost posts={posts} />
      </div>
    </div>
  );
};

export default CategoryDetail;
