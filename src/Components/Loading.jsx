export default function Loading() {
  return (
    <div className="grid mt-24 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-20">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="bg-white shadow rounded-2xl overflow-hidden animate-pulse dark:bg-gray-800"
        >
          <div className="h-48 bg-gray-300 dark:bg-gray-800"></div>

          <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
