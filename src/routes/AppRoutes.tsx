import { Routes, Route } from "react-router-dom";
import Layout from "../components/common/Layout";
import { Products } from "../pages/Products";
import { Home } from "../pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  );
}
