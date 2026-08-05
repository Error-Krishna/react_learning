import { Link, useLocation, useParams } from "react-router";
import { getRestaurantDetail } from "../utils/mockRestaurantDetails";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const location = useLocation();
  const restaurant = getRestaurantDetail(resId, location.state?.restaurant);

  return (
    <main className="min-h-[calc(100vh-85px)] py-12 px-4 md:px-8 bg-gradient-to-b from-orange-50 to-white">
      <section className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 max-w-6xl mx-auto mb-6">
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-orange-100 shadow-lg">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full mb-4">
            Restaurant details
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            {restaurant.name}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            {restaurant.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {restaurant.cuisines.map((cuisine) => (
              <span key={cuisine} className="bg-orange-100 text-orange-600 text-xs font-bold uppercase px-3 py-1 rounded-full">
                {cuisine}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-4 text-gray-600 font-semibold">
            <span>⭐ {restaurant.avgRating}</span>
            <span>🕒 {restaurant.deliveryTime} mins</span>
            <span>{restaurant.costForTwo}</span>
            <span>{restaurant.area}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <Link to="/restaurants" className="bg-orange-500 text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-orange-600 transition transform hover:-translate-y-0.5">
              Back to restaurants
            </Link>
            <span className="text-gray-400 font-semibold">Restaurant ID: {resId}</span>
          </div>
        </div>

        <div className="relative min-h-80 rounded-2xl overflow-hidden border border-orange-100 shadow-lg">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/70 to-transparent">
            <div className="bg-white/90 p-4 rounded-xl max-w-sm">
              <p className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-1">
                {restaurant.offerLabel}
              </p>
              <strong className="text-gray-800">{restaurant.offerText}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.7fr] gap-6 max-w-6xl mx-auto">
        <div className="flex flex-col gap-6">
          {restaurant.menuSections.map((section) => (
            <article key={section.title} className="bg-white p-5 rounded-2xl border border-orange-100 shadow-md">
              <div className="flex justify-between items-start gap-3 mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
                  <p className="text-gray-600">{section.subtitle}</p>
                </div>
                <span className="bg-orange-100 text-orange-600 text-xs font-bold uppercase px-3 py-1 rounded-full whitespace-nowrap">
                  {section.items.length} items
                </span>
              </div>

              <div className="flex flex-col gap-4">
                {section.items.map((item) => (
                  <div key={item.name} className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 pt-4 first:pt-0 border-t first:border-t-0 border-orange-100">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <span className="bg-orange-100 text-orange-600 text-xs font-bold uppercase px-3 py-0.5 rounded-full">
                          {item.type}
                        </span>
                        {item.badge && (
                          <span className="bg-orange-200 text-orange-700 text-xs font-bold uppercase px-3 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 whitespace-nowrap">
                      <strong className="text-xl text-gray-800">{item.price}</strong>
                      <button type="button" className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full hover:bg-orange-600 transition transform hover:-translate-y-0.5">
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <aside className="flex flex-col gap-6 sticky top-24 self-start">
          <div className="bg-white p-5 rounded-2xl border border-orange-100 shadow-md">
            <h2 className="text-2xl font-bold text-gray-800">Restaurant summary</h2>

            <div className="grid grid-cols-2 gap-3 my-4">
              <div className="bg-orange-50 p-3 rounded-xl border border-orange-100">
                <span className="block text-gray-400 text-xs font-bold uppercase">Rating</span>
                <strong className="text-gray-800">{restaurant.avgRating}</strong>
              </div>
              <div className="bg-orange-50 p-3 rounded-xl border border-orange-100">
                <span className="block text-gray-400 text-xs font-bold uppercase">Delivery</span>
                <strong className="text-gray-800">{restaurant.deliveryTime} mins</strong>
              </div>
              <div className="bg-orange-50 p-3 rounded-xl border border-orange-100">
                <span className="block text-gray-400 text-xs font-bold uppercase">Cost for two</span>
                <strong className="text-gray-800">{restaurant.costForTwo}</strong>
              </div>
              <div className="bg-orange-50 p-3 rounded-xl border border-orange-100">
                <span className="block text-gray-400 text-xs font-bold uppercase">Area</span>
                <strong className="text-gray-800">{restaurant.area}</strong>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
              <span className="block text-orange-500 text-xs font-bold uppercase">Offer</span>
              <p className="text-gray-600">{restaurant.offerText}</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-orange-100 shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Why people order here</h3>
            <ul className="mt-2 list-disc pl-5">
              {restaurant.highlights.map((highlight) => (
                <li key={highlight} className="text-gray-600 leading-relaxed">{highlight}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default RestaurantMenu;