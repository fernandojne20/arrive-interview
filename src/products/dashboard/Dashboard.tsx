import { Suspense, useState } from "react";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { ProductsError } from "../error/ProductsError";
import { ProductGrid } from "../grid/ProductGrid";
import { ProductGridSkeleton } from "../grid/ProductGridSkeleton";

export function Dashboard() {
  const [search, setSearch] = useState("");
  const { reset } = useQueryErrorResetBoundary();

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto max-w-6xl space-y-8 px-6 py-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Arrive Logistics
        </h1>

        <input
          type="search"
          aria-label="Search products"
          placeholder="Search products"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full max-w-md rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200"
        />

        <ErrorBoundary onReset={reset} FallbackComponent={ProductsError}>
          <Suspense fallback={<ProductGridSkeleton />}>
            <ProductGrid search={search} />
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
}
