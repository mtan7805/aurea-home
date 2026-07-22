import { fixedRightIcons } from "../../data/fixedRightData";

const IconFixedRight = () => {
  return (
    <div className="flex flex-col p-[10px] gap-[12px] fixed bottom-[100px] right-[30px] bg-transparent z-20">
      {fixedRightIcons.map((item) => {
        const IconComponent = item.icon;
        return (
          <div
            key={item.id}
            onClick={() => item.link && window.open(item.link, "_blank")}
            className="w-[45px] h-[45px] flex items-center justify-center bg-[#efefef] text-[#9a542c] shadow-md z-10 rounded-full cursor-pointer hover:bg-[#9a542c] hover:text-[#efefef] transition-colors duration-300"
            title={item.name}
          >
            <IconComponent className="text-[30px]" />
          </div>
        );
      })}
    </div>
  );
};

export default IconFixedRight;
