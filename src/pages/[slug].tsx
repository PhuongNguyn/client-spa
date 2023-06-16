import { ICategory, IPost } from "@/interface";
import Breadcrump from "@/components/Breadcrump";

const category: ICategory = {
  _id: "1",
  name: "Khuyến mãi",
  slug: "khuyen-mai",
  description: "",
  thumbnail: "",
};

const post: IPost = {
  _id: "3",
  title:
    "SHYNH PREMIUM ĐỒNG HÀNH CHĂM SÓC SỨC KHỎE SẮC ĐẸP CHO GIỌNG CA “VỀ VỚI EM”",
  thumbnail: "/images/post-image-3.jpeg",
  content:
    "Mừng giáng sinh và chào năm mới 2022, sự kiện Lucky Draw – Lucky Holiday “Premium” diễn ra tại 3 miền Bắc – Trung – Nam. Đây là dịp tri ân đến tất cả phái đẹp đã tin tưởng trao nhan sắc cho Shynh Premium chăm sóc và hoàn thiện.",
  createdAt: "",
  description:
    "Shynh Premium tự hào là Viện thẩm mỹ công nghệ cao dẫn đầu xu thế làm đẹp đã và đang đồng hành xây dựng giải pháp kiến tạo vẻ đẹp, mang lại sự tự tin cho mọi phụ nữ Việt. Trân trọng sự hài lòng và tin yêu của quý khách hàng, Shynh Premium tri ân phái đẹp bằng sự kiện “PREMIUM” với những “trải nghiệm xứng tầm” cùng “quà tặng đẳng cấp“.",
  updatedAt: "",
  slug: "/test",
};

const PostDetail = () => {
  return (
    <div className="post-detail container mx-auto">
      <h1 className="post-detail-title contact-page-title text-center mt-12 mx-auto mb-8">
        "Premium - siêu sự kiện với 3 điều không thể bỏ lỡ"
      </h1>
      <Breadcrump category={category} post={post} />
      <div
        className="post-detail-description mt-8"
        dangerouslySetInnerHTML={{ __html: post.description }}
      ></div>
      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
        className="post-detail-content mt-8"
      ></div>
    </div>
  );
};

export default PostDetail;
