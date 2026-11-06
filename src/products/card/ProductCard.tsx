import type { Product } from "../types/product";

export function ProductCard({ product }: { product: Product }) {
  const { title, description, category } = product;

  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
        {description}
      </p>
      <p className="mt-4 border-t border-slate-100 pt-4 text-sm font-medium capitalize text-slate-500">
        {category}
      </p>
    </article>
  );
}
