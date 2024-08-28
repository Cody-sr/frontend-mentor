import React from "react";

function CardSkeleton() {
  const renderSkeletonCard = (key) => (
    <div
      key={key}
      className="overflow-hidden rounded-lg bg-white ring-1 ring-white duration-500 dark:bg-slate-500 dark:ring-gray-950"
      aria-hidden="true"
    >
      <div className="h-52 w-full animate-pulse bg-gray-400"></div>
      <div className="p-4">
        <h3 className="h-6 w-full animate-pulse rounded-sm bg-gray-400"></h3>
        <ul className="space-y-0.5 pt-4">
          {Array.from({ length: 3 }, (_, subIndex) => (
            <li
              key={subIndex}
              className="h-5 w-full animate-pulse rounded-sm bg-gray-300"
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section className="container" aria-label="Loading content">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 12 }, (_, index) => {
          if (index < 4) return renderSkeletonCard(index);
          if (index < 6)
            return (
              <div key={index + 4} className="hidden md:block">
                {renderSkeletonCard(index + 4)}
              </div>
            );
          return (
            <div key={index + 6} className="hidden lg:block">
              {renderSkeletonCard(index + 6)}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CardSkeleton;
