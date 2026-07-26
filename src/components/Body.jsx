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
    const [searchText, setSearchText] = useState("");
    console.log("Body Rendered");

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
                <div className="search">
                    <input type="text" 
                        className="search-box" 
                        value={searchText} 
                        placeholder="Search here..."
                        onChange={(e)=>{
                            const text = e.target.value;
                            setSearchText(text);

                            if (text.trim() === "") {
                                setListOfRestaurants(allRestaurants);
                                return;
                            }

                            const searchedRes = allRestaurants.filter((res) => {
                                const query = text.toLowerCase();
                                const info = res.info;

                                return (
                                    info?.name?.toLowerCase().includes(query) ||
                                    info?.cuisines?.some((cuisine) =>
                                        cuisine.toLowerCase().includes(query)
                                    ) ||
                                    info?.areaName?.toLowerCase().includes(query) ||
                                    info?.locality?.toLowerCase().includes(query) ||
                                    info?.costForTwo?.toLowerCase().includes(query) ||
                                    info?.avgRating?.toString().includes(query)
                                );
                            });

                            setListOfRestaurants(searchedRes);
                        }}
                        
                    />
                    {/* <button
                        onClick={() => {
                            if (searchText.trim() === "") {
                                setListOfRestaurants(allRestaurants);
                                return;
                            }
                            const searchedRes = allRestaurants.filter((res) =>res.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
                            console.log(searchedRes);
                            setListOfRestaurants(searchedRes);
                        }}
                    >
                        Search
                    </button> */}
                 </div>
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