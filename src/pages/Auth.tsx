import { useSearchParams } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";

export const Auth = () => {
  const [searchParams] = useSearchParams();
  const isRegister = searchParams.get("mode") === "register";

  return isRegister ? <Register /> : <Login />;
};

export default Auth;
