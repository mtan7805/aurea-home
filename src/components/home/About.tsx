import Counter from "./Counter";
import { aboutData } from "../../data/aboutData";

const About = () => {
  const { subtitle, title, description, imageUrl, inventories } = aboutData;

  return (
    <div className="w-full px-[20px] md:px-[50px] lg:px-[130px] py-[20px] flex flex-col lg:flex-row items-center justify-between gap-[100px]">
      <div data-aos="fade-down" className="w-full lg:w-3/5 flex flex-col gap-5">
        <p className="w-fit text-[#ad7555] text-[18px] md:text-[20px] py-2 border-b-[2px] border-[#ad7555] font-semibold">
          {subtitle}
        </p>
        <p className="text-[30px] md:text-[40px] lg:text-[48px] font-bold leading-[140%]">
          {title}
        </p>
        <p className="text-[16px] text-[#757F95] leading-[140%]">
          {description}
        </p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {inventories.map((item) => (
            <Counter key={item.id} total={item.total} title={item.title} />
          ))}
        </div>
      </div>
      <div data-aos="flip-left" className="w-full lg:w-2/5">
        <img src={imageUrl} alt={title} className="w-full h-auto rounded-xl" />
      </div>
    </div>
  );
};

export default About;
