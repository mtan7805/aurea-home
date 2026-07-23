export interface TestUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export const testUsers: TestUser[] = [
  {
    id: 1,
    name: "Lê Minh Tân",
    email: "test@aureahome.vn",
    password: "123456",
  },
];

export const AUTH_USER_STORAGE_KEY = "aurea_auth_user";
