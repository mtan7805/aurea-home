import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";

function ScrollToTop() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({ behavior: "smooth" });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [hash, pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1800,
          style: {
            borderRadius: "10px",
            color: "#1f2937",
            fontWeight: 700,
          },
          success: {
            iconTheme: {
              primary: "#ad7555",
              secondary: "#ffffff",
            },
          },
        }}
      />
    </>
  );
}

export default App;
