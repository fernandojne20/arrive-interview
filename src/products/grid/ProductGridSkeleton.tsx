import { GRID_CLASSES } from "./gridClasses";

const SKELETON_COUNT = 6;

export function ProductGridSkeleton() {
  return (
    <div role="status" aria-label="Loading products" className={GRID_CLASSES}>
      {Array.from({ length: SKELETON_COUNT }, (_, index) => (
        <div
          key={index}
          className="h-64 animate-pulse rounded-xl border border-slate-200 bg-slate-100"
        />
      ))}
    </div>
  );
}
