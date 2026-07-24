import ResCard from "./ResCard.jsx"
import resList from "../utils/resData.js";


const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input
                    type="text"
                    placeholder="🔍 Search for restaurants, cuisines..."
                />
            </div>

            <div className="res-container">
                {resList.map((restaurant) => (
                    <ResCard key = {restaurant.resName}
                             resdata = {restaurant}
                    />
                ))}
            </div>
        </div>
    );
};


export default Body;