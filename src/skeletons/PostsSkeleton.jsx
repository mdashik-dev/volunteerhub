export const PostsSkeleton = () => {
    return (
      <div className="w-full card bg-base-100 dark:bg-gray-800 animate-pulse">
        <div className="h-48 bg-gray-300 dark:bg-gray-700 w-full"></div>
        <div className="card-body space-y-4">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 w-3/4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 w-1/2"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 w-1/3"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 w-1/4"></div>
          <div className="h-8 bg-gray-300 dark:bg-gray-700 w-1/4 self-end"></div>
        </div>
      </div>
    );
  };
  