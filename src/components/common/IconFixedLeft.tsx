
import { FaBell } from "react-icons/fa";

const IconFixedLeft = () => {
  return (
    <div className="hidden sm:flex flex-col p-2.5 gap-3 fixed bottom-8 left-4 md:left-5 bg-transparent z-20">
      <div className="w-10 h-10 md:w-[45px] md:h-[45px] border border-[#efefef] flex items-center justify-center bg-[#9a542c] text-[#efefef] shadow-md z-10 rounded-full cursor-pointer hover:bg-[#efefef] hover:text-[#9a542c] transition-colors duration-300">
        <FaBell className="text-xl md:text-[25px]" />
      </div>
    </div>
  );
};

export default IconFixedLeft;
