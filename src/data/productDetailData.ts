import type { IProduct } from "../types/product";

export const productDetailSpecs = [
  { label: "Chất liệu", value: "Gỗ tự nhiên, vải bọc cao cấp" },
  { label: "Kích thước", value: "D198 x R85 x C75 cm" },
  { label: "Màu sắc", value: "Tùy chọn theo không gian" },
  { label: "Bảo hành", value: "12 tháng" },
  { label: "Tình trạng", value: "Còn hàng" },
  { label: "Giao hàng", value: "Miễn phí giao hàng toàn quốc" },
];

export const productDetailTabs = {
  description:
    "Sản phẩm được lựa chọn theo tiêu chí cân bằng giữa thẩm mỹ, công năng và độ bền. Thiết kế phù hợp nhiều phong cách nội thất, từ hiện đại tối giản đến không gian gia đình ấm cúng.",
  specs: [
    "Khung sản phẩm chắc chắn, xử lý bề mặt kỹ lưỡng.",
    "Chất liệu dễ vệ sinh, phù hợp sử dụng hằng ngày.",
    "Màu sắc trung tính, dễ phối với sofa, bàn trà, thảm và ánh sáng nội thất.",
    "Phù hợp cho phòng khách, phòng ngủ, căn hộ và nhà phố.",
  ],
  reviews: [
    {
      name: "Minh Anh",
      rating: 5,
      comment:
        "Sản phẩm đẹp, màu sắc đúng hình và đóng gói rất cẩn thận. Không gian phòng khách nhìn ấm hơn hẳn.",
    },
    {
      name: "Hoàng Nam",
      rating: 4,
      comment:
        "Chất lượng hoàn thiện tốt, giao hàng đúng hẹn. Mình khá hài lòng với mức giá này.",
    },
  ],
};

export const getProductShortDescription = (product: IProduct) =>
  `${product.name} mang phong cách tinh tế, dễ phối hợp với nhiều không gian sống. Sản phẩm được Aurea Home chọn lọc để cân bằng giữa công năng sử dụng, chất liệu bền đẹp và tính thẩm mỹ lâu dài.`;
