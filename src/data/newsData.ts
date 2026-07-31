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
  {
    id: 8,
    title: "Cách chọn sofa cho phòng khách căn hộ nhỏ",
    category: "living-room",
    categoryName: "Phòng khách",
    excerpt:
      "Sofa chân cao, tay vịn mảnh và màu trung tính giúp phòng khách nhỏ nhẹ mắt hơn mà vẫn đủ tiện nghi.",
    author: "Minh Anh",
    publishedAt: "24/06/2026",
    readTime: 4,
    image:
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    title: "Bố trí đảo bếp sao cho tiện nấu nướng và tiếp khách",
    category: "kitchen",
    categoryName: "Phòng bếp",
    excerpt:
      "Đảo bếp cần có kích thước vừa đủ, lối đi thoáng và ánh sáng tập trung để phục vụ nhiều hoạt động cùng lúc.",
    author: "Hoàng Nam",
    publishedAt: "20/06/2026",
    readTime: 5,
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 10,
    title: "Gỗ walnut trong nội thất: đẹp nhưng cần dùng đúng cách",
    category: "material",
    categoryName: "Vật liệu",
    excerpt:
      "Walnut mang lại cảm giác ấm và sang, nhưng cần phối cùng ánh sáng và bề mặt sáng để tránh không gian bị nặng.",
    author: "Aurea Home Team",
    publishedAt: "18/06/2026",
    readTime: 6,
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 11,
    title: "Phòng ngủ master nên có những khu vực nào?",
    category: "bedroom",
    categoryName: "Phòng ngủ",
    excerpt:
      "Một phòng ngủ master tốt thường có khu ngủ, lưu trữ, bàn trang điểm và góc thư giãn được phân chia mềm mại.",
    author: "Minh Anh",
    publishedAt: "14/06/2026",
    readTime: 5,
    image:
      "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 12,
    title: "Ánh sáng gián tiếp trong nhà ở hiện đại",
    category: "trend",
    categoryName: "Xu hướng",
    excerpt:
      "Đèn hắt trần, đèn âm tủ và đèn khe giúp tạo chiều sâu cho không gian mà không gây chói mắt.",
    author: "Hoàng Nam",
    publishedAt: "10/06/2026",
    readTime: 4,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 13,
    title: "Thiết kế tủ lưu trữ âm tường cho nhà phố",
    category: "living-room",
    categoryName: "Phòng khách",
    excerpt:
      "Tủ âm tường giúp giảm cảm giác bừa bộn, tận dụng chiều cao và giữ mặt bằng sinh hoạt thoáng hơn.",
    author: "Aurea Home Team",
    publishedAt: "05/06/2026",
    readTime: 5,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 14,
    title: "Đá nhân tạo có phù hợp với bếp gia đình không?",
    category: "material",
    categoryName: "Vật liệu",
    excerpt:
      "Đá nhân tạo dễ vệ sinh, nhiều mẫu mã và phù hợp mặt bếp nếu chọn đúng độ dày, màu sắc và cách xử lý cạnh.",
    author: "Minh Anh",
    publishedAt: "01/06/2026",
    readTime: 4,
    image:
      "https://images.unsplash.com/photo-1556911261-6bd341186b2f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 15,
    title: "Cách phối rèm, thảm và vải bọc trong phòng ngủ",
    category: "bedroom",
    categoryName: "Phòng ngủ",
    excerpt:
      "Chất liệu vải ảnh hưởng lớn đến cảm giác nghỉ ngơi, vì vậy cần phối màu và bề mặt theo ánh sáng phòng.",
    author: "Hoàng Nam",
    publishedAt: "28/05/2026",
    readTime: 5,
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=900&q=80",
  },
];
