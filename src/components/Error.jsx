import { useRouteError } from "react-router";
import { Link } from "react-router";

const Error = () => {
  const err = useRouteError();
  const status = err?.status || 500;
  const statusText = err?.statusText || "Something went wrong";

  return (
    <div className="min-h-[calc(100vh-85px)] grid place-items-center py-12 px-4 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-2xl w-full bg-white p-8 rounded-2xl border border-orange-100 shadow-lg text-center">
        <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full mb-4">
          Error
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          Oops, we hit a rough edge.
        </h1>
        <h3 className="text-xl text-orange-500 mb-3">
          {status}: {statusText}
        </h3>
        <p className="text-gray-600 max-w-lg mx-auto leading-relaxed mb-6">
          The page you tried to open could not be loaded. You can head back
          to the home page and continue browsing.
        </p>
        <Link to="/" className="inline-block bg-orange-500 text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-orange-600 transition transform hover:-translate-y-0.5">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;