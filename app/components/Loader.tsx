const Loader = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8 animate-pulse">
      {/* Skeleton Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-24 bg-slate-200 dark:bg-slate-800 rounded-2xl"
          />
        ))}
      </div>

      {/* Skeleton Header */}
      <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded-lg w-1/4" />

      {/* Skeleton Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4"
          >
            <div className="flex justify-between">
              <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-lg" />
              <div className="w-16 h-4 bg-slate-100 dark:bg-slate-800 rounded" />
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full" />
              <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-5/6" />
              <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-2/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
