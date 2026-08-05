import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Home = () => {
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1 className="text-center text-2xl font-bold text-red-600 py-12">
        🔴 looks like you're offline, turn on your internet connection
      </h1>
    );
  }

  return (
    <main className="min-h-[calc(100vh-85px)] py-12 px-4 md:px-8 bg-gradient-to-b from-orange-50 to-white">
      <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 max-w-6xl mx-auto mb-8">
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-orange-100 shadow-lg">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full mb-4">
            Fresh picks
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-4">
            Discover meals you'll want to order again.
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Browse a clean, simple food ordering experience with quick navigation,
            helpful recommendations, and a warm, familiar look.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link className="bg-orange-500 text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-orange-600 transition transform hover:-translate-y-0.5" to="/restaurants">
              Browse Restaurants
            </Link>
            <Link className="border-2 border-orange-500 text-orange-500 font-bold py-3 px-6 rounded-full hover:bg-orange-50 transition transform hover:-translate-y-0.5" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-b from-orange-50/80 to-orange-100/60 p-6 rounded-2xl border border-orange-100 shadow-lg flex flex-col justify-between">
          <div className="flex items-center gap-3 text-gray-600 font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-lg shadow-orange-500/40"></span>
            <span>Live city picks</span>
          </div>

          <div className="grid grid-cols-3 gap-3 my-4">
            <div className="bg-white p-4 rounded-xl border border-orange-100 text-center">
              <strong className="text-2xl text-gray-800 block">200+</strong>
              <span className="text-gray-600">Restaurants</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-orange-100 text-center">
              <strong className="text-2xl text-gray-800 block">4.3+</strong>
              <span className="text-gray-600">Top rated</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-orange-100 text-center">
              <strong className="text-2xl text-gray-800 block">30 min</strong>
              <span className="text-gray-600">Fast delivery</span>
            </div>
          </div>

          <div className="bg-orange-50/80 p-4 rounded-xl border border-orange-200 text-gray-600 leading-relaxed">
            Simple menus, clear filters, and the same orange-first style throughout the app.
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <article className="bg-white p-6 rounded-2xl border border-orange-100 shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Quick browsing</h3>
          <p className="text-gray-600 leading-relaxed">
            Jump into restaurants with a lightweight interface that keeps the focus on food.
          </p>
        </article>
        <article className="bg-white p-6 rounded-2xl border border-orange-100 shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Easy decisions</h3>
          <p className="text-gray-600 leading-relaxed">
            Compare ratings, delivery time, and offers without extra noise.
          </p>
        </article>
        <article className="bg-white p-6 rounded-2xl border border-orange-100 shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Consistent flow</h3>
          <p className="text-gray-600 leading-relaxed">
            The same layout language runs across the app so every page feels connected.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Home;