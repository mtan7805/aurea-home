import About from "../components/home/About";
import Banner from "../components/home/Banner";
import { Category } from "../components/home/Category";
import { CategoryAdvertise } from "../components/home/CategoryAdvertise";
import Discounted from "../components/home/Discounted";
import Process from "../components/home/Process";
import Reason from "../components/home/Reason";
import ReComment from "../components/home/ReComment";
import FAQ from "../components/home/FAQ";

export const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Banner />
      <About />
      <Category />
      <CategoryAdvertise />
      <Discounted />
      <Process />
      <Reason />
      <FAQ />
      <ReComment />
    </div>
  );
};
