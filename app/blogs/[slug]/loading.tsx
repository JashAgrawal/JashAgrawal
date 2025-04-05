export default function BlogPostLoading() {
  return (
    <article className="flex flex-col gap-4 mx-auto px-4 py-12 max-w-4xl">
      <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-8"></div>

      <div className="mb-8">
        <div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
        <div className="h-10 w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-6"></div>

        <div className="flex flex-wrap items-center mb-6">
          <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mr-4"></div>
          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mr-4"></div>
          <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
            <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
            <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="w-full h-[400px] bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mb-8"></div>

      <div className="space-y-4">
        {Array.from({ length: 10 }).map((_, idx) => (
          <div
            key={idx}
            className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"
          ></div>
        ))}
        <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>

        <div className="h-8 w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse my-6"></div>

        {Array.from({ length: 8 }).map((_, idx) => (
          <div
            key={idx + "second"}
            className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"
          ></div>
        ))}
        <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
      </div>
    </article>
  );
}
