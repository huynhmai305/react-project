export type User = {
  id?: string;
  name?: string;
  email?: string;
  photoURL?: string;
  phone?: string;
  tax?: string;
  address?: string;
  role?: string;
};

export const initUser = {
  id: "",
  name: "",
  email: "",
  photoURL: "",
};

export const Role = {
  admin: "admin",
  shop: "shop",
  customer: "customer",
};
