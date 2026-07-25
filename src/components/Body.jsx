import ResCard from "./ResCard.jsx";
// import resList from "../utils/resData.js";
import { useState, useEffect } from "react";
import { SWIGGY_API } from "../utils/constants.js";
import Shimmer from "./Shimmer";

const Body = () => {
    const TOP_RATING = 4.3;

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(SWIGGY_API);

                console.log("Status:", response.status);

                if (!response.ok) {
                    throw new Error(`HTTP Error ${response.status}`);
                }

                const json = await response.json();

                console.log(json);

                const restaurants =
                    json?.data?.cards
                        ?.find(
                            (card) =>
                                card?.card?.card?.gridElements?.infoWithStyle?.restaurants
                        )
                        ?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

                setListOfRestaurants(restaurants);
                setAllRestaurants(restaurants);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = allRestaurants.filter(
                            (restaurant) =>
                                restaurant.info.avgRating > TOP_RATING
                        );
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurant
                </button>

                <button
                    className="filter-btn"
                    onClick={() => {
                        setListOfRestaurants(allRestaurants);
                    }}
                >
                    All Restaurant
                </button>
            </div>

            <div className="res-container">
                {listOfRestaurants.map(({ info }) => (
                    <ResCard
                        key={info.id}
                        resdata={info}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;