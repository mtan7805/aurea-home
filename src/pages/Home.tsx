import About from "../components/home/About";
import Banner from "../components/home/Banner";

export const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Banner />
      <About />
    </div>
  );
};
