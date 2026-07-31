import type { IProject, ProjectCategory } from "../types/project";

export const projectCategories: { id: ProjectCategory; name: string }[] = [
  { id: "all", name: "Tất cả" },
  { id: "apartment", name: "Căn hộ" },
  { id: "townhouse", name: "Nhà phố" },
  { id: "villa", name: "Biệt thự" },
  { id: "office", name: "Văn phòng" },
];

export const projectData: IProject[] = [
  {
    id: 1,
    name: "Sunshine City",
    category: "apartment",
    categoryName: "Căn hộ",
    area: 120,
    style: "Hiện đại",
    location: "Hà Nội",
    year: 2025,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    description:
      "Không gian căn hộ ấm áp với chất liệu gỗ, ánh sáng gián tiếp và bố cục mở cho phòng khách - bếp.",
  },
  {
    id: 2,
    name: "Vinhomes Ocean Park",
    category: "apartment",
    categoryName: "Căn hộ",
    area: 92,
    style: "Japandi",
    location: "Hà Nội",
    year: 2025,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
    description:
      "Thiết kế tối giản, ưu tiên ánh sáng tự nhiên và các mảng vật liệu trung tính dễ sử dụng lâu dài.",
  },
  {
    id: 3,
    name: "The Estella Heights",
    category: "apartment",
    categoryName: "Căn hộ",
    area: 150,
    style: "Luxury Modern",
    location: "TP. Thủ Đức",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
    description:
      "Căn hộ cao cấp dùng hệ tủ âm tường, đá vân nhẹ và kim loại champagne để tạo cảm giác sang trọng.",
  },
  {
    id: 4,
    name: "Ngôi nhà Phố Thủ Đức",
    category: "townhouse",
    categoryName: "Nhà phố",
    area: 180,
    style: "Indochine",
    location: "TP. Thủ Đức",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
    description:
      "Nhà phố phối gỗ tối màu, mây đan và họa tiết Đông Dương cho cảm giác gần gũi nhưng chỉn chu.",
  },
  {
    id: 5,
    name: "Villa Park Riverside",
    category: "villa",
    categoryName: "Biệt thự",
    area: 280,
    style: "Hiện đại",
    location: "Hà Nội",
    year: 2025,
    image:
      "https://noithatlacgia.vn/wp-content/uploads/2022/05/thiet-ke-noi-that-biet-thu-thong-tang-sang-trong-a-duong-19.jpg",
    description:
      "Không gian biệt thự rộng, nhiều lớp ánh sáng và vật liệu bền vững phù hợp gia đình nhiều thế hệ.",
  },
  {
    id: 6,
    name: "Green Bay Garden",
    category: "apartment",
    categoryName: "Căn hộ",
    area: 100,
    style: "Modern Classic",
    location: "Hạ Long",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
    description:
      "Căn hộ nghỉ dưỡng dùng tông kem, gỗ sáng và đường phào tiết chế để giữ vẻ thanh lịch.",
  },
  {
    id: 7,
    name: "Skyline Residence",
    category: "apartment",
    categoryName: "Căn hộ",
    area: 110,
    style: "Tối giản",
    location: "Hà Nội",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",
    description:
      "Thiết kế căn hộ ưu tiên công năng, hệ lưu trữ gọn và bảng màu yên tĩnh để dễ sinh hoạt hằng ngày.",
  },
  {
    id: 8,
    name: "VTI Offices",
    category: "office",
    categoryName: "Văn phòng",
    area: 350,
    style: "Industrial",
    location: "Hà Nội",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    description:
      "Văn phòng mở với trần kỹ thuật, bàn làm việc linh hoạt và khu pantry tạo điểm nghỉ cho đội ngũ.",
  },
  {
    id: 9,
    name: "Villa FLC Hạ Long",
    category: "villa",
    categoryName: "Biệt thự",
    area: 320,
    style: "Coastal Luxury",
    location: "Hạ Long",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    description:
      "Biệt thự nghỉ dưỡng lấy cảm hứng từ biển, dùng vật liệu sáng màu và các khung nhìn rộng.",
  },
  {
    id: 10,
    name: "Lakeview Townhouse",
    category: "townhouse",
    categoryName: "Nhà phố",
    area: 210,
    style: "Modern Rustic",
    location: "Đà Nẵng",
    year: 2025,
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80",
    description:
      "Nhà phố ven hồ dùng gỗ walnut, đá sáng và khoảng thông tầng để tạo cảm giác thoáng đãng.",
  },
  {
    id: 11,
    name: "Saigon Pearl Apartment",
    category: "apartment",
    categoryName: "Căn hộ",
    area: 135,
    style: "Contemporary",
    location: "TP. Hồ Chí Minh",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80",
    description:
      "Không gian căn hộ hướng sông với hệ tủ phẳng, ánh sáng ấm và vật liệu dễ bảo trì.",
  },
  {
    id: 12,
    name: "Heritage Villa",
    category: "villa",
    categoryName: "Biệt thự",
    area: 410,
    style: "Neo Classic",
    location: "Huế",
    year: 2025,
    image:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=900&q=80",
    description:
      "Biệt thự phong cách tân cổ điển, tiết chế phào chỉ và nhấn mạnh các chi tiết thủ công tinh xảo.",
  },
  {
    id: 13,
    name: "Creative Hub Office",
    category: "office",
    categoryName: "Văn phòng",
    area: 520,
    style: "Open Space",
    location: "TP. Hồ Chí Minh",
    year: 2025,
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
    description:
      "Văn phòng sáng tạo với khu làm việc linh hoạt, phòng họp kính và khu thảo luận mở.",
  },
  {
    id: 14,
    name: "Palm Garden Villa",
    category: "villa",
    categoryName: "Biệt thự",
    area: 360,
    style: "Tropical Modern",
    location: "Nha Trang",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
    description:
      "Biệt thự nghỉ dưỡng kết hợp mảng xanh, vật liệu tự nhiên và không gian sinh hoạt mở.",
  },
  {
    id: 15,
    name: "An Phú Townhouse",
    category: "townhouse",
    categoryName: "Nhà phố",
    area: 195,
    style: "Minimal Luxury",
    location: "TP. Thủ Đức",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80",
    description:
      "Nhà phố tối giản với hệ lưu trữ âm tường, bếp liền phòng ăn và bảng màu trung tính.",
  },
];
