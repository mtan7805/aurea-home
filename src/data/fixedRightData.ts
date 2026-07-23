import { MdSwapVerticalCircle } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import type { IFixedIcon } from "../types/social";

export const fixedRightIcons: IFixedIcon[] = [
  {
    id: 1,
    name: "Scroll",
    icon: MdSwapVerticalCircle,
  },
  {
    id: 2,
    name: "TikTok",
    icon: FaTiktok,
    link: "",
  },
  {
    id: 3,
    name: "Messenger",
    icon: FaFacebookMessenger,
    link: "",
  },
];
