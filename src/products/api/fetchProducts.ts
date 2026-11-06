import type { Product } from "../types/product";

const PRODUCTS_URL = "https://dummyjson.com/products?limit=10";

export async function fetchProducts(signal: AbortSignal): Promise<Product[]> {
  const response = await fetch(PRODUCTS_URL, { signal });

  if (!response.ok) {
    throw new Error(`Failed to load products (${response.status})`);
  }

  const { products } = await response.json();
  return products;
}
