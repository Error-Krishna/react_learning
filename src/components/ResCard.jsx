const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/";
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
        <div className="res-card">
            <img
                className="res-logo"
                src={cloudinaryImageId ? CDN_URL + cloudinaryImageId : FALLBACK_IMAGE}
                alt={name}
            />

            <h3>{name}</h3>
            <h4>🍽️ {cuisines?.join(", ") || "Popular cuisines"}</h4>

            <div className="card-info">
                <span>⭐ {avgRating}</span>
                <span>🕒 {sla?.deliveryTime} mins</span>
            </div>

            <div className="card-info">
                <span>{costForTwo}</span>
            </div>

            <p className="offer">
                🎉 {aggregatedDiscountInfoV3
                    ? `${aggregatedDiscountInfoV3.header} ${aggregatedDiscountInfoV3.subHeader}`
                    : "No Offers"}
            </p>
        </div>
    );
};

export default ResCard;
