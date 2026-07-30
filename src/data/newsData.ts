import type { INews, NewsCategory } from "../types/news";

export const newsCategories: { id: NewsCategory; name: string }[] = [
  { id: "all", name: "Tất cả" },
  { id: "trend", name: "Xu hướng" },
  { id: "living-room", name: "Phòng khách" },
  { id: "kitchen", name: "Phòng bếp" },
  { id: "bedroom", name: "Phòng ngủ" },
  { id: "material", name: "Vật liệu" },
];

export const newsData: INews[] = [
  {
    id: 1,
    title: "Xu hướng nội thất 2026: tối giản, tự nhiên và bền vững",
    category: "trend",
    categoryName: "Xu hướng",
    excerpt:
      "Những bảng màu dịu, vật liệu thân thiện và bố cục linh hoạt đang trở thành lựa chọn chính cho căn hộ hiện đại.",
    author: "Aurea Home Team",
    publishedAt: "20/07/2026",
    readTime: 6,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "5 ý tưởng thiết kế phòng khách sang trọng và hiện đại",
    category: "living-room",
    categoryName: "Phòng khách",
    excerpt:
      "Từ sofa module, đèn thả điểm nhấn đến hệ tủ âm tường, phòng khách có thể vừa đẹp vừa dễ sinh hoạt hằng ngày.",
    author: "Minh Anh",
    publishedAt: "15/07/2026",
    readTime: 5,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Thiết kế phòng bếp liền mạch cho không gian mở",
    category: "kitchen",
    categoryName: "Phòng bếp",
    excerpt:
      "Bếp mở cần xử lý tốt luồng di chuyển, ánh sáng và hệ lưu trữ để giữ được sự gọn gàng trong sinh hoạt.",
    author: "Hoàng Nam",
    publishedAt: "10/07/2026",
    readTime: 4,
    image:
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Vật liệu nội thất bền vững đang được ưa chuộng",
    category: "material",
    categoryName: "Vật liệu",
    excerpt:
      "Gỗ chứng chỉ, đá nhân tạo, vải tái chế và sơn ít VOC giúp không gian đẹp hơn mà vẫn thân thiện với sức khỏe.",
    author: "Aurea Home Team",
    publishedAt: "08/07/2026",
    readTime: 7,
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Cách thiết kế phòng ngủ giúp cải thiện chất lượng giấc ngủ",
    category: "bedroom",
    categoryName: "Phòng ngủ",
    excerpt:
      "Ánh sáng ấm, vật liệu mềm và cách bố trí tủ hợp lý giúp phòng ngủ yên tĩnh hơn mà không bị đơn điệu.",
    author: "Minh Anh",
    publishedAt: "05/07/2026",
    readTime: 5,
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Màu sắc nội thất 2026: bảng màu của sự bình yên",
    category: "trend",
    categoryName: "Xu hướng",
    excerpt:
      "Xanh olive, nâu walnut, kem ấm và ghi sáng là những tông màu dễ phối cho nhà phố và căn hộ đô thị.",
    author: "Hoàng Nam",
    publishedAt: "02/07/2026",
    readTime: 4,
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    title: "Những lỗi thường gặp khi thiết kế nội thất nhà phố",
    category: "trend",
    categoryName: "Xu hướng",
    excerpt:
      "Thiếu ánh sáng, ít điểm lưu trữ và chọn vật liệu quá nặng có thể khiến nhà phố hẹp hơn so với thực tế.",
    author: "Aurea Home Team",
    publishedAt: "28/06/2026",
    readTime: 6,
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
  },
];
