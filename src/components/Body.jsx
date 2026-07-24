import ResCard from "./ResCard.jsx"
import resList from "../utils/resData.js";
import { useState } from "react";


const Body = () => {
    // super powerful react variable called hook - useState hook
    const [listOfRestaurants, setListOfRestaurants] = useState(resList); // default value is all the restaurant data
    // i.e listOfRestaurant = resList

    // normal variable
    // let listOfRestaurant = [{},{}]
    return (
        <div className="body">
            <div className="filter">

                <button 
                  className="filter-btn" 
                  onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (restaurant) => restaurant.rating > 4.5
                    );
                    setListOfRestaurants(filteredList);
                  }}> 
                    Top Rated Restraunt
                </button>
                <button 
                  className="filter-btn" 
                  onClick={() => {
                    const filteredList = resList;
                    setListOfRestaurants(filteredList);
                  }}> 
                    All Restaurant
                </button>
                
            </div>

            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <ResCard key = {restaurant.resName}
                             resdata = {restaurant}
                    />
                ))}
            </div>
        </div>
    );
};


export default Body;