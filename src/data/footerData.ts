import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import type { IContactItem, IFooterSection } from "../types/footer";

export const contactList: IContactItem[] = [
  {
    id: 1,
    icon: FaMapMarkerAlt,
    text: "Nguyên Xá, Bắc Từ Liêm, Hà Nội",
  },
  {
    id: 2,
    icon: MdEmail,
    text: "aureahome@example.com",
  },
  {
    id: 3,
    icon: BsFillTelephoneFill,
    text: "+84 123 456 789",
  },
];

export const footerSections: IFooterSection[] = [
  {
    id: 1,
    title: "VỀ CHÚNG TÔI",
    links: [
      { id: 1, label: "Giới thiệu", path: "/gioi-thieu" },
      { id: 2, label: "Liên hệ", path: "/lien-he" },
      { id: 3, label: "Tin tức", path: "/tin-tuc" },
      { id: 4, label: "Hệ thống cửa hàng", path: "/he-thong-cua-hang" },
      { id: 5, label: "Sản phẩm", path: "/san-pham" },
    ],
  },
  {
    id: 2,
    title: "DỊCH VỤ KHÁCH HÀNG",
    links: [
      { id: 1, label: "Kiểm tra đơn hàng", path: "/kiem-tra-don-hang" },
      { id: 2, label: "Chính sách vận chuyển", path: "/chinh-sach-van-chuyen" },
      { id: 3, label: "Chính sách đổi trả", path: "/chinh-sach-doi-tra" },
      { id: 4, label: "Bảo mật khách hàng", path: "/bao-mat-khach-hang" },
      { id: 5, label: "Đăng ký tài khoản", path: "/dang-ky" },
    ],
  },
];
