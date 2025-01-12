import Category from "@/api/Category";
import { useMutation, useQuery, useQueryClient } from "react-query";

export function useCategory() {
  return useQuery("category", async () => {
    const res = await Category.get();
    return res.data;
  });
}

export function useCreateCategory() {
  const queryClient = useQueryClient();

  return useMutation(
    "category",
    async (name: string) => {
      return await Category.create(name);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("category");
      },
    }
  );
}

export function useDeleteCategory() {
  const queryClient = useQueryClient();

  return useMutation(
    "category",
    async (id: string) => {
      return await Category.delete(id);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("category");
      },
    }
  );
}
