import {
  AUTH_SESSION_USER_STORAGE_KEY,
  AUTH_USER_STORAGE_KEY,
} from "../data/authData";
import type { AuthUser } from "../types/header";

export const clearStoredAuthUser = () => {
  localStorage.removeItem(AUTH_USER_STORAGE_KEY);
  sessionStorage.removeItem(AUTH_SESSION_USER_STORAGE_KEY);
};

export const getStoredAuthUser = (): AuthUser | null => {
  const storedUser =
    localStorage.getItem(AUTH_USER_STORAGE_KEY) ||
    sessionStorage.getItem(AUTH_SESSION_USER_STORAGE_KEY);

  if (!storedUser) return null;

  try {
    return JSON.parse(storedUser) as AuthUser;
  } catch {
    clearStoredAuthUser();
    return null;
  }
};
