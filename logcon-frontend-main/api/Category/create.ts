import { authInstance } from "..";

export const create = async (name: string) => {
  return await authInstance().post(`/category`, {
    name,
  });
};
