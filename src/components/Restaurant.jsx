import { useState, useEffect } from "react";
import { Link } from "react-router";
import ResCard from "./ResCard.jsx";
import { SWIGGY_API } from "../utils/constants.js";
import Shimmer from "./Shimmer";

const Restaurant = () => {
    const TOP_RATING = 4.3;

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(SWIGGY_API);

                if (!response.ok) {
                    throw new Error(`HTTP Error ${response.status}`);
                }

                const json = await response.json();

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
        <div className="body restaurant-page">
            <section className="page-hero restaurant-hero">
                <p className="page-kicker">Restaurants</p>
                <h1>Browse restaurants and filter what fits your mood.</h1>
                <p className="page-copy">
                    Search by name, cuisine, location, or rating and quickly narrow
                    down your next order.
                </p>
            </section>

            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        placeholder="Search here..."
                        onChange={(e) => {
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
                </div>

                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = allRestaurants.filter(
                            (restaurant) => restaurant.info.avgRating > TOP_RATING
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
                    <Link
                        key={info.id}
                        className="res-card-link"
                        to={`/restaurant/${info.id}`}
                        state={{ restaurant: info }}
                    >
                        <ResCard resdata={info} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Restaurant;
