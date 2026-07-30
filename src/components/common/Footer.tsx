import { BiLinkExternal } from "react-icons/bi";
import Logo from "../../assets/icons/logo";
import { contactList, footerSections } from "../../data/footerData";

const Footer = () => {
  return (
    <div id="footer" className="w-full px-5 md:px-[50px] lg:px-[130px] py-12 bg-[#1c120c] border-t border-t-[#9a542c] flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between items-center justify-center">
      {/* Cột trái: Logo & Thông tin liên hệ */}
      <div className="flex lg:w-[32%] w-full flex-col gap-3">
        <div className="w-[115px] h-[75px] flex items-center justify-start cursor-pointer">
          <Logo />
        </div>
        {contactList.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.id} className="flex items-center gap-[10px] text-[#efefef]">
              <div className="h-[40px] w-[40px] rounded-[8px] bg-[#9a542c] flex items-center justify-center shrink-0">
                <IconComponent className="text-[24px] text-[#efefef]" />
              </div>
              <p className="text-[17px] md:text-[18px] text-[#efefef] leading-[140%]">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>

      {/* Cột phải: Các danh mục đường dẫn liên kết */}
      <div className="w-full lg:w-2/3 flex sm:flex-row flex-col items-start justify-between gap-8">
        {footerSections.map((section) => (
          <div key={section.id} className="flex md:w-[50%] w-full flex-col gap-[12px]">
            <p className="text-[18px] md:text-[20px] text-[#efefef] leading-[130%] font-bold tracking-wide">
              {section.title}
            </p>
            {section.links.map((link) => (
              <p
                key={link.id}
                className="flex items-center gap-[10px] text-[#efefef] text-[17px] md:text-[18px] cursor-pointer hover:text-[#9a542c] transition-colors"
              >
                <BiLinkExternal className="text-[24px] text-[#9a542c]" />
                {link.label}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
