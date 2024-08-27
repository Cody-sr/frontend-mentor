import React from "react";

function CardSkeleton() {
  return (
    <section className="container">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 12 }).map((_, item) => (
          <div
            key={item}
            className="overflow-hidden rounded-lg bg-white ring-1 ring-white duration-500 dark:bg-slate-500 dark:ring-gray-950"
          >
            <div className="h-52 w-full animate-pulse bg-gray-400"></div>
            <div className="p-4">
              <h3 className="h-6 w-full animate-pulse rounded-sm bg-gray-400"></h3>
              <ul className="space-y-0.5 pt-4">
                {Array.from({ length: 3 }).map((_, item) => (
                  <li
                    key={item}
                    className="h-5 w-full animate-pulse rounded-sm bg-gray-300"
                  ></li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardSkeleton;
