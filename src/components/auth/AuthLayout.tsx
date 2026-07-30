import React, { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/logo";
import authBackground from "../../assets/images/auth-background.png";

interface AuthLayoutProps {
  children: ReactNode;
  activeMode: "login" | "register";
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  activeMode,
}) => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#efe3d5] px-4 py-5 sm:px-6 lg:px-10">
      <img
        src={authBackground}
        alt="Aurea Home living room"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-white/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#f5ede5]/40 via-[#f5ede5]/20 to-[#6f4b36]/15" />

      <button
        type="button"
        onClick={() => navigate("/")}
        className="relative z-20 flex h-14 w-24 items-center justify-center cursor-pointer"
        aria-label="Về trang chủ"
      >
        <Logo color="#52614e" />
      </button>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-76px)] max-w-6xl items-center justify-center py-6">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl sm:rounded-[26px] bg-white/95 shadow-2xl shadow-[#3b2a20]/30 backdrop-blur-md lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative hidden min-h-[580px] overflow-hidden bg-[#52614e] px-8 py-12 text-white sm:px-12 lg:block">
            <img
              src={authBackground}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-45 mix-blend-soft-light"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#52614e]/95 via-[#52614e]/85 to-[#2d342b]/96" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
              <div className="h-28 w-36">
                <Logo color="#f8d6b5" />
              </div>

              <div className="mt-6 max-w-md">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#f8eadc] tracking-wide">
                  Aurea Home
                </h1>
                <div className="mx-auto mt-4 h-1 w-32 bg-[#f8d6b5]/80 rounded-full" />

                <p className="mt-8 text-lg lg:text-xl leading-relaxed text-white font-medium">
                  Nâng tầm không gian sống với những thiết kế nội thất sang
                  trọng, tinh tế và ấm cúng.
                </p>

                <p className="mt-4 text-base text-[#f8d6b5] italic font-normal">
                  "Nơi ngôi nhà thực sự trở thành tổ ấm tràn đầy cảm hứng."
                </p>

                <div className="mt-10 flex items-center justify-center gap-6 border-t border-white/20 pt-8 w-full">
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-bold text-[#f8d6b5] text-xl">
                      100%
                    </span>
                    <span className="text-sm text-white/90 font-medium">
                      Gỗ tự nhiên
                    </span>
                  </div>
                  <div className="w-px h-9 bg-white/25" />
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-bold text-[#f8d6b5] text-xl">
                      10+ Năm
                    </span>
                    <span className="text-sm text-white/90 font-medium">
                      Kinh nghiệm
                    </span>
                  </div>
                  <div className="w-px h-9 bg-white/25" />
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-bold text-[#f8d6b5] text-xl">
                      5 sao
                    </span>
                    <span className="text-sm text-white/90 font-medium">
                      Hài lòng
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white px-5 py-7 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
            <div className="mx-auto max-w-[460px]">
              <div className="inline-flex w-full rounded-lg border border-[#dfd6ce] bg-[#f5f3f0] p-1">
                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className={`h-11 sm:h-12 flex-1 text-sm sm:text-base font-bold transition-all cursor-pointer rounded-md ${
                    activeMode === "login"
                      ? "border-b-2 border-[#52614e] bg-white text-[#52614e] shadow-sm"
                      : "text-[#554e46] hover:bg-white/70"
                  }`}
                >
                  Đăng nhập
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/register")}
                  className={`h-11 sm:h-12 flex-1 text-sm sm:text-base font-bold transition-all cursor-pointer rounded-md ${
                    activeMode === "register"
                      ? "border-b-2 border-[#52614e] bg-white text-[#52614e] shadow-sm"
                      : "text-[#554e46] hover:bg-white/70"
                  }`}
                >
                  Đăng ký
                </button>
              </div>

              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
