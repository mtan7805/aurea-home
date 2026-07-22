import type { IconType } from "react-icons";

export interface IContactItem {
  id: number;
  icon?: IconType;
  text: string;
}

export interface IFooterLink {
  id: number;
  label: string;
  path?: string;
}

export interface IFooterSection {
  id: number;
  title: string;
  links: IFooterLink[];
}
