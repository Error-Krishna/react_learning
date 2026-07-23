import React from "react";
import ReactDOM from "react-dom/client";

const resList = [
    {
        resName: "Meghana Foods",
        cuisine: "Biryani, North Indian",
        rating: "4.5",
        time: "35 mins",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fyO3nveZHLkFsO8vJoRzUTAsxC6nWDuwqERcBVpFjQ&s=10"
    },
    {
        resName: "KFC",
        cuisine: "Burger, Fast Food",
        rating: "4.3",
        time: "25 mins",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800"
    },
    {
        resName: "Domino's Pizza",
        cuisine: "Pizza, Italian",
        rating: "4.4",
        time: "30 mins",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800"
    },
    {
        resName: "Sushi World",
        cuisine: "Japanese, Sushi",
        rating: "4.7",
        time: "40 mins",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800"
    },
    {
        resName: "Taco Bell",
        cuisine: "Mexican, Wraps",
        rating: "4.2",
        time: "28 mins",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdM0wY6m_ntu4f5RA0A7Zll38api7glY7o4OhGJlJEew&s=10"
    },
    {
        resName: "The Wok House",
        cuisine: "Chinese, Noodles",
        rating: "4.6",
        time: "32 mins",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800"
    },
    {
        resName: "Cake Factory",
        cuisine: "Desserts, Bakery",
        rating: "4.8",
        time: "20 mins",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800"
    },
    {
        resName: "South Spice",
        cuisine: "South Indian, Dosa",
        rating: "4.5",
        time: "22 mins",
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800"
    }
];

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://png.pngtree.com/png-vector/20221218/ourmid/pngtree-simple-and-modern-food-logo-vector-design-png-image_6527848.png"
                    alt="Food Logo"
                />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Restaurants</li>
                    <li>Contact</li>
                    <li>🛒 Cart</li>
                </ul>
            </div>
        </div>
    );
};

const Rescard = ( props ) => {
    return (
        <div className="res-card">
            <img
                className="res-logo"
                src={props.image}
                alt="Restaurant"
            />
            <h3>{props.resName}</h3>
            <h4>🍛 {props.cuisine}</h4>
            <h4>⭐ {props.rating} • {props.time}</h4>
            <h4>📍 2.5 km Away</h4>
        </div>
    );
};

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
                    <Rescard
                        key={restaurant.resName}
                        resName={restaurant.resName}
                        cuisine={restaurant.cuisine}
                        rating={restaurant.rating}
                        time={restaurant.time}
                        image={restaurant.image}
                    />
                ))}
            </div>
        </div>
    );
};

const AppLayout = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);