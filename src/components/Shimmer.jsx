const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-10 px-4">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div key={index} className="w-64 p-4 bg-white rounded-xl shadow-sm">
            <div className="w-full h-44 rounded-xl animate-shimmer"></div>
            <div className="h-4 mt-4 rounded animate-shimmer"></div>
            <div className="h-4 w-3/5 mt-3 rounded animate-shimmer"></div>
            <div className="h-4 mt-3 rounded animate-shimmer"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;