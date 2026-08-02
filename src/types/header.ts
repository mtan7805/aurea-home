import type { MouseEvent } from "react";

export type HeaderDropdownType = "products" | "projects";

export interface NavLinkItem {
  name: string;
  targetId?: string;
  path?: string;
  dropdownType?: HeaderDropdownType;
}

export interface AuthUser {
  name: string;
  email: string;
}

export type NavClickHandler = (
  event: MouseEvent<HTMLAnchorElement>,
  item: NavLinkItem,
) => void;
