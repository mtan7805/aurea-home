import Logo from "../../assets/icons/logo";
import { useLocation, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { GrCart } from "react-icons/gr";
import { useRef, useState } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [inputText, setInputText] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const childRef = useRef(null);
  return (
    <div
      className={`w-full ${
        location.pathname === "/"
          ? "bg-[#0a0400]/30 backdrop-blur-md"
          : "bg-[#885e45]"
      } px-5 md:px-[50px] lg:px-[130px] py-2 shadow-md fixed z-10`}
    >
      <div className="flex items-center justify-between mb-3 flex-wrap gap-4 ">
        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="w-[110px] h-[85px] cursor-pointer flex items-center justify-center"
        >
          <Logo />
        </div>

        {/* Search */}
        <div className="relative w-3/5 max-w-lg h-[50px] flex items-center">
          <button className="absolute left-[10px] top-[10px] h-[30px] w-[30px] rounded-full border-none bg-primary text-[#efefef] flex items-center justify-center hover:bg-[#9a542c] z-10">
            <FiSearch className="w-[18px] h-[18px]" />
          </button>
          <input
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
            type="text"
            placeholder="Tìm kiếm sản phẩm"
            className="absolute h-full w-full rounded-[20px] border-none bg-[#f5f3f3] outline-none px-[50px]"
          />
        </div>

        {/* Icon */}
        <div className="hidden lg:flex items-center gap-7 relative">
          <div className="flex flex-col items-center cursor-pointer text-[#efefef] hover:text-[#9a542c]">
            <AiOutlineHeart className="w-[30px] h-[30px]" />
            <p className="text-[15px]"> Yêu thích</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer text-[#efefef] hover:text-[#9a542c] relative">
            <GrCart className="w-[30px] h-[30px]" />
            <p className="text-[15px]">Giỏ hàng</p>
          </div>
          <div
            onClick={() => setIsShow(!isShow)}
            className="flex flex-col items-center cursor-pointer text-[#efefef] hover:text-[#9a542c] relative"
          >
            <MdOutlineAccountCircle className="w-[30px] h-[30px]" />
            <p className="text-[15px]">Tài khoản</p>
            {isShow && !isLogin && (
              <div
                ref={childRef}
                className="absolute top-[60px] text-black left-1/3 bg-[#f3f2f2] rounded-lg w-[150px] shadow z-10"
              >
                <p className="px-5 py-2 rounded-lg text-[15px] hover:bg-[#fdfbfb] hover:text-[#9a542c] cursor-pointer">
                  Đăng ký
                </p>
                <p className="px-5 py-2 rounded-lg text-[15px] hover:bg-[#fdfbfb] hover:text-[#9a542c] cursor-pointer">
                  Đăng nhập
                </p>
              </div>
            )}
            {isShow && isLogin && (
              <div
                ref={childRef}
                className="absolute text-black rounded-lg top-[60px] left-1/3 bg-[#f3f2f2] w-[150px] shadow z-10"
              >
                <p className="px-5 rounded-lg py-2 text-[15px] hover:bg-[#fdfbfb] hover:text-[#9a542c] cursor-pointer">
                  Trang cá nhân
                </p>
                <p className="px-5 rounded-lg py-2 text-[15px] hover:bg-[#fdfbfb] hover:text-[#9a542c] cursor-pointer">
                  Đăng xuất
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
