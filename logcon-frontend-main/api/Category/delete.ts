import { authInstance } from "..";

export const _delete = async (id: string) => {
  return await authInstance().delete(`/category/${id}`);
};
