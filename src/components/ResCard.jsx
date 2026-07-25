const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/";

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
                src={CDN_URL + cloudinaryImageId}
                alt={name}
            />

            <h3>{name}</h3>
            <h4>🍽️ {cuisines.join(", ")}</h4>

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