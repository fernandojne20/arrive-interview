import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/fetchProducts";

export function useProducts() {
  return useSuspenseQuery({
    queryKey: ["products"],
    queryFn: ({ signal }) => fetchProducts(signal),
  });
}
