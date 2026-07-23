import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiLock, FiMail, FiUser } from "react-icons/fi";
import { AuthLayout } from "../components/auth/AuthLayout";
import { AUTH_USER_STORAGE_KEY } from "../data/authData";

export const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!fullName.trim() || !email.trim() || !password.trim()) {
      setMessage("Vui lòng nhập đầy đủ thông tin đăng ký.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Mật khẩu nhập lại chưa khớp.");
      return;
    }

    if (!agreeTerms) {
      setMessage("Vui lòng đồng ý với Điều khoản & Chính sách.");
      return;
    }

    localStorage.setItem(
      AUTH_USER_STORAGE_KEY,
      JSON.stringify({ name: fullName.trim(), email: email.trim() })
    );
    navigate("/");
  };

  return (
    <AuthLayout activeMode="register">
      <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-2 text-base font-semibold text-[#2f2b27]">
          Họ và tên
          <span className="flex h-13 items-center gap-3 rounded-lg border border-[#d8d0c8] bg-white px-4 text-[#7a716a] transition-colors focus-within:border-[#52614e] focus-within:ring-4 focus-within:ring-[#52614e]/10">
            <FiUser className="h-5 w-5 shrink-0" />
            <input
              type="text"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Nguyễn Minh Anh"
              className="h-full w-full bg-transparent text-base text-[#2f2b27] outline-none placeholder:text-[#aaa29a]"
            />
          </span>
        </label>

        <label className="flex flex-col gap-2 text-base font-semibold text-[#2f2b27]">
          Email
          <span className="flex h-13 items-center gap-3 rounded-lg border border-[#d8d0c8] bg-white px-4 text-[#7a716a] transition-colors focus-within:border-[#52614e] focus-within:ring-4 focus-within:ring-[#52614e]/10">
            <FiMail className="h-5 w-5 shrink-0" />
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Nhập địa chỉ email của bạn"
              className="h-full w-full bg-transparent text-base text-[#2f2b27] outline-none placeholder:text-[#aaa29a]"
            />
          </span>
        </label>

        <label className="flex flex-col gap-2 text-base font-semibold text-[#2f2b27]">
          Mật khẩu
          <span className="flex h-13 items-center gap-3 rounded-lg border border-[#d8d0c8] bg-white px-4 text-[#7a716a] transition-colors focus-within:border-[#52614e] focus-within:ring-4 focus-within:ring-[#52614e]/10">
            <FiLock className="h-5 w-5 shrink-0" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Nhập mật khẩu"
              className="h-full w-full bg-transparent text-base text-[#2f2b27] outline-none placeholder:text-[#aaa29a]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Hiện/ẩn mật khẩu"
              className="rounded-full p-1 text-[#7a716a] hover:bg-[#f4ede6] hover:text-[#52614e] cursor-pointer"
            >
              <FiEye className="h-5 w-5" />
            </button>
          </span>
        </label>

        <label className="flex flex-col gap-2 text-base font-semibold text-[#2f2b27]">
          Nhập lại mật khẩu
          <span className="flex h-13 items-center gap-3 rounded-lg border border-[#d8d0c8] bg-white px-4 text-[#7a716a] transition-colors focus-within:border-[#52614e] focus-within:ring-4 focus-within:ring-[#52614e]/10">
            <FiLock className="h-5 w-5 shrink-0" />
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Xác nhận lại mật khẩu"
              className="h-full w-full bg-transparent text-base text-[#2f2b27] outline-none placeholder:text-[#aaa29a]"
            />
          </span>
        </label>

        <label className="flex cursor-pointer items-center gap-2.5 text-sm text-[#4f4741] font-medium select-none">
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="w-4 h-4 accent-[#52614e] rounded cursor-pointer"
          />
          Đồng ý với Điều khoản & Chính sách của Aurea Home
        </label>

        {message && (
          <p className="rounded-md bg-[#fff5ef] px-3 py-2 text-sm text-[#9b4d2f] font-medium">
            {message}
          </p>
        )}

        <button
          type="submit"
          className="h-13 rounded-lg bg-[#52614e] text-base font-bold text-white shadow-lg shadow-[#52614e]/20 transition hover:bg-[#435040] focus:outline-none focus:ring-4 focus:ring-[#52614e]/20 cursor-pointer"
        >
          Đăng ký tài khoản
        </button>

        <div className="flex items-center gap-4 text-sm text-[#8a817a]">
          <span className="h-px flex-1 bg-[#e8dfd7]" />
          hoặc
          <span className="h-px flex-1 bg-[#e8dfd7]" />
        </div>

        <button
          type="button"
          className="flex h-13 items-center justify-center gap-3 rounded-lg border border-[#d8d0c8] bg-white text-base font-bold text-[#2f2b27] transition hover:bg-[#faf8f5] focus:outline-none focus:ring-4 focus:ring-[#ad7555]/15 cursor-pointer"
        >
          <FcGoogle className="h-6 w-6" />
          Tiếp tục với Google
        </button>
      </form>
    </AuthLayout>
  );
};

export default Register;
