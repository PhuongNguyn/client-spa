import CategoryPost from "@/components/CategoryPost"
import HorizontalDivider from "@/components/common/Divider/Horizontal"
import { IPost } from "@/interface"

const posts:IPost[] = [
    {
        _id: "1",
        title: "SHYNH PREMIUM ĐỒNG HÀNH CHĂM SÓC SỨC KHỎE SẮC ĐẸP CHO GIỌNG CA “VỀ VỚI EM” – VÕ HẠ TRÂM",
        thumbnail: '/images/post-image-1.jpeg',
        content: "",
        createdAt: "",
        description: "",
        updatedAt: "",
        slug: '/test'
    },
    {
        _id: "2",
        title: "SHYNH PREMIUM ĐỒNG HÀNH CHĂM SÓC SỨC KHỎE SẮC ĐẸP CHO GIỌNG CA “VỀ VỚI EM” – VÕ HẠ TRÂM",
        thumbnail: '/images/post-image-2.png',
        content: "",
        createdAt: "",
        description: "",
        updatedAt: "",
        slug: '/test'
    },
    {
        _id: "3",
        title: "SHYNH PREMIUM ĐỒNG HÀNH CHĂM SÓC SỨC KHỎE SẮC ĐẸP CHO GIỌNG CA “VỀ VỚI EM” – VÕ HẠ TRÂM",
        thumbnail: '/images/post-image-3.jpeg',
        content: "",
        createdAt: "",
        description: "",
        updatedAt: "",
        slug: '/test'
    },
]

const Promotion = () => {
    return (
        <div className="promotion-page news-container mx-auto">
            <h1 className="contact-page-title text-center mt-12">
                Thẻ quà tặng
            </h1>
            <HorizontalDivider width="15%" />
            <div className="promotion-page-description mt-8 text-center">
                <h3>Đẹp mọi khoảnh khắc ngay trong tầm tay</h3>
                <p className="mt-2"><b>Delis Spa</b> phát triển công nghệ làm đẹp kết hợp dưỡng chất từ thiên nhiên và mỹ phẩm tân tiến, mang đến các sản phẩm chăm sóc làn da chuyên nghiệp tối ưu cho mọi khách hàng.</p>
            </div>
            <div className="mt-12">
                <CategoryPost posts={posts} />
            </div>
        </div>
    )
}

export default Promotion