# Arrive Logistics Code Challenge

A small React and TypeScript app that loads products from an API and shows them as cards you can search.

API: https://dummyjson.com/products?limit=10

## Running it

```bash
npm ci
npm start
```

## Libraries I used

| Library              | When I use it                     | Why                                                                                                                         |
| -------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| TanStack Query       | Fetching and caching the products | It handles caching, retries and request cancellation, so I don't have to write that myself with `useEffect` and `useState`. |
| react-error-boundary | Around the product grid           | If the request fails, it shows a fallback with a "Try again" button instead of breaking the whole page.                     |
| Tailwind CSS         | All the styling                   | I can build a clean, responsive layout quickly, right in the components.                                                    |

I also use React's `Suspense` with `useSuspenseQuery` to show a skeleton while the cards load. That way `ProductGrid` only deals with the success case, and loading and errors are handled around it.

## Project structure

I keep everything related to products in one folder, with one component per file, named after the component.

```
src/
├── App.tsx                         Renders the dashboard
├── index.tsx                       Entry point, sets up the QueryClient
├── styles.css                      Tailwind directives
└── products/
    ├── api/
    │   └── fetchProducts.ts        Calls the API and throws if the request fails
    ├── card/
    │   └── ProductCard.tsx         Shows one product
    ├── dashboard/
    │   └── Dashboard.tsx           Page layout, search state, ErrorBoundary and Suspense
    ├── error/
    │   └── ProductsError.tsx       Error message with a "Try again" button
    ├── grid/
    │   ├── ProductGrid.tsx         Filters the products and renders the cards
    │   ├── ProductGridSkeleton.tsx Placeholder shown while the products load
    │   └── gridClasses.ts          Grid classes shared by the grid and its skeleton
    ├── hooks/
    │   └── useProducts.ts          Connects fetchProducts to TanStack Query
    └── types/
        └── product.ts              Product type
```

## Notes

- Search runs on the client and filters the 10 products by title, description and category.
- Tailwind is on v3 because that's what Create React App supports out of the box.
- TypeScript went up to 4.9.5 because TanStack Query v5 needs at least 4.7.
