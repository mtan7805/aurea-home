import { fixedRightIcons } from "../../data/fixedRightData";

const IconFixedRight = () => {
  return (
    <div className="hidden sm:flex flex-col p-2.5 gap-3 fixed bottom-24 right-4 md:right-8 bg-transparent z-20">
      {fixedRightIcons.map((item) => {
        const IconComponent = item.icon;
        return (
          <div
            key={item.id}
            onClick={() => item.link && window.open(item.link, "_blank")}
            className="w-10 h-10 md:w-[45px] md:h-[45px] flex items-center justify-center bg-[#efefef] text-[#9a542c] shadow-md z-10 rounded-full cursor-pointer hover:bg-[#9a542c] hover:text-[#efefef] transition-colors duration-300"
            title={item.name}
          >
            <IconComponent className="text-2xl md:text-[30px]" />
          </div>
        );
      })}
    </div>
  );
};

export default IconFixedRight;
