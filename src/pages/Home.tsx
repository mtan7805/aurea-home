import About from "../components/home/About";
import Banner from "../components/home/Banner";
import { Category } from "../components/home/Category";
import { CategoryAdvertise } from "../components/home/CategoryAdvertise";
import Discounted from "../components/home/Discounted";
import Process from "../components/home/Process";

export const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Banner />
      <About />
      <Category />
      <CategoryAdvertise />
      <Discounted />
      <Process />
    </div>
  );
};
