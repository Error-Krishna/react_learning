const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80";

const ResCard = ({ resdata }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    aggregatedDiscountInfoV3,
  } = resdata;

  return (
    <div className="w-64 bg-white rounded-xl overflow-hidden p-4 border border-orange-100 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col gap-2">
      <img
        className="w-full h-40 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
        src={cloudinaryImageId ? CDN_URL + cloudinaryImageId : FALLBACK_IMAGE}
        alt={name}
      />

      <h3 className="text-xl font-bold text-gray-800 mt-3">{name}</h3>
      <h4 className="text-sm font-medium text-gray-500">🍽️ {cuisines?.join(", ") || "Popular cuisines"}</h4>

      <div className="flex justify-between text-sm font-semibold text-gray-600">
        <span>⭐ {avgRating}</span>
        <span>🕒 {sla?.deliveryTime} mins</span>
      </div>

      <div className="flex justify-between text-sm font-semibold text-gray-600">
        <span>{costForTwo}</span>
      </div>

      <p className="mt-1 bg-orange-50 text-orange-600 font-bold text-xs py-1.5 px-3 rounded-lg">
        🎉 {aggregatedDiscountInfoV3
          ? `${aggregatedDiscountInfoV3.header} ${aggregatedDiscountInfoV3.subHeader}`
          : "No Offers"}
      </p>
    </div>
  );
};

export default ResCard;