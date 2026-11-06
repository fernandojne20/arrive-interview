import type { FallbackProps } from "react-error-boundary";

export function ProductsError({ resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert" className="py-16 text-center">
      <p className="text-slate-700">We couldn&rsquo;t load the products.</p>
      <button
        type="button"
        onClick={resetErrorBoundary}
        className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
      >
        Try again
      </button>
    </div>
  );
}
