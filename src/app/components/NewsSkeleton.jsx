export function NewsSkeleton() {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
        <div className="w-full h-48 bg-gray-200" />
        <div className="p-4">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
          <div className="flex justify-end space-x-2 mt-4">
            <div className="w-20 h-10 bg-gray-200 rounded" />
            <div className="w-20 h-10 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    );
  }