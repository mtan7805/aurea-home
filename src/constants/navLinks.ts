import type { NavLinkItem } from "../types/header";

export const navLinks: NavLinkItem[] = [
  { name: "Trang chủ", targetId: "banner" },
  { name: "Sản phẩm", path: "/products", dropdownType: "products" },
  { name: "Dự án", path: "/projects", dropdownType: "projects" },
  { name: "Tin tức", path: "/news" },
  { name: "Ước tính chi phí", path: "/calculator" },
  { name: "Khuyến mãi", targetId: "discount" },
  { name: "Quy trình", targetId: "process" },
  { name: "FAQ", targetId: "faq" },
  { name: "Liên hệ", targetId: "footer" },
];
