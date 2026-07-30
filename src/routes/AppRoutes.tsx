import { Routes, Route } from "react-router-dom";
import Layout from "../components/common/Layout";
import { Auth } from "../pages/Auth";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { Projects } from "../pages/Projects";
import { News } from "../pages/News";
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
        <Route path="/projects" element={<Projects />} />
        <Route path="/news" element={<News />} />
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
