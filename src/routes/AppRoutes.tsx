import { Routes, Route } from "react-router-dom";
import Layout from "../components/common/Layout";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import Banner from "../components/home/Banner";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Banner />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  );
}
