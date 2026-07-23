import About from "../components/home/About";
import Banner from "../components/home/Banner";
import { Category } from "../components/home/Category";
import { CategoryAdvertise } from "../components/home/CategoryAdvertise";

export const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Banner />
      <About />
      <Category />
      <CategoryAdvertise />
    </div>
  );
};
