



const ResCard = ({resdata}) => {
    const { image, resName, cuisine, rating, time, price, deliveryFee, offer } = resdata;

    return (
        <div className="res-card">
            <img className="res-logo" src={image} alt={resName} />

            <h3>{resName}</h3>
            <h4>🍽️ {cuisine}</h4>

            <div className="card-info">
                <span>⭐ {rating}</span>
                <span>🕒 {time}</span>
            </div>

            <div className="card-info">
                <span>₹{price} FOR TWO</span>
                <span>{deliveryFee}</span>
            </div>

            <p className="offer">🎉 {offer}</p>
        </div>
    );
};



export default ResCard;