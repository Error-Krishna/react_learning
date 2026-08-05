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
              (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
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
    <div className="min-h-[calc(100vh-85px)] py-12 px-4 md:px-8 bg-gradient-to-b from-orange-50 to-white">
      <section className="max-w-3xl mx-auto text-center mb-6">
        <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full mb-4">
          Restaurants
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
          Browse restaurants and filter what fits your mood.
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Search by name, cuisine, location, or rating and quickly narrow
          down your next order.
        </p>
      </section>

      <div className="flex flex-wrap justify-center items-center gap-4 my-8">
        <div className="flex items-center gap-3">
          <input
            type="text"
            className="w-72 md:w-96 p-4 border border-orange-200 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-orange-300 shadow-sm"
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
          className="bg-orange-500 text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-orange-600 transition transform hover:-translate-y-0.5"
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
          className="bg-orange-500 text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-orange-600 transition transform hover:-translate-y-0.5"
          onClick={() => {
            setListOfRestaurants(allRestaurants);
          }}
        >
          All Restaurant
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4 md:px-12 pb-12">
        {listOfRestaurants.map(({ info }) => (
          <Link
            key={info.id}
            className="block no-underline"
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