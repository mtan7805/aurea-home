import { Routes, Route } from "react-router-dom";
import Layout from "../components/common/Layout";
import { Auth } from "../pages/Auth";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { ComingSoon } from "../pages/ComingSoon";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/projects"
          element={
            <ComingSoon
              title="Dự án"
              description="Các dự án nội thất tiêu biểu của Aurea Home đang được cập nhật."
            />
          }
        />
        <Route
          path="/news"
          element={
            <ComingSoon
              title="Tin tức"
              description="Tin tức, xu hướng và kinh nghiệm thiết kế nội thất sẽ sớm có mặt."
            />
          }
        />
        <Route
          path="/calculator"
          element={
            <ComingSoon
              title="Ước tính chi phí"
              description="Công cụ ước tính chi phí đang được hoàn thiện."
            />
          }
        />
        <Route
          path="*"
          element={
            <ComingSoon
              title="Không tìm thấy trang"
              description="Đường dẫn bạn truy cập chưa có nội dung phù hợp."
            />
          }
        />
      </Route>
    </Routes>
  );
}
