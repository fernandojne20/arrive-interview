import { ProductCard } from "../card/ProductCard";
import { useProducts } from "../hooks/useProducts";
import { GRID_CLASSES } from "./gridClasses";

export function ProductGrid({ search }: { search: string }) {
  const { data: products } = useProducts();

  const term = search.trim().toLowerCase();
  const matches = products.filter(({ title, description, category }) =>
    [title, description, category].join(" ").toLowerCase().includes(term)
  );

  if (matches.length === 0) {
    return (
      <p className="py-16 text-center text-slate-500">
        No products match &ldquo;{search}&rdquo;.
      </p>
    );
  }

  return (
    <ul className={GRID_CLASSES}>
      {matches.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
