import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import Footer from "./Footer";
import IconFixedLeft from "./IconFixedLeft";
import IconFixedRight from "./IconFixedRight";

export default function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <IconFixedRight />
        <IconFixedLeft />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
